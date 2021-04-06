import React from 'react'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Tooltip from '../../atomic-ui/components/Tooltip'
import Checkbox from '../../atomic-ui/components/Checkbox'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'

export const Header = styled(Row)`
  position: absolute;
  top: var(--default-gap);
  right: var(--default-gap);
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: calc(100% - var(--default-gap) * 2);
  grid-gap: var(--default-gap);
`

export const Actions = styled(Row)`
  position: relative;
  grid-gap: 10px;
  height: 100%;
  z-index: var(--z-12);
`

export const CheckedTooltip = styled(Tooltip)`
  z-index: var(--z-15);
`

export const CardActions = ({ typeText, checked, onChecked, onEdit, onDelete }) => (
  <Header>
    {(onEdit || onDelete) && (
      <Actions>
        {onEdit && (
          <Tooltip text={`Удалить ${typeText}`}>
            <Button
              kind={'icon'}
              size={'xs'}
              appearance={'red'}
              disabled={checked}
              onClick={onDelete}>
              <Icon icon={'delete'} size={'xs'} stroke={'white'} />
            </Button>
          </Tooltip>
        )}
        {onDelete && (
          <Tooltip text={`Редактировать ${typeText}`}>
            <Button kind={'icon'} size={'xs'} disabled={checked} onClick={onEdit}>
              <Icon icon={'edit'} size={'xs'} stroke={'white'} />
            </Button>
          </Tooltip>
        )}
      </Actions>
    )}
    {onChecked && (
      <CheckedTooltip text={`Отметить ${typeText}`} self>
        <Checkbox checked={checked} onChange={onChecked} />
      </CheckedTooltip>
    )}
  </Header>
)

export default CardActions
