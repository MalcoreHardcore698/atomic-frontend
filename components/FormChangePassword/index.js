import React from 'react'

import Container from '../../atomic-ui/components/Container'
import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Title from '../../atomic-ui/components/Title'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'

import Form from '../Form'

export const ChangePassword = ({ title = true, appearance, className, mutation, onSubmit }) => {
  return (
    <Form className={className} appearance={appearance} mutation={mutation} onSubmit={onSubmit}>
      {({ register, loading }) => (
        <React.Fragment>
          {title && (
            <Container>
              <Title style={{ textAlign: 'center' }} tag={'h4'}>
                Смена пароля
              </Title>
            </Container>
          )}

          <Column>
            <Input
              type={'password'}
              name={'password'}
              inputRef={register({ required: true })}
              placeholder={'Введите новый пароль'}
              appearance={'ghost'}
              loading={loading.toString()}
              required
            />
          </Column>

          <Row>
            <Button style={{ flexGrow: 1 }} type={'submit'} loading={loading.toString()}>
              Изменить
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export default ChangePassword
