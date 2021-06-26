import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import Column from '../atomic-ui/components/Column'

import DashboardLayout from './dashboard'
import DefaultLayout from '../layouts/default'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import HandleBar from '../components/HandleBar'
import { Card } from './dashboard/content'
import List from '../components/List'

export const INITIAL_DISPLAY_METHOD = 'grid'

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

const ContentFilters = memo(({ filterConfig }) => {
  const visibleFilters = useSelector((state) => state.root.visibleFilters)

  return <FilterBar {...(filterConfig || {})} isOpen={visibleFilters} />
})

const ContentContainer = ({
  limit,
  aside,
  render,
  getType,
  getQuery,
  variables,
  emptyMessage,
  startOffset,
  onLink
}) => {
  const search = useSelector((state) => state.root.search)

  return (
    <Container stretch={(search && !aside) || !aside}>
      <List
        limit={limit}
        type={getType}
        query={getQuery}
        variables={variables}
        startOffset={startOffset}
        emptyMessage={emptyMessage}
        component={(item) => (
          <Card
            item={item}
            component={render(item)}
            onLink={onLink && ((item) => onLink(item))}
            withoutChecked
          />
        )}
        initialDisplayMethod={INITIAL_DISPLAY_METHOD}
        onClick={onLink && ((item) => onLink(item))}
      />
      {aside}
    </Container>
  )
}

const ContentLayout = memo(
  ({
    limit,
    title,
    aside,
    store,
    handle,
    render,
    getType,
    getQuery,
    dashboard,
    variables,
    filterConfig,
    emptyMessage,
    startOffset,
    onLink
  }) => {
    const Layout = dashboard ? DashboardLayout : DefaultLayout

    return (
      <Layout title={title} scaffold={store?.scaffold}>
        <Wrap clear={store?.scaffold || dashboard}>
          {!store?.scaffold && !dashboard && <SearchBar />}

          {dashboard && handle && (
            <HandleBar
              title={title}
              icon={handle.icon}
              onCreate={handle.onCreate}
              buttonCreateText={handle.buttonCreateText}
              onChangeDisplayMethod={handle.onChangeDisplayMethod}
            />
          )}

          <ContentFilters filterConfig={filterConfig} />

          <ContentContainer
            limit={limit}
            aside={aside}
            render={render}
            getType={getType}
            getQuery={getQuery}
            variables={variables}
            emptyMessage={emptyMessage}
            startOffset={startOffset}
            onLink={onLink}
          />
        </Wrap>
      </Layout>
    )
  }
)

export default ContentLayout
