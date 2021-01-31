import React from 'react'

import Container from '../../atomic-ui/components/Container'
import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Title from '../../atomic-ui/components/Title'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'

import Form from '../Form'

export const AddUserFolder = ({
  title = true,
  mutation,
  appearance,
  className,
  onCancel,
  onSubmit
}) => {
  return (
    <Form className={className} appearance={appearance} mutation={mutation} onSubmit={onSubmit}>
      {({ register, loading }) => (
        <React.Fragment>
          {title && (
            <Container>
              <Title style={{ textAlign: 'center' }} tag={'h4'}>
                Создание папки
              </Title>
            </Container>
          )}

          <Column>
            <Input
              type={'text'}
              name={'name'}
              inputRef={register({ required: true })}
              placeholder={'Введите название папки'}
              appearance={'ghost'}
              loading={loading.toString()}
              autoComplete={'off'}
              required
            />
          </Column>

          <Row>
            {onCancel && (
              <Button
                style={{ flexGrow: 1 }}
                type={'button'}
                appearance={'ghost'}
                loading={loading.toString()}
                onClick={onCancel}>
                Отмена
              </Button>
            )}
            <Button style={{ flexGrow: 1 }} type={'submit'} loading={loading.toString()}>
              Создать
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export default AddUserFolder
