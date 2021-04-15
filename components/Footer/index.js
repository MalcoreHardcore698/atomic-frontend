import React from 'react'
import styled, { css } from 'styled-components'
import { v4 } from 'uuid'

import Image from '../../atomic-ui/components/Image'
import Icon from '../../atomic-ui/components/Icon'

const listProperties = css`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Wrap = styled.div`
  display: grid;
  grid-template-areas: 'contacts socials' 'catalog support';
  grid-gap: calc(var(--default-gap) + 20px);

  background: var(--surface-background);
  border: var(--surface-border);
  box-shadow: var(--surface-shadow);

  margin: 0;
  padding: calc(var(--default-gap) + 20px) var(--main-offset-l);

  @media only screen and (max-width: 996px) {
    padding: calc(var(--default-gap) + 20px) var(--main-offset-m);
  }

  @media only screen and (max-width: 768px) {
    grid-template-areas: 'contacts contacts' 'socials socials' 'catelog support';
    padding: calc(var(--default-gap) + 20px) var(--main-offset-s);
    grid-gap: var(--default-gap);
  }

  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 480px) {
    padding: calc(var(--default-gap) + 20px) var(--main-offset-xs);
  }
`

export const Title = styled.h2`
  font-size: var(--font-h4);
  font-weight: var(--font-weight-bold);
  color: black;
  text-transform: uppercase;
`

export const Contacts = styled.ul`
  ${listProperties}
  grid-area: contacts;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 256px));
  grid-gap: calc(var(--default-gap) + 15px);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
    grid-gap: var(--default-gap);
  }
`

export const Contact = styled.li`
  flex-grow: 1;

  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: var(--default-gap);
  align-content: center;
  cursor: pointer;
`

export const ContactIcon = styled(Icon)`
  width: var(--input-height-m);
  height: var(--input-height-m);
  background: var(--ghost-color-background);
  border-radius: var(--surface-border-radius);
`

export const ContactLabel = styled.span`
  display: flex;
  align-items: center;
`

export const Socials = styled.ul`
  ${listProperties}
  grid-area: socials;
  justify-self: end;

  display: flex;
  justify-content: space-between;
  grid-gap: var(--default-gap);

  width: 150px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }
`

export const Social = styled.li`
  img {
    width: var(--input-height-m);
    height: var(--input-height-m);
  }
`

export const Catalog = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: var(--default-gap);
`

export const Support = styled.div`
  justify-self: end;

  display: flex;
  flex-direction: column;
  grid-gap: var(--default-gap);
  width: 150px;
`

export const Links = styled.ul`
  ${listProperties}
  display: flex;
  grid-gap: var(--default-gap) calc(var(--default-gap) + 15px);
  flex-wrap: wrap;
`

export const Link = styled.li`
  width: 256px;
  color: black;
  opacity: 0.35;
  transition: all 150ms ease;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}

  &:hover {
    color: var(--default-color-accent);
    opacity: 1;
  }
`

export const Footer = ({ contacts, socials, catalog, support, style, className }) => {
  return (
    <Wrap className={className} style={style}>
      {contacts && contacts.length > 0 && (
        <Contacts>
          {contacts.map((contact) => (
            <Contact key={v4()}>
              <ContactIcon icon={contact.icon} />
              <ContactLabel>{contact.label}</ContactLabel>
            </Contact>
          ))}
        </Contacts>
      )}

      {socials && socials.length > 0 && (
        <Socials>
          {socials.map((social) => (
            <Social key={v4()} src={social} alt={'Social'}>
              <Image src={social} alt={'Social'} />
            </Social>
          ))}
        </Socials>
      )}

      {catalog && catalog.links.length > 0 && (
        <Catalog>
          <Title>{catalog.title}</Title>
          <Links>
            {catalog.links.map((link) => (
              <Link key={v4()}>{link}</Link>
            ))}
          </Links>
        </Catalog>
      )}

      {support && support.links.length > 0 && (
        <Support>
          <Title>{support.title}</Title>
          <Links>
            {support.links.map((link) => (
              <Link key={v4()} onClick={link.onClick || (() => {})}>
                {link.render()}
              </Link>
            ))}
          </Links>
        </Support>
      )}
    </Wrap>
  )
}

export default Footer
