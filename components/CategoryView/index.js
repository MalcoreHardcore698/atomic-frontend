import React from 'react'
import styled, { css } from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'

import { getLabelCategory } from '../../utils/functions'

export const Wrap = styled(Column)`
  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      padding: var(--default-gap);
      background: var(--surface-background);
      border: var(--surface-border);
      border-radius: var(--surface-border-radius);
      box-shadow: var(--surface-shadow);
    `}

  ${({ appearance }) =>
    appearance === 'ghost' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}
`

export const Poster = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 512px;
  border-radius: var(--surface-border-radius);
`

export const Content = styled(Column)`
  grid-gap: 0;
`

export const View = ({ category, appearance, className, style }) => {
  return (
    <Wrap className={className} style={style} appearance={appearance}>
      <Content>
        <Meta date={category.createdAt} category={getLabelCategory(category.type)} />
        <Title tag={'h4'}>{category.name}</Title>
        <Text>{category.description}</Text>
      </Content>
    </Wrap>
  )
}

View.defaultProps = {
  appearance: 'default'
}

export default View
