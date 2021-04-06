import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'
import { getLabelCategory } from '../../atomic-ui/utils/functions'

import { useEntityQuery } from '../../hooks/useEntityQuery'
import CardActions from '../CardActions'

export const Wrap = styled(Column)`
  position: relative;
  height: 100%;
  min-height: 100px;

  ${({ checked }) =>
    checked &&
    css`
      opacity: 0.45;
    `}

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

export const Header = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

export const Content = styled(Column)`
  grid-gap: 0;
`

export const Name = styled(Title)`
  transition: opacity 150ms ease;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.45;
      }
    `}
`

export const Card = ({
  category,
  checked,
  appearance,
  className,
  style,
  onLink,
  onChecked,
  onDelete,
  onEdit
}) => {
  const { setQuery } = useEntityQuery()

  return (
    <Wrap className={className} style={style} checked={checked} appearance={appearance}>
      <Content>
        <Header>
          <Meta date={category.createdAt} category={getLabelCategory(category.type)} />

          <CardActions
            typeText={'категорию'}
            checked={checked}
            onEdit={onEdit}
            onDelete={onDelete}
            onChecked={onChecked}
          />
        </Header>

        <Name tag={'h4'} onClick={() => setQuery(category.id, 'category', onLink)}>
          {category.name}
        </Name>

        <Text>{category.description}</Text>
      </Content>
    </Wrap>
  )
}

Card.defaultProps = {
  appearance: 'default'
}

export default Card
