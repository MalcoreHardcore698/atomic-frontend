import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'
import { getLabelCategory } from '../../atomic-ui/utils/functions'

import { CardContent, Surface } from '../Styled'
import { useEntityQuery } from '../../hooks/useEntityQuery'
import { onCategoryEdit, onCategoryDelete } from '../../store/helpers/category'
import { useHelper } from '../../hooks/useHelper'
import CardActions from '../CardActions'
import queries from '../../graphql/queries'

export const Wrap = styled(Surface)`
  height: 100%;
  min-height: 100px;
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
  const recall = useHelper()
  const { setQuery } = useEntityQuery()

  const handleEdit = () => {
    recall(onCategoryEdit, {
      id: category.id,
      category,
      mutation: queries.UPDATE_CATEGORY
    })()
    if (onEdit) onEdit()
  }

  const handleDelete = () => {
    recall(onCategoryDelete, {
      id: category.id,
      category,
      mutation: queries.DELETE_CATEGORY
    })()
    if (onDelete) onDelete()
  }

  return (
    <Wrap className={className} style={style} checked={checked} appearance={appearance}>
      <CardContent style={{ gridGap: 0 }} editable={onEdit || onDelete || onChecked}>
        <Header>
          <Meta date={category.createdAt} category={getLabelCategory(category.type)} />

          <CardActions
            typeText={'категорию'}
            checked={checked}
            onEdit={onEdit && handleEdit}
            onDelete={onDelete && handleDelete}
            onChecked={onChecked}
          />
        </Header>

        <Name tag={'h4'} onClick={() => setQuery(category.id, 'category', onLink)}>
          {category.name}
        </Name>

        <Text>{category.description}</Text>
      </CardContent>
    </Wrap>
  )
}

Card.defaultProps = {
  appearance: 'default'
}

export default Card
