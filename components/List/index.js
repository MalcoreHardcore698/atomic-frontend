import React, { useState, useEffect, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'

import Column from '../../atomic-ui/components/Column'
import Table from '../../atomic-ui/components/Table'
import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import { GridAside as Container, LowerLoader } from '../Styled'
import LazyLoad from '../LazyLoad'
import InfiniteScroll from 'react-infinite-scroller'
import { useRouter } from 'next/router'

export const Wrap = styled(Column)``

export const CenterAlert = styled(Alert)`
  width: 100%;
  text-align: center;
`

export const List = ({
  type,
  query,
  template,
  variables,
  component,
  limit = 6,
  startOffset = 6,
  setCheckedList,
  onChecked,
  onClick,
  onEdit,
  onDelete
}) => {
  const router = useRouter()
  const displayMethod = useSelector((state) => state.root.displayMethod)

  const pageStart = useMemo(() => Number(router.query?.page) || 1, [router])

  const [offset, setOffset] = useState(startOffset + 1)
  const [items, setItems] = useState([])
  const [isEnd, setIsEnd] = useState(false)

  const { data, loading, refetch } = useQuery(query, {
    variables: {
      ...variables,
      offset: 0,
      limit: limit
    }
  })

  const loadMore = async () => {
    const updateOffset = () => setOffset((prev) => prev + limit)

    const result = { ...variables, offset, limit }

    if (refetch) {
      const response = await refetch(result)
      const list = response.data[type]
      if (list.length === 0) setIsEnd(true)
      updateOffset()
    }
  }

  const renderContent = useCallback(() => {
    if (displayMethod === 'grid') {
      return (
        <Container>
          {(items || []).map((item) => (
            <LazyLoad key={item.id || item.email}>{component(item)}</LazyLoad>
          ))}
        </Container>
      )
    }
    return (
      <Table
        data={items}
        template={template}
        onChecked={onChecked}
        onClick={onClick}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    )
  }, [items, displayMethod, onChecked, onClick, onEdit, onDelete])

  const renderLoader = () => (
    <LowerLoader key={'loader'}>
      <Spinner />
    </LowerLoader>
  )

  useEffect(() => {
    if (!loading && data) {
      const list = data[type]
      if (list.length > 0) setItems((prev) => [...prev, ...list])
      if (list.length === 0) setIsEnd(true)
    }
  }, [data, loading, setIsEnd])

  useEffect(() => {
    if (items?.length > 0 && setCheckedList) {
      setCheckedList(items)
    }
  }, [items, setCheckedList])

  return (
    <InfiniteScroll
      pageStart={pageStart || 0}
      loadMore={loadMore}
      hasMore={!isEnd}
      loader={renderLoader()}>
      {renderContent()}
    </InfiniteScroll>
  )
}

export default List
