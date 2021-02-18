import React from 'react'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Meta from '../../atomic-ui/components/Meta'
import Divider from '../../atomic-ui/components/Divider'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Image from '../../atomic-ui/components/Image'
import Tooltip from '../../atomic-ui/components/Tooltip'
import Button from '../../atomic-ui/components/Button'
import Difinition from '../../atomic-ui/components/Difinition'

import { getLabelRole } from '../../utils/functions'
import { More } from '../Styled'

export const Wrap = styled(Row)`
  width: 100%;

  @media only screen and (max-width: 568px) {
    flex-direction: column;
    grid-gap: var(--default-gap);
  }
`

export const Content = styled(Column)`
  justify-content: space-between;
  grid-gap: 0;
  width: 100%;
`

export const RoundedAvatar = styled(Image)`
  width: 256px;
  height: 256px;
  border-radius: var(--surface-border-radius);
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    width: 169px;
  }

  @media only screen and (max-width: 568px) {
    width: 100%;
  }
`

export const About = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 100;

  @media only screen and (max-width: 568px) {
    margin-bottom: 15px;
  }
`

export const Difinitions = styled(Row)`
  flex-wrap: wrap;
  justify-content: space-between;
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 568px) {
    flex-direction: column;
    grid-gap: var(--default-gap);
  }
`

export const EditButton = styled(Button)`
  font-size: var(--font-size-s);
  color: var(--ghost-color-text);
  transition: color 150ms ease;

  &:hover {
    color: black;
  }
`

export const User = ({ user, onEdit, onAboutMore }) => (
  <Wrap>
    <RoundedAvatar src={user?.avatar?.path || '/images/avatar-default.png'} />

    <Content>
      <Meta category={getLabelRole(user.account)} />

      <Row style={{ gridGap: '0 10px' }}>
        <Title tag={'h3'}>{user.name}</Title>
        <Tooltip place={'top'} text={'Редактировать'}>
          <EditButton
            type={'button'}
            kind={'icon'}
            size={'xs'}
            appearance={'clear'}
            onClick={onEdit}>
            Ред.
          </EditButton>
        </Tooltip>
      </Row>

      <Divider style={{ margin: '5px 0' }} />

      <About>
        {user?.about?.length > 135 ? (
          <React.Fragment>
            <Text>{user.about.slice(0, 135)}...</Text>
            <More onClick={onAboutMore}>Подробнее</More>
          </React.Fragment>
        ) : (
          <Text>{user.about || 'Информация о себе не заполнена'}</Text>
        )}
      </About>

      <Difinitions>
        <Difinition icon={'chart'} label={'Компания'} text={user?.company || 0} />
        <Difinition icon={'work'} label={'Проекты'} text={user?.projects?.length || 0} />
        <Difinition icon={'user2'} label={'Подписчики'} text={user?.followers || 0} />
      </Difinitions>
    </Content>
  </Wrap>
)

export default User
