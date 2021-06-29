import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import ErrorNotFound from './404'
import DefaultLayout from '../layouts/default'
import Spinner from '../atomic-ui/components/Spinner'
import { onUserResetPassword } from '../store/helpers/user'
import { setStepper } from '../store/actions/stepper'
import { useHelper } from '../hooks/useHelper'
import queries from '../graphql/queries'

const TITLE = 'Сброс пароля'

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

export const Support = () => {
  const recall = useHelper()
  const router = useRouter()
  const { user, stepper } = useSelector((state) => ({
    user: state.user,
    stepper: state.stepper
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    if (!stepper?.content) {
      recall(onUserResetPassword, {
        redirect: () => router.replace('/profile'),
        withoutBack: true,
        mutations: {
          forgotPassword: queries.RESET,
          checkResetToken: queries.CHECK_RESET_TOKEN
        }
      })()
    }
  }, [stepper])

  useEffect(() => {
    return () => dispatch(setStepper(null))
  }, [dispatch, setStepper])

  if (!stepper) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    )
  }

  if (user && user.authenticated) {
    return (
      <DefaultLayout title={TITLE}>
        <Wrap key={stepper.name}>{stepper.content}</Wrap>
      </DefaultLayout>
    )
  }

  return <ErrorNotFound />
}

export default Support
