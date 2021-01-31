import React, { useState } from 'react'
import styled from 'styled-components'
import generator from 'generate-password'

import Container from '../../atomic-ui/components/Container'
import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Tooltip, { Wrap as WrapTooltip } from '../../atomic-ui/components/Tooltip'
import Switch from '../../atomic-ui/components/Switch'
import Icon from '../../atomic-ui/components/Icon'
import Alert from '../../atomic-ui/components/Alert'

import Form from '../Form'

const ACCOUNT_TYPES = [
  { label: 'Физ. лицо', value: 'INDIVIDUAL', tooltip: 'Любое лицо' },
  { label: 'Оф. лицо', value: 'OFICIAL', tooltip: 'Государственный деятель' },
  { label: 'Юр. лицо', value: 'ENTITY', tooltip: 'Организация' }
]

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

export const Register = ({
  title = true,
  accountTypes,
  mutation,
  appearance,
  className,
  onLogin,
  onSubmit
}) => {
  const [typeAccount, setTypeAccount] = useState(ACCOUNT_TYPES[0])
  const [isShowPassword, setShowPassword] = useState(false)
  const [generatedPassword, setGeneratedPassword] = useState('')
  const [disabled, setDisabled] = useState(true)

  const onTogglePassword = () => setShowPassword(!isShowPassword)

  const onGeneratePassword = () => {
    const password = generator.generate()
    setGeneratedPassword(password)
  }

  return (
    <Form
      className={className}
      appearance={appearance}
      mutation={mutation}
      onSubmit={(form, action) => onSubmit({ ...form, account: typeAccount }, action)}>
      {({ register, loading, errors, getValues }) => (
        <React.Fragment>
          {title && (
            <Container>
              <Title style={{ textAlign: 'center' }} tag={'h4'}>
                Создайте аккаунт
              </Title>
            </Container>
          )}

          {(errors.name ||
            errors.tin ||
            errors.email ||
            errors.phone ||
            errors.password ||
            errors.confirmPassword ||
            errors.confirmPassword) && (
            <Alert style={{ width: '100%' }} appearance={'error'}>
              {errors.name && <p>Неверно указано или не указано ФИО</p>}
              {errors.tin && <p>Неверно указан или не указан ИНН</p>}
              {errors.email && <p>Неверно указан или не указана эл. почта</p>}
              {errors.phone && <p>Неверно указан или не указана телефон</p>}
              {errors.password && <p>Неверно указан или не указан пароль</p>}
              {!errors.confirmPassword && errors.confirmPassword && <p>Пароли не совпадают</p>}
            </Alert>
          )}

          <Switch
            onChange={(item) => setTypeAccount(item)}
            defaultValue={getValues('account') || typeAccount}
            options={(accountTypes?.length > 1 && accountTypes) || ACCOUNT_TYPES}
            disabled={loading}
            stretch
          />

          <Column>
            <Input
              type={'text'}
              name={'name'}
              ref={register({ required: true })}
              onChange={() => setDisabled(false)}
              defaultValue={getValues('name')}
              placeholder={typeAccount.value === 'ENTITY' ? 'Название компании' : 'ФИО'}
              appearance={'ghost'}
              disabled={loading}
            />
            {typeAccount.value !== 'INDIVIDUAL' && (
              <Input
                type={'text'}
                name={'tin'}
                ref={register({ required: true })}
                onChange={() => setDisabled(false)}
                defaultValue={getValues('tin')}
                appearance={'ghost'}
                placeholder={'ИНН'}
                disabled={loading}
              />
            )}
            <Input
              type={'email'}
              name={'email'}
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
              onChange={() => setDisabled(false)}
              defaultValue={getValues('email')}
              placeholder={'Эл. почта'}
              appearance={'ghost'}
              disabled={loading}
            />
            <Input
              type={'tel'}
              name={'phone'}
              ref={register({ required: true, maxLength: 11, minLength: 8 })}
              onChange={() => setDisabled(false)}
              defaultValue={getValues('phone')}
              appearance={'ghost'}
              placeholder={'Телефон'}
              disabled={loading}
            />
          </Column>

          <AdaptiveRow>
            <Column style={{ flexGrow: 1 }}>
              <Input
                type={isShowPassword ? 'text' : 'password'}
                name={'password'}
                ref={register({ required: true, minLength: 8 })}
                defaultValue={generatedPassword || getValues('password')}
                appearance={'ghost'}
                placeholder={'Пароль'}
                onChange={() => {
                  setGeneratedPassword('')
                  setDisabled(false)
                }}
                disabled={loading}
              />
              <Input
                type={isShowPassword ? 'text' : 'password'}
                name={'confirmPassword'}
                ref={register({ required: true, minLength: 8 })}
                defaultValue={generatedPassword || getValues('confirmPassword')}
                appearance={'ghost'}
                placeholder={'Подтвердить'}
                onChange={() => {
                  setGeneratedPassword('')
                  setDisabled(false)
                }}
                disabled={loading}
              />
            </Column>
            <Column>
              <Tooltip text={'Генерация пароля'}>
                <Button
                  type={'button'}
                  kind={'icon'}
                  disabled={loading}
                  onClick={() => {
                    onGeneratePassword()
                    setDisabled(false)
                  }}>
                  <Icon icon={'password'} stroke={'white'} />
                </Button>
              </Tooltip>
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
            </Column>
          </AdaptiveRow>

          <Text>
            Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные
            символы
          </Text>

          <Row>
            <Button style={{ flexGrow: 1 }} type={'button'} disabled={loading} onClick={onLogin}>
              Войти
            </Button>
            <Button style={{ flexGrow: 1 }} type={'submit'} disabled={disabled || loading}>
              Далее
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export default Register
