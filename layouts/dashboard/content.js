import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'

import Column from '../../atomic-ui/components/Column'
import Grid from '../../atomic-ui/components/Grid'

import DashboardLayout from '../dashboard'
import List from '../../components/List'
import FilterBar from '../../components/FilterBar'
import HandleBar from '../../components/HandleBar'
import DeleteForm from '../../components/FormDelete'
import { setDisplayMethod, setVisibleFilters } from '../../store/actions/root'
import { setDrawer } from '../../store/actions/drawer'
import { setItem } from '../../store/actions/snacks'
import { useAccess } from '../../hooks/useAccess'

const getIsAdmin = (document) => document?.name?.toUpperCase() !== 'ADMIN'

const Delete = ({ item, query, component, entityMultiText, entitySingleText, onSubmit }) => {
  const isArray = useMemo(() => Array.isArray(item), [item])
  const dispatch = useDispatch()
  const Component = component

  return (
    <DeleteForm
      mutation={query}
      appearance={'clear'}
      onCancel={() => dispatch(setDrawer(null))}
      onSubmit={async (_, action) => {
        try {
          await action({
            variables: {
              id: isArray ? item.map((doc) => doc.id) : [item.id]
            }
          })
          dispatch(
            setItem({
              type: 'success',
              message: isArray
                ? `${entityMultiText} успешно удалены`
                : `${entitySingleText} успешно удален`
            })
          )
        } catch (err) {
          if (err) {
            dispatch(
              setItem({
                type: 'error',
                message: 'Что-то пошло не так'
              })
            )
          }
        } finally {
          dispatch(setDrawer(null))
          if (onSubmit) onSubmit()
        }
      }}>
      {isArray ? (
        <Grid length={'auto-fit'}>
          {item.map((document) => (
            <Component key={document.id} item={document} />
          ))}
        </Grid>
      ) : (
        <Component item={item} />
      )}
    </DeleteForm>
  )
}

export const Card = ({
  item,
  checked,
  appearance,
  component,
  withoutActions,
  withoutChecked,
  onChecked,
  onLink,
  onEdit,
  onDelete
}) =>
  React.cloneElement(component, {
    checked,
    appearance,
    onLink: onLink && (() => onLink(item)),
    onEdit: !withoutActions && onEdit && (() => onEdit(item)),
    onChecked: !withoutChecked && onChecked && ((checked) => onChecked({ ...item, checked })),
    onDelete: !withoutActions && onDelete && (() => onDelete(item))
  })

const ContentLayout = ({
  render,
  title,
  icon,
  field,
  template,
  limit = 6,
  startOffset = 6,
  buttonCreateText,
  filterConfig,
  getType,
  getQuery,
  entityType,
  deleteQuery,
  deleteEntityMultiText,
  deleteEntitySingleText,
  onLink,
  onEdit,
  onCreate,
  emptyMessage,
  withoutChecked
}) => {
  const { displayMethod, visibleFilters } = useSelector((state) => ({
    displayMethod: state.root.displayMethod,
    visibleFilters: state.root.visibleFilters
  }))
  const {
    isAccessibleForView,
    isAccessibleForAdd,
    isAccessibleForEdit,
    isAccessibleForDelete
  } = useAccess(entityType)
  const dispatch = useDispatch()

  const [isAllChecked, setIsAllChecked] = useState(false)
  const [checkedList, setCheckedList] = useState([])
  const [updated, setUpdated] = useState('list')

  const getIsAnyChecked = useCallback(
    (item) => checkedList.find((document) => document[field] === item[field])?.checked,
    [checkedList]
  )

  const onAfter = () => setUpdated(v4())

  const onChecked = (document) => {
    setCheckedList((prev) => {
      const isExists = (item) => item[field] === document[field]
      const candidate = prev.find(isExists)
      if (candidate) {
        return prev.map((item) =>
          isExists(item)
            ? {
                ...document,
                checked: !item.checked
              }
            : {
                ...item,
                checked: isAllChecked || item.checked
              }
        )
      } else {
        return [...prev, { ...document, checked: true }]
      }
    })
    setIsAllChecked(false)
  }

  const onAllChecked = () => {
    const value = !isAllChecked
    setCheckedList((prev) =>
      prev.map((item) => ({
        ...item,
        checked: getIsAdmin(item) ? value : false
      }))
    )
    setIsAllChecked(value)
  }

  const onDelete = (item) =>
    dispatch(
      setDrawer({
        icon: 'delete',
        color: 'red',
        title: 'Удаление',
        content: (
          <Delete
            item={item}
            query={deleteQuery}
            component={(props) =>
              React.cloneElement(render(props.item), {
                appearance: 'clear',
                onEdit: null,
                onDelete: null
              })
            }
            entityMultiText={deleteEntityMultiText}
            entitySingleText={deleteEntitySingleText}
            onSubmit={() => setUpdated(v4())}
          />
        )
      })
    )

  const onDeleteAll = () => onDelete(checkedList.filter((document) => document.checked))

  useEffect(() => {
    const countChecked = checkedList.reduce((acc, curr) => acc + (curr.checked ? 1 : 0), 0)
    if (checkedList.length > 0 && countChecked === checkedList.length) {
      setIsAllChecked(true)
    }
  }, [checkedList])

  return (
    <DashboardLayout title={title}>
      <Column>
        <HandleBar
          title={title}
          icon={icon}
          checked={isAllChecked}
          defaultDisplayMethod={displayMethod}
          defaultVisibleFilters={visibleFilters}
          buttonDeleteDisabled={!checkedList.find((item) => item.checked)}
          buttonCreateText={buttonCreateText}
          onCreate={isAccessibleForAdd && (() => onCreate && onCreate(onAfter))}
          onChecked={
            isAccessibleForDelete &&
            (() => displayMethod === 'grid' && onAllChecked && onAllChecked())
          }
          onChangeVisibleFilter={() => dispatch(setVisibleFilters(!visibleFilters))}
          onChangeDisplayMethod={(item) => dispatch(setDisplayMethod(item.value))}
          onDeleteAll={isAccessibleForDelete && onDeleteAll}
          withoutFooter={!isAccessibleForDelete || displayMethod === 'list'}
          withFilters={filterConfig}
        />

        <FilterBar {...(filterConfig || {})} isOpen={visibleFilters} withoutDivider />

        <List
          key={updated}
          limit={limit}
          type={getType}
          query={getQuery}
          template={template}
          startOffset={startOffset}
          emptyMessage={emptyMessage}
          setCheckedList={setCheckedList}
          component={(item) => (
            <Card
              item={item}
              component={render(item)}
              withoutChecked={!isAccessibleForDelete && withoutChecked}
              withoutActions={!isAccessibleForEdit && !isAccessibleForDelete}
              checked={getIsAdmin(item) && (isAllChecked || getIsAnyChecked(item))}
              onLink={onLink && isAccessibleForView && ((item) => onLink(item))}
              onEdit={onEdit && isAccessibleForEdit && ((item) => onEdit(item, onAfter))}
              onChecked={isAccessibleForDelete && onChecked}
              onDelete={isAccessibleForDelete && onDelete}
            />
          )}
          onClick={onLink && isAccessibleForView && ((item) => onLink(item))}
          onEdit={onEdit && isAccessibleForEdit && ((item) => onEdit(item, onAfter))}
          onChecked={isAccessibleForDelete && onChecked}
          onDelete={isAccessibleForDelete && onDelete}
        />
      </Column>
    </DashboardLayout>
  )
}

ContentLayout.defaultProps = {
  field: 'id'
}

export default ContentLayout
