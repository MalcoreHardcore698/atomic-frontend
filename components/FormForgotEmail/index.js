import React from 'react'

import Container from '../../atomic-ui/components/Container'
import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'

import Form from '../Form'

export const ForgotEmail = ({ title = true, appearance, className, onBack, onSubmit }) => {
  return (
    <Form className={className} appearance={appearance} onSubmit={onSubmit}>
      {({ register, loading }) => (
        <React.Fragment>
          {title && (
            <Container>
              <Title style={{ textAlign: 'center' }} tag={'h4'}>
                Восстановление эл. почты
              </Title>
            </Container>
          )}

          <Text>Какое ваше любимое блюдо?</Text>

          <Column>
            <Input
              type={'text'}
              name={'answer'}
              inputRef={register({ required: true })}
              placeholder={'Введите ответ на контрольный вопрос'}
              loading={loading.toString()}
              appearance={'ghost'}
              required
            />
          </Column>

          <Row>
            {onBack && (
              <Button
                style={{ flexGrow: 1 }}
                type={'button'}
                appearance={'ghost'}
                loading={loading.toString()}
                onClick={onBack}>
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

export default ForgotEmail
