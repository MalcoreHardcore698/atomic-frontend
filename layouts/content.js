import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useLazyQuery } from '@apollo/react-hooks'
import { v4 } from 'uuid'

import Column from '../atomic-ui/components/Column'
import Alert from '../atomic-ui/components/Alert'
import DatePicker from '../atomic-ui/components/DatePicker'
import Spinner from '../atomic-ui/components/Spinner'
import Select from '../atomic-ui/components/Select'

import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import DefaultLayout from '../layouts/default'
import DashboardLayout from './dashboard'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import HandleBar from '../components/HandleBar'
import { LowerLoader } from '../components/Styled'

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

const ContentLayout = ({
  title,
  store,
  query,
  handle,
  filters,
  options,
  research,
  scaffold,
  dashboard,
  variables = {},
  limit = 6,
  startOffset = 6,
  children
}) => {
  const Layout = dashboard ? DashboardLayout : DefaultLayout
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [search, setSearch] = useState(null)
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [offset, setOffset] = useState(startOffset)
  const [documents, setDocuments] = useState(store?.documents || [])

  const [
    loadDocumentsBySearch,
    { data: dataBySearch, loading: loadingBySearch, error: errorBySearch, refetch: refetchBySearch }
  ] = useLazyQuery(query)

  const [loadDocuments, { data, loading, error, refetch }] = useLazyQuery(query)

  const getFilters = () => {
    return filters.map((filter) => {
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

  const onSearch = (value) => {
    setDocuments([])
    if (value) {
      setSearch(value)
      loadDocumentsBySearch({
        variables: { ...variables, search: value, offset: 0, limit: startOffset }
      })
    } else {
      const result = { ...variables, offset: 0, limit }

      setSearch(null)

      if (refetch) refetch(result)
      else loadDocuments({ variables: result })
    }
    setOffset(0)
  }

  useInfiniteScroll({
    callbackOnBottom: () => {
      const updateOffset = () => setOffset((prev) => prev + limit)

      if (!loading) {
        const result = { ...variables, offset, limit }
        if (search) refetchBySearch(variables).then(updateOffset)
        else {
          if (refetch) refetch(result).then(updateOffset)
          else loadDocuments({ variables: result })
        }
      }
    },
    offset: 850
  })

  useEffect(() => {
    if (research) onSearch(research)
  }, [research])

  useEffect(() => {
    const isCommon = !search && !loading && data
    const isSearch = search && !loadingBySearch && dataBySearch
    const result = isCommon || isSearch
    if (result) setDocuments((prev) => [...prev, ...result[Object.keys(result)[0]]])
  }, [search, loading, loadingBySearch, data, dataBySearch])

  return (
    <Layout title={title} scaffold={scaffold}>
      <Wrap clear={scaffold || dashboard}>
        {!scaffold && !dashboard && (
          <SearchBar onChangeFilter={() => setVisibleFilter(!visibleFilter)} onSubmit={onSearch} />
        )}

        {dashboard && handle && (
          <HandleBar
            title={title}
            icon={handle.icon}
            buttonCreateText={handle.buttonCreateText}
            onCreate={handle.onCreate}
            onChangeVisibleFilter={() => setVisibleFilter(!visibleFilter)}
            onChangeDisplayMethod={handle.onChangeDisplayMethod}
          />
        )}

        {(filters || options) && (
          <FilterBar isOpen={visibleFilter} filters={getFilters()} options={options} />
        )}

        {React.createElement(children, { documents })}

        {search && !loadingBySearch && documents.length === 0 && (
          <Alert style={{ width: '100%', textAlign: 'center' }}>
            По вашему запросу ничего не найдено
          </Alert>
        )}

        {((search && errorBySearch) || (!search && error)) && (
          <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
            Не удалось загрузить данные
          </Alert>
        )}

        {((!error && loading) || (search && !errorBySearch && loadingBySearch)) && (
          <LowerLoader>
            <Spinner />
          </LowerLoader>
        )}

        {!search && !loading && !loadingBySearch && !errorBySearch && documents.length === 0 && (
          <Alert style={{ width: '100%', textAlign: 'center' }}>Данных нет</Alert>
        )}
      </Wrap>
    </Layout>
  )
}

export default ContentLayout
