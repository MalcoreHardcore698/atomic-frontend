import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Spinner from '../atomic-ui/components/Spinner'

import { useHelper } from '../hooks/useHelper'
import DefaultLayout from '../layouts/default'
import { onUserCheckin } from '../store/helpers/user'
import queries from '../graphql/queries'

const TITLE = 'Авторизация'

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

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

const Auth = () => {
  const recall = useHelper()
  const router = useRouter()
  const { user, stepper } = useSelector((state) => ({
    user: state.user,
    stepper: state.stepper
  }))

  useEffect(() => {
    if (!stepper?.content) {
      recall(onUserCheckin, {
        mutations: {
          checkin: queries.CHECKIN,
          googleAuth: queries.GOOGLE_AUTH,
          facebookAuth: queries.FACEBOOK_AUTH,
          login: queries.LOGIN,
          register: queries.REGISTER,
          forgotEmail: queries.LOGIN,
          forgotPassword: queries.LOGIN
        }
      })()
    }
  }, [stepper])

  useEffect(() => {
    if (user && user.authenticated) {
      router.push('/profile')
    }
  }, [user])

  if (!stepper || user.authenticated) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    )
  }

  return (
    <DefaultLayout title={TITLE}>
      <Wrap key={stepper.name}>{stepper.content}</Wrap>
    </DefaultLayout>
  )
}

export default Auth
