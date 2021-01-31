import React from 'react'
import styled, { css } from 'styled-components'
import { v4 } from 'uuid'

import Avatar from '../../atomic-ui/components/Avatar'
import Icon from '../../atomic-ui/components/Icon'
import Button from '../../atomic-ui/components/Button'
import Tooltip from '../../atomic-ui/components/Tooltip'
import Popper, { Wrap as WrapPopper } from '../../atomic-ui/components/Popper'
import Menu from '../../atomic-ui/components/Menu'

export const Wrap = styled.div`
  position: relative;
  z-index: var(--z-13);

  display: grid;
  grid-template-columns: 128px 1fr 80px;
  grid-gap: calc(var(--default-gap) + 25px);
  align-content: center;

  margin: 0;
  padding: 0 var(--main-offset-l);

  width: 100%;
  height: 72px;
  min-height: 72px;

  background: var(--surface-background);
  border: var(--surface-border);
  box-shadow: var(--surface-shadow);

  @media only screen and (max-width: 996px) {
    padding: 0 var(--main-offset-m);
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    grid-gap: var(--default-gap);
    padding: 0 var(--main-offset-s);
  }

  @media only screen and (max-width: 480px) {
    padding: 0 var(--main-offset-xs);
  }
`

export const MenuButton = styled(Button)`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`

export const HomeLinkContainer = styled.div`
  position: relative;
  top: 6px;
`

export const BrandLogo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  transform: scale(1.25);

  @media only screen and (max-width: 786px) {
    display: none;
  }
`

export const Navigation = styled.div`
  position: relative;
  display: flex;
  grid-gap: calc(var(--default-gap) + 15px);
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const Label = styled.span`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-regular);

  ${({ link }) =>
    link &&
    css`
      display: inline-flex;
      border-radius: 25rem;
      padding: 5px 15px;
      background: transparent;
      color: black;
      cursor: pointer;
      transition: all 150ms ease;

      &:hover {
        opacity: 0.65;
      }

      ${({ active }) =>
        active &&
        css`
          background: var(--default-color-accent-dim);
          color: var(--default-color-accent-link);
          &:hover {
            opacity: 1;
          }
        `}
    `}
`

export const Actions = styled.div`
  display: flex;
  grid-gap: var(--default-gap);
  align-items: center;
  justify-self: end;

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;

    ${WrapPopper} {
      flex-grow: initial;
    }
  }
`

export const App = ({
  user,
  logotype,
  links,
  link: Link,
  style,
  className,
  onMenu,
  onHelp,
  onProfile,
  onSettings,
  onNotification,
  onLogout,
  onLogin
}) => {
  return (
    <Wrap className={className} style={style}>
      <MenuButton appearance={'clear'} kind={'icon'} onClick={onMenu}>
        <Icon icon={'menu'} />
      </MenuButton>

      {logotype && (
        <HomeLinkContainer>
          <Link href={'/'}>
            <Tooltip
              text={'Атомик – портал для формирования новой сферы образования'}
              offset={{ bottom: 10 }}
              place={'bottom'}
              maxWidth={256}
              multiline>
              <BrandLogo src={logotype} alt={'Logotype'} />
            </Tooltip>
          </Link>
        </HomeLinkContainer>
      )}

      {links && links.length > 0 && (
        <Navigation>
          {links.map((link) =>
            link.props.sublinks ? (
              <Popper
                key={v4()}
                place={'bottom'}
                width={'265px'}
                offset={{ top: 5, right: 85 }}
                body={
                  <Menu
                    key={'slinks'}
                    listStyle={{ padding: 'var(--default-gap)' }}
                    links={link.props.sublinks.map((slink) => ({
                      text: slink.label,
                      active: slink.props.active,
                      onClick: slink.props.onClick
                    }))}
                  />
                }
                appearance={'clear'}>
                <Label active={link.active} link>
                  {link.label}
                </Label>
              </Popper>
            ) : (
              <Link key={v4()} {...link.props}>
                <Label>{link.label}</Label>
              </Link>
            )
          )}
        </Navigation>
      )}

      <Actions>
        {user ? (
          <React.Fragment>
            <Button type={'button'} kind={'icon'} size={'xs'} onClick={onNotification}>
              <Icon size={'xs'} icon={'notification'} stroke={'white'} />
            </Button>

            <Popper
              place={'bottom'}
              width={'265px'}
              offset={{ top: 5, left: 100 }}
              body={
                <Menu
                  key={'menu'}
                  header={{
                    title: 'Аккаунт',
                    link: { text: 'Управление', onClick: onSettings }
                  }}
                  links={[
                    { text: 'Обзор профиля', onClick: onProfile },
                    { text: 'Пользовательские настройки', onClick: onSettings },
                    { text: 'Получить помощь', onClick: onHelp },
                    { text: 'Выход', onClick: onLogout }
                  ]}
                />
              }
              appearance={'clear'}>
              <Button type={'button'} appearance={'clear'}>
                <Avatar src={user.avatar?.path || '/images/avatar-default.png'} alt={'Avatar'} />
              </Button>
            </Popper>
          </React.Fragment>
        ) : (
          <Button type={'button'} onClick={onLogin}>
            Войти
          </Button>
        )}
      </Actions>
    </Wrap>
  )
}

App.defaultProps = {
  link: ({ children, ...props }) => (
    <a {...props} href={'/#'}>
      {children}
    </a>
  )
}

export default App
