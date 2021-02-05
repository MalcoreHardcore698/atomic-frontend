import { css } from 'styled-components'

export const fade = css`
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

export default { fade }
