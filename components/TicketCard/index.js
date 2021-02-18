import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Text from '../../atomic-ui/components/Text'
import Icon from '../../atomic-ui/components/Icon'
import Meta from '../../atomic-ui/components/Meta'
import Divider from '../../atomic-ui/components/Divider'
import Button from '../../atomic-ui/components/Button'
import Difinition from '../../atomic-ui/components/Difinition'
import Checkbox from '../../atomic-ui/components/Checkbox'
import Tooltip from '../../atomic-ui/components/Tooltip'

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

export const Header = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

export const Actions = styled(Row)`
  grid-gap: 5px;
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
  appearance,
  className,
  style,
  onLink,
  onAuthorLink,
  onChecked,
  onEdit,
  onDelete
}) => (
  <Wrap className={className} style={style} appearance={appearance}>
    <Column style={{ gridGap: 0 }}>
      <Header>
        <Meta date={ticket.createdAt} category={ticket.category?.name} />

        {onChecked && onEdit && onDelete && (
          <Actions>
            <Tooltip text={'Удалить обращение'}>
              <Button kind={'icon'} size={'xs'} appearance={'red'} onClick={onDelete}>
                <Icon icon={'delete'} size={'xs'} stroke={'white'} />
              </Button>
            </Tooltip>
            <Tooltip text={'Редактировать обращение'}>
              <Button kind={'icon'} size={'xs'} onClick={onEdit}>
                <Icon icon={'edit'} size={'xs'} stroke={'white'} />
              </Button>
            </Tooltip>
            <Tooltip text={'Отметить обращение'} self>
              <Checkbox />
            </Tooltip>
          </Actions>
        )}
      </Header>

      <Name tag={'h4'} onClick={onLink}>
        {ticket.title}
      </Name>

      <Row style={{ gridGap: 5 }}>
        <Status status={ticket.status}>{ticket.status}</Status>
      </Row>
    </Column>

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

Card.defaultProps = {
  appearance: 'default'
}

export default Card
