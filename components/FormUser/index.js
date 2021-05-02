import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import styled, { css } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import generator from 'generate-password'

import Tooltip, { Wrap as WrapTooltip } from '../../atomic-ui/components/Tooltip'
import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import TextArea from '../../atomic-ui/components/TextArea'
import Dropzone from '../../atomic-ui/components/Dropzone'
import DatePicker from '../../atomic-ui/components/DatePicker'
import Spinner from '../../atomic-ui/components/Spinner'
import Switch from '../../atomic-ui/components/Switch'
import Icon from '../../atomic-ui/components/Icon'
import Alert from '../../atomic-ui/components/Alert'
import Select from '../../atomic-ui/components/Select'
import Divider from '../../atomic-ui/components/Divider'
import { getLabelRole } from '../../atomic-ui/utils/functions'

import Form from '../Form'
import { Loader } from '../Styled'
import queries from '../../graphql/queries'

const TAB_TYPES = [
  { label: 'Основное', value: 'GENERAL' },
  { label: 'Безопасность', value: 'SECURITY' }
]

const ACCOUNT_TYPES = [
  { label: 'Физ. лицо', value: 'INDIVIDUAL', tooltip: 'Любое лицо' },
  { label: 'Оф. лицо', value: 'OFICIAL', tooltip: 'Государственный деятель' },
  { label: 'Юр. лицо', value: 'ENTITY', tooltip: 'Организация' }
]

const GENDER_TYPES = [
  { label: 'Мужской', value: 'MALE' },
  { label: 'Женский', value: 'FEMALE' }
]

export const CommonAlert = styled(Alert)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  flex-grow: 100;
`

export const AdaptiveDropzone = styled(Dropzone)`
  width: 196px;
  height: 276px;

  span {
    width: 100%;
  }

  @media only screen and (max-width: 575px) {
    width: 100% !important;
    height: 256px;
  }
`

export const AdaptiveRow = styled(Row)`
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    grid-gap: var(--default-gap);

    ${WrapTooltip} {
      flex-grow: 1;

      button {
        width: 100%;
      }
    }
  }
`

export const Tab = styled(Column)`
  display: none;

  ${({ active }) =>
    active &&
    css`
      display: flex;
    `}
