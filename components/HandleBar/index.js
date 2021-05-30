import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Switch, { Track as SwitchTrack } from '../../atomic-ui/components/Switch'
import Difinition from '../../atomic-ui/components/Difinition'
import Checkbox from '../../atomic-ui/components/Checkbox'
import Divider from '../../atomic-ui/components/Divider'
import Tooltip, { Wrap as WrapTooltip } from '../../atomic-ui/components/Tooltip'

import { setVisibleFilters } from '../../store/actions/root'

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

export const DeleteButton = styled(Button)`
  color: var(--default-color-red);
  background: none;
  border: none;

  &:hover {
    background: none;
    border: none;
    color: var(--default-color-red);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--ghost-color-text);

      &:hover {
        color: var(--ghost-color-text);
      }
    `}
`

export const displayMethods = [
  { label: <Icon icon={'menu'} />, value: 'list', tooltip: 'Отображение списком' },
  { label: <Icon icon={'category'} />, value: 'grid', tooltip: 'Отображение сеткой' }
]

export const Handle = ({
  icon,
  title,
  buttonCreateText,
  buttonDeleteDisabled,
  defaultDisplayMethod,
  withoutFooter,
  withFilters,
  checked,
  onCreate,
  onChecked,
  onDeleteAll,
  onChangeDisplayMethod
}) => {
  const [isChecked, setChecked] = useState(checked)
  const [displayMethod, setDisplayMethod] = useState(
    displayMethods.find((item) => item.value === defaultDisplayMethod)
  )
  const visibleFilters = useSelector((state) => state.root.visibleFilters)
  const dispatch = useDispatch()

  const onVisibleFilter = () => dispatch(setVisibleFilters(!visibleFilters))

  const onDisplayMethod = (item) => {
    setDisplayMethod(item)
    if (onChangeDisplayMethod) onChangeDisplayMethod(item)
  }

  const onChangeChecked = (e) => {
    const value = e.target.checked
    setChecked(value)
    if (onChecked) onChecked(value)
  }

  useEffect(() => {
    setChecked(checked)
  }, [checked])

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

          {withFilters && (
            <Tooltip text={'Отображение фильтров'}>
              <Button
                type={'button'}
                kind={'icon'}
                onClick={onVisibleFilter}
                revert={!visibleFilters}>
                <Icon
                  icon={'filter2'}
                  stroke={!visibleFilters ? 'var(--default-color-accent)' : 'white'}
                />
              </Button>
            </Tooltip>
          )}

          <Switch
            defaultValue={displayMethod || displayMethods[1]}
            options={displayMethods}
            onChange={(item) => onDisplayMethod(item)}
          />
        </ActionGroup>
      </Header>

      <Divider clear />

      {!withoutFooter && (
        <Footer>
          <Checkbox label={'Выделить все'} checked={isChecked} onChange={onChangeChecked} />
          <DeleteButton appearance={'clear'} disabled={buttonDeleteDisabled} onClick={onDeleteAll}>
            Удалить выделенное
          </DeleteButton>
        </Footer>
      )}
    </Wrap>
  )
}

Handle.defaultProps = {
  buttonCreateText: 'Добавить',
  buttonDeleteDisabled: true
}

export default Handle
