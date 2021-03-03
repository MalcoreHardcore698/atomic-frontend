import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import YouTube from 'react-youtube'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Grid from '../../atomic-ui/components/Grid'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Alert from '../../atomic-ui/components/Alert'
import Divider from '../../atomic-ui/components/Divider'
import Spinner from '../../atomic-ui/components/Spinner'
import Difinition from '../../atomic-ui/components/Difinition'
import Tooltip, { Wrap as WrapTooltip } from '../../atomic-ui/components/Tooltip'
import { getFileSize, getLabelRole } from '../../atomic-ui/utils/functions'

import HTMLView from '../HTMLView'
import { Loader } from '../Styled'
import queries from '../../graphql/queries'

export const Wrap = styled(Column)`
  flex-grow: 1;

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

export const Container = styled(Row)`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    grid-gap: var(--default-gap);
  }
`

export const Media = styled(Column)`
  grid-gap: 5px;
  flex-basis: 35%;

  & > span {
    display: flex;
    flex-grow: 1;
  }

  @media only screen and (max-width: 480px) {
    flex-basis: 100%;
  }
`

export const Content = styled(Column)`
  justify-content: space-between;
  flex-basis: 65%;

  @media only screen and (max-width: 480px) {
    flex-basis: 100%;
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
  overflow: hidden;
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

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
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

export const CentralAlert = styled(Alert)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
`

export const Poster = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--surface-border-radius);
  flex-grow: 1;
  transition: opacity 150ms ease;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`

export const Difinitions = styled(Row)`
  flex-grow: 100;
  justify-content: space-between;
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`

export const Presentation = styled(YouTube)`
  display: flex;
  flex-grow: 1;
  width: 100%;
  border-radius: var(--surface-border-radius);
  overflow: hidden;

  iframe {
    width: 100%;
  }
`

export const Actions = styled(Row)`
  @media only screen and (max-width: 480px) {
    ${WrapTooltip} {
      flex-grow: 1;

      button {
        flex-grow: 1;
      }
    }
  }
`

export const Files = styled(Grid)``

export const Members = styled(Grid)``

export const View = ({
  project,
  appearance,
  className,
  style,
  slicedFactor = 6,
  owned,
  liked,
  onAdd,
  onLike,
  onScreenshotClick,
  onFileLink,
  onMemberLink,
  onCompanyLink
}) => {
  const { data, loading, error } = useQuery(queries.GET_PROJECT, {
    variables: {
      id: project
    }
  })

  const [isLiked, setLike] = useState(liked)

  const [screenshots, setScreenshots] = useState([])
  const [residue, setResidue] = useState(0)
  const [videoId, setVideoId] = useState(null)

  const onClickLike = () => {
    if (onLike) onLike()
    setLike(!isLiked)
  }

  useEffect(() => {
    if (!loading && data) {
      const response = data.getProject
      const images = [response.preview, ...response.screenshots]
      const slicedImages = images.slice(0, slicedFactor)
      const url = response.presentation && new URL(response.presentation)

      setResidue((images.length || slicedFactor) - slicedFactor)
      setVideoId(url?.searchParams?.get('v'))
      setScreenshots(slicedImages)
    }
  }, [loading, data, slicedFactor])

  return (
    <Wrap className={className} style={style} appearance={appearance}>
      {!loading && data ? (
        <React.Fragment>
          <Container>
            <Media>
              {data.getProject.preview ? (
                <Poster
                  src={data.getProject.preview.path}
                  onClick={() =>
                    onScreenshotClick &&
                    onScreenshotClick(data.getProject.preview, data.getProject.preview.id, [
                      data.getProject.preview,
                      ...data.getProject.screenshots
                    ])
                  }
                />
              ) : (
                <CentralAlert>Превью нет</CentralAlert>
              )}
              {data.getProject.screenshots && data.getProject.screenshots?.length > 0 && (
                <Screenshots>
                  {screenshots.map((screenshot, index) => (
                    <Screenshot
                      key={screenshot.id}
                      onClick={() =>
                        onScreenshotClick &&
                        onScreenshotClick(screenshot, screenshot.id, [
                          data.getProject.preview,
                          ...data.getProject.screenshots
                        ])
                      }>
                      <Image src={screenshot.path} alt={screenshot.name} />
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

            <Content>
              <Column>
                <Meta category={data.getProject.category?.name} />
                <Title tag={'h3'} style={{ marginTop: -5, marginBottom: 5 }}>
                  {data.getProject.title}
                </Title>
                <Text>{data.getProject.description}</Text>
              </Column>

              <Column>
                <Divider clear />

                <Difinitions>
                  <Difinition
                    {...(data.getProject.company
                      ? {
                          img: data.getProject.company?.avatar?.path
                        }
                      : {
                          icon: 'work'
                        })}
                    label={'Компания'}
                    text={data.getProject.company?.name || '-'}
                    onLink={() => onCompanyLink(data.getProject.company?.email)}
                  />

                  {!owned && (onLike || onAdd) && (
                    <Actions>
                      {onLike && (
                        <Tooltip text={'Мне нравится'}>
                          <Button
                            type={'button'}
                            kind={'icon'}
                            onClick={onClickLike}
                            revert={!isLiked}>
                            <Icon
                              icon={'heart'}
                              stroke={isLiked ? 'white' : 'var(--default-color-accent)'}
                            />
                          </Button>
                        </Tooltip>
                      )}
                      {onAdd && (
                        <Tooltip text={'Добавить проект к себе'}>
                          <Button type={'button'} kind={'icon'} onClick={onAdd} revert>
                            <Icon icon={'add'} stroke={'var(--default-color-accent)'} />
                          </Button>
                        </Tooltip>
                      )}
                    </Actions>
                  )}
                </Difinitions>
              </Column>
            </Content>
          </Container>

          <Divider clear />

          {data.getProject.body && <HTMLView content={data.getProject.body} />}

          <Divider clear />

          {data.getProject.presentation && videoId && <Presentation videoId={videoId} />}

          <Title tag={'h4'}>Участники проекта</Title>
          {data.getProject.members && data.getProject.members?.length > 0 && (
            <Members percentage={'minmax(320px, 1fr)'}>
              {data.getProject.members.map((member) => (
                <Difinition
                  key={member.email}
                  img={member.avatar?.path || '/images/avatar-default.png'}
                  label={getLabelRole(member.account)}
                  text={member.name}
                  onLink={() => onMemberLink && onMemberLink(member.email)}
                />
              ))}
            </Members>
          )}
          {(!data.getProject.members || data.getProject.members?.length === 0) && (
            <Alert style={{ width: '100%', textAlign: 'center' }}>Участников нет</Alert>
          )}

          <Divider clear />

          <Title tag={'h4'}>Файлы</Title>
          {data.getProject.files && data.getProject.files.length > 0 && (
            <Files percentage={'minmax(256px, 1fr)'}>
              {data.getProject.files.map((file) => (
                <Difinition
                  key={file.id}
                  icon={'paper'}
                  label={file.filename}
                  text={getFileSize(file.size)}
                  onLink={() => onFileLink && onFileLink(file)}
                />
              ))}
            </Files>
          )}
          {(!data.getProject.files || data.getProject.files?.length === 0) && (
            <Alert style={{ width: '100%', textAlign: 'center' }}>Файлов нет</Alert>
          )}
        </React.Fragment>
      ) : error ? (
        <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
          Упс! Не удалось загрузить информацию о проекте
        </Alert>
      ) : (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </Wrap>
  )
}

View.defaultProps = {
  appearance: 'default'
}

export default View
