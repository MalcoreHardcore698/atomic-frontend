import React from 'react'
import styled from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'

import ProjectCard, { Media } from '../../components/ProjectCard'
import Search from '../../components/SearchBar'

export const Wrap = styled(Column)`
  position: relative;
  align-items: center;
  width: 100%;
  padding: 95px var(--main-offset-l);

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

  img {
    height: 100%;
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
  user,
  title,
  image,
  background,
  primary,
  residue,
  className,
  style,
  onLike,
  onLink,
  onAdd,
  onCompanyLink,
  onScreenshotClick
}) => {
  const getProjectProps = (project, layout) => ({
    image,
    project,
    layout,
    slicedFactor: 5,
    owned: detectOwnedProject(user?.projects, project),
    added: !!user?.folders.find(
      (folder) => !!folder.projects.find((item) => item.id === project.id)
    ),
    liked: !!(user?.likedProjects || []).find((item) => item.id === project.id),
    onLike: onLike && (() => onLike(project)),
    onAdd: onAdd && (() => onAdd(project)),
    onLink: () => onLink(project, detectOwnedProject(user?.projects, project)),
    onCompanyLink: () => onCompanyLink(project),
    onScreenshotClick: (_, key) => onScreenshotClick(project, key)
  })

  return (
    <Wrap className={className} style={style}>
      <Background src={background} alt={'Background'} />

      <Container>
        <Header>
          {title && <MainTitle>{title}</MainTitle>}
          <Search />
        </Header>

        {(primary || (residue && residue.length > 0)) && (
          <Projects>
            {primary && <PrimaryProject {...getProjectProps(primary, 'column')} />}
            {residue && residue.length > 0 && (
              <Residues>
                {residue.slice(0, 2).map((project, index) => (
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
