import React from 'react'

import Difinition from '../../atomic-ui/components/Difinition'

import DashboardLayout from '../../layouts/dashboard'

const TITLE = 'Панель администратора'

const Dashboard = () => {
  return (
    <DashboardLayout title={TITLE}>
      <Difinition icon={'activity'} text={TITLE} />
    </DashboardLayout>
  )
}

export default Dashboard
