import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import template from '../../atomic-ui/components/Table/templates/ticket'

import TicketCard from '../../components/TicketCard'
import ContentLayout from '../../layouts/dashboard/content'
import { onTicketCreate, onTicketEdit, onTicketLink } from '../../store/helpers/ticket'
import { setDocuments } from '../../store/actions/documents'
import { onUserLink } from '../../store/helpers/user'
import { useHelper } from '../../hooks/useHelper'
import queries from '../../graphql/queries'

const TITLE = 'Обращения'

const LIMIT = 12
const START_OFFSET = 0

const Tickets = () => {
  const recall = useHelper()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      limit={LIMIT}
      icon={'ticket'}
      template={template}
      startOffset={START_OFFSET}
      emptyMessage={'Обращений нет'}
      buttonCreateText={'Создать обращение'}
      getType={'getTickets'}
      getQuery={queries.GET_TICKETS}
      deleteQuery={queries.DELETE_TICKET}
      deleteEntityMultiText={'обращения'}
      deleteEntitySingleText={'обращение'}
      onLink={(ticket) => recall(onTicketLink, { id: ticket.id, auth: user?.email })()}
      onEdit={(ticket) =>
        recall(onTicketEdit, {
          id: ticket.id,
          mutation: queries.UPDATE_TICKET
        })()
      }
      onCreate={recall(onTicketCreate, { mutation: queries.CREATE_TICKET })}
      render={(document) => (
        <TicketCard
          ticket={document}
          onAuthorLink={(author) =>
            recall(onUserLink, {
              id: author,
              auth: user?.email,
              owned: author === user.name
            })()
          }
        />
      )}
    />
  )
}

export default Tickets
