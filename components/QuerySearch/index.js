import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'

import GlobalSearch from '../../atomic-ui/components/GlobalSearch'

import { Card } from '../../layouts/dashboard/content'
import { setModal } from '../../store/actions/modal'

export const Query = memo(({ data, loading, search, entity, entities, onChange, onSubmit }) => {
  const dispatch = useDispatch()

  const hideModal = () => dispatch(setModal(null))

  return (
    <GlobalSearch
      search={search}
      loading={loading}
      initialEntity={entity}
      result={search && data && entity && data[entity?.value]}
      entities={(entities || []).map((elem) => ({
        ...elem,
        render: (item) => (
          <Card
            key={item.id || item.email}
            item={item}
            appearance={'clear'}
            component={elem.render(item)}
            onLink={hideModal}
            onEdit={hideModal}
            onDelete={hideModal}
            withoutChecked
          />
        )
      }))}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  )
})

export const QuerySearch = memo(({ search, entity, entities, setSearch, onHide, onChange }) => {
  const initialResult = [null, { data: null, loading: false, refetch: null }]
  const [load, { data, loading, refetch }] = entity ? useLazyQuery(entity.query) : initialResult

  const onSubmit = (value) => {
    const variables = { search: value }

    if (setSearch) setSearch(value)

    if (value) {
      if (refetch) {
        refetch(variables)
      }
      if (load) {
        load({ variables })
      }
    }
  }

  return (
    <Query
      data={data}
      entity={entity}
      search={search}
      loading={loading}
      entities={entities}
      onHide={onHide}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
})

export default QuerySearch
