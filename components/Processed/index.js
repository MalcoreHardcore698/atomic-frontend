import React from 'react'

import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import { Loader } from '../Styled'

export const Processed = ({ data, loading, error, children }) =>
  !loading && data ? (
    children
  ) : error ? (
    <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
      Упс! Не удалось загрузить статистику
    </Alert>
  ) : (
    <Loader>
      <Spinner />
    </Loader>
  )

export default Processed
