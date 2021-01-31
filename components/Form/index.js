import React from 'react'
import styled, { css } from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'

export const Wrap = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: var(--default-gap);
  padding: var(--default-gap);

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      border: 1px solid var(--surface-border);
      background: var(--surface-background);
      box-shadow: 1px solid var(--surface-shadow);
      border-radius: var(--surface-border-radius);
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      border: none;
      background: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    `}
`

export const Form = ({ children, onSubmit, mutation, ...props }) => {
  if (mutation) {
    const [action, { data, loading, error }] = useMutation(mutation)
    const methods = useForm()
    
    const Children = children
  
    return (
      <Wrap {...props} onSubmit={methods.handleSubmit((form) => onSubmit(form, action))}>
        <Children {...methods} data={data} loading={loading} error={error} />
      </Wrap>
    )
  }

  return null
}

Form.defaultProps = {
  appearance: 'default'
}

export default Form
