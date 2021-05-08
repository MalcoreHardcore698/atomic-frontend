import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { onArticleCreate, onArticleEdit, onArticleLink } from '../store/helpers/article'
import { useHelper } from './useHelper'
import queries from '../graphql/queries'

export const useArticle = ({ isManage } = {}) => {
  const recall = useHelper()
  const user = useSelector((state) => state.user)

  const canEditStatus = useMemo(() => user && user.role.name === 'ADMIN', [user])

  const hasOwned = useCallback(
    (article) => user?.articles?.find((item) => item.id === article.id),
    [user]
  )

  const onLink = useCallback(
    (article) => {
      recall(onArticleLink, { id: article.id, auth: user?.email })
    },
    [user, recall]
  )

  const onEdit = (article, onAfter) =>
    recall(onArticleEdit, {
      id: article.id,
      canEditStatus,
      mutation: queries.UPDATE_ARTICLE,
      onAfter
    })()

  const onCreate = (onAfter) =>
    recall(onArticleCreate, {
      canEditStatus,
      mutation: queries.CREATE_ARTICLE,
      onAfter
    })()

  return { user, hasOwned, onLink, onEdit: isManage && onEdit, onCreate: isManage && onCreate }
}
