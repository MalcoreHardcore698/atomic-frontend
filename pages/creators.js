import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useLazyQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

import Column from '../atomic-ui/components/Column'
import Alert from '../atomic-ui/components/Alert'
import DatePicker from '../atomic-ui/components/DatePicker'
import Spinner from '../atomic-ui/components/Spinner'
import Select from '../atomic-ui/components/Select'

import { initializeApollo } from '../apollo'
import { useHelper } from '../hooks/useHelper'
import DefaultLayout from '../layouts/default'
import UserCard from '../components/ArticleCard'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import { onUserLink } from '../store/helpers/user'
import { onChat } from '../store/helpers'
import queries from '../graphql/queries'
import { categories, filters } from '../__mock__'

const TITLE = 'Авторы'

const Wrap = styled(Column)`
  margin-top: 120px;
  margin-bottom: 80px;

  @media only screen and (max-width: 480px) {
    margin-top: 0;
  }
`

const Container = styled.aside`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(442px, 1fr));
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  }
`

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-grow: 1;
`

const chatQueries = {
  userChats: queries.GET_USER_CHATS,
  chat: queries.GET_CHAT
}

const chatMutations = {
  addUserChat: queries.ADD_USER_CHAT,
  sendMessage: queries.SEND_MESSAGE
}

const Creators = ({ store }) => {
  const recall = useHelper()
  const [
    loadUsersBySearch,
    { data: dataLoadUsers, loading: loadingLoadUsers, error: errorLoadUsers }
  ] = useLazyQuery(queries.GET_USERS)
  const { user, documents } = useSelector((state) => ({
    user: state.user,
    documents: state.documents
  }))
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [search, setSearch] = useState(null)
  const [visibleFilter, setVisibleFilter] = useState(false)

  const users = useMemo(() => documents || store.users, [documents, store])

  return (
    <DefaultLayout title={TITLE}>
      <Wrap>
        <SearchBar
          onChangeFilter={() => setVisibleFilter(!visibleFilter)}
          onSubmit={(search) => {
            setSearch(search)
            loadUsersBySearch({ variables: { search } })
          }}
        />

        <FilterBar
          isOpen={visibleFilter}
          filters={[
            <DatePicker
              key={0}
              value={date}
              placeholder={'Дата публикации'}
              onChange={onChangeDate}
              withNavigate
            />,
            <Select
              key={1}
              options={categories}
              placeholder={'Раздел'}
              selected={select}
              onChange={(item) => onChangeSelect(item)}
            />
          ]}
          options={filters}
        />

        <Container>
          {(!loadingLoadUsers && dataLoadUsers && dataLoadUsers.getUsers) ||
          (!search && !loadingLoadUsers && users?.length) > 0 ? (
            (dataLoadUsers?.getUsers || users).map((author) => {
              const owned = author.name === user.name

              return (
                <UserCard
                  key={v4()}
                  user={author}
                  owned={owned}
                  onChat={
                    user.email &&
                    recall(onChat, {
                      sender: user,
                      recipient: author,
                      queries: chatQueries,
                      mutations: chatMutations
                    })
                  }
                  onLink={recall(onUserLink, {
                    id: author.email,
                    auth: user?.email,
                    owned,
                    queries: chatQueries,
                    mutations: chatMutations
                  })}
                  onCompanyLink={recall(onUserLink, {
                    id: author.company?.email,
                    auth: user?.email,
                    queries: chatQueries,
                    mutations: chatMutations
                  })}
                />
              )
            })
          ) : search && dataLoadUsers && dataLoadUsers.getUsers?.length === 0 ? (
            <Alert style={{ width: '100%', textAlign: 'center' }}>
              По вашему запросу ничего не найдено
            </Alert>
          ) : search && errorLoadUsers ? (
            <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
              Не удалось загрузить авторов
            </Alert>
          ) : search && loadingLoadUsers && !dataLoadUsers ? (
            <Loading>
              <Spinner />
            </Loading>
          ) : (
            <Alert style={{ width: '100%', textAlign: 'center' }}>Авторов нет</Alert>
          )}
        </Container>
      </Wrap>
    </DefaultLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let users = []

  try {
    const response = await client.query({
      query: queries.GET_META_AUTHORS
    })

    if (response && response.data) {
      users = response.data.getUsers
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: { users }
    }
  }
}

export default Creators
