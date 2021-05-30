import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Meta from '../../atomic-ui/components/Meta'
import Divider from '../../atomic-ui/components/Divider'
import Chip from '../../atomic-ui/components/Chip'
import Alert from '../../atomic-ui/components/Alert'
import Title from '../../atomic-ui/components/Title'
import { getLabelRole, getLabelPermission } from '../../atomic-ui/utils/functions'

import { Surface } from '../Styled'
import CardActions from '../CardActions'
import { useEntityQuery } from '../../hooks/useEntityQuery'
import { onRoleDelete, onRoleEdit } from '../../store/helpers/role'
import { useHelper } from '../../hooks/useHelper'
import queries from '../../graphql/queries'

export const Wrap = styled(Surface)`
  grid-gap: var(--default-gap);
  height: 100%;
`

export const Header = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

export const Name = styled(Title)`
  transition: opacity 150ms ease;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.45;
      }
    `}
`

export const Actions = styled(Row)`
  grid-gap: 5px;
  height: 100%;
`

export const Permissions = styled(Row)`
  flex-wrap: wrap;
  grid-gap: 10px;
`

export const Card = ({
  role,
  style,
  checked,
  appearance,
  className,
  limitPermissions,
  onLink,
  onChecked,
  onEdit,
  onDelete
}) => {
  const recall = useHelper()
  const { setQuery } = useEntityQuery()
  const permissions = role.permissions.slice(0, limitPermissions)
  const residue = role.permissions.length - limitPermissions

  const handleEdit = () => {
    recall(onRoleEdit, {
      id: role.id,
      role,
      permissions,
      mutation: queries.UPDATE_ROLE
    })()
    if (onEdit) onEdit()
  }

  const handleDelete = () => {
    recall(onRoleDelete, {
      id: role.id,
      role,
      mutation: queries.DELETE_ROLE
    })()
    if (onDelete) onDelete()
  }

  return (
    <Wrap className={className} style={style} checked={checked} appearance={appearance}>
      <Column style={{ gridGap: 5 }}>
        <Header>
          <Meta date={role.createdAt} />

          {role.name !== 'ADMIN' && (
            <CardActions
              typeText={'роль'}
              checked={checked}
              onEdit={onEdit && handleEdit}
              onDelete={onDelete && handleDelete}
              onChecked={onChecked}
            />
          )}
        </Header>

        <Name tag={'h4'} onClick={() => setQuery(role.id, 'role', onLink)}>
          {getLabelRole(role.name)}
        </Name>
      </Column>

      <Divider clear />

      {role && role.permissions.length > 0 ? (
        <Permissions>
          {permissions.map((permission) => (
            <Chip key={permission} color={'ghost'} appearance={'outlined'}>
              {getLabelPermission(permission)}
            </Chip>
          ))}
          {residue > 0 && (
            <Chip color={'ghost'} appearance={'outlined'}>
              +{residue}
            </Chip>
          )}
        </Permissions>
      ) : (
        <Alert>Привелегии отсутствует</Alert>
      )}
    </Wrap>
  )
}

Card.defaultProps = {
  appearance: 'default',
  limitPermissions: 5
}

export default Card
