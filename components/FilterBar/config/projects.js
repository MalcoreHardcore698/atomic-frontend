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
    value: 'description',
    label: 'Описание'
  },
  {
    value: 'category',
    label: 'Раздел'
  },
  {
    value: 'company',
    label: 'Компания'
  }
]

export const filter = [
  {
    label: 'Дата публикации',
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
      type: 'DIVISION'
    }
  },
  {
    label: 'Компания',
    name: 'company',
    type: 'SELECT',
    selectValueField: 'email',
    selectLabelField: 'name',
    query: queries.GET_USERS,
    queryType: 'getUsers',
    variables: {
      account: ['ENTITY'],
      role: 'USER'
    }
  }
]

export default { sort, filter }
