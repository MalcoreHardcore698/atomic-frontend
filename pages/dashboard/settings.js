import React from 'react'
import styled from 'styled-components'

import Difinition from '../../atomic-ui/components/Difinition'

import DashboardLayout from '../../layouts/dashboard'
import FormSettings from '../../components/FormSettings'
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
  return (
    <DashboardLayout title={TITLE}>
      <Difinition icon={'setting'} text={TITLE} />

      <Container>
        <FormSettings mutation={queries.CREATE_CATEGORY} onSubmit={() => {}} />
      </Container>
    </DashboardLayout>
  )
}

export default Settings
