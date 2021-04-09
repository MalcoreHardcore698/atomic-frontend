import React from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Meta from '../../atomic-ui/components/Meta'
import More from '../../atomic-ui/components/More'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Image from '../../atomic-ui/components/Image'
import Checkbox from '../../atomic-ui/components/Checkbox'
import Tooltip from '../../atomic-ui/components/Tooltip'
import { b64EncodeUnicode } from '../../atomic-ui/utils/functions'

import config from '../../config'

const HOST_URL = config.get('host-url')

export const Wrap = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: var(--default-gap);
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  box-shadow: var(--surface-shadow);
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
  appearance,
  onLink,
  onChecked,
  onEdit,
  onDelete,
  withSocials
}) => {
  const router = useRouter()

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

  return (
    <Wrap appearance={appearance} layout={layout}>
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

        <Name tag={'h4'} onClick={handleClick}>
          {article.title}
        </Name>

        {article.body && <ShortText content={article.body} />}
        {!preview && <MoreButton onClick={onLink} withButton />}
      </Column>
    </Wrap>
  )
}

Card.defaultProps = {
  appearance: 'default'
}

export default Card
