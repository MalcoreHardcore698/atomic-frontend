import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import ErrorNotFound from './404'
import DefaultLayout from '../layouts/default'
import TicketForm from '../components/FormTicket'
import { setItem } from '../store/actions/snacks'
import { setModal } from '../store/actions/modal'
import queries from '../graphql/queries'

const TITLE = 'Поддержка'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 380px;
  justify-content: center;
  align-content: center;
  margin: 120px 0;

  @media only screen and (max-width: 480px) {
    grid-template-columns: 100%;
    margin: 25px 0;
  }
`

export const Support = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  if (user && user.authenticated) {
    return (
      <DefaultLayout title={TITLE}>
        <Wrap>
          <TicketForm
            title={'Поддержка'}
            mutation={queries.CREATE_USER_TICKET}
            onSubmit={async (form, action) => {
              try {
                await action({
                  variables: {
                    input: {
                      title: form.title,
                      message: form.message,
                      category: form.category?.value
                    }
                  }
                })
                dispatch(
                  setItem({
                    type: 'success',
                    message: 'Вопрос успешно отправлен'
                  })
                )
              } catch (err) {
                dispatch(
                  setItem({
                    type: 'error',
                    message: 'Не удалось отправить вопрос'
                  })
                )
              } finally {
                dispatch(setModal(null))
              }
            }}
            withContainer
            isClient
          />
        </Wrap>
      </DefaultLayout>
    )
  }

  return <ErrorNotFound />
}

export default Support
