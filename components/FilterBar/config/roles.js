import { getLabelPermission } from '../../../atomic-ui/utils/functions'

import queries from '../../../graphql/queries'

export const sort = [
  {
    value: 'createdAt',
    label: 'Дата публикации'
  },
  {
    value: 'name',
    label: 'Название'
  }
]

export const filter = [
  {
    label: 'Дата публикации',
    name: 'createdAt',
    type: 'DATEPICKER'
  },
  {
    label: 'Привилегии',
    name: 'permissions',
    type: 'MULTISELECT',
    selectLabelDecorator: getLabelPermission,
    query: queries.GET_PERMISSIONS,
    queryType: 'getPermissions'
  }
]

export default { sort, filter }
