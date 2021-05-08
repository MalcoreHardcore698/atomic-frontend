import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Grid from '../../atomic-ui/components/Grid'
import Spinner from '../../atomic-ui/components/Spinner'
import Divider from '../../atomic-ui/components/Divider'
import Button from '../../atomic-ui/components/Button'
import Table, { Wrap as WrapTable } from '../../atomic-ui/components/Table'
import Alert from '../../atomic-ui/components/Alert'

import { LowerLoader } from '../Styled'
import LazyLoad from '../LazyLoad'

export const Wrap = styled.div`
  ${WrapTable} {
    width: calc(100vw - 280px);
  }
`

export const CenterAlert = styled(Alert)`
  width: 100%;
  text-align: center;
`

export const Loader = () => (
  <LowerLoader key={'loader'}>
    <Spinner />
  </LowerLoader>
)

export const Content = ({
  type,
  search,
  refetch,
  loading,
  template,
  component,
  variables,
  limit = 6,
  initialList,
  initialDisplayMethod,
  setCheckedList,
  gridOptions,
  withoutMore,
  onChecked,
  onClick,
  onEdit,
  onDelete
}) => {
  const router = useRouter()
  const displayMethod = useSelector((state) => state.root.displayMethod)

  const [items, setItems] = useState(initialList || [])
  const [page, setPage] = useState(Number(router.query?.page) || 1)
  const [isLoading, setIsLoading] = useState(false)
  const [isEnd, setIsEnd] = useState(false)

  const loadMore = async () => {
    if (!isEnd && !loading && refetch) {
      setIsLoading(true)

      const response = await refetch({
        ...variables,
        offset: limit * page,
        search,
        limit
      })

      if (response?.data) {
        const list = response.data[type]
        if (list.length === 0) setIsEnd(true)
        if (list.length > 0) setItems((prev) => [...prev, ...list])
        setPage((prev) => prev + 1)
      }

      setIsLoading(false)
    }
  }

  // Necessary for determination checkList outside [content]
  useEffect(() => {
    if (items?.length > 0 && setCheckedList) setCheckedList(items)
  }, [items, setCheckedList])

  return (
    <Wrap>
      {(initialDisplayMethod || displayMethod) === 'grid' && (
        <Grid {...gridOptions}>
          {items.map((item) => (
            <LazyLoad key={item.id || item.email}>{component(item)}</LazyLoad>
          ))}
        </Grid>
      )}

      {(initialDisplayMethod || displayMethod) === 'list' && (
        <Table
          data={items}
          template={template}
          onChecked={onChecked}
          onClick={onClick}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}

      {(loading || isLoading) && !withoutMore && <Loader />}

      {!isEnd && !loading && !withoutMore && (
        <React.Fragment>
          <Divider />
          <Row style={{ justifyContent: 'center' }}>
            <Button type={'button'} disabled={isLoading} style={{ width: 245 }} onClick={loadMore}>
              Загрузить еще
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Wrap>
  )
}

export const List = ({
  type,
  query,
  limit,
  template,
  component,
  variables,
  startOffset,
  initialDisplayMethod,
  setCheckedList,
  withoutSearch,
  withoutMore,
  gridOptions,
  onChecked,
  onDelete,
  onClick,
  onEdit
}) => {
  const search = useSelector((state) => (withoutSearch ? '' : state.root.search))

  const { data, loading, refetch } = useQuery(query, {
    variables: {
      ...variables,
      offset: startOffset,
      search,
      limit
    }
  })

  if (loading) return <Loader />

  return (
    <Content
      type={type}
      limit={limit}
      query={query}
      search={search}
      refetch={refetch}
      template={template}
      component={component}
      initialList={type && data && data[type]}
      initialDisplayMethod={initialDisplayMethod}
      setCheckedList={setCheckedList}
      withoutMore={withoutMore}
      gridOptions={gridOptions}
      onChecked={onChecked}
      onDelete={onDelete}
      onClick={onClick}
      onEdit={onEdit}
    />
  )
}

List.defaultProps = {
  startOffset: 0
}

export default List
