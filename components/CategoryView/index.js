import React from 'react'
import styled, { css } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'

import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'
import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'
import { getLabelCategory } from '../../atomic-ui/utils/functions'

import { Loader } from '../Styled'
import queries from '../../graphql/queries'

export const Wrap = styled(Column)`
  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      padding: var(--default-gap);
      background: var(--surface-background);
      border: var(--surface-border);
      border-radius: var(--surface-border-radius);
      box-shadow: var(--surface-shadow);
    `}

  ${({ appearance }) =>
    appearance === 'ghost' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}
`

export const Poster = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 512px;
  border-radius: var(--surface-border-radius);
`

export const Content = styled(Column)`
  grid-gap: 0;
`

export const View = ({ category, appearance, className, style }) => {
  const { data, loading, error } = useQuery(queries.GET_CATEGORY, {
    variables: {
      id: category
    }
  })

  return (
    <Wrap className={className} style={style} appearance={appearance}>
      {!loading && data.getCategory ? (
        <Content>
          <Meta
            date={data.getCategory.createdAt}
            category={getLabelCategory(data.getCategory.type)}
          />
          <Title tag={'h4'}>{data.getCategory.name}</Title>
          <Text>{data.getCategory.description}</Text>
        </Content>
      ) : error ? (
        <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
          Упс! Не удалось загрузить информацию о статье
        </Alert>
      ) : (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </Wrap>
  )
}

View.defaultProps = {
  appearance: 'default'
}

export default View
