import React from 'react'

import UserCard from '../UserCard'

export const UserSuit = ({
  user,
  preview,
  checked,
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
    preview={preview}
    checked={checked}
    appearance={appearance}
    owned={hasOwned && hasOwned(user)}
    onLink={() => onLink && onLink(user)}
    onChat={hasOwned && (() => onChat(user))}
    onMembers={() => onMembers && onMembers(user)}
    onAboutMore={() => onAboutMore && onAboutMore(user)}
    onCompanyLink={() => onCompanyLink && onCompanyLink(user)}
    onChecked={onChecked}
    onDelete={onDelete}
    onEdit={onEdit}
  />
)

export default UserSuit
