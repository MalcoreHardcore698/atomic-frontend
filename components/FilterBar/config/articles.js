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
  }
]

export default { sort, filter }
