import React from 'react'
import { useRouter } from 'next/router'

import Button from '../atomic-ui/components/Button'

import ErrorLayout from '../layouts/error'

const ErrorNotFound = () => {
  const router = useRouter()

  return (
    <ErrorLayout>
      <p>404</p>

      <Button onClick={() => router.push('/')}>На главную</Button>
    </ErrorLayout>
  )
}

export default ErrorNotFound
