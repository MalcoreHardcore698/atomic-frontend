import React, { useEffect, useState } from 'react'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Select from '../../atomic-ui/components/Select'
import TextArea from '../../atomic-ui/components/TextArea'
import Alert from '../../atomic-ui/components/Alert'
import { getLabelCategory } from '../../atomic-ui/utils/functions'

import Form from '../Form'
import { useQuery } from '@apollo/react-hooks'
import queries from '../../graphql/queries'

export const Category = ({ category, mutation, appearance, className, onSubmit }) => {
  const [typeError, setTypeError] = useState(false)
  const [type, setType] = useState(
    (category &&
      category.type && {
        value: category.type,
        label: getLabelCategory(category.type)
      }) ||
      null
  )

  const { data: dataTypes, loading: loadingTypes } = useQuery(queries.GET_CATEGORY_TYPES)

  const [types, setTypes] = useState([])

  useEffect(() => {
    if (!loadingTypes && dataTypes) {
      setTypes(dataTypes.getCategoryTypes)
    }
  }, [loadingTypes, dataTypes])

  return (
    <Form
      className={className}
      appearance={appearance}
      mutation={mutation}
      onSubmit={(form, action) => {
        if (type) {
          onSubmit({ ...form, type }, action)
        } else {
          setTypeError(true)
        }
      }}>
      {({ register, loading, errors, getValues }) => (
        <React.Fragment>
          <Column>
            <Title tag={'h4'}>Основное</Title>

            {errors && errors.name && (
              <Alert style={{ width: '100%' }} appearance={'error'}>
                Введите название категории
              </Alert>
            )}
            <Input
              type={'text'}
              name={'name'}
              ref={register({ required: true })}
              defaultValue={category?.name || getValues('name')}
              placeholder={'Название'}
              appearance={'ghost'}
              disabled={loading}
            />

            {typeError && (
              <Alert style={{ width: '100%' }} appearance={'error'}>
                Выберите тип категории
              </Alert>
            )}
            <Select
              name={'type'}
              appearance={'ghost'}
              defaultValue={type}
              onChange={(value) => {
                setType(value)
                setTypeError(false)
              }}
              placeholder={'Выберите тип'}
              options={types.map((type) => ({
                value: type,
                label: getLabelCategory(type)
              }))}
              isLoading={loading || loadingTypes}
              isClearable
            />

            <TextArea
              name={'description'}
              ref={register()}
              defaultValue={category?.description || getValues('description')}
              placeholder={'Описание'}
              appearance={'ghost'}
              disabled={loading}
            />
          </Column>

          <Row>
            <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
              {category ? 'Сохранить' : 'Создать'}
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

Category.defaultProps = {
  create: true
}

export default Category
