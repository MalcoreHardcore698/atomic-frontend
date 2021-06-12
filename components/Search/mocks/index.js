import React from 'react'

import UserCard from '../../UserCard'
import CategoryCard from '../../CategoryCard'
import ArticleCard from '../../ArticleCard'
import ProjectCard from '../../ProjectCard'
import TicketCard from '../../TicketCard'
import RoleCard from '../../RoleCard'
import queries from '../../../graphql/queries'

export const entities = [
  {
    value: 'getUsers',
    label: 'Пользователи',
    singlePath: 'user',
    originPath: 'users',
    query: queries.GET_USERS,
    deleteQuery: queries.DELETE_USER,
    deleteEntityMultiText: 'Пользователи',
    deleteEntitySingleText: 'Пользователь',
    render: (item, props) => <UserCard {...props} user={item} />
  },
  {
    value: 'getCategories',
    label: 'Категории',
    singlePath: 'category',
    originPath: 'categories',
    query: queries.GET_CATEGORIES,
    deleteQuery: queries.DELETE_CATEGORY,
    deleteEntityMultiText: 'Категории',
    deleteEntitySingleText: 'Категория',
    render: (item, props) => <CategoryCard {...props} category={item} />
  },
  {
    value: 'getArticles',
    label: 'Статьи',
    singlePath: 'article',
    originPath: 'articles',
    query: queries.GET_ARTICLES,
    deleteQuery: queries.DELETE_ARTICLE,
    deleteEntityMultiText: 'Статьи',
    deleteEntitySingleText: 'Статья',
    render: (item, props) => <ArticleCard {...props} article={item} />
  },
  {
    value: 'getProjects',
    label: 'Проекты',
    singlePath: 'project',
    originPath: 'projects',
    query: queries.GET_PROJECTS,
    deleteQuery: queries.DELETE_PROJECT,
    deleteEntityMultiText: 'Продукты',
    deleteEntitySingleText: 'Продукт',
    render: (item, props) => <ProjectCard {...props} project={item} preview />
  },
  {
    value: 'getTickets',
    label: 'Обращения',
    singlePath: 'ticket',
    originPath: 'tickets',
    query: queries.GET_TICKETS,
    deleteQuery: queries.DELETE_TICKET,
    deleteEntityMultiText: 'Обращения',
    deleteEntitySingleText: 'Обращение',
    render: (item, props) => <TicketCard {...props} ticket={item} />
  },
  {
    value: 'getRoles',
    label: 'Роли',
    singlePath: 'role',
    originPath: 'roles',
    query: queries.GET_ROLES,
    deleteQuery: queries.DELETE_ROLE,
    deleteEntityMultiText: 'Роли',
    deleteEntitySingleText: 'Роль',
    render: (item, props) => <RoleCard {...props} role={item} />
  }
]
