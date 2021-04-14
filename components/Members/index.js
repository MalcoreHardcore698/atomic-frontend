import React from 'react'
import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'

import Row from '../../atomic-ui/components/Row'
import Grid from '../../atomic-ui/components/Grid'
import Column from '../../atomic-ui/components/Column'
import Difinition, { MarkedText } from '../../atomic-ui/components/Difinition'
import Spinner from '../../atomic-ui/components/Spinner'
import Button from '../../atomic-ui/components/Button'
import Tooltip from '../../atomic-ui/components/Tooltip'
import Alert from '../../atomic-ui/components/Alert'
import Icon from '../../atomic-ui/components/Icon'
import { getLabelRole, hasAccess } from '../../atomic-ui/utils/functions'

import { useEntityQuery } from '../../hooks/useEntityQuery'
import queries from '../../graphql/queries'
import { Loader } from '../Styled'

export const Wrap = styled(Column)`
  grid-gap: 0;
  flex-grow: 1;

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

const hasResponsibleMember = (member) =>
  hasAccess(member, 'PURPOSE_PROJECT') && hasAccess(member, 'PURPOSE_ARTICLE')

export const Members = ({
  user,
  style,
  appearance,
  className,
  onMemberLink,
  onMembersInvite,
  onMemberAppoint,
  onMemberDismiss,
  onMemberExclude
}) => {
  const authUser = useSelector((state) => state.user)
  const { setQuery } = useEntityQuery()
  const { data, loading, error } = useQuery(queries.GET_USER_MEMBERS, {
    variables: {
      email: user
    }
  })

  const getExclude = (member) => ({
    text: 'Исключить',
    color: 'red',
    onClick: () => onMemberExclude && onMemberExclude(member)
  })

  const getDefaultActions = (member) => [
    { text: 'Назначить ответственным', onClick: () => onMemberAppoint && onMemberAppoint() },
    getExclude(member)
  ]

  const getResponsibleActions = (member) => [
    { text: 'Снять полномочия', onClick: () => onMemberDismiss && onMemberDismiss() },
    getExclude(member)
  ]

  return (
    <Wrap className={className} style={style} appearance={appearance}>
      {!loading && data ? (
        <React.Fragment>
          <Grid percentage={'minmax(320px, 1fr)'}>
            {data.getUserMembers.map((member) => (
              <Difinition
                key={member.email}
                img={member.avatar?.path || '/images/avatar-default.png'}
                label={
                  <MarkedText>
                    <span>{getLabelRole(member.role?.name)}</span>
                    {hasResponsibleMember(member)
                      ? ` | ${(
                          <Tooltip text={'Ответственный'}>
                            <Icon
                              icon={'shieldDone'}
                              size={'xs'}
                              stroke={'var(--ghost-color-text)'}
                            />
                          </Tooltip>
                        )}`
                      : ''}
                  </MarkedText>
                }
                text={member.name}
                actions={
                  authUser.email === user &&
                  (hasResponsibleMember(member)
                    ? getResponsibleActions(member)
                    : getDefaultActions(member))
                }
                onLink={() => setQuery(member.email, 'user', onMemberLink)}
                stretch
              />
            ))}
          </Grid>
          {onMembersInvite && (
            <Row>
              <Button style={{ flexGrow: 1 }} type={'button'} onClick={onMembersInvite}>
                Пригласить участников
              </Button>
            </Row>
          )}
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