`

export const detect = (list, value) => {
  return list.find((item) => item.value === value)
}

export const detectAccountType = (types, user) => detect(types, user?.account)

export const detectGender = (types, user) => detect(types, user?.gender)

export const getAccountType = (role) => {
  if (role) {
    return ACCOUNT_TYPES.find((type) => type.value === role)
  }
  return ACCOUNT_TYPES[0]
}

export const getLabelGender = (gender) => {
  if (gender) {
    return GENDER_TYPES.find((type) => type.value === gender)
  }
  return GENDER_TYPES[0]
}

export const User = ({
  user,
  mutation,
  appearance,
  className,
  accountTypes,
  genderTypes,
  canEditRole,
  onSubmit,
  onChangePassword
}) => {
  const { data, loading: loadingData, error } = user
    ? useQuery(queries.GET_USER, {
        variables: {
          email: user
        }
      })
    : { data: { getUser: {} }, loading: false, error: false }
  const { data: dataCompanies, loading: loadingCompanies } = useQuery(queries.GET_USERS, {
    variables: {
      account: ['ENTITY']
    }
  })
  const { data: dataRoles, loading: loadingRoles } = useQuery(queries.GET_ROLES)

  const [tab, setTab] = useState(TAB_TYPES[0])
  const [roles, setRoles] = useState([])
  const [account, setAccount] = useState(null)
  const [isShowPassword, setShowPassword] = useState(false)

  const onTogglePassword = () => setShowPassword(!isShowPassword)

  useEffect(() => {
    if (!loadingRoles && dataRoles) {
      setRoles(dataRoles.getRoles)
    }
  }, [loadingRoles, dataRoles])

  return (
    <Form
      className={className}
      appearance={appearance}
      mutation={mutation}
      onSubmit={(form, action) =>
        onSubmit({ ...form, account: account || getAccountType(data?.getUser?.account) }, action)
      }>
      {({ register, control, loading, errors, setValue, getValues }) =>
        !loading && !loadingData && data && data.getUser ? (
          <React.Fragment>
            <Switch defaultValue={tab} options={TAB_TYPES} onChange={setTab} stretch />

            <Tab active={tab.value === 'GENERAL'}>
              <AdaptiveRow>
                <Controller
                  name={'avatar'}
                  control={control}
                  defaultValue={
                    getValues('avatar') ||
                    (user && (data.getUser?.avatar || { path: '/images/avatar-default.png' })) ||
                    null
                  }
                  render={({ value, onChange }) => (
                    <AdaptiveDropzone
                      accept={'image/*'}
                      defaultValue={value}
                      onChange={onChange}
                      placeholder={'Перетащите сюда изображение для превью'}
                      tooltip={
                        'Разрешение: 675x590px. Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB'
                      }
                    />
                  )}
                />

                <Column style={{ flexGrow: 1 }}>
                  {data.getUser?.role?.name !== 'ADMIN' && (
                    <React.Fragment>
                      <Title tag={'h4'}>Аккаунт</Title>
                      <Switch
                        defaultValue={
                          account?.value ? account : getAccountType(data.getUser?.account)
                        }
                        options={(accountTypes?.length > 1 && accountTypes) || ACCOUNT_TYPES}
                        onChange={(value) => setAccount(value)}
                        disabled={loading}
                        stretch
                      />
                    </React.Fragment>
                  )}

                  <Title tag={'h4'}>
                    {(account?.value && account?.value === 'ENTITY') ||
                    (!account?.value && data.getUser?.account === 'ENTITY')
                      ? 'Название компании'
                      : 'ФИО'}
                  </Title>
                  {canEditRole && errors && errors.name && (
                    <Alert style={{ width: '100%' }} appearance={'error'}>
                      Неверно указано или не указано ФИО
                    </Alert>
                  )}
                  <Input
                    type={'text'}
                    name={'name'}
                    ref={register({ required: !user })}
                    defaultValue={getValues('name') || data.getUser?.name}
                    placeholder={
                      (account?.value && account?.value === 'ENTITY') ||
                      (!account?.value && data.getUser?.account === 'ENTITY')
                        ? 'Название компании'
                        : 'ФИО'
                    }
                    appearance={'ghost'}
                    disabled={loading}
                  />

                  {data.getUser?.role?.name === 'ADMIN' && (
                    <CommonAlert>
                      У администратора ограниченные возможности изменения собственного аккаунта
                    </CommonAlert>
                  )}

                  {data.getUser?.role?.name !== 'ADMIN' && (
                    <React.Fragment>
                      <Title tag={'h4'}>
                        {(account?.value && account?.value === 'ENTITY') ||
                        (!account?.value && data.getUser?.account === 'ENTITY')
                          ? 'Дата основания'
                          : 'Дата рождения'}
                      </Title>
                      <Controller
                        name={'dateOfBirth'}
                        control={control}
                        defaultValue={
                          getValues('dateOfBirth') ||
                          (data.getUser?.dateOfBirth && new Date(data.getUser?.dateOfBirth)) ||
                          null
                        }
                        render={({ value, onChange }) => (
                          <DatePicker
                            value={value}
                            onChange={onChange}
                            placeholder={
                              (account?.value && account?.value === 'ENTITY') ||
                              (!account?.value && data.getUser?.account === 'ENTITY')
                                ? 'Дата основания'
                                : 'Дата рождения'
                            }
                            appearance={'ghost'}
                            withYearDisplay={false}
                            withNavigate
                            canEditYear
                          />
                        )}
                      />
                    </React.Fragment>
                  )}
                </Column>
              </AdaptiveRow>

              {((account?.value && account?.value !== 'ENTITY') ||
                (!account?.value && data.getUser?.account !== 'ENTITY')) &&
                data.getUser?.role?.name !== 'ADMIN' && (
                  <Column style={{ flexGrow: 1 }}>
                    <Title tag={'h4'}>Пол</Title>
                    <Controller
                      name={'gender'}
                      control={control}
                      defaultValue={getValues('gender') || getLabelGender(data.getUser?.gender)}
                      render={({ value, onChange }) => (
                        <Switch
                          defaultValue={value}
                          onChange={onChange}
                          options={(genderTypes?.length > 1 && genderTypes) || GENDER_TYPES}
                          disabled={loading}
                          stretch
                        />
                      )}
                    />
                  </Column>
                )}

              {((account?.value && account?.value !== 'ENTITY') ||
                (!account?.value && data.getUser?.account !== 'ENTITY')) &&
                data.getUser?.role?.name !== 'ADMIN' && (
                  <Column>
                    <Title tag={'h4'}>Компания</Title>
                    <Controller
                      name={'company'}
                      control={control}
                      defaultValue={
                        getValues('company') ||
                        (data.getUser?.company
                          ? {
                              value: data.getUser.company.id,
                              label: data.getUser.company.name
                            }
                          : null)
                      }
                      render={({ value, onChange }) => (
                        <Select
                          appearance={'ghost'}
                          defaultValue={value}
                          placeholder={'Выберите компанию'}
                          options={(dataCompanies?.getUsers || []).map((company) => ({
                            value: company.email,
                            label: company.name
                          }))}
                          onChange={onChange}
                          isLoading={loadingCompanies || loading}
                          isSearchable
                          cacheOptions
                        />
                      )}
                    />
                  </Column>
                )}

              {data.getUser?.role?.name !== 'ADMIN' && (
                <Column>
                  <Title tag={'h4'}>
                    {(account?.value && account?.value === 'ENTITY') ||
                    (!account?.value && data.getUser?.account === 'ENTITY')
                      ? 'О компании'
                      : 'О себе'}
                  </Title>
                  <TextArea
                    type={'text'}
                    name={'about'}
                    ref={register()}
                    defaultValue={getValues('about') || data.getUser?.about || ''}
                    placeholder={'Расскажите о себе пару слов'}
                    disabled={loading}
                    appearance={'ghost'}
                  />
                </Column>
              )}
            </Tab>

            <Tab active={tab.value === 'SECURITY'}>
              {canEditRole && errors && (errors.email || errors.phone) && (
                <Alert style={{ width: '100%' }} appearance={'error'}>
                  {errors.email && <p>Неверно указан или не указана эл. почта</p>}
                  {errors.phone && <p>Неверно указан или не указана телефон</p>}
                </Alert>
              )}
              <AdaptiveRow>
                <Column style={{ flexGrow: 1 }}>
                  <Title tag={'h4'}>Эл. почта</Title>
                  <Input
                    type={'email'}
                    name={'email'}
                    ref={register({ required: !user })}
                    defaultValue={getValues('email') || data.getUser?.email}
                    placeholder={'Эл. почта'}
                    appearance={'ghost'}
                    disabled={loading}
                  />
                </Column>
                <Column style={{ flexGrow: 1 }}>
                  <Title tag={'h4'}>Телефон</Title>
                  <Input
                    type={'tel'}
                    name={'phone'}
                    ref={register({ required: !user })}
                    defaultValue={getValues('phone') || data.getUser?.phone}
                    placeholder={'Телефон'}
                    appearance={'ghost'}
                    disabled={loading}
                  />
                </Column>
              </AdaptiveRow>

              <Title tag={'h4'}>Пароль</Title>
              {canEditRole && errors && errors.password && (
                <Alert style={{ width: '100%' }} appearance={'error'}>
                  Неверно указан или не указан пароль
                </Alert>
              )}
              <AdaptiveRow>
                <Input
                  name={'password'}
                  ref={register({ required: !user })}
                  type={isShowPassword ? 'text' : 'password'}
                  defaultValue={getValues('password') || data.getUser?.password}
                  appearance={'ghost'}
                  placeholder={'Пароль'}
                  readOnly={!canEditRole}
                />
                {canEditRole && (
                  <Tooltip text={'Генерация пароля'}>
                    <Button
                      type={'button'}
                      kind={'icon'}
                      disabled={loading}
                      onClick={() => setValue('password', generator.generate())}>
                      <Icon icon={'password'} stroke={'white'} />
                    </Button>
                  </Tooltip>
                )}
                {canEditRole && (
                  <Tooltip text={'Отображение пароля'}>
                    <Button
                      type={'button'}
                      kind={'icon'}
                      disabled={loading}
                      onClick={onTogglePassword}
                      revert={!isShowPassword}>
                      <Icon
                        icon={isShowPassword ? 'hide' : 'show'}
                        stroke={isShowPassword ? 'white' : 'var(--default-color-accent)'}
                      />
                    </Button>
                  </Tooltip>
                )}
                {!canEditRole && (
                  <Tooltip text={'Смена пароля'}>
                    <Button
                      type={'button'}
                      kind={'icon'}
                      disabled={loading}
                      onClick={onChangePassword}>
                      <Icon icon={'edit'} stroke={'white'} />
                    </Button>
                  </Tooltip>
                )}
              </AdaptiveRow>

              <Text>
                Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные
                символы
              </Text>
            </Tab>

            {canEditRole && <Divider clear />}

            {canEditRole && errors && errors.role && (
              <Alert style={{ width: '100%' }} appearance={'error'}>
                Неверно указана или не указана роль
              </Alert>
            )}
            {canEditRole && (
              <Controller
                name={'role'}
                control={control}
                defaultValue={
                  getValues('role') ||
                  (data.getUser?.role && {
                    value: data.getUser?.role.id,
                    label: getLabelRole(data.getUser?.role?.name)
                  }) ||
                  null
                }
                render={({ value, onChange }) => (
                  <Select
                    appearance={'ghost'}
                    defaultValue={value}
                    onChange={onChange}
                    placeholder={'Выберите роль'}
                    options={(roles || []).map((item) => ({
                      value: item.id,
                      label: getLabelRole(item.name)
                    }))}
                    menuPlacement={'top'}
                    isLoading={loading}
                    isClearable
                  />
                )}
              />
            )}

            <Divider clear />

            <Row>
              <Button type={'submit'} style={{ flexGrow: 1 }} disabled={loading}>
                {user ? 'Сохранить' : 'Создать'}
              </Button>
            </Row>
          </React.Fragment>
        ) : error ? (
          <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
            Упс! Не удалось загрузить информацию о проекте
          </Alert>
        ) : (
          <Loader>
            <Spinner />
          </Loader>
        )
      }
    </Form>
  )
}

User.defaultProps = {
  canEditAccount: true
}

export default User
