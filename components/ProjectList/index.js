import React, { memo } from 'react'

import List from '../List'
import ProjectSuit from '../ProjectSuit'
import { useProject } from '../../hooks/useProject'
import { INITIAL_DISPLAY_METHOD } from '../../layouts/content'
import { COMMON_LOAD_LIMIT, COMMON_START_OFFSET } from '../../constants'
import queries from '../../graphql/queries'

const Document = memo(({ layout, preview, document, withStatus }) => {
  const methods = useProject()
  return (
    <ProjectSuit
      {...methods}
      layout={layout}
      project={document}
      preview={preview}
      withStatus={withStatus}
    />
  )
})

export const ProjectList = memo(
  ({
    limit,
    layout,
    preview,
    variables,
    startOffset,
    emptyMessage,
    initialDisplayMethod,
    withoutMore,
    withStatus
  }) => (
    <List
      type={'getProjects'}
      variables={variables}
      emptyMessage={emptyMessage}
      query={queries.GET_PROJECTS}
      limit={limit ?? COMMON_LOAD_LIMIT}
      startOffset={startOffset ?? COMMON_START_OFFSET}
      initialDisplayMethod={initialDisplayMethod ?? INITIAL_DISPLAY_METHOD}
      component={(document) => (
        <Document layout={layout} document={document} preview={preview} withStatus={withStatus} />
      )}
      withoutMore={withoutMore}
    />
  )
)

ProjectList.defaultProps = {
  emptyMessage: 'Проектов нет'
}

export default ProjectList
