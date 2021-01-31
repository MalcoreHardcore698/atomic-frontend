import React from 'react'
import styled from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Alert from '../../atomic-ui/components/Alert'
import Notice from '../../atomic-ui/components/Notice'

export const Wrap = styled(Column)``

export const Notifications = ({ notifications, appearance }) => (
  <Wrap>
    {notifications && notifications.length > 0 ? (
      notifications.map((notification) => (
        <Notice
          key={notification.id}
          {...(notification.author
            ? {
                img: notification.author?.avatar.path
              }
            : {
                icon: 'infoCircle'
              })}
          title={notification.title}
          message={notification.message}
          date={notification.createdAt}
          appearance={appearance}
        />
      ))
    ) : (
      <Alert style={{ textAlign: 'center' }} width={'100%'}>
        Уведомлений нет
      </Alert>
    )}
  </Wrap>
)

Notifications.defaultProps = {
  appearance: 'default'
}

export default Notifications
