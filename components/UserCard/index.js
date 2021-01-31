import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Row, { Wrap as WrapRow } from '../../atomic-ui/components/Row'
import Tooltip, { Wrap as WrapTooltip } from '../../atomic-ui/components/Tooltip'
import Column from '../../atomic-ui/components/Column'
import Image from '../../atomic-ui/components/Image'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Icon from '../../atomic-ui/components/Icon'
import Meta from '../../atomic-ui/components/Meta'
import Divider from '../../atomic-ui/components/Divider'
import Button from '../../atomic-ui/components/Button'
import Difinition from '../../atomic-ui/components/Difinition'
import Checkbox from '../../atomic-ui/components/Checkbox'

import { getLabelRole } from '../../utils/functions'

export const Wrap = styled(Column)`
  grid-gap: var(--default-gap);

  ${({ layout }) =>
    layout === 'column' &&
    css`
      display: flex;
      flex-wrap: wrap;
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
  overflow: hidden;
  object-fit: cover;
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

export const About = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--font-size-m);
  height: 215px;
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
  className,
  appearance,
  onAdd,
  onLink,
  onChat,
  onMembers,
  onCompanyLink,
  onChecked,
  onEdit,
  onDelete
}) => {
  const [isAdded, setAdded] = useState(added)

  const onClickAdd = () => {
    if (onAdd) onAdd()
    setAdded(!isAdded)
  }

  return (
    <Wrap className={className} style={style} appearance={appearance}>
      <Content>
        <Avatar
          src={user?.avatar?.path || '/images/avatar-default.png'}
          layout={'fill'}
          alt={user.name}
        />
        <Column style={{ gridGap: 5 }}>
          <Header>
            <Meta category={getLabelRole(user.account)} />

            {(onChecked || onEdit || onDelete) && (
              <Actions>
                {onDelete && (
                  <Tooltip text={'Удалить пользователя'}>
                    <Button kind={'icon'} size={'xs'} appearance={'red'} onClick={onDelete}>
                      <Icon icon={'delete'} size={'xs'} stroke={'white'} />
                    </Button>
                  </Tooltip>
                )}
                {onEdit && (
                  <Tooltip text={'Редактировать пользователя'}>
                    <Button kind={'icon'} size={'xs'} onClick={onEdit}>
                      <Icon icon={'edit'} size={'xs'} stroke={'white'} />
                    </Button>
                  </Tooltip>
                )}
                {onChecked && (
                  <Tooltip text={'Отметить пользователя'} self>
                    <Checkbox />
                  </Tooltip>
                )}
              </Actions>
            )}
          </Header>

          <Name tag={'h4'} onClick={onLink}>
            {user.name}
          </Name>

          <About>{user.about || 'Информация о себе не заполнена'}</About>
          {user.projects && (
            <Indicator icon={'work'} label={'Проекты'} text={user.projects?.length} />
          )}
        </Column>
      </Content>

      {!preview && (
        <React.Fragment>
          <Divider clear />

          <Footer>
            {user.account === 'ENTITY' ? (
              <Difinition
                icon={'user2'}
                label={'Участники'}
                text={user.members}
                onLink={user.members && onMembers}
              />
            ) : (
              <Difinition
                {...(user.company
                  ? {
                      img: user.company?.avatar?.path
                    }
                  : {
                      icon: 'work'
                    })}
                label={'Компания'}
                text={user.company?.name || '-'}
                onLink={user.company && onCompanyLink}
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
