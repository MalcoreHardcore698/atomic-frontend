import React from 'react'
import { useRouter } from 'next/router'

import Button from '../atomic-ui/components/Button'

import ErrorLayout from '../layouts/error'

const ErrorServer = () => {
  const router = useRouter()

  return (
    <ErrorLayout>
      <p>500</p>

      <Button onClick={() => router.push('/')}>На главную</Button>
    </ErrorLayout>
  )
}

export default ErrorServer
