import React from 'react'
import styled, { css } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'

import Column from '../../atomic-ui/components/Column'
import Grid from '../../atomic-ui/components/Grid'
import Difinition from '../../atomic-ui/components/Difinition'
import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import { Loader } from '../Styled'
import { getLabelRole } from '../../utils/functions'
import queries from '../../graphql/queries'

export const Wrap = styled(Column)`
  grid-gap: 0;

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

export const Members = ({ user, style, appearance, className, onMemberLink }) => {
  const { data, loading, error } = useQuery(queries.GET_USER_MEMBERS, {
    variables: {
      email: user
    }
  })

  return (
    <Wrap className={className} style={style} appearance={appearance}>
      {!loading && data ? (
        <React.Fragment>
          <Grid percentage={'minmax(320px, 1fr)'}>
            {data.getUserMembers.map((member) => (
              <Difinition
                key={member.email}
                img={member.avatar?.path || '/images/avatar-default.png'}
                label={getLabelRole(member.about)}
                text={member.name}
                onLink={() => onMemberLink(member.email)}
                stretch
              />
            ))}
          </Grid>
        </React.Fragment>
      ) : error ? (
        <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
          Упс! Не удалось загрузить информацию о участниках
        </Alert>
      ) : (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </Wrap>
  )
}

Members.defaultProps = {
  appearance: 'default'
}

export default Members
