import React from 'react'

import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Description from '../../atomic-ui/components/Description'
import Input from '../../atomic-ui/components/Input'
import Checkbox from '../../atomic-ui/components/Checkbox'
import Button from '../../atomic-ui/components/Button'

import Form from '../Form'

export const Feedback = ({ title = true, appearance, className, onSubmit }) => {
  return (
    <Form className={className} appearance={appearance} onSubmit={onSubmit}>
      {({ register, loading }) => (
        <React.Fragment>
          <Column>
            {title && (
              <Title style={{ textAlign: 'center' }} tag={'h4'}>
                Форма обратной связи
              </Title>
            )}
            <Description style={{ textAlign: 'center' }}>
              Если у вас есть вопросы о формате или вы не знаете что выбрать, оставьте свой номер:
              мы позвоним, чтобы ответить на все ваши вопросы.
            </Description>
          </Column>

          <Column>
            <Input
              type={'text'}
              name={'name'}
              inputRef={register({ required: true })}
              loading={loading.toString()}
              placeholder={'Enter your name'}
              appearance={'ghost'}
            />
            <Input
              type={'number'}
              name={'phone'}
              inputRef={register({ required: true })}
              loading={loading.toString()}
              placeholder={'Enter your phone'}
              appearance={'ghost'}
            />
            <Checkbox
              name={'agreement'}
              inputRef={register({ required: true })}
              loading={loading.toString()}
              label={'Я прочел(а) соглашение об обработке персональных данных'}
            />
          </Column>

          <Button type={'submit'} loading={loading.toString()}>
            Отправить заявку
          </Button>
        </React.Fragment>
      )}
    </Form>
  )
}

export default Feedback
