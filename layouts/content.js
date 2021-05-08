import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { v4 } from 'uuid'

import Column from '../atomic-ui/components/Column'
import DatePicker from '../atomic-ui/components/DatePicker'
import Select from '../atomic-ui/components/Select'

import DashboardLayout from './dashboard'
import DefaultLayout from '../layouts/default'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import HandleBar from '../components/HandleBar'
import { Card } from './dashboard/content'
import List from '../components/List'

export const INITIAL_DISPLAY_METHOD = 'grid'

const DISABLED_FILTERS = true

const Wrap = styled(Column)`
  margin-top: 120px;
  margin-bottom: 80px;

  ${({ clear }) =>
    clear &&
    css`
      margin: 0;
    `}

  @media only screen and (max-width: 480px) {
    margin-top: 0;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: var(--default-gap);
  margin-bottom: 80px;

  ${({ stretch }) =>
    stretch &&
    css`
      grid-template-columns: 1fr;
    `}

  @media only screen and (max-width: 1196px) {
    grid-template-columns: 1fr;
  }
`

const ContentLayout = ({
  limit,
  title,
  aside,
  store,
  handle,
  render,
  filters,
  getType,
  getQuery,
  dashboard,
  variables,
  emptyMessage,
  startOffset,
  onLink
}) => {
  const search = useSelector((state) => state.root.search)
  const Layout = dashboard ? DashboardLayout : DefaultLayout
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [select, onChangeSelect] = useState()
  const [date, onChangeDate] = useState()

  const getFilters = () => {
    return (filters || []).map((filter) => {
      switch (filter.type) {
        case 'DATEPICKER':
          return (
            <DatePicker
              key={v4()}
              value={date}
              placeholder={filter.placeholder || 'Дата публикации'}
              onChange={onChangeDate}
              withNavigate
            />
          )
        case 'SELECT':
          return (
            <Select
              key={v4()}
              options={filter.options}
              placeholder={filter.placeholder || 'Раздел'}
              selected={select}
              onChange={(item) => onChangeSelect(item)}
            />
          )
        default:
          return null
      }
    })
  }

  const getOptions = () => []

  const renderCard = (item) => (
    <Card
      item={item}
      component={render(item)}
      onLink={onLink && ((item) => onLink(item))}
      withoutChecked
    />
  )

  return (
    <Layout title={title} scaffold={store?.scaffold}>
      <Wrap clear={store?.scaffold || dashboard}>
        {!store?.scaffold && !dashboard && (
          <SearchBar
            onChangeFilter={!DISABLED_FILTERS && (() => setVisibleFilter(!visibleFilter))}
          />
        )}

        {!DISABLED_FILTERS && dashboard && handle && (
          <HandleBar
            title={title}
            icon={handle.icon}
            onCreate={handle.onCreate}
            buttonCreateText={handle.buttonCreateText}
            onChangeVisibleFilter={() => setVisibleFilter(!visibleFilter)}
            onChangeDisplayMethod={handle.onChangeDisplayMethod}
          />
        )}

        <FilterBar isOpen={visibleFilter} filters={getFilters()} options={getOptions()} />

        <Container stretch={(search && !aside) || !aside}>
          <List
            limit={limit}
            type={getType}
            query={getQuery}
            variables={variables}
            startOffset={startOffset}
            emptyMessage={emptyMessage}
            component={(item) => renderCard(item)}
            initialDisplayMethod={INITIAL_DISPLAY_METHOD}
            onClick={onLink && ((item) => onLink(item))}
          />
          {aside}
        </Container>
      </Wrap>
    </Layout>
  )
}

export default ContentLayout
