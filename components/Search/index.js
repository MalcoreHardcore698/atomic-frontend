import React, { useState } from 'react'

import QuerySearch from '../QuerySearch'
import { entities } from './mocks'

export const Search = ({ onJump, onHide }) => {
  const [entity, setEntity] = useState(null)
  const [search, setSearch] = useState(null)

  return (
    <QuerySearch
      search={search}
      entity={entity}
      entities={entities}
      setSearch={setSearch}
      onChange={setEntity}
      onJump={onJump}
      onHide={onHide}
    />
  )
}

export default Search
