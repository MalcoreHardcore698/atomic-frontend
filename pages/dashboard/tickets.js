import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '../../atomic-ui/components/Grid'
import Alert from '../../atomic-ui/components/Alert'
import DatePicker from '../../atomic-ui/components/DatePicker'
import Select from '../../atomic-ui/components/Select'
import Table from '../../atomic-ui/components/Table'
import templates from '../../atomic-ui/components/Table/templates'

import { initializeApollo } from '../../apollo'
import { useHelper } from '../../hooks/useHelper'
import DashboardLayout from '../../layouts/dashboard'
import HandleBar from '../../components/HandleBar'
import FilterBar from '../../components/FilterBar'
import TicketCard from '../../components/TicketCard'
import {
  onTicketCreate,
  onTicketEdit,
  onTicketDelete,
  onTicketLink
} from '../../store/helpers/ticket'
import { setDocuments } from '../../store/actions/documents'
import { onUserLink } from '../../store/helpers/user'
import queries from '../../graphql/queries'
import { categories } from '../../__mock__'

const TITLE = 'Обращения'

const Tickets = ({ store }) => {
  const recall = useHelper()
  const { user, documents } = useSelector((state) => ({
    user: state.user,
    documents: state.documents
  }))
  const dispatch = useDispatch()
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [displayMethod, onChangeDisplayMethod] = useState('grid')

  const tickets = useMemo(() => documents || store.tickets, [documents, store])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <DashboardLayout title={TITLE}>
      <HandleBar
        icon={'ticket'}
        title={TITLE}
        buttonCreateText={'Создать обращение'}
        onCreate={recall(onTicketCreate, { mutation: queries.CREATE_TICKET })}
        onChangeVisibleFilter={() => setVisibleFilter(!visibleFilter)}
        onChangeDisplayMethod={(item) => onChangeDisplayMethod(item.value)}
      />

      <FilterBar
        isOpen={visibleFilter}
        filters={[
          <DatePicker
            key={0}
            value={date}
            placeholder={'Дата публикации'}
            onChange={onChangeDate}
            withNavigate
          />,
          <Select
            key={1}
            options={categories}
            placeholder={'Раздел'}
            selected={select}
            onChange={(item) => onChangeSelect(item)}
          />
        ]}
        options={
          displayMethod === 'list'
            ? []
            : templates.ticket.map((item, index) => ({
                label: item.header,
                value: index
              }))
        }
      />

      {tickets.length === 0 && (
        <Alert style={{ width: '100%', textAlign: 'center' }}>Обращений нет</Alert>
      )}

      {displayMethod === 'list' && (
        <Table
          data={tickets}
          template={templates.ticket}
          onChecked={() => {}}
          onClick={(ticket) => recall(onTicketLink, { id: ticket.id })()}
          onDelete={(ticket) =>
            recall(onTicketDelete, { ticket, mutation: queries.DELETE_TICKET })()
          }
          onEdit={(ticket) =>
            recall(onTicketEdit, { id: ticket.id, mutation: queries.UPDATE_TICKET })()
          }
          style={{ overflowX: 'auto', width: 'calc(100vw - 290px)' }}
        />
      )}

      {displayMethod === 'grid' && (
        <Grid>
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onChecked={() => {}}
              onLink={recall(onTicketLink, { id: ticket.id })}
              onAuthorLink={(author) =>
                recall(onUserLink, {
                  id: author,
                  auth: user?.email,
                  owned: author === user.name
                })()
              }
              onDelete={recall(onTicketDelete, {
                ticket,
                mutation: queries.DELETE_TICKET
              })}
              onEdit={recall(onTicketEdit, {
                id: ticket.id,
                mutation: queries.UPDATE_TICKET
              })}
            />
          ))}
        </Grid>
      )}
    </DashboardLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let tickets = []

  try {
    const response = await client.query({
      query: queries.GET_META_DASHBOARD_TICKETS
    })

    if (response && response.data) {
      tickets = response.data.getTickets
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: { tickets }
    }
  }
}

export default Tickets
