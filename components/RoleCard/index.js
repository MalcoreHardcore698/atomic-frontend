import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Meta from '../../atomic-ui/components/Meta'
import Divider from '../../atomic-ui/components/Divider'
import Chip from '../../atomic-ui/components/Chip'
import Alert from '../../atomic-ui/components/Alert'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Checkbox from '../../atomic-ui/components/Checkbox'
import Title from '../../atomic-ui/components/Title'
import Tooltip from '../../atomic-ui/components/Tooltip'
import { getLabelRole, getLabelPermission } from '../../atomic-ui/utils/functions'

export const Wrap = styled(Column)`
  grid-gap: var(--default-gap);
  height: 100%;

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      padding: var(--default-gap);
      background: var(--surface-background);
      border: var(--surface-border);
      border-radius: var(--surface-border-radius);
      box-shadow: var(--surface-shadow);
    `}

  ${({ appearance }) =>
    appearance === 'ghost' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}
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
`

export const Permissions = styled(Row)`
  flex-wrap: wrap;
  grid-gap: 10px;
`

export const Card = ({
  role,
  style,
  appearance,
  className,
  limitPermissions,
  onLink,
  onChecked,
  onEdit,
  onDelete
}) => {
  const permissions = role.permissions.slice(0, limitPermissions)
  const residue = role.permissions.length - limitPermissions

  return (
    <Wrap className={className} style={style} appearance={appearance}>
      <Column style={{ gridGap: 5 }}>
        <Header>
          <Meta date={role.createdAt} />

          {onChecked && onEdit && onDelete && (
            <Actions>
              <Tooltip text={'Удалить роль'}>
                <Button kind={'icon'} size={'xs'} appearance={'red'} onClick={onDelete}>
                  <Icon icon={'delete'} size={'xs'} stroke={'white'} />
                </Button>
              </Tooltip>
              <Tooltip text={'Редактировать роль'}>
                <Button kind={'icon'} size={'xs'} onClick={onEdit}>
                  <Icon icon={'edit'} size={'xs'} stroke={'white'} />
                </Button>
              </Tooltip>
              <Tooltip text={'Отметить роль'} self>
                <Checkbox />
              </Tooltip>
            </Actions>
          )}
        </Header>

        <Name tag={'h4'} onClick={onLink}>
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
