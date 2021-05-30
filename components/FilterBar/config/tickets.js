import { getLabelCategory, getLabelStatusChat } from '../../../atomic-ui/utils/functions'

import queries from '../../../graphql/queries'

export const sort = [
  {
    value: 'createdAt',
    label: 'Дата публикации'
  },
  {
    value: 'title',
    label: 'Название'
  },
  {
    value: 'category',
    label: 'Раздел'
  },
  {
    value: 'author',
    label: 'Автор'
  },
  {
    value: 'counsellor',
    label: 'Консультант'
  },
  {
    value: 'status',
    label: 'Статус'
  }
]

export const filter = [
  {
    label: 'Дата обращения',
    name: 'createdAt',
    type: 'DATEPICKER'
  },
  {
    label: 'Раздел',
    name: 'category',
    type: 'SELECT',
    selectValueField: 'id',
    selectLabelField: 'name',
    query: queries.GET_CATEGORIES,
    queryType: 'getCategories',
    variables: {
      type: 'TICKET'
    }
  },
  {
    label: 'Автор',
    name: 'author',
    type: 'SELECT',
    selectValueField: 'email',
    selectLabelField: 'name',
    query: queries.GET_USERS,
    queryType: 'getUsers',
    variables: {
      account: ['INDIVIDUAL', 'ENTITY', 'OFICIAL'],
      role: 'USER'
    }
  },
  {
    label: 'Консультант',
    name: 'counsellor',
    type: 'SELECT',
    selectValueField: 'email',
    selectLabelField: 'name',
    query: queries.GET_USERS,
    queryType: 'getUsers',
    variables: {
      role: 'MODERATOR'
    }
  },
  {
    label: 'Статус',
    name: 'status',
    type: 'SELECT',
    selectLabelDecorator: getLabelStatusChat,
    query: queries.GET_STATUS_TICKET_TYPES,
    queryType: 'getStatusTicketTypes'
  }
]

export default { sort, filter }
