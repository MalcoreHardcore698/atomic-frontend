import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'

import Row from '../../atomic-ui/components/Row'
import Grid from '../../atomic-ui/components/Grid'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Notice from '../../atomic-ui/components/Notice'
import Difinition from '../../atomic-ui/components/Difinition'
import Indicator from '../../atomic-ui/components/Indicator'
import Chart from '../../atomic-ui/components/Chart'

import { useHelper } from '../../hooks/useHelper'
import DashboardLayout from '../../layouts/dashboard'
import Processed from '../../components/Processed'
import FadeLoad from '../../components/FadeLoad'
import LazyLoad from '../../components/LazyLoad'
import ProjectCard from '../../components/ProjectCard'
import ArticleCard from '../../components/ArticleCard'
import { onProjectLink } from '../../store/helpers/project'
import { onArticleLink } from '../../store/helpers/article'
import { onUserAboutMore } from '../../store/helpers/user'
import queries from '../../graphql/queries'

const TITLE = 'Панель администратора'
const GREETING_TEXT = 'Добро пожаловать!'

const Container = styled(Column)`
  grid-gap: 10px;
`

const Statistics = styled(Row)`
  flex-wrap: wrap;
`

const Graph = styled(Chart)`
  height: 100%;
  flex-grow: 1;
`

const Header = styled(Row)`
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--default-color-accent);
  }
`

const Dashboard = () => {
  const recall = useHelper()
  const user = useSelector((state) => state.user)

  const { data: dataStatistics, loading: loadingStatistics, error: errorStatistics } = useQuery(
    queries.GET_META_DASHBOARD_STATISTICS
  )

  const { data: dataActivities, loading: loadingActivities, error: errorActivities } = useQuery(
    queries.GET_META_DASHBOARD_ACTIVITIES
  )

  const { data: dataProjects, loading: loadingProjects, error: errorProjects } = useQuery(
    queries.GET_META_DASHBOARD_PREVIEW_PROJECTS,
    {
      variables: {
        offset: 0,
        limit: 4
      }
    }
  )

  const { data: dataArticles, loading: loadingArticles, error: errorArticles } = useQuery(
    queries.GET_META_DASHBOARD_PREVIEW_ARTICLES,
    {
      variables: {
        offset: 0,
        limit: 4
      }
    }
  )

  return (
    <DashboardLayout title={TITLE}>
      <Difinition icon={'activity'} text={GREETING_TEXT} />

      <Grid length={'auto-fit'}>
        <Column>
          <Statistics length={'auto-fit'}>
            <Processed data={dataStatistics} loading={loadingStatistics} error={errorStatistics}>
              {dataStatistics?.getDashboardStatistics?.map((statistic) => (
                <Indicator
                  key={statistic.title}
                  label={statistic.title}
                  value={statistic.total}
                  movement={34}
                  positive
                />
              ))}
            </Processed>
          </Statistics>

          <Processed data={dataStatistics} loading={loadingStatistics} error={errorStatistics}>
            <Graph
              data={[
                {
                  label: dataStatistics?.getDashboardStatistics[0].title,
                  data: dataStatistics?.getDashboardStatistics[0].graph.map((item) => ({
                    primary: item.createdAt,
                    secondary: item.count
                  }))
                }
              ]}
              axes={[
                { primary: true, type: 'linear', position: 'bottom' },
                { type: 'linear', position: 'left' }
              ]}
            />
          </Processed>
        </Column>

        <Container>
          <Header>
            <Title tag={'h3'}>Активность пользователей</Title>
          </Header>

          <Column>
            <Processed data={dataActivities} loading={loadingActivities} error={errorActivities}>
              {(dataActivities?.getDashboardActivities || []).map((activity) => (
                <FadeLoad key={activity.id}>
                  <LazyLoad>
                    <Notice
                      key={activity.id}
                      img={activity.user?.avatar?.path}
                      title={activity.user.name}
                      message={activity.message}
                      date={activity.createdAt}
                      appearance={'clear'}
                    />
                  </LazyLoad>
                </FadeLoad>
              ))}
            </Processed>
          </Column>
        </Container>
      </Grid>

      <Grid length={'auto-fit'}>
        <Container>
          <Header>
            <Title tag={'h3'}>Последние проекты</Title>
            <Link href={'/dashboard/projects'}>
              <a>Больше проектов</a>
            </Link>
          </Header>

          <Grid length={'auto-fit'} percentage={'minmax(395px, 1fr)'}>
            <Processed data={dataProjects} loading={loadingProjects} error={errorProjects}>
              {(dataProjects?.getProjects || []).map((project) => (
                <FadeLoad key={project.id}>
                  <LazyLoad>
                    <ProjectCard
                      project={project}
                      onLink={recall(onProjectLink, { id: project.id, user })}
                      onAboutMore={recall(onUserAboutMore, { user: project })}
                    />
                  </LazyLoad>
                </FadeLoad>
              ))}
            </Processed>
          </Grid>
        </Container>

        <Container>
          <Header>
            <Title tag={'h3'}>Последние статьи</Title>
            <Link href={'/dashboard/articles'}>
              <a>Больше статей</a>
            </Link>
          </Header>

          <Grid length={'auto-fit'} percentage={'minmax(395px, 1fr)'}>
            <Processed data={dataArticles} loading={loadingArticles} error={errorArticles}>
              {(dataArticles?.getArticles || []).map((article) => (
                <FadeLoad key={article.id}>
                  <LazyLoad>
                    <ArticleCard
                      article={article}
                      onLink={recall(onArticleLink, { id: article.id })}
                    />
                  </LazyLoad>
                </FadeLoad>
              ))}
            </Processed>
          </Grid>
        </Container>
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard
