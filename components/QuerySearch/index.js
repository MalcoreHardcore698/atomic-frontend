import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'

import GlobalSearch from '../../atomic-ui/components/GlobalSearch'

import { Card } from '../../layouts/dashboard/content'
import { setModal } from '../../store/actions/modal'
import { useArticle } from '../../hooks/useArticle'
import { useProject } from '../../hooks/useProject'
import { useUser } from '../../hooks/useUser'

const hooks = {
  getUsers: useUser,
  // getCategories: useCategory
  getArticles: useArticle,
  getProjects: useProject
  // getTickets: useTicket,
  // getRoles: useRole
}

const CardWrapper = ({ item, elem, onJump }) => {
  const props = hooks[elem.value] ? hooks[elem.value]() : {}
  const dispatch = useDispatch()

  const hideModal = () => dispatch(setModal(null))

  return (
    <Card
      key={item.id || item.email}
      item={item}
      appearance={'clear'}
      component={elem.render(item, {
        ...props,
        onAboutMore: () => onJump('/detail', item)
      })}
      onLink={hideModal}
      onEdit={hideModal}
      onDelete={hideModal}
      withoutChecked
    />
  )
}

export const Query = memo(
  ({ data, loading, search, entity, entities, onChange, onJump, onSubmit }) => (
    <GlobalSearch
      search={search}
      loading={loading}
      initialEntity={entity}
      result={search && data && entity && data[entity?.value]}
      entities={(entities || []).map((elem) => ({
        ...elem,
        render: (item) => <CardWrapper item={item} elem={elem} onJump={onJump} />
      }))}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  )
)

export const QuerySearch = memo(
  ({ search, entity, entities, setSearch, onHide, onChange, onJump }) => {
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
        onJump={onJump}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    )
  }
)

export default QuerySearch
