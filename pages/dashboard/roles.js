import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import template from '../../atomic-ui/components/Table/templates/role'

import RoleCard from '../../components/RoleCard'
import ContentLayout from '../../layouts/dashboard/content'
import { onRoleCreate, onRoleEdit, onRoleLink } from '../../store/helpers/role'
import { setDocuments } from '../../store/actions/documents'
import { useHelper } from '../../hooks/useHelper'
import queries from '../../graphql/queries'

const TITLE = 'Роли'

const LIMIT = 12
const START_OFFSET = 0

const Roles = () => {
  const recall = useHelper()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      limit={LIMIT}
      icon={'lock'}
      template={template}
      startOffset={START_OFFSET}
      emptyMessage={'Ролей нет'}
      buttonCreateText={'Создать роль'}
      entityType={'role'}
      getType={'getRoles'}
      getQuery={queries.GET_ROLES}
      deleteQuery={queries.DELETE_ROLE}
      deleteEntityMultiText={'роли'}
      deleteEntitySingleText={'роль'}
      onLink={(role) => recall(onRoleLink, { id: role.id, role })()}
      onEdit={(role, onAfter) =>
        recall(onRoleEdit, {
          id: role.id,
          role,
          mutation: queries.UPDATE_ROLE,
          onAfter
        })()
      }
      onCreate={(onAfter) => recall(onRoleCreate, { mutation: queries.CREATE_ROLE, onAfter })()}
      render={(document) => <RoleCard role={document} />}
    />
  )
}

export default Roles
