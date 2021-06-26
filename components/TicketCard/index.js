import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Meta from '../../atomic-ui/components/Meta'
import Divider from '../../atomic-ui/components/Divider'
import Difinition from '../../atomic-ui/components/Difinition'

import { CardContent, Surface } from '../Styled'
import CardActions from '../CardActions'
import { onTicketDelete, onTicketEdit } from '../../store/helpers/ticket'
import { useEntityQuery } from '../../hooks/useEntityQuery'
import { useHelper } from '../../hooks/useHelper'
import queries from '../../graphql/queries'

export const Wrap = styled(Surface)`
  grid-gap: var(--default-gap);
  height: 100%;
`

export const Header = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

export const Actions = styled(Row)`
  grid-gap: 5px;
  height: 100%;
`

export const Name = styled(Title)`
  transition: opacity 150ms ease;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.45;
      }
    `}
`

export const Status = styled(Text)`
  color: ${({ status }) => `var(--default-color-${status === 'OPENED' ? 'accent' : 'red'})`};
`

export const Footer = styled(Row)`
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`

export const Card = ({
  ticket,
  checked,
  appearance,
  className,
  style,
  onLink,
  onAuthorLink,
  onChecked,
  onEdit,
  onDelete
}) => {
  const recall = useHelper()
  const { setQuery } = useEntityQuery()

  const handleEdit = () => {
    recall(onTicketEdit, {
      id: ticket.id,
      mutation: queries.UPDATE_TICKET
    })()
    if (onEdit) onEdit()
  }

  const handleDelete = () => {
    recall(onTicketDelete, {
      ticket,
      mutation: queries.DELETE_TICKET
    })()
    if (onDelete) onDelete()
  }

  return (
    <Wrap className={className} style={style} checked={checked} appearance={appearance}>
      <CardContent style={{ gridGap: 0 }} editable={onEdit || onDelete || onChecked}>
        <Header>
          <Meta date={ticket.createdAt} category={ticket.category?.name} />

          <CardActions
            typeText={'обращение'}
            checked={checked}
            onEdit={onEdit && handleEdit}
            onDelete={onDelete && handleDelete}
            onChecked={onChecked}
          />
        </Header>

        <Name tag={'h4'} onClick={() => setQuery(ticket.id, 'ticket', onLink)}>
          {ticket.title}
        </Name>

        <Row style={{ gridGap: 5 }}>
          <Status status={ticket.status}>{ticket.status}</Status>
        </Row>
      </CardContent>

      <Divider clear />

      <Footer>
        <Difinition
          label={'Автор'}
          img={ticket.author?.avatar?.path}
          text={ticket.author?.name}
          onLink={onAuthorLink && (() => onAuthorLink(ticket.author?.email))}
        />

        <Difinition icon={'chat'} label={'Сообщений'} text={ticket.messages?.length} />
      </Footer>
    </Wrap>
  )
}

Card.defaultProps = {
  appearance: 'default'
}

export default Card
