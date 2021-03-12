import React from 'react'
import styled from 'styled-components'

import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import { Loader } from '../Styled'

export const CentralAlert = styled(Alert)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  flex-grow: 1;
`

export const Processed = ({ data, loading, error, children, errorMessage, emptyMessage }) =>
  !loading && data ? (
    children
  ) : error ? (
    <CentralAlert appearance={'error'}>{errorMessage}</CentralAlert>
  ) : loading ? (
    <Loader>
      <Spinner />
    </Loader>
  ) : (
    <CentralAlert>{emptyMessage}</CentralAlert>
  )

Processed.defaultProps = {
  errorMessage: 'Упс! Не удалось загрузить статистику',
  emptyMessage: 'Кажется тут ничего нет'
}

export default Processed
