import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Row from '../atomic-ui/components/Row'
import Column from '../atomic-ui/components/Column'
import Switch from '../atomic-ui/components/Switch'
import Spinner from '../atomic-ui/components/Spinner'
import { hasAccess } from '../atomic-ui/utils/functions'

import { INITIAL_DISPLAY_METHOD } from '../layouts/content'
import DefaultLayout from '../layouts/default'
import UserBar from '../components/UserBar'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import ProjectList from '../components/ProjectList'
import ArticleList from '../components/ArticleList'
import ProjectSuit from '../components/ProjectSuit'
import { hasResponsibleMember } from '../components/Members'
import Organizer from '../components/Organizer'
import List from '../components/List'
import { Loader } from '../components/Styled'
import { setCompanies, setCategories, setStatuses, setSearch } from '../store/actions/root'
import { onUserClientEdit, onUserAboutMore, onUserMembers, onUserLink } from '../store/helpers/user'
import { onProjectCreate } from '../store/helpers/project'
import { onArticleCreate } from '../store/helpers/article'
import { useProject } from '../hooks/useProject'
import { useHelper } from '../hooks/useHelper'
import { profilePages } from '../__mock__'
import queries from '../graphql/queries'

const TITLE = 'Профиль'
const START_OFFSET = 0
const LIMIT = 4

const DISABLED_FILTERS = true

const ContainerInProgress = styled(Row)`
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const InProgress = () => {
  const methods = useProject()
  const user = useSelector((state) => state.user)

  const defaultFolder = useMemo(() => user?.folders[0], [user])

  return (
    <ContainerInProgress>
      <Organizer defaultFolder={defaultFolder} />

      <List
        limit={LIMIT}
        type={'getProjectsByIds'}
        variables={{ projects: defaultFolder.projects }}
        startOffset={START_OFFSET}
        query={queries.GET_PROJECTS_BY_IDS}
        emptyMessage={'Проектов нет'}
        initialDisplayMethod={INITIAL_DISPLAY_METHOD}
        component={(document) => <ProjectSuit {...methods} project={document} layout={'row'} />}
      />
    </ContainerInProgress>
  )
}

const Profile = () => {
  const recall = useHelper()
  const router = useRouter()
  const { user, search, companies, categories, statuses } = useSelector((state) => ({
    user: state.user,
    search: state.root.search,
    companies: state.root.companies,
    categories: state.root.categories,
    statuses: state.root.statuses
  }))
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(profilePages[0])
  const [visibleFilter, setVisibleFilter] = useState(false)
  const isAdmin = useMemo(() => user?.account === 'ADMIN', [user])

  const [loadCompanies] = useLazyQuery(queries.GET_USERS)
  const [loadCategories] = useLazyQuery(queries.GET_CATEGORIES)
  const [loadStatuses] = useLazyQuery(queries.GET_POST_STATUSES)

  const isProjects = useMemo(() => currentPage.value === '/projects', [currentPage])
  const isArticles = useMemo(() => currentPage.value === '/articles', [currentPage])

  const onAddProject = async () => {
    const companiesResponse =
      companies?.length === 0 &&
      loadCompanies &&
      (await loadCompanies({ variables: { account: ['ENTITY'] } }))
    const categoriesResponse =
      categories?.length === 0 &&
      loadCategories &&
      (await loadCategories({ variables: { type: 'DIVISION' } }))
    const statusesResponse = statuses?.length === 0 && loadStatuses && (await loadStatuses())

    const companiesResult = companiesResponse?.data?.getUsers
    const categoriesResult = categoriesResponse?.data?.getCategories
    const statusesResult = statusesResponse?.data?.getPostStatus

    if (companiesResult) dispatch(setCompanies(companiesResult))
    if (categoriesResult) dispatch(setCategories(categoriesResult))
    if (statusesResult) dispatch(setStatuses(statusesResult))

    recall(onProjectCreate, {
      companies: companiesResult || companies,
      categories: categoriesResult || categories,
      statuses: statusesResult || statuses,
      mutation: queries.CREATE_PROJECT,
      query: queries.GET_USERS,
      isPurpose: true
    })()
  }

  const onAddArticle = async () => {
    const categoriesResponse =
      categories?.length === 0 &&
      loadCategories &&
      (await loadCategories({ variables: { type: 'DIVISION' } }))
    const statusesResponse = statuses?.length === 0 && loadStatuses && (await loadStatuses())

    const categoriesResult = categoriesResponse?.data?.getCategories
    const statusesResult = statusesResponse?.data?.getPostStatus

    if (categoriesResult) dispatch(setCategories(categoriesResult))
    if (statusesResult) dispatch(setStatuses(statusesResult))

    recall(onArticleCreate, {
      categories: categoriesResult || categories,
      statuses: statusesResult || statuses,
      mutation: queries.CREATE_ARTICLE,
      isPurpose: true
    })()
  }

  const onSearch = (value) => {
    if (value) dispatch(setSearch(value))
    else dispatch(setSearch(null))
  }

  const renderContentPage = useCallback(() => {
    if (!user) return null
    switch (currentPage.value) {
      case '/projects':
        return <ProjectList variables={{ author: user.email }} />
      case '/liked':
        return <ProjectList variables={{ rating: user.email }} />
      case '/articles':
        return <ArticleList variables={{ author: user.email }} layout={'row'} />
      default:
        return <InProgress />
    }
  }, [user, currentPage])

  useEffect(() => {
    if (!user.authenticated) {
      router.push('/auth')
    }
  }, [user])

  if (!user.authenticated) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    )
  }

  return (
    <DefaultLayout title={user.authenticated ? user.name || TITLE : 'Авторизация'}>
      <Column>
        <UserBar
          user={user}
          onEdit={recall(onUserClientEdit, {
            user: user?.email,
            canEditAccount: !isAdmin,
            mutations: {
              del: queries.DELETE_USER,
              forgotEmail: queries.LOGIN,
              forgotPassword: queries.RESET,
              changePassword: queries.UPDATE_CLIENT_USER,
              checkResetToken: queries.CHECK_RESET_TOKEN,
              update: queries.UPDATE_CLIENT_USER
            }
          })}
          onAboutMore={recall(onUserAboutMore, { user })}
          onCompanyLink={
            user?.company &&
            recall(onUserLink, {
              id: user?.company?.email,
              auth: user?.email,
              queries: {
                userChats: queries.GET_USER_CHATS,
                chat: queries.GET_CHAT
              },
              mutations: {
                addUserChat: queries.ADD_USER_CHAT,
                sendMessage: queries.SEND_MESSAGE
              }
            })
          }
          onMembers={recall(onUserMembers, { id: user?.email, auth: user?.email })}
        />

        <Switch
          defaultValue={currentPage}
          options={profilePages.filter((page) =>
            !hasResponsibleMember(user) ? page.value !== '/articles' : true
          )}
          onChange={(item) => setCurrentPage(item)}
          stretch
        />

        <SearchBar
          defaultValue={search}
          buttonCreateText={
            isProjects ? 'Предложить проект' : isArticles ? 'Предложить статью' : ''
          }
          onCreate={
            (isProjects && hasAccess(user, 'PURPOSE_PROJECT') && onAddProject) ||
            (isArticles && hasAccess(user, 'PURPOSE_ARTICLE') && onAddArticle)
          }
          onChangeFilter={!DISABLED_FILTERS && (() => setVisibleFilter(!visibleFilter))}
          onSubmit={onSearch}
        />

        <FilterBar isOpen={visibleFilter} filters={[]} options={[]} />

        {renderContentPage()}
      </Column>
    </DefaultLayout>
  )
}

export default Profile
