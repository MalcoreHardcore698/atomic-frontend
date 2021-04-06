import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Column from '../../atomic-ui/components/Column'
import Search from '../../atomic-ui/components/Search'
import Title from '../../atomic-ui/components/Title'

import ProjectCard, { Poster, Media } from '../ProjectCard'

export const Wrap = styled(Column)`
  position: relative;
  align-items: center;
  width: 100%;
  padding: 45px var(--main-offset-l);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--z-11);
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.15);
  }

  @media only screen and (max-width: 996px) {
    padding: 45px var(--main-offset-m);
  }

  @media only screen and (max-width: 768px) {
    padding: 45px var(--main-offset-s);
  }

  @media only screen and (max-width: 480px) {
    padding: 45px var(--main-offset-xs);
  }
`

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--z-10);

  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const GlobalSearch = styled(Search)`
  min-width: 815px;

  @media only screen and (max-width: 996px) {
    min-width: 480px;
  }

  @media only screen and (max-width: 768px) {
    min-width: 320px;
  }

  @media only screen and (max-width: 480px) {
    min-width: 285px;
  }
`

export const Header = styled(Column)`
  padding: 0 var(--main-offset-l);
  margin-bottom: 30px;

  @media only screen and (max-width: 996px) {
    padding: 0 var(--main-offset-m);
  }

  @media only screen and (max-width: 768px) {
    padding: 0 var(--main-offset-s);
  }

  @media only screen and (max-width: 480px) {
    padding: 0 var(--main-offset-xs);
  }
`

export const Container = styled(Column)`
  position: relative;
  z-index: var(--z-12);
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`

export const MainTitle = styled(Title)`
  text-align: center;
  color: white;

  @media only screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 1.25;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`

export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`

export const PrimaryProject = styled(ProjectCard)`
  flex-grow: 1;
  height: 100%;
  flex-basis: 50%;

  ${Poster} {
    height: 256px;
  }

  @media only screen and (max-width: 768px) {
    ${Media} {
      img {
        height: 256px;
        flex-basis: auto;
      }
    }
  }
`

export const Residues = styled(Column)`
  flex-grow: 1;

  @media only screen and (max-width: 1280px) {
    flex-direction: row;
    grid-gap: var(--default-gap);
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    grid-gap: var(--default-gap);
    width: 100%;
  }
`

export const Residue = styled(ProjectCard)`
  flex-grow: 1;

  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
`

export const detectOwnedProject = (projects, project) =>
  projects?.find((candidate) => candidate.id === project.id)

export const Scaffold = ({
  title,
  image,
  background,
  primary,
  residues,
  className,
  style,
  onLike,
  onLink,
  onAdd,
  onSearch,
  onAboutMore,
  onCompanyLink,
  onScreenshotClick
}) => {
  const { user, search } = useSelector((state) => ({
    user: state.user,
    search: state.root.search
  }))
  const getProjectProps = useCallback(
    (project, layout) => ({
      image,
      project,
      layout,
      slicedFactor: 5,
      owned: detectOwnedProject(user?.projects, project),
      added: !!user?.folders?.find(
        (folder) => !!folder?.projects?.find((item) => item === project.id)
      ),
      liked: !![...(project?.rating || [])].find((item) => item.email === user.email),
      onLike: onLike && (() => onLike(project)),
      onAdd: onAdd && (() => onAdd(project)),
      onLink: () => onLink(project, detectOwnedProject(user?.projects, project)),
      onAboutMore: () => onAboutMore(project),
      onCompanyLink: () => onCompanyLink(project),
      onScreenshotClick: (_, key) => onScreenshotClick(project, key)
    }),
    [user, image, onLike, onAdd, onAboutMore, onCompanyLink, onScreenshotClick]
  )

  return (
    <Wrap className={className} style={style}>
      <Background src={background} alt={'Background'} />

      <Container>
        <Header>
          {!search && title && <MainTitle>{title}</MainTitle>}
          <GlobalSearch onSubmit={onSearch} />
        </Header>

        {!search && (primary || (residues && residues.length > 0)) && (
          <Projects>
            {primary && <PrimaryProject {...getProjectProps(primary, 'column')} />}
            {residues && residues.length > 0 && (
              <Residues>
                {residues.map((project, index) => (
                  <Residue key={index} {...getProjectProps(project)} />
                ))}
              </Residues>
            )}
          </Projects>
        )}
      </Container>
    </Wrap>
  )
}

export default Scaffold
