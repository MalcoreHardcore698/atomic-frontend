import React, { useEffect, useCallback, useMemo } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'

import Select from '../../atomic-ui/components/Select'

export const AsyncSelect = ({
  type,
  name,
  query,
  variables = {},
  defaultValue,
  placeholder,
  selectValueField,
  selectLabelField,
  selectRestrictions,
  selectLabelDecorator,
  isMulti,
  onChange
}) => {
  const params = useSelector((state) => state.root.params)
  const { data, loading } = useQuery(query, { variables })

  const getLabel = useCallback(
   (item) => {
      if (selectLabelField) {
        const field = item[selectLabelField]

        if (selectLabelDecorator) {
          return selectLabelDecorator(field)
        }
        else {
          return field
        }
      }
     if (!selectLabelField && selectLabelDecorator) {
       return selectLabelDecorator(item)
     }
     return item
   },
   [selectLabelField, selectLabelDecorator]
  )

  const options = useMemo(
   () => {
     const opts = (type && data && (data[type])) || []

     const isInclude = (item) => (
      Array.isArray(selectRestrictions) ? selectRestrictions : []
     ).includes(item)

     return opts
      .filter((item) => Boolean(selectRestrictions ? !isInclude(item) : item))
      .map((item) => ({
        value: selectValueField ? item[selectValueField] : item,
        label: getLabel(item)
      }))
   },
   [type, data, selectValueField, selectRestrictions, getLabel]
  )

  return (
    <Select
      options={options}
      placeholder={placeholder}
      defaultValue={options.find((option) => option?.value === params[name]) || defaultValue}
      onChange={onChange}
      isLoading={loading}
      isMulti={isMulti}
      isSearchable
      isClearable
    />
  )
}

export default AsyncSelect
