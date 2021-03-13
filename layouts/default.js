import React, { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { useSelector, useDispatch } from 'react-redux'
import { v4 } from 'uuid'

import Image from '../atomic-ui/components/Image'
import Spinner from '../atomic-ui/components/Spinner'

import { useMutate } from '../hooks/useMutate'
import { useHelper } from '../hooks/useHelper'
import MainLayout from './main'
import Scaffold from '../components/Scaffold'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'
import { FixedLoader } from '../components/Styled'
import { setLogout } from '../store/actions/user'
import { setDrawer } from '../store/actions/drawer'
import { onMenu, onHelp, onNotification, onChat } from '../store/helpers'
import { onUserClientEdit } from '../store/helpers/user'
import queries from '../graphql/queries'
import { supportLinks, socials, contacts } from '../__mock__'

const Wrap = styled.div`
  position: relative;
  top: -20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  z-index: 2;
`

const Background = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: contain;
  z-index: 1;
`

const Main = styled.main`
  padding: 50px var(--main-offset-l);
  flex-grow: 100;

  @media only screen and (max-width: 996px) {
    padding: 25px var(--main-offset-m);
  }

  @media only screen and (max-width: 768px) {
    padding: 25px var(--main-offset-s);
  }

  @media only screen and (max-width: 480px) {
    padding: 25px var(--main-offset-xs);
  }
`

const Anchor = styled.a`
  border-radius: 25rem;
  padding: 5px 15px;
  background: transparent;
  color: black;
  transition: all 150ms ease;

  ${({ link }) =>
    link &&
    css`
      &:hover {
        opacity: 0.65;
      }
    `}

  ${({ active, link }) =>
    active &&
    link &&
    css`
      background: var(--default-color-accent-dim);
      color: var(--default-color-accent-link);

      &:hover {
        opacity: 1;
      }
    `}
`

export const DefaultLayout = ({ children, title = 'Атомик', scaffold, background }) => {
  const recall = useHelper()
  const mutate = useMutate()
  const router = useRouter()
  const { data, loading } = useQuery(queries.GET_CATEGORIES)
  const { root, user } = useSelector((state) => state)
  const dispatch = useDispatch()
  const categories = useMemo(() => data?.getCategories || [], [data])

  const isProjects = router.pathname.includes('projects')
  const categoryId = router.query.category

  if (loading) {
    return (
      <FixedLoader>
        <Spinner />
      </FixedLoader>
    )
  }

  return (
    <MainLayout>
      <Head>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="atomic project description" />
        <title>{title}</title>
      </Head>

      <Background src={background} alt={'Background'} />

      <Wrap>
        <AppBar
          user={user.authenticated ? user : null}
          logotype={root.settings.general.logotype?.path}
          link={({ children, href, ...props }) => (
            <Link {...props} href={href}>
              <Anchor active={router.pathname === href} link={children.type.target === 'span'}>
                {children}
              </Anchor>
            </Link>
          )}
          links={[
            {
              label: 'Проекты',
              props: {
                sublinks: categories
                  .filter((category) => category.type === 'DIVISION')
                  .map((category) => ({
                    label: category.name,
                    props: {
                      active: categoryId === category.id,
                      onClick: () => router.push(`/projects?category=${category.id}`)
                    }
                  }))
              },
              active: isProjects
            },
            { label: 'Авторы', props: { href: '/creators' } },
            { label: 'Новости', props: { href: '/articles' } },
            { label: 'О ресурсе', props: { href: '/about' } }
          ]}
          onMenu={recall(onMenu, {
            links: [
              {
                text: 'Проекты',
                onClick: () => {
                  dispatch(setDrawer(null))
                  router.push('/projects')
                }
              },
              {
                text: 'Авторы',
                onClick: () => {
                  dispatch(setDrawer(null))
                  router.push('/creators')
                }
              },
              {
                text: 'Новости',
                onClick: () => {
                  dispatch(setDrawer(null))
                  router.push('/articles')
                }
              },
              {
                text: 'О ресурсе',
                onClick: () => {
                  dispatch(setDrawer(null))
                  router.push('/about')
                }
              }
            ]
          })}
          onHelp={recall(onHelp, {
            mutation: queries.CREATE_USER_TICKET
          })}
          onChat={recall(onChat, {
            sender: user,
            queries: {
              userChats: queries.GET_USER_CHATS,
              chat: queries.GET_CHAT
            },
            mutations: {
              addUserChat: queries.ADD_USER_CHAT,
              sendMessage: queries.SEND_MESSAGE
            }
          })}
          onSettings={recall(onUserClientEdit, {
            user: user?.email,
            mutations: {
              update: queries.UPDATE_CLIENT_USER,
              del: queries.DELETE_USER,
              changePassword: queries.UPDATE_CLIENT_USER
            }
          })}
          onNotification={recall(onNotification, { notifications: user.notifications })}
          onProfile={() => router.push('/profile')}
          onLogin={() => router.push('/auth')}
          onLogout={mutate(queries.LOGOUT, {}, () => dispatch(setLogout()))}
        />

        {scaffold && <Scaffold user={user} {...scaffold} />}

        <Main id={'main'}>{children}</Main>

        <Footer
          contacts={contacts}
          socials={socials}
          catalog={{
            title: 'Каталог',
            links: categories
              .filter((category) => category.type === 'DIVISION')
              .map((link) => (
                <Link key={v4()} href={`/projects?category=${link.id}`}>
                  <a>{link.name}</a>
                </Link>
              ))
          }}
          support={{
            title: 'О компании',
            links: supportLinks.map((link) => (
              <Link key={v4()} href={link.path}>
                <a>{link.label}</a>
              </Link>
            ))
          }}
        />
      </Wrap>
    </MainLayout>
  )
}

export default DefaultLayout
