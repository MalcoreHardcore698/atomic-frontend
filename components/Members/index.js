import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'

import Row from '../../atomic-ui/components/Row'
import Grid from '../../atomic-ui/components/Grid'
import Column from '../../atomic-ui/components/Column'
import Tooltip from '../../atomic-ui/components/Tooltip'
import Spinner from '../../atomic-ui/components/Spinner'
import Button from '../../atomic-ui/components/Button'
import Input from '../../atomic-ui/components/Input'
import Alert from '../../atomic-ui/components/Alert'
import Icon from '../../atomic-ui/components/Icon'
import Difinition, { MarkedText } from '../../atomic-ui/components/Difinition'
import { getLabelRole, hasAccess } from '../../atomic-ui/utils/functions'

import { useMutationEffect } from '../../hooks/useMutationEffect'
import { useUpdateEffect } from '../../hooks/useUpdateEffect'
import { useEntityQuery } from '../../hooks/useEntityQuery'
import { setModal } from '../../store/actions/modal'
import queries from '../../graphql/queries'
import { Loader } from '../Styled'
import Form from '../Form'

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

export const hasResponsibleMember = (member) => {
  const hasPurposeProject = hasAccess(member, 'PURPOSE_PROJECT')
  const hasPurposeArticle = hasAccess(member, 'PURPOSE_ARTICLE')
  return hasPurposeProject && hasPurposeArticle
}

export const ResponsibleMark = () => (
  <React.Fragment>
    <span> | </span>
    <Tooltip text={'Ответственный'}>
      <Icon icon={'shieldDone'} size={'xs'} stroke={'var(--ghost-color-text)'} />
    </Tooltip>
  </React.Fragment>
)

export const Invite = () => {
  const dispatch = useDispatch()

  const hideModal = () => dispatch(setModal(null))

  const onSubmit = (form, action) => {
    action({
      variables: {
        email: form.email
      }
    })
    hideModal()
  }

  return (
    <Form
      appearance={'clear'}
      style={{ padding: 'var(--default-gap)' }}
      mutation={queries.INVITE_USER_MEMBER}
      onSubmit={onSubmit}>
      {({ register, loading }) => (
        <React.Fragment>
          <Column>
            <Input
              type={'text'}
              name={'email'}
              ref={register({ required: true })}
              placeholder={'Введите Эл. почту'}
              appearance={'ghost'}
              disabled={loading}
              autoComplete={'off'}
            />
          </Column>

          <Row>
            <Button
              style={{ flexGrow: 1 }}
              type={'button'}
              appearance={'ghost'}
              disabled={loading}
              onClick={hideModal}>
              Отмена
            </Button>
            <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
              Пригласить
            </Button>
          </Row>
        </React.Fragment>
      )}
    </Form>
  )
}

export const Members = ({ user, style, appearance, className, onMemberLink }) => {
  const authUser = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { setQuery } = useEntityQuery()
  const [members, setMembers] = useState([])

  const { data, loading, error } = useQuery(queries.GET_USER_MEMBERS, {
    variables: {
      email: user || authUser.email
    }
  })

  const [exclude, { loading: loadingExclude, error: errorExclude }] = useMutationEffect(
    queries.EXCLUDE_USER_MEMBER,
    'excludeUserMember',
    setMembers
  )

  const [appoint, { loading: loadingAppoint, error: errorAppoint }] = useMutationEffect(
    queries.APPOINT_USER_MEMBER,
    'appointUserMember',
    setMembers
  )

  const [dismiss, { loading: loadingDismiss, error: errorDismiss }] = useMutationEffect(
    queries.DISMISS_USER_MEMBER,
    'dismissUserMember',
    setMembers
  )

  const getDismiss = (member) => ({
    text: 'Исключить',
    color: 'red',
    onClick: () => dismiss({ variables: { email: member.email } })
  })

  const getDefaultActions = (member) => [
    {
      text: 'Назначить ответственным',
      onClick: () => appoint({ variables: { email: member.email } })
    },
    getDismiss(member)
  ]

  const getResponsibleActions = (member) => [
    { text: 'Снять полномочия', onClick: () => exclude({ variables: { email: member.email } }) },
    getDismiss(member)
  ]

  const onMemberInvite = () => {
    dispatch(
      setModal([
        {
          path: '/',
          title: 'Пригласить участника',
          component: () => <Invite />
        }
      ])
    )
  }

  useUpdateEffect(data, loading, 'getUserMembers', setMembers)

  return (
    <Wrap className={className} style={style} appearance={appearance}>
      {!loading && !loadingExclude && !loadingAppoint && !loadingDismiss && data ? (
        <Column>
          <Grid percentage={'minmax(320px, 1fr)'}>
            {members.map((member) => (
              <Difinition
                key={member.email}
                img={member.avatar?.path || '/images/avatar-default.png'}
                label={
                  <MarkedText>
                    <span>{getLabelRole(member.account)}</span>
                    {hasResponsibleMember(member) && <ResponsibleMark />}
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

          {authUser.email === user && (
            <Row>
              <Button style={{ flexGrow: 1 }} type={'button'} onClick={onMemberInvite}>
                Пригласить участника
              </Button>
            </Row>
          )}
        </Column>
      ) : error || errorExclude || errorAppoint || errorDismiss ? (
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
