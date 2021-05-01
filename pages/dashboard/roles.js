import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '../../atomic-ui/components/Grid'
import Alert from '../../atomic-ui/components/Alert'
import DatePicker from '../../atomic-ui/components/DatePicker'
import Select from '../../atomic-ui/components/Select'
import Table from '../../atomic-ui/components/Table'
import templates from '../../atomic-ui/components/Table/templates'

import { initializeApollo } from '../../apollo'
import { useHelper } from '../../hooks/useHelper'
import DashboardLayout from '../../layouts/dashboard'
import HandleBar from '../../components/HandleBar'
import FilterBar from '../../components/FilterBar'
import RoleCard from '../../components/RoleCard'
import LazyLoad from '../../components/LazyLoad'
import FadeLoad from '../../components/FadeLoad'
import { onRoleCreate, onRoleEdit, onRoleDelete, onRoleLink } from '../../store/helpers/role'
import { setDocuments } from '../../store/actions/documents'
import { categories } from '../../__mock__'
import queries from '../../graphql/queries'

const TITLE = 'Роли'

const Roles = ({ store }) => {
  const recall = useHelper()
  const documents = useSelector((state) => state.documents)
  const dispatch = useDispatch()
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [displayMethod, onChangeDisplayMethod] = useState('grid')

  const roles = useMemo(() => documents || store.roles, [documents, store])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <DashboardLayout title={TITLE}>
      <HandleBar
        icon={'lock'}
        title={TITLE}
        buttonCreateText={'Создать роль'}
        onCreate={recall(onRoleCreate, { mutation: queries.CREATE_ROLE })}
        onChangeVisibleFilter={() => setVisibleFilter(!visibleFilter)}
        onChangeDisplayMethod={(item) => onChangeDisplayMethod(item.value)}
      />

      <FilterBar
        isOpen={visibleFilter}
        filters={[
          <DatePicker
            key={0}
            value={date}
            placeholder={'Дата публикации'}
            onChange={onChangeDate}
            withNavigate
          />,
          <Select
            key={1}
            options={categories}
            placeholder={'Раздел'}
            selected={select}
            onChange={(item) => onChangeSelect(item)}
          />
        ]}
        options={
          displayMethod === 'list'
            ? []
            : templates.role.map((item, index) => ({
                label: item.header,
                value: index
              }))
        }
      />

      {roles.length === 0 && (
        <Alert style={{ width: '100%', textAlign: 'center' }}>Ролей нет</Alert>
      )}

      {displayMethod === 'list' && (
        <Table
          data={roles}
          template={templates.role}
          onChecked={() => {}}
          onClick={(role) => recall(onRoleLink, { id: role.id, role })()}
          onDelete={(role) =>
            recall(onRoleDelete, { id: role.id, role, mutation: queries.DELETE_ROLE })()
          }
          onEdit={(role) =>
            recall(onRoleEdit, { id: role.id, role, mutation: queries.UPDATE_ROLE })()
          }
          style={{ overflowX: 'auto', width: 'calc(100vw - 290px)' }}
        />
      )}

      {displayMethod === 'grid' && (
        <Grid>
          {roles.map((role) => (
            <FadeLoad key={role.id}>
              <LazyLoad>
                <RoleCard
                  role={role}
                  onChecked={() => {}}
                  onLink={recall(onRoleLink, { id: role.id, role })}
                  onDelete={recall(onRoleDelete, {
                    id: role.id,
                    role,
                    mutation: queries.DELETE_ROLE
                  })}
                  onEdit={recall(onRoleEdit, {
                    id: role.id,
                    role,
                    mutation: queries.UPDATE_ROLE
                  })}
                />
              </LazyLoad>
            </FadeLoad>
          ))}
        </Grid>
      )}
    </DashboardLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let roles = []
  let permissions = []

  try {
    const response = await client.query({
      query: queries.GET_META_DASHBOARD_ROLES
    })

    if (response && response.data) {
      roles = response.data.getRoles
      permissions = response.data.getPermissions
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: { roles },
      permissions
    }
  }
}

export default Roles
