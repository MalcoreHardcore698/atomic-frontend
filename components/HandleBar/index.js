import React, { useState } from 'react'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Switch, { Track as SwitchTrack } from '../../atomic-ui/components/Switch'
import Difinition from '../../atomic-ui/components/Difinition'
import Checkbox from '../../atomic-ui/components/Checkbox'
import Divider from '../../atomic-ui/components/Divider'
import Tooltip, { Wrap as WrapTooltip } from '../../atomic-ui/components/Tooltip'

export const Wrap = styled(Column)``

export const Header = styled(Row)`
  justify-content: space-between;
  grid-gap: var(--default-gap);
  flex-wrap: wrap;
`

export const ActionGroup = styled(Row)`
  justify-content: flex-end;

  @media only screen and (max-width: 996px) {
    width: 100%;

    ${SwitchTrack} {
      width: auto;
    }
  }

  @media only screen and (max-width: 480px) {
    flex-wrap: wrap;
    grid-gap: var(--default-gap);

    ${SwitchTrack} {
      flex-direction: row;
      flex-grow: 1;
    }

    ${WrapTooltip} {
      button {
        width: 100%;
        height: 100%;
      }
    }
  }
`

export const CreateButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;

  span {
    white-space: nowrap;
  }

  @media only screen and (max-width: 996px) {
    width: 100%;
  }
`

export const Footer = styled(Row)`
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: end;
    grid-gap: var(--default-gap);
  }
`

const displayMethods = [
  { label: <Icon icon={'menu'} />, value: 'list', tooltip: 'Отображение списком' },
  { label: <Icon icon={'category'} />, value: 'grid', tooltip: 'Отображение сеткой' }
]

export const Handle = ({
  icon,
  title,
  buttonCreateText,
  onCreate,
  onDeleteChecked,
  onChangeVisibleFilter,
  onChangeDisplayMethod
}) => {
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [displayMethod, setDisplayMethod] = useState(null)

  const onVisibleFilter = () => {
    setVisibleFilter(!visibleFilter)
    if (onChangeVisibleFilter) onChangeVisibleFilter()
  }

  const onDisplayMethod = (item) => {
    setDisplayMethod(item)
    if (onChangeDisplayMethod) onChangeDisplayMethod(item)
  }

  return (
    <Wrap>
      <Header>
        <Difinition icon={icon} text={title} />

        <ActionGroup>
          {onCreate && (
            <CreateButton type={'button'} onClick={onCreate}>
              <span>{buttonCreateText}</span>
              <Icon icon={'add'} stroke={'white'} />
            </CreateButton>
          )}

          <Tooltip text={'Отображение фильтров'}>
            <Button type={'button'} kind={'icon'} onClick={onVisibleFilter} revert={!visibleFilter}>
              <Icon
                icon={'filter2'}
                stroke={!visibleFilter ? 'var(--default-color-accent)' : 'white'}
              />
            </Button>
          </Tooltip>

          <Switch
            defaultValue={displayMethod || displayMethods[1]}
            options={displayMethods}
            onChange={(item) => onDisplayMethod(item)}
          />
        </ActionGroup>
      </Header>

      <Divider clear />

      <Footer>
        <Checkbox label={'Выделить все'} />
        <Button
          style={{ color: 'var(--default-color-red)' }}
          appearance={'clear'}
          onClick={onDeleteChecked}>
          Удалить выделенное
        </Button>
      </Footer>
    </Wrap>
  )
}

export default Handle
