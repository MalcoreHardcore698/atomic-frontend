import React, { useCallback, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Switch from '../../atomic-ui/components/Switch'
import Divider from '../../atomic-ui/components/Divider'
import Transition from '../../atomic-ui/components/Transition'
import DatePicker from '../../atomic-ui/components/DatePicker'
import { useSearch } from '../../hooks/useSearch'

import AsyncSelect from '../AsyncSelect'

export const Wrap = styled(Column)`
  width: 100%;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms, blur 100ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 100ms, blur 100ms;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: var(--default-gap);
  width: 100%;
`

export const List = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  grid-gap: var(--default-gap);

  & > div {
    min-width: 256px;
    flex-grow: 1;
  }
`

export const parseToParams = (params) => {
  const getValue = (value) => {
    if (value instanceof Date) {
      return value.getTime().toString()
    }
    if (Array.isArray(value)) {
      return value.map((selectValue) => selectValue.value)
    }
    return value?.value || value
  }

  return (
   Object.entries(params)
    .filter(([_, value]) => value)
    .reduce(
     (acc, [key, value]) => ({
       ...acc, [key]: getValue(value)
     }),
     {}
    )
  )
}

export const Filter = ({ isOpen = true, duration, sort, filter, withoutDivider }) => {
  const { search, params } = useSelector((state) => ({
    search: state.root.search,
    params: state.root.params
  }))
  const { control, getValues } = useForm()
  const [onSearch] = useSearch()

  const decorate = useCallback(
   (callback) =>
      (value) => {
        if (callback) callback(value)
        onSearch(search, parseToParams(getValues()))
      },
    [search, getValues, onSearch]
  )

  const filters = useMemo(() => (filter || []).map((item) => {
    switch (item.type) {
      case 'DATEPICKER':
        return (
          <Controller
            key={item.name}
            control={control}
            name={item.name}
            defaultValue={getValues(item.name) || (params && params[item?.name || '']) || null}
            render={({ value, onChange }) => (
              <DatePicker
                defaultValue={value}
                placeholder={item.label}
                onChange={decorate(onChange)}
                withNavigate
              />
            )}
          />
        )
      case 'SELECT':
        return (
          <Controller
            key={item.name}
            control={control}
            name={item.name}
            defaultValue={getValues(item.name) || null}
            render={({ value, onChange }) => (
              <AsyncSelect
               name={item.name}
               query={item.query}
               defaultValue={value}
               type={item.queryType}
               placeholder={item.label}
               variables={item.variables}
               selectValueField={item.selectValueField}
               selectLabelField={item.selectLabelField}
               selectRestrictions={item.selectRestrictions}
               selectLabelDecorator={item.selectLabelDecorator}
               onChange={decorate(onChange)}
              />
            )}
          />
        )
      case 'MULTISELECT':
        return (
         <Controller
          key={item.name}
          control={control}
          name={item.name}
          defaultValue={getValues(item.name) || null}
          render={({ value, onChange }) => (
           <AsyncSelect
            name={item.name}
            query={item.query}
            defaultValue={value}
            type={item.queryType}
            placeholder={item.label}
            variables={item.variables}
            selectValueField={item.selectValueField}
            selectLabelField={item.selectLabelField}
            selectRestrictions={item.selectRestrictions}
            selectLabelDecorator={item.selectLabelDecorator}
            onChange={decorate(onChange)}
            isMulti
           />
          )}
         />
        )
      default:
        return null
    }
  }), [params, control, filter, decorate, getValues])

  const options = useMemo(() => sort || [], [sort])

  return (
    <Transition in={isOpen} animation={'fade'} timeout={duration}>
      <Wrap>
        <Form>
          {!withoutDivider && <Divider clear />}
          {filters && filters.length > 0 && <List>{filters.map((filter) => filter)}</List>}
          {options && options.length > 0 && (
            <Row>
              <Controller
               name={'sort'}
               control={control}
               defaultValue={
                 getValues('sort') ||
                 (params?.sort && options.find((option) => option?.value === params.sort)) ||
                 options[0] ||
                 null
               }
               render={({ value, onChange }) => (
                <Switch
                  defaultValue={value}
                  onChange={decorate(onChange)}
                  options={options}
                  stretch
                />
               )}
              />
            </Row>
          )}
          <Divider clear />
        </Form>
      </Wrap>
    </Transition>
  )
}

Filter.defaultProps = {
  duration: 150
}

export default Filter
