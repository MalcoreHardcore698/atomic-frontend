import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useLazyQuery } from '@apollo/react-hooks'
import { useDispatch, useSelector } from 'react-redux'

import Row from '../../atomic-ui/components/Row'
import Container from '../../atomic-ui/components/Container'
import Spinner from '../../atomic-ui/components/Spinner'
import Column from '../../atomic-ui/components/Column'
import Button from '../../atomic-ui/components/Button'
import Image from '../../atomic-ui/components/Image'
import Icon from '../../atomic-ui/components/Icon'
import Tooltip from '../../atomic-ui/components/Tooltip'

import { useHelper } from '../../hooks/useHelper'
import MainLayout from '../main'
import { FixedLoader } from '../../components/Styled'
import BaseSideBar from '../../components/SideBar'
import SearchBar from '../../components/SearchBar'
import { onMenu } from '../../store/helpers'
import { setUser } from '../../store/actions/user'
import getLinks from './links'
import queries from '../../graphql/queries'
import config from '../../config'

const Main = styled.main`
  display: flex;
  grid-gap: var(--default-gap);
  width: 100%;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-15);

  display: flex;
  grid-gap: var(--default-gap);

  background: var(--surface-background);
  border: var(--surface-border);
  box-shadow: var(--surface-shadow);
  padding: var(--default-gap);

  width: 100%;
  flex-grow: 100;
`

const SideBar = styled(BaseSideBar)`
  position: fixed;
  top: 70px;
  left: 0;
  height: calc(100vh - 70px);
  z-index: var(--z-12);

  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const MenuButton = styled(Button)`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const LogoZone = styled(Row)`
  justify-content: space-between;

  @media only screen and (max-width: 996px) {
    width: auto;
  }
`

const Logotype = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    height: 30px;
    object-fit: contain;
  }

  @media only screen and (max-width: 996px) {
    min-width: auto;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const Content = styled(Container)`
  padding: 70px 15px 15px 255px;
  flex-grow: 1;

  @media only screen and (max-width: 996px) {
    padding: 70px 15px 15px 80px;
  }

  @media only screen and (max-width: 480px) {
    padding: 70px 15px 15px 15px;
  }
`

export const DashboardLayout = ({ children, title = 'Панель администрирования' }) => {
  const recall = useHelper()
  const router = useRouter()
  const user = useSelector((state) => state.user)
  const [getUser, { data, loading }] = useLazyQuery(queries.GET_USER)
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(config.get('secret'))
      if (token) getUser()
      else router.push('/')
    }
  }, [])

  useEffect(() => {
    if (data && data.getUser) {
      const isAccept = data.getUser.role?.permissions.find(
        (permission) => permission === 'ACCESS_DASHBOARD'
      )
      if (isAccept) {
        dispatch(setUser(data.getUser))
      } else {
        router.push('/')
      }
    }
  }, [data, dispatch])

  if (loading || !user.authenticated) {
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
        <meta name="description" content="primar project description" />
        <title>{title}</title>
      </Head>

      <Header>
        <MenuButton
          appearance={'clear'}
          kind={'icon'}
          onClick={recall(onMenu, {
            links: getLinks(user?.role.permissions || []).map((link, index) => ({
              id: index,
              text: link.component,
              onClick: () => router.push(link.path)
            }))
          })}>
          <Icon icon={'menu'} />
        </MenuButton>
        <LogoZone>
          <Logotype>
            <Link href={'/'}>
              <a>
                <Tooltip
                  text={'Атомик – портал для формирования новой сферы образования'}
                  offset={{ bottom: 5 }}
                  place={'bottom'}
                  maxWidth={256}
                  multiline>
                  <Image src={'/images/logo.png'} alt={'Logotype'} />
                </Tooltip>
              </a>
            </Link>
          </Logotype>
        </LogoZone>
        <SearchBar appearance={'ghost'} />
      </Header>

      <Main>
        <SideBar
          user={{
            name: user.name,
            role: user.role.name,
            avatar: user?.avatar?.path || '/images/avatar-default.png'
          }}
          link={Link}
          links={getLinks(user?.role.permissions || []).map((link, index) => {
            const path = `/dashboard${link.path.length > 1 ? link.path : ''}`
            return {
              ...link,
              path,
              component: (
                <a key={index} className={router.pathname === path ? 'active' : ''}>
                  {React.cloneElement(link.component, { active: router.pathname === path })}
                </a>
              )
            }
          })}
        />

        <Content>
          <Column>{children}</Column>
        </Content>
      </Main>
    </MainLayout>
  )
}

export default DashboardLayout
