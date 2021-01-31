import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'

import Column from '../../atomic-ui/components/Column'
import Select from '../../atomic-ui/components/Select'
import Button from '../../atomic-ui/components/Button'

export const Wrap = styled(Column)`
  padding: var(--default-gap);
`

export const AddMember = ({ query, onSubmit }) => {
  const members = useSelector((state) => state.root.members)
  const [selected, setSelected] = useState(null)
  const [load, { data, loading }] = useLazyQuery(query, {
    variables: {
      email: members.map((member) => member?.email || member.value?.email),
      account: ['INDIVIDUAL', 'OFICIAL']
    }
  })

  useEffect(() => load(), [])

  return (
    <Wrap>
      <Select
        options={
          !loading && data
            ? data.getUsers.map((user) => ({
                value: user,
                label: user.name
              }))
            : []
        }
        appearance={'ghost'}
        defaultValue={selected}
        placeholder={'Введите ФИО, Эл. почту или телефон'}
        onChange={(item) => setSelected(item)}
        isLoading={loading}
        isSearchable
      />
      <Button onClick={() => selected && onSubmit(selected)} disabled={!selected || loading}>
        Добавить участника
      </Button>
    </Wrap>
  )
}

export default AddMember
