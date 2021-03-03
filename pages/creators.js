import React from 'react'

import { initializeApollo } from '../apollo'
import ContentLayout from '../layouts/content'
import { GridAside as Container } from '../components/Styled'
import UserList from '../components/UserList'
import queries from '../graphql/queries'

const TITLE = 'Авторы'
const START_OFFSET = 6

const Creators = ({ store }) => (
  <ContentLayout
    title={TITLE}
    filters={[
      { type: 'DATEPICKER', placeholder: 'Дата регистарции' },
      {
        type: 'SELECT',
        placeholder: 'Компания',
        options: store?.companies.map((company) => ({
          value: company.email,
          label: company.name
        }))
      }
    ]}
    options={[
      { label: 'Компания', value: 'company' },
      { label: 'Участники', value: 'members' },
      { label: 'Дата регистарции', value: 'createdAt' }
    ]}
    query={queries.GET_USERS}
    store={{ documents: store?.users }}>
    {({ documents }) => (
      <Container>
        <UserList initialList={documents} />
      </Container>
    )}
  </ContentLayout>
)

export async function getServerSideProps() {
  const client = initializeApollo()

  let users = []
  let companies = []

  try {
    const response = await client.query({
      query: queries.GET_META_AUTHORS,
      variables: {
        offset: 0,
        limit: START_OFFSET
      }
    })

    if (response && response.data) {
      users = response.data.getUsers
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: {
        users,
        companies
      }
    }
  }
}

export default Creators
