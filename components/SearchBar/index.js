import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Icon from '../../atomic-ui/components/Icon'
import Button from '../../atomic-ui/components/Button'
import SearchField from '../../atomic-ui/components/Search'

import { CreateButton } from '../HandleBar'
import { setVisibleFilters } from '../../store/actions/root'
import { useSearch } from '../../hooks/useSearch'

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

export const Search = ({ appearance, buttonCreateText, withoutFilters, onCreate }) => {
  const [onSubmit] = useSearch()
  const { search, visibleFilters } = useSelector((state) => ({
    search: state.root.search,
    visibleFilters: state.root.visibleFilters
  }))
  const dispatch = useDispatch()

  const onClick = () => dispatch(setVisibleFilters(!visibleFilters))

  return (
    <Wrap>
      <WrapSearchField
        placeholder={'Поиск'}
        appearance={appearance}
        defaultValue={search}
        onSubmit={onSubmit}
      />

      {!withoutFilters && (
        <WrapButton type={'button'} kind={'icon'} onClick={onClick} visibleFilter={visibleFilters}>
          <Icon icon={'filter2'} stroke={visibleFilters ? 'white' : 'var(--default-color-accent)'} />
        </WrapButton>
      )}

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
