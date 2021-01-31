import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'
import Icon from '../../atomic-ui/components/Icon'
import Alert from '../../atomic-ui/components/Alert'
import Divider from '../../atomic-ui/components/Divider'
import Difinition from '../../atomic-ui/components/Difinition'
import Spinner from '../../atomic-ui/components/Spinner'
import Button from '../../atomic-ui/components/Button'
import Tooltip, { Wrap as WrapTooltip } from '../../atomic-ui/components/Tooltip'

import ProjectCard from '../ProjectCard'
import { getLabelRole } from '../../utils/functions'
import queries from '../../graphql/queries'

export const Wrap = styled(Column)`
  grid-gap: 0;

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

export const RoundedAvatar = styled(Image)`
  width: 196px;
  height: 196px;
  border-radius: var(--surface-border-radius);
  object-fit: cover;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 256px;
  }
`

export const Content = styled(Column)`
  grid-gap: 0;
  width: 100%;
`

export const Difinitions = styled(Row)`
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    grid-gap: var(--default-gap);
  }
`

export const About = styled.div`
  flex-grow: 100;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(442px, 1fr));
  grid-gap: var(--default-gap);
  grid-auto-rows: max-content;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
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

export const Loader = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`

export const View = ({
  user,
  owned,
  appearance,
  className,
  style,
  onChat,
  onAdd,
  onMembers,
  onProjectAdd,
  onProjectLink,
  onCompanyLink,
  onProjectCompanyLink,
  onProjectScreenshotClick
}) => {
  const [isAdded, setAdded] = useState(false)
  const { data, loading, error } = useQuery(queries.GET_USER, {
    variables: {
      email: user
    }
  })
  const {
    data: dataParticipatingUserProjects,
    loading: loadingParticipatingUserProjects,
    error: errorParticipatingUserProjects
  } = useQuery(queries.GET_USER_PARTICIPANT_PROJECTS, {
    variables: {
      member: user
    }
  })

  const onClickAdd = () => {
    if (onAdd) onAdd()
    setAdded(!isAdded)
  }

  return (
    <Wrap className={className} style={style} appearance={appearance}>
      {!loading && !loadingParticipatingUserProjects && data ? (
        <React.Fragment>
          <Row>
            <RoundedAvatar src={data.getUser.avatar?.path || '/images/avatar-default.png'} />

            <Content>
              {data.getUser.account && <Meta category={getLabelRole(data.getUser.account)} />}
              {data.getUser.name && <Title tag={'h3'}>{data.getUser.name}</Title>}

              <Divider />

              <About>
                <Text>{data.getUser.about || 'Информация о себе не заполнена'}</Text>
              </About>
            </Content>
          </Row>

          <Divider />

          <Difinitions>
            {data.getUser.account === 'ENTITY' ? (
              <Difinition
                icon={'chart'}
                label={'Участники'}
                text={data.getUser.members || '-'}
                onLink={data.getUser.members && onMembers}
              />
            ) : (
              <Difinition
                {...(data.getUser.company
                  ? {
                      img: data.getUser.company?.avatar?.path
                    }
                  : {
                      icon: 'chart'
                    })}
                label={'Компания'}
                text={data.getUser.company?.name || '-'}
                onLink={data.getUser.company && (() => onCompanyLink(data.getUser.company))}
              />
            )}
            <Difinition
              icon={'work'}
              label={'Проекты'}
              text={dataParticipatingUserProjects?.getProjects?.length || '-'}
            />
            {!owned && (onChat || onAdd) && (
              <Actions>
                {onChat && (
                  <Tooltip text={'Написать пользователю'}>
                    <Button
                      type={'button'}
                      kind={'icon'}
                      appearance={'green'}
                      onClick={onChat}
                      revert>
                      <Icon icon={'chat'} stroke={'var(--default-color-green)'} />
                    </Button>
                  </Tooltip>
                )}
                {onAdd && (
                  <Tooltip text={'Подписаться на пользователя'}>
                    <Button type={'button'} kind={'icon'} onClick={onClickAdd} revert={!isAdded}>
                      <Icon
                        icon={isAdded ? 'check' : 'add'}
                        stroke={isAdded ? 'white' : 'var(--default-color-accent)'}
                      />
                    </Button>
                  </Tooltip>
                )}
              </Actions>
            )}
          </Difinitions>

          <Divider />

          <Column>
            <Title tag={'h4'}>Реализованные проекты</Title>
            {!loadingParticipatingUserProjects &&
            dataParticipatingUserProjects &&
            dataParticipatingUserProjects.getProjects.length > 0 ? (
              <Projects>
                {dataParticipatingUserProjects.getProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    owned={owned}
                    project={project}
                    appearance={'clear'}
                    onAdd={() => onProjectAdd(project)}
                    onLink={() => onProjectLink(project)}
                    onCompanyLink={project.company && (() => onProjectCompanyLink(project.company))}
                    onScreenshotClick={(_, key) =>
                      onProjectScreenshotClick &&
                      onProjectScreenshotClick(_, key, [project.preview, ...project.screenshots])
                    }
                  />
                ))}
              </Projects>
            ) : !loadingParticipatingUserProjects &&
              dataParticipatingUserProjects &&
              dataParticipatingUserProjects.getProjects.length === 0 ? (
              <Alert style={{ width: '100%', textAlign: 'center' }}>
                Пользователь не реализовал(-а) ни одного проекта
              </Alert>
            ) : errorParticipatingUserProjects ? (
              <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
                Упс! Не удалось загрузить информацию о проектах
              </Alert>
            ) : (
              <Spinner />
            )}
          </Column>
        </React.Fragment>
      ) : error ? (
        <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
          Упс! Не удалось загрузить информацию о пользователе
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
