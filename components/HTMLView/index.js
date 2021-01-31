import styled from 'styled-components'
import React from 'react'

export const HTMLContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: var(--default-gap);

  table,
  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  table td {
    padding: 10px;
  }

  img {
    border-radius: var(--surface-border-radius);
  }
`

export const HTMLView = ({ content }) => (
  <HTMLContent dangerouslySetInnerHTML={{ __html: content }} />
)

export default HTMLView
