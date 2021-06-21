import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import Column from '../atomic-ui/components/Column'
import Snacks from '../atomic-ui/components/Snacks'
import Spinner from '../atomic-ui/components/Spinner'
import Button from '../atomic-ui/components/Button'
import Divider from '../atomic-ui/components/Divider'
import Modal from '../atomic-ui/components/Modal'
import Text from '../atomic-ui/components/Text'

import Drawer from '../components/Drawer'
import { FixedLoader } from '../components/Styled'
import useEntityQuery from '../hooks/useEntityQuery'
import { removeItem, clearItems } from '../store/actions/snacks'
import { setMutate, setSearch, setSettings } from '../store/actions/root'
import { setModal } from '../store/actions/modal'
import { setUser } from '../store/actions/user'
import queries from '../graphql/queries'
import config from '../config'

const LIFETIME_OF_SNACK = 3000

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  width: 100%;
`

const GuideButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--default-color-accent);
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
  const { data: dataMeta, loading: loadingMeta } = useQuery(queries.GET_META)
  const { root, user, snacks, modal } = useSelector((state) => state)
  const dispatch = useDispatch()

  const onModalHide = () => {
    dispatch(setModal(null))
  }

  useEffect(() => {
    if (!loadingMeta && dataMeta?.getDashboardSettings) {
      dispatch(setSettings(dataMeta?.getDashboardSettings))
    }
  }, [dataMeta, loadingMeta])

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

  useEffect(() => {
    dispatch(setSearch(router.query.search))
  }, [router, dispatch])

  useDetectQuery()

  return (
    <React.Fragment>
      <Head>
        <title>{root.settings.meta.title}</title>
        <meta name={'description'} content={root.settings.meta.description} />
      </Head>

      {loading ? (
        <FixedLoader>
          <Spinner />
        </FixedLoader>
      ) : (
        <Wrapper>{children}</Wrapper>
      )}

      <Drawer />

      <Snacks snacks={snacks} onRemove={(snack) => dispatch(removeItem(snack.id))} />
      <Modal size={modal?.size} routes={modal?.routes} onHide={onModalHide} />

      {root.mutation && (
        <Mutator mutation={root.mutation} variables={root.variables} callback={root.callback} />
      )}
    </React.Fragment>
  )
}

export default MainLayout
