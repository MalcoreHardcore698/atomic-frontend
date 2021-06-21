import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
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

export const LoginButton = styled(Button)`
  flex-grow: 1;
  text-align: left;
  color: var(--default-color-accent);
  background: transparent !important;
  border: none !important;
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

export const Register = ({
  title = true,
  accountTypes,
  mutation,
  appearance,
  className,
  onLogin,
  onSubmit
}) => (
  <Form
    className={className}
    appearance={appearance}
    mutation={mutation}
    onSubmit={(form, action) => onSubmit(form, action)}>
    {({ watch, register, loading, control, errors, setValue }) => {
      const [isShowPassword, setShowPassword] = useState(false)

      const onTogglePassword = () => setShowPassword(!isShowPassword)

      const onGeneratePassword = () => {
        const password = generator.generate({
          numbers: true,
          symbols: true,
          strict: true
        })
        setValue('password', password)
        setValue('confirmPassword', password)
      }

      const { account, name, email, phone, password, confirmPassword } = watch()

      return (
        <React.Fragment>
          {title && (
            <Container>
              <Title style={{ textAlign: 'center' }} tag={'h4'}>
                Создайте аккаунт
              </Title>
            </Container>
          )}

          {(errors.name ||
            errors.email ||
            errors.phone ||
            errors.password ||
            errors.confirmPassword) && (
            <Alert style={{ width: '100%' }} appearance={'error'}>
              {errors.name && <p>Неверно указано или не указано ФИО</p>}
              {errors.email && <p>Неверно указан или не указана эл. почта</p>}
              {errors.phone && <p>Неверно указан или не указана телефон</p>}
              {errors.password && <p>Неверно указан или не указан пароль</p>}
              {!errors.password && errors.password !== errors.confirmPassword && (
                <p>Пароли не совпадают</p>
              )}
            </Alert>
          )}

          <Controller
            name={'account'}
            control={control}
            defaultValue={ACCOUNT_TYPES[0]}
            render={({ value, onChange }) => (
              <Switch
                defaultValue={value}
                options={(accountTypes?.length > 1 && accountTypes) || ACCOUNT_TYPES}
                disabled={loading}
                onChange={onChange}
                stretch
              />
            )}
          />

          <Column>
            <Input
              type={'text'}
              name={'name'}
              ref={register({ required: true })}
              placeholder={account?.value === 'ENTITY' ? 'Название компании' : 'ФИО'}
              appearance={'ghost'}
              defaultValue={name}
              disabled={loading}
            />
            <Input
              type={'email'}
              name={'email'}
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
              placeholder={'Эл. почта'}
              defaultValue={email}
              appearance={'ghost'}
              disabled={loading}
            />
            <Input
              type={'tel'}
              name={'phone'}
              ref={register({ required: true, maxLength: 11, minLength: 8 })}
              appearance={'ghost'}
              placeholder={'Телефон'}
              defaultValue={phone}
              disabled={loading}
            />
          </Column>

          <AdaptiveRow>
            <Column style={{ flexGrow: 1 }}>
              <Input
                name={'password'}
                type={isShowPassword ? 'text' : 'password'}
                ref={register({
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{8,64}$/
                })}
                appearance={'ghost'}
                placeholder={'Пароль'}
                disabled={loading}
                defaultValue={password}
              />
              <Input
                name={'confirmPassword'}
                type={isShowPassword ? 'text' : 'password'}
                ref={register({
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{8,64}$/
                })}
                appearance={'ghost'}
                placeholder={'Подтвердите пароль'}
                disabled={loading}
                defaultValue={confirmPassword}
              />
            </Column>
            <Column>
              <Tooltip text={'Генерация пароля'}>
                <Button
                  type={'button'}
                  kind={'icon'}
                  disabled={loading}
                  onClick={() => onGeneratePassword()}>
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
            Пароль должен содержать не менее восьми знаков, включать как минимум одну строчную и
            прописную букву, цифры и специальные символы
          </Text>

          <Row>
            <LoginButton appearance={'clear'} type={'button'} disabled={loading} onClick={onLogin}>
              Уже есть аккаунт?
            </LoginButton>
            <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
              Далее
            </Button>
          </Row>
        </React.Fragment>
      )
    }}
  </Form>
)

export default Register
