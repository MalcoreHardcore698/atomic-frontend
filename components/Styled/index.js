import styled from 'styled-components'

export const GridAside = styled.aside`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(442px, 1fr));
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  }
`

export const More = styled.p`
  color: var(--default-color-accent);
  cursor: pointer;
`

export const LowerLoader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
`

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`
