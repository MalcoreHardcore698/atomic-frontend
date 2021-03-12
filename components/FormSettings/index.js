import React from 'react'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Button from '../../atomic-ui/components/Button'
import Tabs, { Tab } from '../../atomic-ui/components/Tabs'
import Dropzone from '../../atomic-ui/components/Dropzone'
import Divider from '../../atomic-ui/components/Divider'
import Input from '../../atomic-ui/components/Input'

import Form from '../Form'
import Select from '../../atomic-ui/components/Select'

const logotypeSize = {
  width: 128,
  height: 30
}

const backgroundSize = {
  width: 1440,
  height: 990
}

export const Logotype = styled(Dropzone)`
  width: 320px;
  height: 128px;
  min-height: 128px;
`

export const Background = styled(Dropzone)`
  width: 100%;
  height: 100%;
  max-width: ${backgroundSize.width}px;
  max-height: ${backgroundSize.height}px;
`

export const Settings = ({ mutation, appearance, className, onSubmit }) => {
  return (
    <Form className={className} appearance={appearance} mutation={mutation} onSubmit={onSubmit}>
      {({ register, loading, getValues }) => (
        <React.Fragment>
          <Tabs>
            <Tab label={'Основное'}>
              <Column>
                <Title tag={'h4'}>Основное</Title>
                <Input
                  type={'text'}
                  name={'title'}
                  ref={register()}
                  defaultValue={getValues('title') || '/'}
                  placeholder={'Домашняя страница'}
                  appearance={'ghost'}
                  disabled={loading}
                />

                <Title tag={'h4'}>Логотип</Title>
                <Logotype
                  name={'logotype'}
                  accept={'image/*'}
                  defaultValue={getValues('preview') || null}
                  placeholder={`Перетащите сюда изображение размером ${logotypeSize.width}x${logotypeSize.height}px`}
                  tooltip={`Разрешение: ${logotypeSize.width}x${logotypeSize.height}px. Допустимые форматы: jpeg, jpg, png. Макс. размер: 1 MB`}
                />
              </Column>
            </Tab>
            <Tab label={'Scaffold'}>
              <Column>
                <Title tag={'h4'}>Основное</Title>
                <Input
                  type={'text'}
                  name={'scaffold-title'}
                  ref={register()}
                  defaultValue={getValues('title') || 'Создавай школу будущего с нами'}
                  placeholder={'Заголовок'}
                  appearance={'ghost'}
                  disabled={loading}
                />

                <Title tag={'h4'}>Проекты</Title>
                <Select
                  name={'scaffold-primary-project'}
                  appearance={'ghost'}
                  placeholder={'Выберите первый проект'}
                  options={[]}
                  isClearable
                />
                <Select
                  name={'scaffold-residue-first-project'}
                  appearance={'ghost'}
                  placeholder={'Выберите второй проект'}
                  options={[]}
                  isClearable
                />
                <Select
                  name={'scaffold-residue-second-project'}
                  appearance={'ghost'}
                  placeholder={'Выберите третий проект'}
                  options={[]}
                  isClearable
                />

                <Title tag={'h4'}>Фон</Title>
                <Background
                  name={'background'}
                  accept={'image/*'}
                  defaultValue={getValues('preview') || null}
                  placeholder={`Перетащите сюда изображение размером ${backgroundSize.width}x${backgroundSize.height}px`}
                  tooltip={`Разрешение: ${backgroundSize.width}x${backgroundSize.height}px. Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB`}
                />
              </Column>
            </Tab>
            <Tab label={'Мета'}>
              <Column>
                <Title tag={'h4'}>Мета теги</Title>

                <Input
                  type={'text'}
                  name={'meta-title'}
                  ref={register()}
                  defaultValue={getValues('title') || 'Atomic'}
                  placeholder={'Мета-название'}
                  appearance={'ghost'}
                  disabled={loading}
                />

                <Input
                  type={'text'}
                  name={'meta-description'}
                  ref={register()}
                  defaultValue={getValues('title')}
                  placeholder={'Мета-описание'}
                  appearance={'ghost'}
                  disabled={loading}
                />
              </Column>
            </Tab>
          </Tabs>

          <Divider clear />

          <Row>
            <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
              Сохранить
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export default Settings
