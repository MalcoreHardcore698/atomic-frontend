import { getLabelCategory } from '../../../atomic-ui/utils/functions'

import queries from '../../../graphql/queries'

export const sort = [
  {
    value: 'createdAt',
    label: 'Дата публикации'
  },
  {
    value: 'name',
    label: 'Название'
  },
  {
    value: 'description',
    label: 'Описание'
  },
  {
    value: 'type',
    label: 'Тип'
  }
]

export const filter = [
  {
    label: 'Дата публикации',
    name: 'createdAt',
    type: 'DATEPICKER'
  },
  {
    label: 'Тип',
    name: 'type',
    type: 'SELECT',
    selectLabelDecorator: getLabelCategory,
    query: queries.GET_CATEGORY_TYPES,
    queryType: 'getCategoryTypes'
  }
]

export default { sort, filter }
