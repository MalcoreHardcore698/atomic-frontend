import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Controller } from 'react-hook-form'
import { useQuery } from '@apollo/react-hooks'
import { v4 } from 'uuid'

import Row from '../../atomic-ui/components/Row'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Button from '../../atomic-ui/components/Button'
import Dropzone from '../../atomic-ui/components/Dropzone'
import CheckBox from '../../atomic-ui/components/Checkbox'
import Divider from '../../atomic-ui/components/Divider'
import Select from '../../atomic-ui/components/Select'
import Column from '../../atomic-ui/components/Column'
import Input from '../../atomic-ui/components/Input'

import Form from '../Form'
import queries from '../../graphql/queries'

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

  img {
    object-fit: contain;
  }
`

export const Background = styled(Dropzone)`
  width: 100%;
  height: 100%;
  max-width: ${backgroundSize.width}px;
  max-height: ${backgroundSize.height}px;
`

export const Wrap = styled(Column)``

export const TabLabelList = styled(Row)`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  background: linear-gradient(to top, rgba(0, 0, 0, 15%) 1px, transparent 1px) 0 100% no-repeat;
`

export const TabContentList = styled(Row)`
  display: flex;
  flex-flow: row nowrap;
`

export const TabLabel = styled(Text)`
  position: relative;
  display: inline-flex;
  margin-right: 40px;
  padding-bottom: 12px;
  font-family: var(--default-font-family);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1;
  color: rgba(0, 0, 0, 75%);
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: color 0.2s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: black;
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--default-color-accent);
      border-color: var(--default-color-accent);

      &:hover {
        color: var(--default-color-accent);
      }
    `}
`

export const TabContent = styled(Column)`
  display: none;
  flex-grow: 1;

  ${({ active }) =>
    active &&
    css`
      display: flex;
    `}
`

