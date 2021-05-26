import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import Row, { Wrap as WrapRow } from '../../atomic-ui/components/Row'
import Difinition, { Wrap as WrapDifinition } from '../../atomic-ui/components/Difinition'
import Tooltip, { Wrap as WrapTooltip } from '../../atomic-ui/components/Tooltip'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Icon from '../../atomic-ui/components/Icon'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'
import Divider from '../../atomic-ui/components/Divider'
import Button from '../../atomic-ui/components/Button'

import { Surface, More } from '../Styled'
import CardActions from '../CardActions'
import { useEntityQuery } from '../../hooks/useEntityQuery'
import { onProjectDelete, onProjectEdit } from '../../store/helpers/project'
import { useHelper } from '../../hooks/useHelper'
import { useMutate } from '../../hooks/useMutate'
import queries from '../../graphql/queries'
import config from '../../config'

const HOST_URL = config.get('host-url')

export const Media = styled(Column)`
  grid-gap: 5px;

  & > span {
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: var(--surface-border-radius);
    border: 1px solid var(--ghost-color-background);

    ${({ layout }) =>
      layout !== 'column' &&
      css`
        max-height: 220px;
      `}
  }

  & > figure {
    max-height: 225px;
    min-height: 170px;
    border-radius: var(--surface-border-radius);
    border: 1px solid var(--ghost-color-background);
  }
`

export const Poster = styled(Image)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--surface-border-radius);
  overflow: hidden;
  object-fit: cover;
  transition: opacity 150ms ease;

  ${({ layout }) =>
    layout !== 'column' &&
    css`
      min-height: 128px;
    `}

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}

  @media only screen and (max-width: 480px) {
    min-height: 128px;
  }
`

export const Wrap = styled(Surface)`
  grid-gap: var(--default-gap);
  height: 100%;

  ${({ layout }) =>
    layout === 'column' &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}
`

export const Content = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  flex-grow: 1000;
  width: 100%;

  ${({ clear }) =>
    clear &&
    css`
      grid-template-columns: 1fr;
    `}

  ${({ layout }) =>
    layout === 'column' &&
    css`
      display: flex;
      flex-direction: column;
      grid-gap: var(--default-gap);
    `}

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: var(--default-gap);
    width: 100%;
  }
`

export const Screenshots = styled(Row)`
  justify-content: space-between;
  grid-gap: 5px;
`

export const Screenshot = styled.div`
  position: relative;
  z-index: var(--z-12);
  width: auto;
  height: var(--input-height-s);
  min-width: var(--input-height-s);
  min-height: var(--input-height-s);
  border-radius: var(--surface-border-radius);
  border: 1px solid var(--ghost-color-background);
  flex-grow: 1;
  transition: opacity 150ms ease;

  span,
  span > img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ScreenshotsCounter = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--z-10);

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  span {
    position: relative;
    z-index: var(--z-12);
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--z-10);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--default-color-accent);
    border-radius: var(--surface-border-radius);
    opacity: 0.65;
  }
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

export const About = styled.div`
  font-size: var(--font-size-m);
`

export const Company = styled(Difinition)`
  padding-right: 0;

  h4 {
    max-width: 250px;
    white-space: nowrap;
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-bold);
    text-overflow: ellipsis;
    line-height: 1;
    overflow: hidden;
  }
`

export const Footer = styled(Row)`
  justify-content: space-between;
  align-items: center;
  grid-gap: var(--default-gap);
  flex-grow: 1;

  @media only screen and (max-width: 480px) {
    flex-direction: column;

    ${WrapDifinition} {
      flex-grow: 1;
      width: 100%;
    }

    ${WrapRow} {
      flex-grow: 1;
      width: 100%;

      ${WrapTooltip} {
        flex-grow: 1;

        button {
          width: 100%;
        }
      }
    }
  }
