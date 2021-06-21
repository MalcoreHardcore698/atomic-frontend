import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import Container from '../../atomic-ui/components/Container'
import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Divider from '../../atomic-ui/components/Divider'
import Icon from '../../atomic-ui/components/Icon'
import Alert from '../../atomic-ui/components/Alert'

import Form from '../Form'

const GOOGLE_CLIENT_ID = '1008300307671-dvv5no8uimgk2lodr76m9rnnva8g0lii.apps.googleusercontent.com'
const FACEBOOK_APP_ID = 697333197849130

export const StretchButton = styled(Button)`
  flex-grow: 1;
`

export const SocialButtons = styled(Row)`
  justify-content: center;
`

export const GoogleButton = styled(Button)`
  background: #c5331e;
  height: var(--input-height-m);
  min-height: var(--input-height-m);

  &:hover {
    background: #c5331e;
    opacity: 0.65;
  }
`

export const FacebookButton = styled(Button)`
  background: #4e6297;
  height: var(--input-height-m);
  min-height: var(--input-height-m);

  &:hover {
    background: #4e6297;
    opacity: 0.65;
  }
`

export const GoogleAuthButton = ({ mutation, onError, onFinally, onSubmit }) => {
  const [isLoading, setLoading] = React.useState(false)
  const [auth, { data, error }] = useMutation(mutation)

  useEffect(() => {
    if (data && data.googleAuth && data.googleAuth) {
      setLoading(false)
      if (onFinally) onFinally(data.googleAuth)
    }
  }, [data, onFinally])

  useEffect(() => {
    if (error) {
      console.log('GoogleAuthButton error', error)
      setLoading(false)
    }
  }, [error])

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={(response) => onSubmit(response, auth)}
      onFailure={onError}
      onRequest={() => setLoading(true)}
      cookiePolicy={'single_host_origin'}
      render={({ onClick }) => (
        <GoogleButton
          type={'button'}
          kind={'icon'}
          appearance={'clear'}
          onClick={onClick}
          disabled={isLoading}>
          <Icon icon={'google'} stroke={'none'} fill={'white'} />
        </GoogleButton>
      )}
    />
  )
}

export const FacebookAuthButton = ({ mutation, onError, onFinally, onSubmit }) => {
  const [isLoading, setLoading] = React.useState(false)
  const [auth, { error, data }] = useMutation(mutation)

  useEffect(() => {
    if (data && data.facebookAuth && data.facebookAuth) {
      setLoading(false)
      if (onFinally) onFinally(data.facebookAuth)
    }
  }, [data, onFinally])

  useEffect(() => {
    if (error) {
      console.log('FacebookAuthButton error', error)
      setLoading(false)
      if (onError) onError(error)
    }
  }, [error, onError])

  const onClick = (event, renderProps) => {
    event.preventDefault()
    renderProps.onClick(event)
    setLoading(true)
  }

  return (
    <FacebookLogin
      appId={FACEBOOK_APP_ID}
      autoLoad={false}
      callback={(response) => onSubmit(response, auth)}
      render={(props) => (
        <FacebookButton
          type={'button'}
          kind={'icon'}
          appearance={'clear'}
          onClick={(event) => onClick(event, props)}
          disabled={isLoading}>
          <Icon icon={'facebook'} stroke={'none'} fill={'white'} />
        </FacebookButton>
      )}
    />
  )
}

export const Checkin = ({
  title = true,
  mutations,
  appearance,
  className,
  onGoogleError,
  onFacebookError,
  onGoogleFinally,
  onFacebookFinally,
  onGoogleSubmit,
  onFacebookSubmit,
  onForgot,
  onCreate,
  onSubmit
}) => (
  <Form
    className={className}
    appearance={appearance}
    mutation={mutations.checkin}
    onSubmit={onSubmit}>
    {({ watch, register, errors, loading }) => {
      const login = watch('login')

      return (
        <React.Fragment>
          {title && (
            <Container>
              <Title style={{ textAlign: 'center' }} tag={'h4'}>
                Вход
              </Title>
            </Container>
          )}

          <Column>
            {errors && errors.login && (
              <Alert style={{ width: '100%' }} appearance={'error'}>
                Неверно указано или не указано телефон/эл. почта
              </Alert>
            )}
            <Input
              type={'text'}
              name={'login'}
              ref={register({ required: true })}
              placeholder={'Телефон или адрес эл. почты'}
              appearance={'ghost'}
              disabled={loading}
              required
            />
            <Button type={'button'} appearance={'link'} onClick={onForgot}>
              Забыли пароль ?
            </Button>
          </Column>

          <Row>
            <StretchButton type={'button'} disabled={loading} onClick={onCreate}>
              Создать аккаунт
            </StretchButton>
            <StretchButton style={{ flexGrow: 1 }} type={'submit'} disabled={!login || loading}>
              Далее
            </StretchButton>
          </Row>

          <Divider />

          <SocialButtons>
            <GoogleAuthButton
              mutation={mutations.googleAuth}
              onError={onGoogleError}
              onFinally={onGoogleFinally}
              onSubmit={onGoogleSubmit}
            />
            <FacebookAuthButton
              mutation={mutations.facebookAuth}
              onError={onFacebookError}
              onFinally={onFacebookFinally}
              onSubmit={onFacebookSubmit}
            />
          </SocialButtons>
        </React.Fragment>
      )
    }}
  </Form>
)

export default Checkin
