import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'

import Difinition from '../../atomic-ui/components/Difinition'

import DashboardLayout from '../../layouts/dashboard'
import FormSettings from '../../components/FormSettings'
import Processed from '../../components/Processed'
import { setItem } from '../../store/actions/snacks'
import { setSettings } from '../../store/actions/root'
import queries from '../../graphql/queries'

const TITLE = 'Настройки'

const Container = styled.div`
  width: 100%;
  max-width: 745px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const Settings = () => {
  const { data, loading, error } = useQuery(queries.GET_META_DASHBOARD_SETTINGS)
  const [settings, setCurrentSettings] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!loading && data) {
      setCurrentSettings(data.getDashboardSettings)
    }
  }, [data, loading])

  return (
    <DashboardLayout title={TITLE}>
      <Difinition icon={'setting'} text={TITLE} />

      <Container>
        <Processed
          data={data?.getDashboardSettings}
          loading={loading}
          error={error}
          errorMessage={'Упс! Не удалось получить настройки'}
          emptyMessage={'Кажется настройки не были созданы'}>
          <FormSettings
            settings={settings}
            mutation={queries.UPDATE_META_DASHBOARD_SETTINGS}
            onSubmit={async (form, action) => {
              try {
                const result = await action({
                  variables: {
                    input: {
                      general: {
                        logotype: form.general?.logotype?.file,
                        logotypeSize: form.general?.logotype?.size
                      },
                      scaffold: {
                        title: form.scaffold?.title,
                        primary: form.scaffold?.primary?.value,
                        residues: form.scaffold?.residues?.map((residue) => residue.value),
                        background: form.scaffold?.background?.file,
                        backgroundSize: form.scaffold?.background?.size,
                        isRandom: form.scaffold?.isRandom
                      },
                      meta: {
                        title: form.meta?.title,
                        description: form.meta?.description
                      }
                    }
                  }
                })
                setCurrentSettings(result.data.updateDashboardSettings)
                dispatch(setSettings(result.data.updateDashboardSettings))
                dispatch(
                  setItem({
                    type: 'success',
                    message: 'Настройки успешно изменены'
                  })
                )
              } catch {
                dispatch(
                  setItem({
                    type: 'error',
                    message: 'Не удалось изменить настройки'
                  })
                )
              }
            }}
          />
        </Processed>
      </Container>
    </DashboardLayout>
  )
}

export default Settings
