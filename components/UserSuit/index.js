import React from 'react'

import UserCard from '../UserCard'

export const UserSuit = ({
  user,
  style,
  preview,
  checked,
  className,
  appearance,
  hasOwned,
  onLink,
  onChat,
  onMembers,
  onAboutMore,
  onCompanyLink,
  onChecked,
  onDelete,
  onEdit
}) => (
  <UserCard
    user={user}
    style={style}
    preview={preview}
    checked={checked}
    className={className}
    appearance={appearance}
    owned={hasOwned && hasOwned(user)}
    onLink={() => onLink && onLink(user)}
    onChat={hasOwned && hasOwned(user) && (() => onChat(user))}
    onMembers={() => onMembers && onMembers(user)}
    onAboutMore={() => onAboutMore && onAboutMore(user)}
    onCompanyLink={() => onCompanyLink && onCompanyLink(user)}
    onChecked={onChecked}
    onDelete={onDelete}
    onEdit={onEdit}
  />
)

export default UserSuit
