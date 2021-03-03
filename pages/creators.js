import React from 'react'
import { useSelector } from 'react-redux'

import { initializeApollo } from '../apollo'
import { useHelper } from '../hooks/useHelper'
import ContentLayout from '../layouts/content'
import UserCard from '../components/UserCard'
import LazyLoad from '../components/LazyLoad'
import FadeLoad from '../components/FadeLoad'
import { GridAside as Container } from '../components/Styled'
import { onUserAboutMore, onUserLink, onUserMembers } from '../store/helpers/user'
import { onChat } from '../store/helpers'
import queries from '../graphql/queries'

const TITLE = 'Авторы'
const START_OFFSET = 6

const Creators = ({ store }) => {
  const recall = useHelper()
  const user = useSelector((state) => state.user)

  return (
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
          {documents.map((author) => {
            const owned = author.name === user.name

            return (
              <FadeLoad key={author.email}>
                <LazyLoad>
                  <UserCard
                    user={author}
                    owned={owned}
                    onChat={
                      user.email &&
                      recall(onChat, {
                        sender: user,
                        recipient: author
                      })
                    }
                    onAboutMore={recall(onUserAboutMore, { user: author })}
                    onMembers={recall(onUserMembers, { id: author?.email, auth: user?.email })}
                    onLink={recall(onUserLink, {
                      id: author.email,
                      auth: user?.email,
                      owned
                    })}
                    onCompanyLink={recall(onUserLink, {
                      id: author.company?.email,
                      auth: user?.email
                    })}
                  />
                </LazyLoad>
              </FadeLoad>
            )
          })}
        </Container>
      )}
    </ContentLayout>
  )
}

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
