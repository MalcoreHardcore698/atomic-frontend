import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { v4 } from 'uuid'

import Grid from '../atomic-ui/components/Grid'
import Row from '../atomic-ui/components/Row'
import Column from '../atomic-ui/components/Column'
import Title from '../atomic-ui/components/Title'
import Text from '../atomic-ui/components/Text'
import Card, { Wrap as WrapCard } from '../atomic-ui/components/Card'
import Tape from '../atomic-ui/components/Tape'
import Arrower from '../atomic-ui/components/Arrower'
import Breadcrumbs from '../atomic-ui/components/Breadcrumbs'
import IconIdea from '../atomic-ui/assets/images/heads/idea.svg'
import IconAnalys from '../atomic-ui/assets/images/heads/analys.svg'
import IconInsight from '../atomic-ui/assets/images/heads/insight.svg'
import IconScience from '../atomic-ui/assets/images/heads/science.svg'
import IconReborn from '../atomic-ui/assets/images/heads/reborn.svg'
import IconEducation from '../atomic-ui/assets/images/heads/education.svg'
import IconArrow from '../atomic-ui/assets/images/icons/arrow_right_circle.svg'

import useHelper from '../hooks/useHelper'
import DefaultLayout from '../layouts/default'
import { onIndexVideoLink } from '../store/helpers'
import config from '../config'

const TITLE = 'О портале'

const SOLID_CARDS = [
  {
    text: 'Здесь авторы презентуют свои проекты',
    color: 'blue',
    extras: 1
  },
  {
    text: 'Проектные компании предлагают инновационные решения',
    color: 'orange',
    extras: 2
  },
  {
    text: 'Представители власти и бизнеса выбирают проекты для инвестиций',
    color: 'green',
    extras: 3
  }
]

const DEFAULT_CARDS = [
  {
    text: 'В Вашем проекте будут уникальные архитектурные решения, например, "Эктон"',
    extras: <IconIdea />,
    color: 'pink'
  },
  {
    text: (
      <Column style={{ gridGap: 5 }}>
        <p>Вы расскажите об основных показателях своего проекта:</p>
        <p>- финансовые (насколько это возможно)</p>
        <p>- количество прибавишихся учеников (даже если это прогноз)</p>
        <p>- качественное использование школьных территорий и т.д.</p>
      </Column>
    ),
    extras: <IconAnalys />,
    color: 'red'
  },
  {
    text: 'Описание что приобрела школа после ее преображения (рождения)',
    extras: <IconInsight />,
    color: 'blue'
  },
  {
    text:
      'Какие инновационные решения Вы применили в своем проекте: например, концепция "Smart-класс" /' +
      'включает себя создание пространства для творческой индивидуальности и совместных интерактивных /' +
      'активностей преподователя и школьников',
    extras: <IconScience />,
    color: 'orange'
  },
  {
    text: 'Какие уникальные методы использования школьных пространств Вы нашли',
    extras: <IconReborn />,
    color: 'red'
  },
  {
    text:
      'Какие передовые средства обучения были вами заложены (планетарии, 3д принтеры, высокотехнологические станки и.т.д.)',
    extras: <IconEducation />,
    color: 'green'
  }
]

const MainTitle = styled(Title)`
  @media only screen and (max-width: 480px) {
    font-size: 24px;
  }
`

const Container = styled(Column)`
  grid-gap: 25px;
`

const Content = styled(Column)`
  grid-gap: 75px;
  margin: 65px 0;
`

const SolidCards = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  grid-gap: var(--default-gap);

  ${WrapCard} {
    p {
      max-width: 300px;
    }
  }
`

const SolidCardSection = ({ onOpenVideo }) => (
  <SolidCards>
    {SOLID_CARDS.map((card) => (
      <Card key={v4()} {...card} type={'solid'} />
    ))}
    <Card
      text={'Что такое Атомик по мнению создателей'}
      color={'purple'}
      extras={<IconArrow />}
      type={'solid'}
      onClick={onOpenVideo}
    />
  </SolidCards>
)

const ArrowerSection = () => {
  const advantages = [
    'Продвижение автора и команды',
    'Government Relations – здесь можно «поговорить» с представителями государства',
    'Нетворкинг для бизнеса – полезные связи и знакомства',
    'Коммьюнити специалистов в сфере образования – только на Атомике можно увидеть уникальные решения',
    'Быть причастным к изменениям в образовательной среде'
  ]
  const [advantage, setAdvantage] = useState(0)

  return (
    <Column>
      <Arrower
        key={v4()}
        appearance={'default'}
        arrowLeft={'arrowLeft2'}
        arrowRight={'arrowRight2'}
        label={advantages[advantage]}
        onChange={(sign) =>
          setAdvantage(
            advantage + sign < 0
              ? advantages.length - 1
              : advantage + sign > advantages.length - 1
              ? 0
              : advantage + sign
          )
        }
        noMargin
      />
    </Column>
  )
}

const DefaultCardSection = () => (
  <Column>
    <Title tag={'h3'}>Как опубликовать свой проект на портале Атомик?</Title>
    <Text>Мы предполагаем, что...</Text>

    <Grid percentage={'minmax(325px, 1fr)'}>
      {DEFAULT_CARDS.map((card) => (
        <Card key={v4()} {...card} />
      ))}
    </Grid>
  </Column>
)

const About = () => {
  const recall = useHelper()
  const router = useRouter()

  return (
    <DefaultLayout title={TITLE} background={'/images/background.png'}>
      <Column>
        <Breadcrumbs
          links={[{ label: 'Главная', path: '/' }, { label: 'О ресурсе' }]}
          callback={(path) => router.push(path)}
        />

        <Container>
          <MainTitle>Атомик – портал для формирования новой сферы образования</MainTitle>

          <Content>
            <SolidCardSection
              onOpenVideo={recall(onIndexVideoLink, { video: config.get('video-id') })}
            />

            <Tape
              text={
                'Для авторов проектов в сфере образования, содержащих уникальные архитектурные или дизайнерские решения'
              }
            />

            <ArrowerSection />

            <Tape
              text={
                'Для проектных институтов или бюро, имеющих практику нового строительства, реконструкции или капитального ремонта общеобразовательной организации'
              }
            />

            <DefaultCardSection />

            <Tape text={'Для представителей государственного кластера всей страны'} />
          </Content>
        </Container>
      </Column>
    </DefaultLayout>
  )
}

export default About
