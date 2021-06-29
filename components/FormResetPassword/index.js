import React from 'react'

import Container from '../../atomic-ui/components/Container'
import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Title from '../../atomic-ui/components/Title'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'

import Form from '../Form'

export const ResetPassword = ({
  title = true,
  appearance,
  className,
  mutations,
  onlyButton,
  onSubmit,
  onBack
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      className={className}
      appearance={appearance}
      mutation={mutations.forgotPassword}>
      {({ register, loading }) => (
        <React.Fragment>
          {title && (
            <Container>
              <Title style={{ textAlign: 'center' }} tag={'h4'}>
                Сброс пароля
              </Title>
            </Container>
          )}

          {!onlyButton && (
            <Column>
              <Input
                type={'text'}
                name={'email'}
                ref={register({ required: !onlyButton })}
                placeholder={'Телефон или адрес эл. почты'}
                appearance={'ghost'}
                disabled={loading}
                required
              />
            </Column>
          )}

          <Row>
            <Button style={{ flexGrow: 1 }} type={'button'} onClick={onBack}>
              Отмена
            </Button>

            <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
              Сбросить
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export default ResetPassword
