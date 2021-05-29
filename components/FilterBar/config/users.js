import { getLabelRole } from '../../../atomic-ui/utils/functions'

import queries from '../../../graphql/queries'

export const sort = [
  {
    value: 'createdAt',
    label: 'Дата публикации'
  },
  {
    value: 'account',
    label: 'Аккаунт'
  },
  {
    value: 'company',
    label: 'Компания'
  }
]

export const filter = [
  {
    label: 'Аккаунт',
    name: 'account',
    type: 'SELECT',
    selectRestrictions: ['ADMIN'],
    selectLabelDecorator: getLabelRole,
    query: queries.GET_ACCOUNT_TYPES,
    queryType: 'getAccountTypes'
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
