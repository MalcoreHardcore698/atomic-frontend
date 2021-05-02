import React, { useEffect, useState } from 'react'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Select from '../../atomic-ui/components/Select'
import Alert from '../../atomic-ui/components/Alert'
import { createSelectOptions, getLabelPermission } from '../../atomic-ui/utils/functions'

import Form from '../Form'
import { useQuery } from '@apollo/react-hooks'
import queries from '../../graphql/queries'

export const Role = ({ role, mutation, appearance, className, onSubmit }) => {
  const [permissionsError, setPermissionsError] = useState(false)
  const [selectedPermissions, setSelectedPermissions] = useState(
    role?.permissions?.map((permission) => ({
      value: permission,
      label: getLabelPermission(permission)
    })) || null
  )

  const { data: dataPermissions, loading: loadingPermissions } = useQuery(queries.GET_PERMISSIONS)

  const [permissions, setPermissions] = useState([])

  useEffect(() => {
    if (!loadingPermissions && dataPermissions) {
      setPermissions(dataPermissions.getPermissions)
    }
  }, [loadingPermissions, dataPermissions])

  return (
    <Form
      className={className}
      appearance={appearance}
      mutation={mutation}
      onSubmit={(form, action) => {
        if (selectedPermissions?.length > 0) {
          onSubmit({ ...form, permissions: selectedPermissions }, action)
        } else {
          setPermissionsError(true)
        }
      }}>
      {({ register, loading, errors, getValues }) => (
        <React.Fragment>
          <Column>
            <Title tag={'h4'}>Основное</Title>

            {errors && errors.name && (
              <Alert style={{ width: '100%' }} appearance={'error'}>
                Название роли должно содержать только латинские символы
              </Alert>
            )}
            <Input
              type={'text'}
              name={'name'}
              ref={register({
                required: true,
                pattern: /[A-Za-z]/
              })}
              defaultValue={role?.name || getValues('name')}
              placeholder={'Название'}
              appearance={'ghost'}
              disabled={loading}
            />

            {permissionsError && (
              <Alert style={{ width: '100%' }} appearance={'error'}>
                Список привилегий должен содержать хотя бы один элемент
              </Alert>
            )}
            <Select
              name={'permissions'}
              appearance={'ghost'}
              defaultValue={selectedPermissions}
              onChange={(value) => {
                setSelectedPermissions(value)
                setPermissionsError(false)
              }}
              placeholder={'Выберите привелегии'}
              options={createSelectOptions(permissions).map((option) => ({
                ...option,
                label: getLabelPermission(option.label)
              }))}
              isLoading={loading || loadingPermissions}
              isClearable
              isMulti
            />
          </Column>

          <Row>
            <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
              {role ? 'Сохранить' : 'Создать'}
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export default Role
