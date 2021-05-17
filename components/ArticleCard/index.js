import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Meta from '../../atomic-ui/components/Meta'
import More from '../../atomic-ui/components/More'
import Image from '../../atomic-ui/components/Image'
import { b64EncodeUnicode } from '../../atomic-ui/utils/functions'

import { Surface } from '../Styled'
import CardActions from '../CardActions'
import { onArticleDelete, onArticleEdit } from '../../store/helpers/article'
import { useHelper } from '../../hooks/useHelper'
import queries from '../../graphql/queries'
import config from '../../config'

const HOST_URL = config.get('host-url')

export const Wrap = styled(Surface)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: inherit;

  & > span {
    display: flex;
  }

  ${({ layout }) =>
    layout === 'column' &&
    css`
      display: flex;
      flex-wrap: wrap;
      grid-gap: var(--default-gap);

      & > span {
        height: 128px;
      }
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
  border: 1px solid var(--ghost-color-background);

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
  height: 100%;
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

export const MoreButton = styled(More)`
  align-items: flex-end;
  flex-grow: 100;
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

  p {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-regular);
    color: var(--default-color-text);

    strong,
    b,
    i {
      font-style: normal;
      font-weight: inherit;
    }
  }
`

export const Card = ({
  layout,
  article,
  preview,
  checked,
  appearance,
  onLink,
  onChecked,
  onEdit,
  onDelete,
  withSocials
}) => {
  const router = useRouter()
  const recall = useHelper()
  const user = useSelector((state) => state.user)

  const canEditStatus = useMemo(() => user && user?.role?.name === 'ADMIN', [user])

  const handleClick = async () => {
    await router.push(
      {
        pathname: router.pathname,
        query: {
          article: b64EncodeUnicode(article.id)
        }
      },
      undefined,
      { shallow: true }
    )
    if (onLink) onLink()
  }

  const handleEdit = () => {
    recall(onArticleEdit, {
      id: article.id,
      canEditStatus,
      mutation: queries.UPDATE_ARTICLE
    })()
    if (onEdit) onEdit()
  }

  const handleDelete = () => {
    recall(onArticleDelete, {
      id: article.id,
      article,
      mutation: queries.DELETE_ARTICLE
    })()
    if (onDelete) onDelete()
  }

  return (
    <Wrap checked={checked} appearance={appearance} layout={layout}>
      {article.preview && (
        <Poster
          src={article.preview?.path}
          alt={article.title}
          effect={'opacity'}
          layout={layout}
        />
      )}
      <Column
        style={{
          gridGap: 5,
          width: '100%',
          gridColumn: !article.preview && '1 / 3'
        }}>
        <Header>
          <Meta
            shareTitle={withSocials && article?.title}
            shareUrl={typeof window !== 'undefined' && withSocials ? location.href : HOST_URL}
            category={article?.category?.name}
            date={article?.createdAt}
            short
          />

          <CardActions
            typeText={'статью'}
            checked={checked}
            onEdit={onEdit && handleEdit}
            onDelete={onDelete && handleDelete}
            onChecked={onChecked}
          />
        </Header>

        <Name tag={'h4'} onClick={handleClick}>
          {article.title}
        </Name>

        {article.body && <ShortText content={article.body} />}
        {!onChecked && !preview && <MoreButton onClick={onLink} withButton />}
      </Column>
    </Wrap>
  )
}

Card.defaultProps = {
  appearance: 'default'
}

export default Card
