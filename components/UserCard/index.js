import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import Row, { Wrap as WrapRow } from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Icon from '../../atomic-ui/components/Icon'
import Meta from '../../atomic-ui/components/Meta'
import Image from '../../atomic-ui/components/Image'
import Divider from '../../atomic-ui/components/Divider'
import Button from '../../atomic-ui/components/Button'
import Tooltip, { Wrap as WrapTooltip } from '../../atomic-ui/components/Tooltip'
import Difinition, { MarkedText } from '../../atomic-ui/components/Difinition'
import { getLabelRole } from '../../atomic-ui/utils/functions'

import { Surface, More } from '../Styled'
import CardActions from '../CardActions'
import { ResponsibleMark, hasResponsibleMember } from '../Members'
import { onUserDelete, onUserEdit } from '../../store/helpers/user'
import { useEntityQuery } from '../../hooks/useEntityQuery'
import { useHelper } from '../../hooks/useHelper'
import queries from '../../graphql/queries'
import config from '../../config'

const HOST_URL = config.get('host-url')

export const Wrap = styled(Surface)`
  grid-gap: var(--default-gap);

  ${({ layout }) =>
    layout === 'column' &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}
`

export const Content = styled(Row)`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: 175px;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    grid-gap: var(--default-gap);
  }
`

export const Avatar = styled(Image)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--surface-border-radius);
  border: 1px solid var(--ghost-color-background);
  overflow: hidden;
  object-fit: cover;
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

export const About = styled.div`
  font-size: var(--font-size-m);
`

export const Indicator = styled(Difinition)`
  align-items: flex-end;
  flex-grow: 10;
  height: 100%;
`

export const Footer = styled(Row)`
  justify-content: space-between;
  grid-column: 1 / 3;

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    grid-gap: var(--default-gap);

    ${WrapRow} {
      flex-grow: 1;

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
  user,
  preview,
  owned,
  added,
  style,
  checked,
  className,
  appearance,
  onAdd,
  onLink,
  onChat,
  onMembers,
  onAboutMore,
  onCompanyLink,
  onChecked,
  onEdit,
  onDelete,
  withSocials
}) => {
  const recall = useHelper()
  const { setQuery } = useEntityQuery()
  const auth = useSelector((state) => state.user)
  const [isAdded, setAdded] = useState(added)

  const canEditRole = useMemo(() => auth && auth?.role?.name === 'ADMIN', [auth])

  const onClickAdd = () => {
    if (onAdd) onAdd()
    setAdded(!isAdded)
  }

  const handleEdit = () => {
    recall(onUserEdit, {
      user: user?.email,
      auth: auth?.email,
      canEditRole,
      mutations: {
        update: queries.UPDATE_USER,
        del: queries.DELETE_USER,
        changePassword: queries.UPDATE_USER
      }
    })()
    if (onEdit) onEdit()
  }

  const handleDelete = () => {
    recall(onUserDelete, {
      id: user?.email,
      user,
      auth: auth?.email,
      mutation: queries.DELETE_USER
    })()
    if (onDelete) onDelete()
  }

  return (
    <Wrap className={className} style={style} checked={checked} appearance={appearance}>
      <Content>
        <Avatar
          src={user?.avatar?.path || '/images/avatar-default.png'}
          alt={user?.name}
          effect={'opacity'}
          layout={'fill'}
        />
        <Column style={{ gridGap: 5 }}>
          <Header>
            <MarkedText>
              <Meta
                shareTitle={withSocials && user?.name}
                shareUrl={typeof window !== 'undefined' && withSocials ? location.href : HOST_URL}
                category={getLabelRole(user?.account)}
              />
              {hasResponsibleMember(user) && <ResponsibleMark />}
            </MarkedText>

            <CardActions
              typeText={'категорию'}
              checked={checked}
              onEdit={onEdit && handleEdit}
              onDelete={onDelete && handleDelete}
              onChecked={onChecked}
            />
          </Header>

          <Name tag={'h4'} onClick={() => setQuery(user?.email, 'user', onLink)}>
            {user?.name}
          </Name>

          <About>
            {user?.about?.length > 135 ? (
              <React.Fragment>
                <Text>{user?.about.slice(0, 100)}...</Text>
                <More onClick={onAboutMore}>Подробнее</More>
              </React.Fragment>
            ) : (
              <Text>{user?.about || 'Информация о себе не заполнена'}</Text>
            )}
          </About>
          {user?.projects && (
            <Indicator icon={'work'} label={'Проекты'} text={user?.projects?.length} />
          )}
        </Column>
      </Content>

      {!preview && (
        <React.Fragment>
          <Divider clear />

          <Footer>
            {user?.account === 'ENTITY' ? (
              <Difinition
                icon={'user2'}
                label={'Участники'}
                text={user?.members}
                onLink={user?.members && onMembers}
              />
            ) : (
              <Difinition
                {...(user?.company
                  ? {
                      img: user?.company?.avatar?.path
                    }
                  : {
                      icon: 'work'
                    })}
                label={'Компания'}
                text={user?.company?.name || '-'}
                onLink={
                  user?.company &&
                  onCompanyLink &&
                  (() => setQuery(user?.company?.email, 'user', onCompanyLink))
                }
              />
            )}

            {!owned && (onChat || onAdd) && (
              <Row>
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
