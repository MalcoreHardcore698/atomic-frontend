import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Spinner from '../../atomic-ui/components/Spinner'
import Divider from '../../atomic-ui/components/Divider'
import Button from '../../atomic-ui/components/Button'
import Table, { Wrap as WrapTable } from '../../atomic-ui/components/Table'
import Alert from '../../atomic-ui/components/Alert'

import { GridAside as Container, LowerLoader } from '../Styled'
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

export const Content = ({
  type,
  limit = 6,
  template,
  component,
  variables,
  loading,
  refetch,
  initialList,
  setCheckedList,
  onChecked,
  onClick,
  onEdit,
  onDelete
}) => {
  const router = useRouter()
  const displayMethod = useSelector((state) => state.root.displayMethod)

  const [page, setPage] = useState(Number(router.query?.page) || 1)
  const [items, setItems] = useState(initialList || [])
  const [isLoading, setIsLoading] = useState(false)
  const [isEnd, setIsEnd] = useState(false)

  const loadMore = async () => {
    if (!isEnd && !loading && refetch) {
      setIsLoading(true)

      const response = await refetch({ ...variables, offset: limit * page, limit })
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
      {displayMethod === 'grid' && (
        <Container>
          {(items || []).map((item) => (
            <LazyLoad key={item.id || item.email}>{component(item)}</LazyLoad>
          ))}
        </Container>
      )}

      {displayMethod === 'list' && (
        <Table
          data={items}
          template={template}
          onChecked={onChecked}
          onClick={onClick}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}

      {(loading || isLoading) && (
        <LowerLoader key={'loader'}>
          <Spinner />
        </LowerLoader>
      )}

      {!isEnd && !loading && (
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
  variables,
  component,
  setCheckedList,
  onChecked,
  onClick,
  onEdit,
  onDelete
}) => {
  const { data, loading, refetch } = useQuery(query, {
    variables: {
      ...variables,
      offset: 0,
      limit
    }
  })

  if (loading) {
    return (
      <LowerLoader key={'loader'}>
        <Spinner />
      </LowerLoader>
    )
  }

  return (
    <Content
      type={type}
      limit={limit}
      refetch={refetch}
      template={template}
      component={component}
      initialList={type && data && data[type]}
      setCheckedList={setCheckedList}
      onChecked={onChecked}
      onDelete={onDelete}
      onClick={onClick}
      onEdit={onEdit}
    />
  )
}

export default List
