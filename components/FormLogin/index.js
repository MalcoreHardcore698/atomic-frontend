import React from 'react'
import styled from 'styled-components'

import Container from '../../atomic-ui/components/Container'
import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Alert from '../../atomic-ui/components/Alert'

import Form from '../Form'

export const Email = styled(Text)`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-regular);
  color: var(--ghost-color-text);
  text-align: center;
`

export const Login = ({
  title = true,
  email,
  mutation,
  appearance,
  className,
  onBack,
  onSubmit
}) => (
  <Form className={className} appearance={appearance} mutation={mutation} onSubmit={onSubmit}>
    {({ register, errors, loading }) => (
      <React.Fragment>
        {title && (
          <Container>
            <Title style={{ textAlign: 'center' }} tag={'h4'}>
              Добро пожаловать!
            </Title>
            <Email>({email})</Email>
          </Container>
        )}

        <Column>
          {errors && errors.password && (
            <Alert style={{ width: '100%' }} appearance={'error'}>
              Неверно указано или не указано пароль
            </Alert>
          )}
          <Input
            type={'password'}
            name={'password'}
            ref={register({ required: true })}
            placeholder={'Введите пароль'}
            appearance={'ghost'}
            disabled={loading}
          />
        </Column>

        <Row>
          <Button style={{ flexGrow: 1 }} type={'button'} disabled={loading} onClick={onBack}>
            Назад
          </Button>
          <Button style={{ flexGrow: 1 }} disabled={loading} type={'submit'}>
            Далее
          </Button>
        </Row>
      </React.Fragment>
    )}
  </Form>
)

Login.defaultProps = {
  email: 'admin@example.com'
}

export default Login
