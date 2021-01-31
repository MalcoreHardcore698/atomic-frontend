import React from 'react'

import Row from '../../atomic-ui/components/Row'
import Button from '../../atomic-ui/components/Button'

import Form from '../Form'

export const Delete = ({ children, mutation, appearance, className, onCancel, onSubmit }) => {
  return (
    <Form className={className} appearance={appearance} mutation={mutation} onSubmit={onSubmit}>
      {({ loading }) => (
        <React.Fragment>
          {children}

          <Row>
            <Button type={'button'} style={{ flexGrow: 1 }} onClick={onCancel}>
              Отмена
            </Button>
            <Button
              type={'submit'}
              loading={loading.toString()}
              appearance={'red'}
              style={{ flexGrow: 1 }}>
              Удалить
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export default Delete
