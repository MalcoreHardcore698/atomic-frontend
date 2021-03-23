import React from 'react'
import styled, { css } from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Text from '../../atomic-ui/components/Text'
import Button from '../../atomic-ui/components/Button'

import Form from '../Form'

export const Container = styled(Column)`
  ${({ padding }) =>
    padding &&
    css`
      padding: 15px;
    `}
`

export const FlexButton = styled(Button)`
  flex-grow: 1;
`

export const Content = ({ type, text, loading, padding, onCancel, onSubmit }) => (
  <Container padding={padding}>
    <Text style={{ textAlign: 'center' }}>{text}</Text>

    <Row>
      <FlexButton onClick={onCancel} disabled={loading}>
        Отмена
      </FlexButton>
      <FlexButton type={type} appearance={'red'} disabled={loading} onClick={onSubmit}>
        Удалить
      </FlexButton>
    </Row>
  </Container>
)

export const SureDelete = ({
  type,
  text,
  appearance,
  mutation,
  padding,
  className,
  onCancel,
  onSubmit
}) => (
  <Form appearance={appearance} className={className} mutation={mutation} onSubmit={onSubmit}>
    {({ loading }) => (
      <Content
        type={type}
        text={text}
        loading={loading}
        padding={padding}
        onCancel={onCancel}
        onSubmit={onSubmit}
      />
    )}
  </Form>
)

SureDelete.defaultProps = {
  type: 'submit',
  padding: true
}

export default SureDelete