`

export const Card = ({
  layout,
  project,
  checked,
  canRemove,
  appearance,
  className,
  style,
  preview,
  slicedFactor = 4,
  liked,
  owned,
  onAdd,
  onRemove,
  onLink,
  onLike,
  onAboutMore,
  onScreenshotClick,
  onCompanyLink,
  onChecked,
  onEdit,
  onDelete,
  withSocials
}) => {
  const recall = useHelper()
  const router = useRouter()
  const mutate = useMutate()
  const { setQuery } = useEntityQuery()
  const [isLiked, setLike] = useState(liked)
  const user = useSelector((state) => state.user)
  const screenshots = project?.screenshots?.slice(0, slicedFactor) || []
  const residue = (project?.screenshots?.length || slicedFactor) - slicedFactor

  const canEditStatus = useMemo(() => user && user?.role?.name === 'ADMIN', [user])

  const onClickLike = () => {
    if (onLike) onLike()
    setLike(!isLiked)
  }

  const handleEdit = () => {
    recall(onProjectEdit, {
      id: project.id,
      canEditStatus,
      mutation: queries.UPDATE_PROJECT,
      query: queries.GET_USERS,
      onCompanyInputChange: mutate(queries.GET_USERS, { account: 'ENTITY' })
    })()
    if (onEdit) onEdit()
  }

  const handleDelete = () => {
    recall(onProjectDelete, {
      id: project.id,
      project,
      auth: user,
      mutation: queries.DELETE_PROJECT
    })()
    if (onDelete) onDelete()
  }

  useEffect(() => {
    setLike(liked)
  }, [liked])

  return (
    <Wrap
      className={className}
      style={style}
      appearance={appearance}
      checked={checked}
      layout={layout}>
      <Content layout={layout} clear={!project.preview}>
        {project.preview && (
          <Media layout={layout}>
            {project.preview && (
              <Poster
                src={project.preview?.path}
                alt={project.title}
                onClick={() =>
                  onScreenshotClick && onScreenshotClick(project.preview, project.preview?.id)
                }
              />
            )}
            {project.screenshots && project.screenshots?.length > 0 && (
              <Screenshots>
                {screenshots.map((screenshot, index) => (
                  <Screenshot
                    key={screenshot.id}
                    onClick={() =>
                      onScreenshotClick && onScreenshotClick(screenshot, screenshot.id)
                    }>
                    <Image
                      src={screenshot.path}
                      alt={screenshot.name}
                      bottomOffset={300}
                      layout={'fill'}
                    />
                    {index === screenshots?.length - 1 && residue > 0 && (
                      <ScreenshotsCounter>
                        <span>+{residue}</span>
                      </ScreenshotsCounter>
                    )}
                  </Screenshot>
                ))}
              </Screenshots>
            )}
          </Media>
        )}

        <Column style={{ gridGap: 5 }}>
          <Header>
            <Tooltip place={'top'} text={project.category?.name}>
              <Meta
                category={project.category?.name}
                shareTitle={withSocials && project?.title}
                shareUrl={typeof window !== 'undefined' && withSocials ? location.href : HOST_URL}
                onClickByCategory={() => router.push(`/projects?c=${project.category?.id}`)}
                short
              />
            </Tooltip>

            <CardActions
              typeText={'проект'}
              checked={checked}
              onEdit={onEdit && handleEdit}
              onDelete={onDelete && handleDelete}
              onChecked={onChecked}
            />
          </Header>

          <Name tag={'h4'} onClick={() => setQuery(project.id, 'project', onLink)}>
            {project.title}
          </Name>

          <About>
            {project.description?.length > 135 ? (
              <React.Fragment>
                <Text>{project.description?.slice(0, 135)}...</Text>
                <More onClick={onAboutMore}>Подробнее</More>
              </React.Fragment>
            ) : (
              <Text>{project.description || 'Описание не заполнено'}</Text>
            )}
          </About>
        </Column>
      </Content>

      {!preview && (
        <React.Fragment>
          <Divider clear />

          <Footer>
            <Company
              {...(project.company
                ? {
                    img: project.company?.avatar?.path
                  }
                : {
                    icon: 'work'
                  })}
              label={'Компания'}
              text={project.company?.name || '-'}
              tooltip={project.company?.name}
              onLink={
                project.company?.email &&
                onCompanyLink &&
                (() => setQuery(project.company?.email, 'user', onCompanyLink))
              }
            />
            {!owned && (onLike || onAdd) && (
              <Row>
                {!canRemove && onLike && (
                  <Tooltip text={'Мне нравится'}>
                    <Button type={'button'} kind={'icon'} onClick={onClickLike} revert={!isLiked}>
                      <Icon
                        icon={'heart'}
                        stroke={isLiked ? 'white' : 'var(--default-color-accent)'}
                      />
                    </Button>
                  </Tooltip>
                )}
                {!canRemove && onAdd && (
                  <Tooltip text={'Добавить проект к себе'}>
                    <Button type={'button'} kind={'icon'} onClick={onAdd} revert>
                      <Icon icon={'add'} stroke={'var(--default-color-accent)'} />
                    </Button>
                  </Tooltip>
                )}
                {canRemove && (
                  <Tooltip text={'Удалить проект из папки'}>
                    <Button
                      type={'button'}
                      kind={'icon'}
                      appearance={'red'}
                      onClick={onRemove}
                      revert>
                      <Icon icon={'delete'} stroke={'var(--default-color-red)'} />
                    </Button>
                  </Tooltip>
                )}
              </Row>
            )}
          </Footer>
        </React.Fragment>
      )}
    </Wrap>
  )
}

Card.defaultProps = {
  appearance: 'default'
}

export default Card
