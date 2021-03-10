import React from 'react'
import styled, { css } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { v4 } from 'uuid'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Meta from '../../atomic-ui/components/Meta'
import Divider from '../../atomic-ui/components/Divider'
import Chip from '../../atomic-ui/components/Chip'
import Alert from '../../atomic-ui/components/Alert'
import Title from '../../atomic-ui/components/Title'
import Spinner from '../../atomic-ui/components/Spinner'
import { getLabelRole, getLabelPermission } from '../../atomic-ui/utils/functions'

import { Loader } from '../Styled'
import queries from '../../graphql/queries'

export const Wrap = styled(Column)`
  grid-gap: var(--default-gap);
  height: max-content;

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

export const Permissions = styled(Row)`
  flex-wrap: wrap;
  grid-gap: 10px;
`

export const View = ({ role, appearance, className, style }) => {
  const { data, loading, error } = useQuery(queries.GET_ROLE, {
    variables: {
      id: role
    }
  })

  return (
    <Wrap className={className} style={style} appearance={appearance}>
      {!loading && data.getRole ? (
        <React.Fragment>
          <Column style={{ gridGap: 0 }}>
            <Meta date={data.getRole.createdAt} />

            <Title tag={'h4'}>{getLabelRole(data.getRole.name)}</Title>
          </Column>

          <Divider clear />

          {data.getRole && data.getRole.permissions.length > 0 ? (
            <Permissions>
              {data.getRole.permissions.map((permission) => (
                <Chip key={v4()} color={'ghost'} appearance={'outlined'}>
                  {getLabelPermission(permission)}
                </Chip>
              ))}
            </Permissions>
          ) : (
            <Alert>Привелегии отсутствует</Alert>
          )}
        </React.Fragment>
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
