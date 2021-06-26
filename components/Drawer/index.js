import React, { useState, useRef, memo } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import Row from '../../atomic-ui/components/Row'
import Difinition from '../../atomic-ui/components/Difinition'
import DrawerBase from '../../atomic-ui/components/Drawer'
import Divider from '../../atomic-ui/components/Divider'
import Tooltip from '../../atomic-ui/components/Tooltip'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'
import Column from '../../atomic-ui/components/Column'

import useEntityQuery from '../../hooks/useEntityQuery'
import { setDrawer } from '../../store/actions/drawer'

const Wrap = styled(DrawerBase)``

const BrandLogo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

const Container = styled(Column)`
  height: 100%;
  flex-grow: 1;

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

const Header = styled(Row)`
  display: flex;
  justify-content: space-between;
  grid-gap: var(--default-gap);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const BackButton = styled(Button)`
  display: none;

  @media only screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Drawer = memo(() => {
  const router = useRouter()
  const { useDetectQuery } = useEntityQuery()
  const { root, drawer } = useSelector((state) => state)
  const dispatch = useDispatch()

  const [loadingExportToPDF, setLoadingExportToPDF] = useState(false)
  const containerForExportToPDF = useRef(null)

  const onDrawerBack = async () => {
    await router.push(
      {
        pathname: router.pathname,
        query: root.search
          ? {
              search: root.search
            }
          : {}
      },
      undefined,
      { shallow: true }
    )
    dispatch(setDrawer(null))
  }

  const onExportToPDF = () => {
    setLoadingExportToPDF(true)

    html2canvas(containerForExportToPDF.current).then((canvas) => {
      const [margin, position] = [6, 6]
      const imgData = canvas.toDataURL('image/png', 1.0)

      const pdf = new jsPDF('p', 'px', 'a4')

      const width = pdf.internal.pageSize.getWidth()
      const height = pdf.internal.pageSize.getHeight()

      const widthRatio = width / canvas.width
      const heightRatio = height / canvas.height

      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio

      pdf.addImage(
        imgData,
        'PNG',
        margin,
        position,
        canvas.width * ratio - margin * 2,
        canvas.height * ratio - margin * 2
      )
      pdf.save(`${drawer.pdfName}.pdf`)

      setLoadingExportToPDF(false)
    })
  }

  useDetectQuery()

  return (
    <Wrap side={drawer.side} half={drawer.half} isOpen={drawer.open} onBack={onDrawerBack}>
      <Container>
        <Header>
          <Row>
            {drawer.side === 'left' && drawer.half ? (
              <Button appearance={'clear'} onClick={() => router.push('/')}>
                <BrandLogo src={root.settings.general.logotype?.path} alt={'Logotype'} />
              </Button>
            ) : (
              <BackButton size={'s'} kind={'icon'} onClick={onDrawerBack} revert>
                <Icon icon={'arrowLeft'} size={'s'} stroke={'var(--default-color-accent)'} />
              </BackButton>
            )}

            {drawer.title && (
              <Difinition color={drawer.color} icon={drawer.icon} text={drawer.title} />
            )}
          </Row>

          {drawer.pdfName && (
            <Row>
              <Tooltip text={'Экспорт проекта в PDF'}>
                <Button
                  size={'s'}
                  kind={'icon'}
                  appearance={'clear'}
                  disabled={loadingExportToPDF}
                  onClick={onExportToPDF}>
                  <Icon icon={'scan'} size={'s'} stroke={'var(--ghost-color-text)'} />
                </Button>
              </Tooltip>
            </Row>
          )}
        </Header>
        {drawer.title && <Divider clear />}

        <Content ref={containerForExportToPDF}>{drawer.content}</Content>
      </Container>
    </Wrap>
  )
})

export default Drawer
