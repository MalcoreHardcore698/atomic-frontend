import React from 'react'

import Container from '../../atomic-ui/components/Container'
import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'

import Form from '../Form'

export const ForgotPassword = ({ title = true, appearance, className, onBack, onSubmit }) => {
  return (
    <Form className={className} appearance={appearance} onSubmit={onSubmit}>
      {({ register, loading }) => (
        <React.Fragment>
          {title && (
            <Container>
              <Title style={{ textAlign: 'center' }} tag={'h4'}>
                Восстановление пароля
              </Title>
            </Container>
          )}

          <Text>Введите последний пароль этого аккаунта, который помните</Text>

          <Column>
            <Input
              type={'password'}
              name={'forgotPassword'}
              inputRef={register({ required: true })}
              placeholder={'Введите последний пароль'}
              appearance={'ghost'}
              loading={loading.toString()}
              required
            />
          </Column>

          <Row>
            {(onBack) && (
              <Button
                style={{ flexGrow: 1 }}
                type={'button'}
                appearance={'ghost'}
                loading={loading.toString()}
                onClick={onBack}
              >
                Назад
              </Button>
            )}
            <Button style={{ flexGrow: 1 }} type={'submit'} loading={loading.toString()}>
              Далее
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export default ForgotPassword
