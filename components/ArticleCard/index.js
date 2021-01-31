import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'
import More from '../../atomic-ui/components/More'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Checkbox from '../../atomic-ui/components/Checkbox'
import Tooltip from '../../atomic-ui/components/Tooltip'

export const Wrap = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: var(--default-gap);
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  box-shadow: var(--surface-shadow);

  ${({ layout }) =>
    layout === 'column' &&
    css`
      display: flex;
      flex-wrap: wrap;
      grid-gap: var(--default-gap);
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

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    grid-gap: var(--default-gap);
  }
`

export const Poster = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: var(--surface-border-radius);

  ${({ layout }) =>
    layout === 'column' &&
    css`
      height: 128px;
    `}
`

export const Header = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

export const Actions = styled(Row)`
  grid-gap: 5px;
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

export const HTMLView = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export const ShortText = styled(HTMLView)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Card = ({
  layout,
  article,
  preview,
  appearance,
  onLink,
  onChecked,
  onEdit,
  onDelete
}) => {
  return (
    <Wrap appearance={appearance} layout={layout}>
      {article.preview && <Poster src={article.preview?.path} layout={layout} />}
      <Column
        style={{
          gridGap: 5,
          width: '100%',
          gridColumn: !article.preview && '1 / 3'
        }}>
        <Header>
          <Meta date={article?.createdAt} category={article?.category?.name} short />

          {(onChecked || onEdit || onDelete) && (
            <Actions>
              {onDelete && (
                <Tooltip text={'Удалить статью'}>
                  <Button kind={'icon'} size={'xs'} appearance={'red'} onClick={onDelete}>
                    <Icon icon={'delete'} size={'xs'} stroke={'white'} />
                  </Button>
                </Tooltip>
              )}
              {onEdit && (
                <Tooltip text={'Редактировать статью'}>
                  <Button kind={'icon'} size={'xs'} onClick={onEdit}>
                    <Icon icon={'edit'} size={'xs'} stroke={'white'} />
                  </Button>
                </Tooltip>
              )}
              {onChecked && (
                <Tooltip text={'Отметить статью'} self>
                  <Checkbox />
                </Tooltip>
              )}
            </Actions>
          )}
        </Header>

        <Name tag={'h4'} onClick={onLink}>
          {article.title}
        </Name>

        {article.body && <ShortText content={article.body} />}
        {!preview && <More onClick={onLink} withButton />}
      </Column>
    </Wrap>
  )
}

Card.defaultProps = {
  appearance: 'default'
}

export default Card
