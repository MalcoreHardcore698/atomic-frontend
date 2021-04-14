import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import SearchField from '../../atomic-ui/components/Search'

import { CreateButton } from '../HandleBar'

export const Wrap = styled(Row)`
  width: 100%;
`

export const WrapSearchField = styled(SearchField)`
  flex-grow: 100;
`

export const WrapButton = styled(Button)`
  background: var(--default-color-accent-dim);
  border: none;

  &:hover {
    svg {
      path,
      circle {
        stroke: white;
      }
    }
  }

  ${({ visibleFilter }) =>
    visibleFilter &&
    css`
      background: var(--default-color-accent);
    `}
`

export const Search = ({ appearance, buttonCreateText, onCreate, onChangeFilter, onSubmit }) => {
  const [visibleFilter, setVisibleFilter] = useState(false)

  const onClick = () => {
    setVisibleFilter(!visibleFilter)
    if (onChangeFilter) onChangeFilter(!visibleFilter)
  }

  return (
    <Wrap>
      <WrapSearchField appearance={appearance} placeholder={'Поиск'} onSubmit={onSubmit} />
      <WrapButton type={'button'} kind={'icon'} onClick={onClick} visibleFilter={visibleFilter}>
        <Icon icon={'filter2'} stroke={visibleFilter ? 'white' : 'var(--default-color-accent)'} />
      </WrapButton>
      {onCreate && (
        <CreateButton type={'button'} onClick={onCreate}>
          <span>{buttonCreateText}</span>
          <Icon type={'button'} icon={'add'} stroke={'white'} />
        </CreateButton>
      )}
    </Wrap>
  )
}

export default Search
