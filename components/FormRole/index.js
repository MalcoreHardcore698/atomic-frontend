import React, { useState } from 'react'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Select from '../../atomic-ui/components/Select'
import Alert from '../../atomic-ui/components/Alert'
import { createSelectOptions, getLabelPermission } from '../../atomic-ui/utils/functions'

import Form from '../Form'

export const Role = ({ role, permissions, mutation, appearance, className, onSubmit }) => {
  const [permissionsError, setPermissionsError] = useState(false)
  const [selectedPermissions, setSelectedPermissions] = useState(
    role?.permissions?.map((permission) => ({
      value: permission,
      label: getLabelPermission(permission)
    })) || null
  )
  const [disabled, setDisabled] = useState(true)

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
              onChange={(e) => {
                if (e.target.value === role?.name) {
                  setDisabled(true)
                } else {
                  setDisabled(false)
                }
              }}
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
                if (value.value.length === role?.permissions?.length) {
                  setDisabled(true)
                } else {
                  setDisabled(false)
                }
              }}
              placeholder={'Выберите привелегии'}
              options={createSelectOptions(permissions).map((option) => ({
                ...option,
                label: getLabelPermission(option.label)
              }))}
              isLoading={loading}
              isClearable
              isMulti
            />
          </Column>

          <Row>
            <Button style={{ flexGrow: 1 }} type={'submit'} disabled={disabled || loading}>
              {role ? 'Сохранить' : 'Создать'}
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export default Role
