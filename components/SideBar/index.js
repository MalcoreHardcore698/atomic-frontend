import React from 'react'
import styled, { css } from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Avatar, { Wrap as WrapAvatar } from '../../atomic-ui/components/Avatar'
import Divider from '../../atomic-ui/components/Divider'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Icon from '../../atomic-ui/components/Icon'
import Badge from '../../atomic-ui/components/Badge'
import { getLabelRole } from '../../atomic-ui/utils/functions'

const defaultColor = 'rgba(255, 255, 255, 25%)'
const activeColor = 'var(--default-color-accent)'

export const Wrap = styled(Row)`
  --padding-offset: 15px;

  display: flex;
  flex-direction: column;

  width: 240px;
  height: 100vh;

  background: var(--admin-color-accent);
  color: white;

  overflow: hidden;
  overflow-y: auto;

  @media only screen and (max-width: 996px) {
    width: 62px;
  }
`

export const Profile = styled(Row)`
  padding: var(--default-gap) var(--default-gap) 5px var(--default-gap);

  @media only screen and (max-width: 996px) {
    padding: var(--default-gap) var(--default-gap) 0 var(--default-gap);

    ${WrapAvatar} {
      max-width: var(--input-height-s);
      max-height: var(--input-height-s);
      min-width: var(--input-height-s);
      min-height: var(--input-height-s);
      width: var(--input-height-s);
      height: var(--input-height-s);
    }
  }
`

export const Info = styled(Column)`
  grid-gap: 0;
`

export const Name = styled(Title)`
  font-size: var(--font-h4);
  font-weight: var(--font-weight-medium);
`

export const Role = styled(Text)`
  color: ${defaultColor};
`

export const Strip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px var(--default-gap);

  a {
    position: relative;
    padding: 0 15px;
    transition: background 150ms ease;

    &.active,
    &:hover {
      background: #10151c;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 5px 0;
  }
`

export const Label = styled(Row)`
  align-items: center;
`

export const LabelIcon = styled(Icon)`
  width: var(--input-height-s);
  height: var(--input-height-s);
  background: var(--admin-color-accent-dim);
  border-radius: var(--surface-border-radius);

  ${({ active }) =>
    active &&
    css`
      background: white;
    `}
`

export const LabelText = styled(Text)`
  color: ${defaultColor};
  font-weight: var(--font-weight-medium);

  ${({ active }) =>
    active &&
    css`
      color: white;
    `}
`

export const LinkStrip = ({ active, icon, text, count }) => (
  <Strip>
    <Label>
      <LabelIcon
        icon={icon}
        size={'xs'}
        stroke={active ? activeColor : defaultColor}
        active={active}
      />
      <LabelText active={active}>{text}</LabelText>
    </Label>
    {count && (
      <Badge
        count={count}
        size={'xs'}
        style={
          !active
            ? {
                background: defaultColor,
                borderColor: 'transparent',
                color: 'var(--admin-color-accent)'
              }
            : {}
        }
      />
    )}
  </Strip>
)

export const Side = ({ user, link: Link, links, ...props }) => (
  <Wrap {...props}>
    <Profile>
      <Avatar src={user.avatar} alt={'Avatar'} size={'m'} />
      <Info>
        <Name>{user.name}</Name>
        <Role>{getLabelRole(user.role)}</Role>
      </Info>
    </Profile>

    <Divider style={{ background: 'var(--admin-color-accent-dim)', margin: '10px 0' }} />

    {links &&
      links.length > 0 &&
      links.map((link, index) => (
        <React.Fragment key={index}>
          {link.divide && (
            <Divider style={{ background: 'var(--admin-color-accent-dim)', margin: '10px 0' }} />
          )}
          <Link href={link.path}>{link.component}</Link>
        </React.Fragment>
      ))}
  </Wrap>
)

Side.defaultProps = {
  link: ({ children, ...props }) => <a {...props}>{children}</a>
}

export default Side
