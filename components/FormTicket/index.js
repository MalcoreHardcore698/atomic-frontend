import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Controller } from 'react-hook-form'
import { useQuery } from '@apollo/react-hooks'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Title from '../../atomic-ui/components/Title'
import Alert from '../../atomic-ui/components/Alert'
import Select from '../../atomic-ui/components/Select'
import Divider from '../../atomic-ui/components/Divider'
import Spinner from '../../atomic-ui/components/Spinner'
import TextArea from '../../atomic-ui/components/TextArea'
import Checkbox from '../../atomic-ui/components/Checkbox'
import Message from '../../atomic-ui/components/Message'
import { getLabelCategory } from '../../atomic-ui/utils/functions'

import Form from '../Form'
import { Loader } from '../Styled'
import queries from '../../graphql/queries'

export const LIMIT_USERS = 15

export const Messages = styled(Column)`
  grid-gap: 5px;
`

export const Header = styled(Row)`
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: end;
    grid-gap: var(--default-gap);
  }
`

export const Ticket = ({ title, ticket, appearance, mutation, className, isClient, onSubmit }) => {
  const [checkedAll, setCheckedAll] = useState(false)
  // const [offsetUsers, setOffsetUsers] = useState(0)
  // const [usersSelectInput, setUsersSelectInput] = useState('')
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])

  const { data, loading: loadingTicket, error: errorTicket } = ticket
    ? useQuery(queries.GET_TICKET, {
        variables: {
          id: ticket
        },
        fetchPolicy: 'no-cache'
      })
    : { data: { getTicket: {} }, loading: false, error: false }

  const {
    data: dataUsers,
    loading: loadingUsers
    // refetch: searchUsers,
    // fetchMore: updateUsers
  } = useQuery(queries.GET_USERS_FOR_TICKET, {
    variables: {
      // offset: offsetUsers,
      account: ['INDIVIDUAL', 'OFICIAL']
    }
  })

  const { data: dataCounsellors, loading: loadingCounsellors } = useQuery(
    queries.GET_USERS_FOR_TICKET,
    {
      variables: {
        account: ['INDIVIDUAL', 'ADMIN']
      }
    }
  )

  const { data: dataCategories, loading: loadingCategories } = useQuery(queries.GET_CATEGORIES, {
    variables: {
      type: 'TICKET'
    }
  })

  const handleCheckedMessages = (e) => {
    setCheckedAll(e.target.checked)
  }

  const handleCheckedMessage = (message, value) => {
    setMessages((prev) =>
      prev.map((item) =>
        item.id === message.id
          ? {
              ...item,
              checked: value
            }
          : item
      )
    )
  }

  const handleDeleteChecked = () => {
    setMessages((prev) => prev.filter((message) => !message.checked))
  }

  const handleMessageEdit = (message, text) => {
    setMessages((prev) =>
      prev.map((item) =>
        item.id === message.id
          ? {
              ...item,
              updatedAt: new Date(),
              text
            }
          : item
      )
    )
  }

  const handleMessageDelete = (message) => {
    setMessages((prev) => prev.filter((item) => item.id !== message.id))
  }

  useEffect(() => {
    if (ticket && !loadingTicket && data) {
      setMessages(
        data.getTicket.messages.map((message) => ({
          ...message,
          checked: false
        }))
      )
    }
  }, [ticket, data, loadingTicket])

  useEffect(() => {
    if (!loadingUsers && dataUsers) {
      setUsers((prev) => [...prev, ...dataUsers.getUsers])
    }
  }, [dataUsers, loadingUsers])

  return (
    <Form
      className={className}
      appearance={appearance}
      mutation={mutation}
      onSubmit={(form, action) => onSubmit({ ...form, messages }, action)}>
      {({ register, loading, errors, control, getValues }) =>
        !loadingTicket && data ? (
          <React.Fragment>
            <Column>
              {title && <Title tag={'h4'}>Основное</Title>}

              {errors && errors.title && (
                <Alert style={{ width: '100%' }} appearance={'error'}>
                  Введите название обращение
                </Alert>
              )}
              <Input
                type={'text'}
                name={'title'}
                ref={register({ required: true })}
                defaultValue={getValues('title') || data.getTicket?.title}
                placeholder={'Краткое описание вашего вопроса'}
                appearance={'ghost'}
                disabled={loading}
              />
              {(!ticket || data.getTicket?.messages?.length === 0) && (
                <TextArea
                  type={'text'}
                  name={'message'}
                  ref={register()}
                  defaultValue={getValues('message') || ''}
                  placeholder={'Расскройте все подробности вашего вопроса'}
                  disabled={loading}
                  appearance={'ghost'}
                />
              )}

              {!isClient && (
                <Controller
                  name={'author'}
                  control={control}
                  defaultValue={
                    data.getTicket?.author
                      ? {
                          value: data.getTicket.author.id,
                          label: data.getTicket.author.name
                        }
                      : null
                  }
                  render={({ value, onChange }) => (
                    <Select
                      options={users.map((user) => ({
                        value: user,
                        label: user.name
                      }))}
                      appearance={'ghost'}
                      defaultValue={value}
                      // inputValue={usersSelectInput}
                      placeholder={'Выберите автора обращения'}
                      onChange={onChange}
                      // onInputChange={(input) => setUsersSelectInput(input)}
                      // onKeyDown={(e) => {
                      //   // Pressed ENTER
                      //   if (e.keyCode === 13) {
                      //     searchUsers({
                      //       search: usersSelectInput
                      //     })
                      //   }
                      // }}
                      // onMenuScrollToBottom={async () => {
                      //   await updateUsers({
                      //     variables: {
                      //       offset: offsetUsers,
                      //       limit: LIMIT_USERS
                      //     },
                      //     updateQuery: (...props) => props
                      //   })
                      //   setOffsetUsers((prev) => prev + LIMIT_USERS)
                      // }}
                      isLoading={loadingUsers}
                      isSearchable
                    />
                  )}
                />
              )}

              {!isClient && (
                <Controller
                  name={'counsellor'}
                  control={control}
                  defaultValue={
                    data.getTicket?.counsellor
                      ? {
                          value: data.getTicket.counsellor.id,
                          label: data.getTicket.counsellor.name
                        }
                      : null
                  }
                  render={({ value, onChange }) => (
                    <Select
                      options={
                        !loadingCounsellors && dataCounsellors
                          ? dataCounsellors.getUsers.map((user) => ({
                              value: user,
                              label: user.name
                            }))
                          : []
                      }
                      appearance={'ghost'}
                      defaultValue={value}
                      placeholder={'Выберите советника'}
                      onChange={onChange}
                      isLoading={loadingCounsellors}
                      isSearchable
                    />
                  )}
                />
              )}

              <Controller
                name={'category'}
                control={control}
                defaultValue={
                  data.getTicket?.category
                    ? {
                        value: data.getTicket.category.id,
                        label: getLabelCategory(data.getTicket.category.name)
                      }
                    : null
                }
                render={({ value, onChange }) => (
                  <Select
                    appearance={'ghost'}
                    placeholder={'Выберите раздел'}
                    options={
                      !loadingCategories && dataCategories
                        ? dataCategories.getCategories
                            .filter((item) => item.type === 'TICKET')
                            .map((item) => ({
                              value: item.id,
                              label: getLabelCategory(item.name)
                            }))
                        : []
                    }
                    onChange={onChange}
                    defaultValue={value}
                    isLoading={loadingCategories}
                    isClearable
                  />
                )}
              />
            </Column>

            {!isClient && ticket && messages.length > 0 && (
              <React.Fragment>
                <Divider clear />

                <Title tag={'h4'}>История сообщений</Title>

                <Header>
                  <Checkbox
                    label={'Выделить все'}
                    checked={checkedAll}
                    onChange={handleCheckedMessages}
                  />
                  <Button
                    style={{ color: 'var(--default-color-red)' }}
                    appearance={'clear'}
                    onClick={handleDeleteChecked}>
                    Удалить выделенное
                  </Button>
                </Header>

                <Messages>
                  {messages.map((message) => (
                    <Message
                      key={message.id}
                      avatar={message.user?.avatar?.path}
                      name={message.user?.name}
                      text={message.text}
                      time={
                        message.createdAt !== message.updatedAt
                          ? message.updatedAt
                          : message.createdAt
                      }
                      isChecked={message.checked}
                      isUpdated={message.createdAt !== message.updatedAt}
                      onChecked={(value) => handleCheckedMessage(message, value)}
                      onEdit={(text) => handleMessageEdit(message, text)}
                      onDelete={() => handleMessageDelete(message)}
                      compact
                    />
                  ))}
                </Messages>
              </React.Fragment>
            )}

            <Divider clear />

            <Row>
              <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
                {ticket ? 'Сохранить' : 'Создать'}
              </Button>
            </Row>
          </React.Fragment>
        ) : errorTicket ? (
          <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
            Упс! Не удалось загрузить информацию об обращении
          </Alert>
        ) : (
          <Loader>
            <Spinner />
          </Loader>
        )
      }
    </Form>
  )
}

Ticket.defaultProps = {
  title: true
}

export default Ticket
