import React, { useState, useEffect } from 'react'
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

import { getLabelCategory } from '../../utils/functions'
import { Loader } from '../Styled'
import Form from '../Form'
import queries from '../../graphql/queries'
import TextArea from '../../atomic-ui/components/TextArea'

export const LIMIT_USERS = 15

export const Ticket = ({ ticket, appearance, mutation, className, onSubmit }) => {
  const [offsetUsers, setOffsetUsers] = useState(0)
  // const [usersSelectInput, setUsersSelectInput] = useState('')
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
    loading: loadingUsers,
    // refetch: searchUsers,
    fetchMore: updateUsers
  } = useQuery(queries.GET_USERS_FOR_TICKET, {
    variables: {
      offset: offsetUsers,
      limit: LIMIT_USERS
    }
  })

  const { data: dataCategories, loading: loadingCategories } = useQuery(queries.GET_CATEGORIES, {
    variables: {
      type: 'TICKET'
    }
  })

  useEffect(() => {
    if (!loadingUsers && dataUsers) {
      setUsers((prev) => [...prev, ...dataUsers.getUsers])
    }
  }, [dataUsers, loadingUsers])

  return (
    <Form className={className} appearance={appearance} mutation={mutation} onSubmit={onSubmit}>
      {({ register, loading, errors, control, getValues }) =>
        !loadingTicket && data ? (
          <React.Fragment>
            <Column>
              <Title tag={'h4'}>Основное</Title>

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
                placeholder={'Название'}
                appearance={'ghost'}
                disabled={loading}
              />
              {(!ticket || data.getTicket?.messages?.length === 0) && (
                <TextArea
                  type={'text'}
                  name={'message'}
                  ref={register()}
                  defaultValue={getValues('message') || ''}
                  placeholder={'Описание обращения'}
                  disabled={loading}
                  appearance={'ghost'}
                />
              )}

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
                    onMenuScrollToBottom={async () => {
                      await updateUsers({
                        variables: {
                          offset: offsetUsers,
                          limit: LIMIT_USERS
                        },
                        updateQuery: (...props) => props
                      })
                      setOffsetUsers((prev) => prev + LIMIT_USERS)
                    }}
                    isLoading={loadingUsers}
                    // isSearchable
                  />
                )}
              />

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
                      !loadingUsers && dataUsers
                        ? dataUsers.getUsers.map((user) => ({
                            value: user,
                            label: user.name
                          }))
                        : []
                    }
                    appearance={'ghost'}
                    defaultValue={value}
                    placeholder={'Выберите советника'}
                    onChange={onChange}
                    onMenuScrollToBottom={async () => {
                      await updateUsers({
                        variables: {
                          offset: offsetUsers,
                          limit: LIMIT_USERS
                        },
                        updateQuery: (...props) => props
                      })
                      setOffsetUsers((prev) => prev + LIMIT_USERS)
                    }}
                    isLoading={loadingUsers}
                  />
                )}
              />

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

            <Divider clear />

            <Row>
              <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
                Создать
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

export default Ticket
