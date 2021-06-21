import React, { useEffect, useMemo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import Column from '../atomic-ui/components/Column'
import Switch from '../atomic-ui/components/Switch'
import Spinner from '../atomic-ui/components/Spinner'
import { hasAccess } from '../atomic-ui/utils/functions'

import DefaultLayout from '../layouts/default'
import UserBar from '../components/UserBar'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import PageRouter from '../components/Profile/PageRouter'
import { hasResponsibleMember } from '../components/Members'
import { Loader } from '../components/Styled'
import { useProfile } from '../hooks/useProfile'
import { profilePages } from '../__mock__'
import {
  articles as articlesFilterConfig,
  projects as projectsFilterConfig
} from '../components/FilterBar/config'

const TITLE = 'Профиль'

const Profile = () => {
  const router = useRouter()

  const {
    onChangePage,
    onAddProject,
    onAddArticle,
    onCompanyLink,
    onAboutMore,
    onMembers,
    onEdit
  } = useProfile()

  const { user, search, currentPage, visibleFilters } = useSelector((state) => ({
    user: state.user,
    search: state.root.search,
    currentPage: state.root.currentPage,
    visibleFilters: state.root.visibleFilters
  }))

  const isProjects = useMemo(() => currentPage === 'projects', [currentPage])
  const isArticles = useMemo(() => currentPage === 'articles', [currentPage])
  const isFeed = useMemo(() => currentPage === 'feed', [currentPage])

  const defaultCurrentPage = useMemo(
    () => profilePages.find((page) => page.value === currentPage),
    [currentPage]
  )

  const buttonCreateText = useMemo(
    () => (isProjects ? 'Предложить проект' : isArticles ? 'Предложить статью' : ''),
    [isProjects, isArticles]
  )

  const filterConfig = useMemo(() => {
    if (isArticles) return articlesFilterConfig
    return projectsFilterConfig
  }, [isArticles])

  const pages = useMemo(
    () =>
      profilePages.filter((page) =>
        !hasResponsibleMember(user) ? page.value !== 'articles' : true
      ),
    [user, profilePages]
  )

  const getCreateMethod = useCallback(() => {
    if (isProjects && hasAccess(user, 'PURPOSE_PROJECT')) return onAddProject
    if (isArticles && hasAccess(user, 'PURPOSE_ARTICLE')) return onAddArticle
  }, [user, isProjects, isArticles, onAddProject, onAddArticle])

  useEffect(() => {
    if (!user.authenticated) {
      router.push({ pathname: '/auth', query: router.query })
    }
  }, [user])

  useEffect(() => {
    const { page } = router.query
    if (page) onChangePage({ value: page })
  }, [router])

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
          onAboutMore={onAboutMore}
          onCompanyLink={onCompanyLink}
          onMembers={onMembers}
          onEdit={onEdit}
        />

        <Switch options={pages} defaultValue={defaultCurrentPage} onChange={onChangePage} stretch />

        {!isFeed && (
          <SearchBar
            defaultValue={search}
            buttonCreateText={buttonCreateText}
            onCreate={getCreateMethod()}
          />
        )}

        {!isFeed && <FilterBar {...filterConfig} isOpen={visibleFilters} />}

        <PageRouter page={currentPage} />
      </Column>
    </DefaultLayout>
  )
}

export default Profile
