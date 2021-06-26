import styled, { css } from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Alert from '../../atomic-ui/components/Alert'

export const loaderStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  flex-grow: 1;
`

export const Surface = styled(Column)`
  position: relative;

  ${({ checked }) =>
    checked &&
    css`
      opacity: 0.45;
    `}

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      padding: var(--default-gap);
      background: var(--surface-background);
      border: var(--surface-border);
      border-radius: var(--surface-border-radius);
      box-shadow: var(--surface-shadow);
    `}

  ${({ appearance }) =>
    (appearance === 'ghost' || appearance === 'clear') &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}
`

export const CardContent = styled(Column)`
  ${({ editable }) =>
    editable &&
    css`
      padding-right: 70px;
    `}
`

export const CentralAlert = styled(Alert)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-grow: 1;
`

export const More = styled.p`
  color: var(--default-color-accent);
  cursor: pointer;
`

export const LowerLoader = styled.div`
  ${loaderStyles}
  height: 80px;
`

export const FixedLoader = styled.div`
  ${loaderStyles}
  position: fixed;
  top: 0;
  left: 0;
`

export const Loader = styled.div`
  ${loaderStyles}
`
