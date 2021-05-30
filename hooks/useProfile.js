import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrentPage } from '../store/actions/root'
import { onArticleCreate } from '../store/helpers/article'
import { onProjectCreate } from '../store/helpers/project'
import { onUserClientEdit } from '../store/helpers/user'
import { useHelper } from './useHelper'
import { useUser } from './useUser'
import queries from '../graphql/queries'

export const useProfile = ({ isManage } = {}) => {
  const recall = useHelper()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const { onAboutMore, onMembers, onCompanyLink } = useUser({ isManage })

  const onChangePage = (item) => dispatch(setCurrentPage(item.value))

  const onAddProject = useCallback(() => {
    recall(onProjectCreate, {
      mutation: queries.CREATE_PROJECT,
      query: queries.GET_USERS,
      isPurpose: true
    })()
  }, [recall])

  const onAddArticle = useCallback(() => {
    recall(onArticleCreate, {
      mutation: queries.CREATE_ARTICLE,
      isPurpose: true
    })()
  }, [recall])

  const onEdit = useCallback(() => {
    recall(onUserClientEdit, {
      user: user?.email,
      mutations: {
        del: queries.DELETE_USER,
        forgotEmail: queries.LOGIN,
        forgotPassword: queries.RESET,
        changePassword: queries.UPDATE_CLIENT_USER,
        checkResetToken: queries.CHECK_RESET_TOKEN,
        update: queries.UPDATE_CLIENT_USER
      }
    })()
  }, [user, recall])

  return {
    user,
    onChangePage,
    onCompanyLink,
    onAddProject,
    onAddArticle,
    onAboutMore,
    onMembers,
    onEdit
  }
}
