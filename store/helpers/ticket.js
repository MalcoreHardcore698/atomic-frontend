import React from 'react'

import TicketForm from '../../components/FormTicket'
import DeleteForm from '../../components/FormDelete'
import TicketCard from '../../components/TicketCard'
import TicketView from '../../components/TicketView'
import { setDocuments } from '../actions/documents'
import { setDrawer } from '../actions/drawer'
import { setItem } from '../actions/snacks'
import { onUserLink } from './user'
import { onFileLink } from '.'

export function onTicketLink(dispatch, props) {
  const { id } = props

  dispatch(
    setDrawer({
      icon: 'ticket',
      title: 'Обращение',
      content: (
        <TicketView
          ticket={id}
          appearance={'clear'}
          onAttach={() => onFileLink(dispatch)}
          onMemberLink={() => onUserLink(dispatch)}
        />
      )
    })
  )
}

export function onTicketCreate(dispatch, props) {
  const { mutation } = props

  dispatch(
    setDrawer({
      icon: 'ticket',
      title: 'Создание обращения',
      content: (
        <TicketForm
          mutation={mutation}
          appearance={'clear'}
          onSubmit={async (form, action) => {
            try {
              const tickets = await action({
                variables: {
                  input: {
                    title: form.title,
                    message: form.message,
                    author: form.author?.value?.email,
                    counsellor: form.counsellor?.value?.email,
                    category: form.category?.value
                  }
                }
              })
              dispatch(setDocuments(tickets.data.createTicket))
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Обращение успешно создано'
                })
              )
            } catch (err) {
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось создать обращение'
                })
              )
            }
          }}
        />
      )
    })
  )
}

export function onTicketEdit(dispatch, props) {
  const { id, mutation } = props

  dispatch(
    setDrawer({
      icon: 'ticket',
      title: 'Редактирование обращения',
      content: (
        <TicketForm
          ticket={id}
          mutation={mutation}
          appearance={'clear'}
          onSubmit={async (form, action) => {
            try {
              const tickets = await action({
                variables: {
                  id,
                  input: {
                    title: form.title,
                    message: form.message,
                    author: form.author?.value?.email,
                    counsellor: form.counsellor?.value?.email,
                    category: form.category?.value
                  }
                }
              })
              dispatch(setDocuments(tickets.data.updateTicket))
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Обращение успешно отредактировано'
                })
              )
            } catch {
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось отредактировать обращение'
                })
              )
            }
          }}
        />
      )
    })
  )
}

export function onTicketDelete(dispatch, props) {
  const { ticket, mutation } = props

  dispatch(
    setDrawer({
      icon: 'delete',
      color: 'red',
      title: 'Удаление обращения',
      content: (
        <DeleteForm
          mutation={mutation}
          appearance={'clear'}
          onCancel={() => dispatch(setDrawer(null))}
          onSubmit={async (_, action) => {
            try {
              const tickets = await action({
                variables: { id: ticket.id }
              })
              dispatch(setDocuments(tickets.data.deleteTicket))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Обращение успешно удалено'
                })
              )
            } catch {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось удалить обращение'
                })
              )
            } finally {
              dispatch(setDrawer(null))
            }
          }}>
          <TicketCard ticket={ticket} appearance={'clear'} />
        </DeleteForm>
      )
    })
  )
}
