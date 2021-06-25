import React from 'react'

import ArticleCard from '../ArticleCard'

export const ArticleSuit = ({
  style,
  layout,
  article,
  preview,
  checked,
  className,
  appearance,
  withSocials,
  withStatus,
  hasOwned,
  onLink,
  onChecked,
  onDelete,
  onEdit
}) => (
  <ArticleCard
    style={style}
    layout={layout}
    article={article}
    preview={preview}
    checked={checked}
    className={className}
    appearance={appearance}
    withSocials={withSocials}
    withStatus={withStatus}
    owned={hasOwned && hasOwned(article)}
    onLink={onLink && (() => onLink(article, withStatus))}
    onChecked={onChecked}
    onDelete={onDelete}
    onEdit={onEdit}
  />
)

ArticleSuit.defaultProps = {
  withSocials: true
}

export default ArticleSuit
