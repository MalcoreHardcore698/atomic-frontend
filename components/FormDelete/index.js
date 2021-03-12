import React from 'react'

import Row from '../../atomic-ui/components/Row'
import Button from '../../atomic-ui/components/Button'

import Form from '../Form'
import Processed from '../Processed'

export const Delete = ({ children, mutation, appearance, className, onCancel, onSubmit }) => {
  return (
    <Form className={className} appearance={appearance} mutation={mutation} onSubmit={onSubmit}>
      {({ loading, error }) => (
        <React.Fragment>
          <Processed
            data={children}
            loading={loading}
            error={error}
            errorMessage={'Упс! Не удалось удалить документ'}
            emptyMessage={'Не указан документ для удаления'}>
            {children}

            <Row>
              <Button type={'button'} style={{ flexGrow: 1 }} onClick={onCancel}>
                Отмена
              </Button>
              <Button type={'submit'} disabled={loading} appearance={'red'} style={{ flexGrow: 1 }}>
                Удалить
              </Button>
            </Row>
          </Processed>
        </React.Fragment>
      )}
    </Form>
  )
}

export default Delete
