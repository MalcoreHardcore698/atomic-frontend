import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'
import InfiniteScroll from 'react-infinite-scroller'
import styled, { css } from 'styled-components'
import { v4 } from 'uuid'

import Column from '../atomic-ui/components/Column'
import DatePicker from '../atomic-ui/components/DatePicker'
import Spinner from '../atomic-ui/components/Spinner'
import Select from '../atomic-ui/components/Select'

import DashboardLayout from './dashboard'
import DefaultLayout from '../layouts/default'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import HandleBar from '../components/HandleBar'
import { LowerLoader } from '../components/Styled'
import { setSearch } from '../store/actions/root'

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
  scaffold,
  dashboard,
  variables = {},
  initialize,
  children
}) => {
  const router = useRouter()
  const search = useSelector((state) => state.root.search)
  const Layout = dashboard ? DashboardLayout : DefaultLayout
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [documents, setDocuments] = useState(store?.documents || [])
  const [isEnd, setIsEnd] = useState(false)
  const pageStart = useMemo(() => Number(router.query?.page) || 1, [router])

  const dispatch = useDispatch()

  const [
    loadDocumentsBySearch,
    { data: dataBySearch, loading: loadingBySearch, refetch: refetchBySearch }
  ] = useLazyQuery(query)

  const [loadDocuments, { data, loading, refetch }] = useLazyQuery(query)

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
      dispatch(setSearch(value))
      loadDocumentsBySearch({
        variables: { ...variables, search: value }
      })
    } else {
      const result = { ...variables }

      dispatch(setSearch(null))

      if (refetch) refetch(result)
      else loadDocuments({ variables: result })
    }
  }

  const loadMore = async () => {
    if (search && refetchBySearch) {
      await refetchBySearch(variables)
    } else {
      if (refetch) {
        await refetch(variables)
      } else {
        await loadDocuments({ variables })
      }
    }
  }

  const renderLoader = () => (
    <LowerLoader key={'loader'}>
      <Spinner />
    </LowerLoader>
  )

  useEffect(() => {
    if (initialize) loadDocuments()
  }, [initialize])

  useEffect(() => {
    if (search) onSearch(search)
  }, [search])

  useEffect(() => {
    const commonList = !search && !loading && data
    const searchList = search && !loadingBySearch && dataBySearch
    const resultList = commonList || searchList
    if (resultList) {
      const list = resultList[Object.keys(resultList)[0]]
      if (list.length > 0) setDocuments(list)
      if (list.length === 0) setIsEnd(true)
    }
  }, [search, loading, loadingBySearch, data, dataBySearch, setIsEnd])

  return (
    <Layout title={title} scaffold={scaffold}>
      <Wrap clear={scaffold || dashboard}>
        {!scaffold && !dashboard && (
          <SearchBar
            defaultValue={search}
            onChangeFilter={() => setVisibleFilter(!visibleFilter)}
            onSubmit={onSearch}
          />
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

        {search && loadingBySearch ? (
          renderLoader()
        ) : search ? (
          typeof children === 'function' ? (
            React.createElement(children, { documents })
          ) : (
            children
          )
        ) : (
          <InfiniteScroll
            pageStart={pageStart || 0}
            loadMore={loadMore}
            hasMore={!isEnd}
            loader={renderLoader()}>
            {typeof children === 'function'
              ? React.createElement(children, { documents })
              : children}
          </InfiniteScroll>
        )}
      </Wrap>
    </Layout>
  )
}

export default ContentLayout
