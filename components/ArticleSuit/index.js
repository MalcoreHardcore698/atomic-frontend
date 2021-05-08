import React from 'react'

import ArticleCard from '../ArticleCard'

export const ArticleSuit = ({
  layout,
  article,
  preview,
  checked,
  withSocials,
  hasOwned,
  onLink,
  onChecked,
  onDelete,
  onEdit
}) => (
  <ArticleCard
    layout={layout}
    article={article}
    preview={preview}
    checked={checked}
    withSocials={withSocials}
    owned={hasOwned && hasOwned(article)}
    onLink={onLink && (() => onLink(article))}
    onChecked={onChecked}
    onDelete={onDelete}
    onEdit={onEdit}
  />
)

ArticleSuit.defaultProps = {
  withSocials: true
}

export default ArticleSuit
