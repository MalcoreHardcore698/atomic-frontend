import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import { Wrap as WrapText } from '../../atomic-ui/components/Text'
import Difinition from '../../atomic-ui/components/Difinition'
import Tooltip from '../../atomic-ui/components/Tooltip'
import Button from '../../atomic-ui/components/Button'
import Alert from '../../atomic-ui/components/Alert'
import Icon from '../../atomic-ui/components/Icon'

import { onUserFolderAdd, onUserFolderDelete } from '../../store/helpers/user'
import { setFolder, setIgnoreFetch } from '../../store/actions/root'
import { setUserFolder } from '../../store/actions/user'
import { useHelper } from '../../hooks/useHelper'
import queries from '../../graphql/queries'

const Wrap = styled(Column)`
  width: 265px;
  min-width: 265px;
`

const CreateButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;

  span {
    white-space: nowrap;
  }
`

const RemoveTooltip = styled(Tooltip)`
  position: absolute;
  right: 8px;
  z-index: var(--z-11);
  display: none;
`

const ListItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--input-height-s);
  background: var(--ghost-color-background);
  border-radius: var(--surface-border-radius);
  padding: 8px 10px;
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: all 150ms ease;

  ${WrapText}, h4 {
    color: var(--ghost-color-text);
  }

  ${RemoveTooltip} {
    svg path {
      color: var(--ghost-color-text);
    }
  }

  &:hover {
    ${RemoveTooltip} {
      display: flex;

      svg path {
        stroke: black;
      }
    }

    ${WrapText}, h4 {
      color: black;
    }
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--default-color-accent);
      background: var(--default-color-accent-dim);

      ${RemoveTooltip} {
        svg path {
          stroke: var(--default-color-accent) !important;
        }
      }

      ${WrapText}, h4, p {
        color: var(--default-color-accent);
      }

      &:hover {
        ${WrapText}, h4, p {
          color: var(--default-color-accent);
        }
      }
    `}
`

export const Organizer = () => {
  const recall = useHelper()
  const { user, folder } = useSelector((state) => ({
    user: state.user,
    folder: state.root.folder
  }))
  const dispatch = useDispatch()

  const defaultFolder = useMemo(() => user?.folders[0], [user])

  const onFolderClick = (item) => {
    if (item.projects && item) {
      const result = { ...item, projects: item.projects }
      dispatch(setIgnoreFetch(false))

      dispatch(setFolder(result))
      dispatch(setUserFolder(result))
    }
  }

  useEffect(() => {
    if (defaultFolder) {
      dispatch(setFolder(defaultFolder))
    }
  }, [dispatch])

  return (
    <Wrap>
      {user.folders && user.folders.length > 0 ? (
        <Column>
          {user.folders.map((item) => {
            const length = item.projects.length
            const label =
              length === 1 ? 'проект' : length > 1 && length < 5 ? 'проекта' : 'проектов'

            return (
              <ListItem key={item.id} active={folder && item.id === folder.id}>
                <Difinition
                  text={item.name}
                  label={`${length} ${label}`}
                  onLink={() => onFolderClick(item)}
                  revert
                />
                <RemoveTooltip place={'left'} text={'Удалить'}>
                  <Button
                    size={'xs'}
                    kind={'icon'}
                    type={'button'}
                    appearance={'clear'}
                    onClick={recall(onUserFolderDelete, {
                      id: item.id,
                      mutation: queries.DELETE_USER_FOLDER,
                      callback: () => onFolderClick(defaultFolder)
                    })}>
                    <Icon size={'xs'} icon={'delete'} stroke={'var(--ghost-color-text)'} />
                  </Button>
                </RemoveTooltip>
              </ListItem>
            )
          })}
        </Column>
      ) : (
        <Alert style={{ width: '100%', textAlign: 'center' }}>Папок нет</Alert>
      )}
      <CreateButton onClick={recall(onUserFolderAdd, { mutation: queries.ADD_USER_FOLDER })}>
        <span>Новая папка</span>
        <Icon icon={'add'} stroke={'white'} />
      </CreateButton>
    </Wrap>
  )
}

export default Organizer
