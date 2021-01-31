import React from 'react'
import styled from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Text from '../../atomic-ui/components/Text'
import Button from '../../atomic-ui/components/Button'

export const Wrap = styled(Column)`
  padding: 15px;
`

export const FlexButton = styled(Button)`
  flex-grow: 1;
`

export const AddFile = ({ text, className, onCancel, onSubmit }) => (
  <Wrap className={className}>
    <Text style={{ textAlign: 'center' }}>{text}</Text>

    <Row>
      <FlexButton onClick={onCancel}>Отмена</FlexButton>
      <FlexButton onClick={onSubmit} appearance={'red'}>
        Удалить
      </FlexButton>
    </Row>
  </Wrap>
)

export default AddFile
