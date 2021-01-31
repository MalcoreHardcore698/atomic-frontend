import React from 'react'
import styled from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Row from '../../atomic-ui/components/Row'
import Switch from '../../atomic-ui/components/Switch'
import Divider from '../../atomic-ui/components/Divider'
import Transition from '../../atomic-ui/components/Transition'

export const Wrap = styled(Column)`
  display: flex;
  width: 100%;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms, blur 100ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 100ms, blur 100ms;
  }
`

export const List = styled(Row)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));

  @media only screen and (max-width: 480px) {
    grid-gap: var(--default-gap);
  }
`

export const Filter = ({ isOpen = true, filters, options, duration }) => {
  return (
    <Transition in={isOpen} animation={'fade'} timeout={duration}>
      <Wrap>
        <Divider clear />
        {filters && filters.length > 0 && <List>{filters.map((filter) => filter)}</List>}
        {options && options.length > 0 && (
          <Row>
            <Switch defaultValue={options[0]} options={options} stretch />
          </Row>
        )}
        <Divider clear />
      </Wrap>
    </Transition>
  )
}

Filter.defaultProps = {
  duration: 150
}

export default Filter
