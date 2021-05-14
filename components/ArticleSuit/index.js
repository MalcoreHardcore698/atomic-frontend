import React from 'react'

import ArticleCard from '../ArticleCard'

export const ArticleSuit = ({
  layout,
  article,
  preview,
  checked,
  appearance,
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
    appearance={appearance}
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
