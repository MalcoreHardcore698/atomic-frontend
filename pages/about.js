import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { v4 } from 'uuid'

import Grid from '../atomic-ui/components/Grid'
import Column from '../atomic-ui/components/Column'
import Title from '../atomic-ui/components/Title'
import Text from '../atomic-ui/components/Text'
import Card from '../atomic-ui/components/Card'
import Tape from '../atomic-ui/components/Tape'
import Arrower from '../atomic-ui/components/Arrower'
import Breadcrumbs from '../atomic-ui/components/Breadcrumbs'
import IconIdea from '../atomic-ui/assets/images/heads/idea.svg'
import IconRainbow from '../atomic-ui/assets/images/heads/rainbow.svg'
import IconAnalys from '../atomic-ui/assets/images/heads/analys.svg'
import IconInsight from '../atomic-ui/assets/images/heads/insight.svg'
import IconScience from '../atomic-ui/assets/images/heads/science.svg'
import IconReborn from '../atomic-ui/assets/images/heads/reborn.svg'
import IconEducation from '../atomic-ui/assets/images/heads/education.svg'
import IconArrow from '../atomic-ui/assets/images/icons/arrow_right_circle.svg'

import DefaultLayout from '../layouts/default'

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
    text:
      'Уникальные архитектурные решения (капитального ремонта, реконструкции, нового строительства, «приспособления»)',
    extras: <IconIdea />,
    color: 'pink'
  },
  {
    text: 'Дизайнерские решения (фото объекта и описание)',
    extras: <IconRainbow />,
    color: 'green'
  },
  {
    text: (
      <Column style={{ gridGap: 5 }}>
        <p>Технико-экономические показатели</p>
        <p>- финансовые (стоимость объекта)</p>
        <p>- количество детей до/после</p>
        <p>- земля, количество классов и т.д.</p>
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
    text: 'Какие инновации при строительстве вы использовали',
    extras: <IconScience />,
    color: 'orange'
  },
  {
    text: 'Ваши уникальные подходы в повышении эффективности использования пространств',
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

const Container = styled(Column)`
  grid-gap: 75px;
`

const SolidCardSection = () => (
  <Grid>
    {SOLID_CARDS.map((card) => (
      <Card key={v4()} {...card} type={'solid'} />
    ))}
    <Card text={'Узнать больше'} color={'purple'} extras={<IconArrow />} type={'solid'} />
  </Grid>
)

const ArrowerSection = () => {
  const advantages = [
    'Продвижение автора и команды',
    'Government Relations – здесь можно «поговорить» с представителями государства',
    'Нетворкинг для бизнеса – полезные связи и знакомства',
    'Коммьюнити специалистов в сфере образования – только на Атомике можно увидеть уникальные решения',
    'Быть причастным к изменениям в образовательной среде'
  ]
  const [advantageFirst, setAdvantageFirst] = useState(0)
  const [advantageSecond, setAdvantageSecond] = useState(1)
  const [advantageThird, setAdvantageThird] = useState(2)

  return (
    <Column>
      <Title tag={'h2'}>Чем полезен Вам портал Атомик?</Title>

      <Arrower
        appearance={'default'}
        arrowLeft={'arrowLeft2'}
        arrowRight={'arrowRight2'}
        label={advantages[advantageFirst]}
        onChange={(sign) =>
          setAdvantageFirst(
            advantageFirst + sign < 0
              ? advantages.length - 1
              : advantageFirst + sign > advantages.length - 1
              ? 0
              : advantageFirst + sign
          )
        }
      />
      <Arrower
        appearance={'default'}
        arrowLeft={'arrowLeft2'}
        arrowRight={'arrowRight2'}
        label={advantages[advantageSecond]}
        onChange={(sign) =>
          setAdvantageSecond(
            advantageSecond + sign < 0
              ? advantages.length - 1
              : advantageSecond + sign > advantages.length - 1
              ? 0
              : advantageSecond + sign
          )
        }
      />
      <Arrower
        appearance={'default'}
        arrowLeft={'arrowLeft2'}
        arrowRight={'arrowRight2'}
        label={advantages[advantageThird]}
        onChange={(sign) =>
          setAdvantageThird(
            advantageThird + sign < 0
              ? advantages.length - 1
              : advantageThird + sign > advantages.length - 1
              ? 0
              : advantageThird + sign
          )
        }
      />
    </Column>
  )
}

const DefaultCardSection = () => (
  <Column>
    <Title tag={'h3'}>Как опубликовать свой проект на портале Атомике?</Title>
    <Text>В Ваших материалах должны быть:</Text>

    <Grid percentage={'minmax(325px, 1fr)'}>
      {DEFAULT_CARDS.map((card) => (
        <Card key={v4()} {...card} />
      ))}
    </Grid>
  </Column>
)

const About = () => {
  const router = useRouter()

  return (
    <DefaultLayout title={TITLE} background={'/images/background.png'}>
      <Column>
        <Breadcrumbs
          links={[{ label: 'Главная', path: '/' }, { label: 'О ресурсе' }]}
          callback={(path) => router.push(path)}
        />

        <Container>
          <Title>Атомик – портал для формирования новой сферы образования</Title>

          <SolidCardSection />

          <Tape
            text={
              'Для независимых авторов проектов в сфере образования, содержащих уникальные архитектурные или дизайнерские решения'
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
        </Container>
      </Column>
    </DefaultLayout>
  )
}

export default About
