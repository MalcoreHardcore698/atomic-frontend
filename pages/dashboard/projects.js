import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import template from '../../atomic-ui/components/Table/templates/category'

import ContentLayout from '../../layouts/dashboard/content'
import ProjectCard from '../../components/ProjectCard'
import { getProjectLinkProps } from '../../hooks/useEntityQuery'
import { onProjectCreate, onProjectEdit, onProjectLink } from '../../store/helpers/project'
import { setDocuments } from '../../store/actions/documents'
import { setUserFolder } from '../../store/actions/user'
import { useHelper } from '../../hooks/useHelper'
import { useMutate } from '../../hooks/useMutate'
import queries from '../../graphql/queries'

const TITLE = 'Проекты'

const LIMIT = 12
const START_OFFSET = 0

const Projects = () => {
  const recall = useHelper()
  const mutate = useMutate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const canEditStatus = useMemo(() => user && user.role.name === 'ADMIN', [user])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      limit={LIMIT}
      icon={'work'}
      template={template}
      startOffset={START_OFFSET}
      emptyMessage={'Проектов нет'}
      buttonCreateText={'Создать проект'}
      getType={'getProjects'}
      getQuery={queries.GET_PROJECTS}
      deleteQuery={queries.DELETE_PROJECT}
      deleteEntityMultiText={'проекты'}
      deleteEntitySingleText={'проект'}
      onLink={(project) => {
        const owned = user?.projects?.find((candidate) => candidate.id === project.id)
        recall(
          onProjectLink,
          getProjectLinkProps(project.id, user, owned, dispatch, mutate, recall, (item) => {
            const result = { ...item, projects: [...item.projects, project.id] }
            dispatch(setUserFolder(result))
          })
        )()
      }}
      onEdit={(project, onAfter) =>
        recall(onProjectEdit, {
          id: project.id,
          canEditStatus,
          mutation: queries.UPDATE_PROJECT,
          query: queries.GET_USERS,
          onCompanyInputChange: mutate(queries.GET_USERS, { account: 'ENTITY' }),
          onAfter
        })()
      }
      onCreate={(onAfter) =>
        recall(onProjectCreate, {
          canEditStatus,
          mutation: queries.CREATE_PROJECT,
          query: queries.GET_USERS,
          onAfter
        })()
      }
      render={(document) => <ProjectCard project={document} withSocials preview />}
    />
  )
}

export default Projects
