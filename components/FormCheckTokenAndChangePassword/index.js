import React from 'react'

import Container from '../../atomic-ui/components/Container'
import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Title from '../../atomic-ui/components/Title'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'

import Form from '../Form'

export const CheckTokenAndChangePassword = ({
  title = true,
  appearance,
  className,
  mutations,
  onSubmit
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      className={className}
      appearance={appearance}
      mutation={mutations.checkResetToken}>
      {({ register, loading }) => (
        <React.Fragment>
          {title && (
            <Container>
              <Title style={{ textAlign: 'center' }} tag={'h4'}>
                Введите ключ из письма и новый пароль
              </Title>
            </Container>
          )}

          <Column>
            <Input
              type={'text'}
              name={'token'}
              ref={register({ required: true })}
              placeholder={'Ключ из письма'}
              appearance={'ghost'}
              disabled={loading}
              required
            />
            <Input
              type={'password'}
              name={'password'}
              ref={register({ required: true })}
              placeholder={'Новый пароль'}
              appearance={'ghost'}
              disabled={loading}
              required
            />
          </Column>
          <Row>
            <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
              Сбросить
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export default CheckTokenAndChangePassword