const FormContent = ({ watch, register, loading, control, getValues, settings }) => {
  const [active, setActive] = useState(0)
  const tabsLabel = ['Основное', 'Scaffold', 'Мета']

  const isRandom = watch('[scaffold][isRandom]')

  const {
    data: dataProjects,
    loading: loadingProjects
  } = useQuery(queries.GET_META_SETTINGS_PROJECTS, { variables: { status: ['PUBLISHED'] } })

  return (
    <React.Fragment>
      <TabLabelList>
        {tabsLabel.map((tab, index) => (
          <TabLabel key={v4()} active={active === index} onClick={() => setActive(index)}>
            {tab}
          </TabLabel>
        ))}
      </TabLabelList>

      <TabContentList>
        <TabContent active={active === 0}>
          <Title tag={'h4'}>Логотип</Title>
          <Controller
            name={'[general][logotype]'}
            control={control}
            defaultValue={getValues('[general][logotype]') || settings?.general?.logotype || null}
            render={({ value, onChange }) => (
              <Logotype
                accept={'image/*'}
                defaultValue={value}
                onChange={onChange}
                placeholder={`Перетащите сюда изображение размером ${logotypeSize.width}x${logotypeSize.height}px`}
                tooltip={`Разрешение: ${logotypeSize.width}x${logotypeSize.height}px. Допустимые форматы: jpeg, jpg, png. Макс. размер: 1 MB`}
              />
            )}
          />
        </TabContent>
        <TabContent active={active === 1}>
          <Title tag={'h4'}>Заголовок</Title>
          <Input
            type={'text'}
            name={'[scaffold][title]'}
            ref={register()}
            defaultValue={
              getValues('title') || settings?.scaffold?.title || 'Создавай школу будущего с нами'
            }
            placeholder={'Заголовок'}
            appearance={'ghost'}
            disabled={loading}
          />

          <Title tag={'h4'}>Проекты</Title>
          <Controller
            name={'[scaffold][isRandom]'}
            control={control}
            defaultValue={getValues('[scaffold][isRandom]') || settings?.scaffold?.isRandom}
            render={({ value, onChange }) => (
              <CheckBox
                defaultChecked={value}
                label={'Выводить случайные проекты'}
                onChange={(e) => onChange(e.target.checked)}
              />
            )}
          />
          <Controller
            name={'[scaffold][primary]'}
            control={control}
            defaultValue={
              getValues('[scaffold][primary]') ||
              (settings?.scaffold?.primary
                ? {
                    value: settings?.scaffold?.primary.id,
                    label: settings?.scaffold?.primary.title
                  }
                : null)
            }
            render={({ value, onChange }) => (
              <Select
                appearance={'ghost'}
                defaultValue={value}
                placeholder={'Выберите первый проект'}
                options={(dataProjects?.getProjects || []).map((project) => ({
                  value: project.id,
                  label: project.title
                }))}
                onChange={onChange}
                isLoading={loadingProjects}
                isDisabled={isRandom}
                isSearchable
                cacheOptions
              />
            )}
          />
          <Controller
            name={'[scaffold][residues][0]'}
            control={control}
            defaultValue={
              getValues('[scaffold][residues][0]') ||
              (settings?.scaffold?.residues[0]
                ? {
                    value: settings?.scaffold?.residues[0].id,
                    label: settings?.scaffold?.residues[0].title
                  }
                : null)
            }
            render={({ value, onChange }) => (
              <Select
                appearance={'ghost'}
                defaultValue={value}
                placeholder={'Выберите второй проект'}
                options={(dataProjects?.getProjects || []).map((project) => ({
                  value: project.id,
                  label: project.title
                }))}
                onChange={onChange}
                isLoading={loadingProjects}
                isDisabled={isRandom}
                isSearchable
                cacheOptions
              />
            )}
          />
          <Controller
            name={'[scaffold][residues][1]'}
            control={control}
            defaultValue={
              getValues('[scaffold][residues][1]') ||
              (settings?.scaffold?.residues[1]
                ? {
                    value: settings?.scaffold?.residues[1].id,
                    label: settings?.scaffold?.residues[1].title
                  }
                : null)
            }
            render={({ value, onChange }) => (
              <Select
                appearance={'ghost'}
                defaultValue={value}
                placeholder={'Выберите третий проект'}
                options={(dataProjects?.getProjects || []).map((project) => ({
                  value: project.id,
                  label: project.title
                }))}
                onChange={onChange}
                isLoading={loadingProjects}
                isDisabled={isRandom}
                isSearchable
                cacheOptions
              />
            )}
          />

          <Title tag={'h4'}>Фон</Title>
          <Controller
            name={'[scaffold][background]'}
            control={control}
            defaultValue={
              getValues('[scaffold][background]') || settings?.scaffold?.background || null
            }
            render={({ value, onChange }) => (
              <Background
                accept={'image/*'}
                defaultValue={value}
                onChange={onChange}
                placeholder={`Перетащите сюда изображение размером ${backgroundSize.width}x${backgroundSize.height}px`}
                tooltip={`Разрешение: ${backgroundSize.width}x${backgroundSize.height}px. Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB`}
              />
            )}
          />
        </TabContent>
        <TabContent active={active === 2}>
          <Title tag={'h4'}>Мета теги</Title>

          <Input
            type={'text'}
            name={'[meta][title]'}
            ref={register()}
            defaultValue={getValues('[meta][title]') || settings?.meta?.title || 'Atomic'}
            placeholder={'Мета-название'}
            appearance={'ghost'}
            disabled={loading}
          />

          <Input
            type={'text'}
            name={'[meta][description]'}
            ref={register()}
            defaultValue={getValues('[meta][description]') || settings?.meta?.description}
            placeholder={'Мета-описание'}
            appearance={'ghost'}
            disabled={loading}
          />
        </TabContent>
      </TabContentList>

      <Divider clear />

      <Row>
        <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
          Сохранить
        </Button>
      </Row>
    </React.Fragment>
  )
}

export const Settings = ({ settings, mutation, appearance, className, onSubmit }) => (
  <Form className={className} appearance={appearance} mutation={mutation} onSubmit={onSubmit}>
    {(methods) => <FormContent {...methods} settings={settings} />}
  </Form>
)

export default Settings
