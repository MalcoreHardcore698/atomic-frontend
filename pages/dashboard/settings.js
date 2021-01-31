import React from 'react'

import Difinition from '../../atomic-ui/components/Difinition'

import DashboardLayout from '../../layouts/dashboard'

const TITLE = 'Настройки'

const Settings = () => {
  return (
    <DashboardLayout title={TITLE}>
      <Difinition icon={'setting'} text={TITLE} />
    </DashboardLayout>
  )
}

export default Settings
