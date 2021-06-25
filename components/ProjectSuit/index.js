import React from 'react'

import ProjectCard from '../ProjectCard'

export const ProjectSuit = ({
  user,
  style,
  layout,
  preview,
  project,
  checked,
  canRemove,
  appearance,
  withSocials,
  withStatus,
  className,
  hasAdded,
  hasLiked,
  onAdd,
  onLike,
  onLink,
  onRemove,
  onAboutMore,
  onCompanyLink,
  onScreenshotClick,
  onChecked,
  onDelete,
  onEdit
}) => (
  <ProjectCard
    style={style}
    layout={layout}
    project={project}
    preview={preview}
    checked={checked}
    className={className}
    canRemove={canRemove}
    appearance={appearance}
    withSocials={withSocials}
    withStatus={withStatus}
    added={hasAdded && hasAdded(project)}
    liked={hasLiked && hasLiked(project)}
    onLink={() => onLink && onLink(project)}
    onAdd={user?.email && (() => onAdd && onAdd(project))}
    onAboutMore={() => onAboutMore && onAboutMore(project)}
    onLike={user?.email && (() => onLike && onLike(project))}
    onCompanyLink={() => onCompanyLink && onCompanyLink(project)}
    onRemove={user?.email && (() => onRemove && onRemove(project))}
    onScreenshotClick={(_, key) => onScreenshotClick && onScreenshotClick(project, key)}
    onChecked={onChecked}
    onDelete={onDelete}
    onEdit={onEdit}
  />
)

ProjectSuit.defaultProps = {
  withSocials: true
}

export default ProjectSuit
