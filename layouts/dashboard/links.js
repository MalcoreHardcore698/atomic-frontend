import React from 'react'
import { LinkStrip } from '../../components/SideBar'

export const getLinks = (permissions) => {
  const getAccess = (value) => permissions.find((permission) => permission === value)

  const result = [
    {
      path: '/',
      component: <LinkStrip icon={'activity'} text={'Главная'} />
    }
  ]

  const isHasAccessToUsers = getAccess('VIEW_USER')
  const isHasAccessToCategories = getAccess('VIEW_CATEGORY')
  const isHasAccessToArticles = getAccess('VIEW_ARTICLE')
  const isHasAccessToProjects = getAccess('VIEW_PROJECT')
  const isHasAccessToTickets = getAccess('VIEW_TICKET')
  const isHasAccessToRoles = getAccess('VIEW_ROLE')
  const isHasAccessToSettings = getAccess('VIEW_USER')

  if (isHasAccessToUsers) {
    result.push({
      path: '/users',
      component: <LinkStrip icon={'user2'} text={'Пользователи'} />
    })
  }

  if (isHasAccessToCategories) {
    result.push({
      path: '/categories',
      component: <LinkStrip icon={'folder'} text={'Категории'} />
    })
  }

  if (isHasAccessToArticles) {
    result.push({
      path: '/articles',
      component: <LinkStrip icon={'document'} text={'Статьи'} />
    })
  }

  if (isHasAccessToProjects) {
    result.push({
      path: '/projects',
      component: <LinkStrip icon={'work'} text={'Проекты'} />
    })
  }

  if (isHasAccessToTickets) {
    result.push({
      path: '/tickets',
      component: <LinkStrip icon={'ticket'} text={'Обращения'} />
    })
  }

  if (isHasAccessToRoles) {
    result.push({
      divide: true,
      path: '/roles',
      component: <LinkStrip icon={'lock'} text={'Роли'} />
    })
  }

  if (isHasAccessToSettings) {
    result.push({
      path: '/settings',
      component: <LinkStrip icon={'setting'} text={'Настройки'} />
    })
  }

  return result
}

export default getLinks
