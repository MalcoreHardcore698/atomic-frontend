import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Row from '../../../atomic-ui/components/Row'

import List from '../../List'
import Organizer from '../../Organizer'
import ProjectSuit from '../../ProjectSuit'
import { useProject } from '../../../hooks/useProject'
import { INITIAL_DISPLAY_METHOD } from '../../../layouts/content'
import queries from '../../../graphql/queries'

const Wrap = styled(Row)`
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Feed = () => {
  const methods = useProject()
  const folder = useSelector((state) => state.root.folder)

  return (
    <Wrap>
      <Organizer />

      <List
        type={'getProjectsByIds'}
        emptyMessage={'Проектов нет'}
        query={queries.GET_PROJECTS_BY_IDS}
        initialDisplayMethod={INITIAL_DISPLAY_METHOD}
        variables={{ projects: folder?.projects }}
        component={(document) => (
          <ProjectSuit {...methods} project={document} layout={'row'} canRemove />
        )}
        withoutMore
      />
    </Wrap>
  )
}

export default Feed
