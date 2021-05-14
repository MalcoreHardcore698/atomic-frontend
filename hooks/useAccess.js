import { useMemo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { hasAccess } from '../atomic-ui/utils/functions'

export const useAccess = (entityType = '') => {
  const user = useSelector((state) => state.user)

  const getAccess = useCallback(
    (action) => hasAccess(user, `${action}_${entityType}`.toUpperCase()),
    [user, entityType]
  )

  const isAccessibleForView = useMemo(() => getAccess('view'), [getAccess])

  const isAccessibleForAdd = useMemo(() => getAccess('add'), [getAccess])

  const isAccessibleForEdit = useMemo(() => getAccess('edit'), [getAccess])

  const isAccessibleForDelete = useMemo(() => getAccess('delete'), [getAccess])

  return {
    isAccessibleForView,
    isAccessibleForAdd,
    isAccessibleForEdit,
    isAccessibleForDelete,
    getAccess
  }
}
