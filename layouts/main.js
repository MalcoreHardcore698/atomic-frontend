import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'

import Row from '../atomic-ui/components/Row'
import Column from '../atomic-ui/components/Column'
import Snacks from '../atomic-ui/components/Snacks'
import Difinition from '../atomic-ui/components/Difinition'
import Spinner from '../atomic-ui/components/Spinner'
import Drawer from '../atomic-ui/components/Drawer'
import Button from '../atomic-ui/components/Button'
import Icon from '../atomic-ui/components/Icon'
import Divider from '../atomic-ui/components/Divider'
import Modal from '../atomic-ui/components/Modal'
import Text from '../atomic-ui/components/Text'

import { FixedLoader } from '../components/Styled'
import { removeItem, clearItems } from '../store/actions/snacks'
import { setUser } from '../store/actions/user'
import { setDrawer } from '../store/actions/drawer'
import { setModal } from '../store/actions/modal'
import { setMutate } from '../store/actions/root'
import queries from '../graphql/queries'
import config from '../config'
import useEntityQuery from '../hooks/useEntityQuery'

const LIFETIME_OF_SNACK = 3000

const Container = styled(Column)`
  height: 100%;
  flex-grow: 1;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms, blur 100ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 100ms, blur 100ms;
  }
`

export const BrandLogo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

const Header = styled(Row)`
  display: flex;
  grid-gap: var(--default-gap);
`

const GuideButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--default-color-accent);
`

const BackButton = styled(Button)`
  display: none;

  @media only screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Welcome = ({ close }) => {
  const router = useRouter()

  return (
    <Column style={{ padding: '15px' }}>
      <Text>
        Atomic - своеобразная площадка для переговоров между представителями индустрии. Аналогично
        социальной сети на сайте есть возможность реагировать на проекты, подписываться на
        разработчиков и заказчиков, оценивать их аккаунты и проекты, общаться между собой и делиться
        информацией ресурса на любых других площадках.
      </Text>
      <Button onClick={close}>Вперед!</Button>
      <Divider clear />
      <GuideButton
        onClick={() => {
          close()
          return router.push('/guide')
        }}
        appearance={'clear'}>
        Инструкция
      </GuideButton>
    </Column>
  )
}

const Mutator = ({ mutation, variables, callback }) => {
  const [action] = useMutation(mutation)
  const dispatch = useDispatch()

  useEffect(() => {
    async function mutate() {
      const response = await action({ variables })
      dispatch(setMutate(null, null))
      if (callback) await callback(response)
    }
    mutate().then()
  }, [action, dispatch, variables, callback])

  return null
}

export const MainLayout = ({ children }) => {
  const router = useRouter()
  const { useDetectQuery } = useEntityQuery()
  const [getUser, { data, loading }] = useLazyQuery(queries.GET_USER)
  const { root, user, drawer, snacks, modal } = useSelector((state) => state)
  const dispatch = useDispatch()

  const onDrawerBack = async () => {
    await router.push(
      {
        pathname: router.pathname,
        query: {}
      },
      undefined,
      { shallow: true }
    )
    dispatch(setDrawer(null))
  }

  const onModalHide = () => {
    dispatch(setModal(null))
  }

  useEffect(() => {
    if (snacks?.length > 0) {
      setTimeout(() => dispatch(clearItems()), LIFETIME_OF_SNACK)
    }
  }, [snacks])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(config.get('secret'))
      if (token) getUser()
    }
  }, [])

  useEffect(() => {
    if (data && data.getUser) {
      dispatch(setUser(data.getUser))
    }
  }, [data, dispatch])

  useEffect(() => {
    if (user.authenticated && user.register) {
      dispatch(
        setModal([
          {
            path: '/',
            title: 'Добро пожаловать!',
            component: ({ close }) => <Welcome close={close} />
          }
        ])
      )
    }
  }, [user, dispatch])

  useDetectQuery()

  return (
    <React.Fragment>
      <Head>
        <title>Загрузка...</title>
      </Head>

      {loading ? (
        <FixedLoader>
          <Spinner />
        </FixedLoader>
      ) : (
        children
      )}

      <Drawer
        key={drawer.history.length}
        side={drawer.side}
        half={drawer.half}
        isOpen={drawer.open}
        onBack={onDrawerBack}>
        <Container>
          <Header>
            {drawer.side === 'left' && drawer.half ? (
              <Button appearance={'clear'} onClick={() => router.push('/')}>
                <BrandLogo src={'/images/logo.png'} alt={'Logotype'} />
              </Button>
            ) : (
              <BackButton size={'s'} kind={'icon'} onClick={onDrawerBack} revert>
                <Icon icon={'arrowLeft'} size={'s'} stroke={'var(--default-color-accent)'} />
              </BackButton>
            )}

            {drawer.title && (
              <Difinition color={drawer.color} icon={drawer.icon} text={drawer.title} />
            )}
          </Header>
          {drawer.title && <Divider clear />}

          {drawer.content}
        </Container>
      </Drawer>

      <Snacks snacks={snacks} onRemove={(snack) => dispatch(removeItem(snack.id))} />
      <Modal size={modal?.size} routes={modal?.routes} onHide={onModalHide} />

      {root.mutation && (
        <Mutator mutation={root.mutation} variables={root.variables} callback={root.callback} />
      )}
    </React.Fragment>
  )
}

export default MainLayout
