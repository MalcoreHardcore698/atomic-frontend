import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Checkbox from '../../atomic-ui/components/Checkbox'
import Tooltip from '../../atomic-ui/components/Tooltip'
import { getLabelCategory } from '../../atomic-ui/utils/functions'

export const Wrap = styled(Column)`
  height: 100%;

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

export const Actions = styled(Row)`
  grid-gap: 5px;
  height: 100%;
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
  appearance,
  className,
  style,
  onLink,
  onChecked,
  onDelete,
  onEdit
}) => (
  <Wrap className={className} style={style} appearance={appearance}>
    <Content>
      <Header>
        <Meta date={category.createdAt} category={getLabelCategory(category.type)} />

        {onChecked && onEdit && onDelete && (
          <Actions>
            <Tooltip text={'Удалить категорию'}>
              <Button kind={'icon'} size={'xs'} appearance={'red'} onClick={onDelete}>
                <Icon icon={'delete'} size={'xs'} stroke={'white'} />
              </Button>
            </Tooltip>
            <Tooltip text={'Редактировать категорию'}>
              <Button kind={'icon'} size={'xs'} onClick={onEdit}>
                <Icon icon={'edit'} size={'xs'} stroke={'white'} />
              </Button>
            </Tooltip>
            <Tooltip text={'Отметить категорию'} self>
              <Checkbox />
            </Tooltip>
          </Actions>
        )}
      </Header>

      <Name tag={'h4'} onClick={onLink}>
        {category.name}
      </Name>

      <Text>{category.description}</Text>
    </Content>
  </Wrap>
)

Card.defaultProps = {
  appearance: 'default'
}

export default Card
