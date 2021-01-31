import React from 'react'
import styled from 'styled-components'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Comment from '../../atomic-ui/components/Comment'
import Alert from '../../atomic-ui/components/Alert'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Icon from '../../atomic-ui/components/Icon'

export const Wrap = styled(Column)`
  flex-grow: 1;
`

export const CentralAlert = styled(Alert)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-grow: 1;
`

export const Comments = ({ comments, appearance, onLink, onReply, onLike, onSubmit }) => (
  <Wrap>
    {comments && comments.length > 0 ? (
      comments.map((comment) => (
        <Comment
          key={comment.id}
          user={comment.user}
          message={comment.message}
          likes={comment.likes}
          time={comment.time}
          onLink={onLink}
          onReply={onReply}
          onLike={onLike}
        />
      ))
    ) : (
      <CentralAlert>
        Вы можете оставить комментарий первым
      </CentralAlert>
    )}

    <Row>
      <Input placeholder={'Оставьте комментарий...'} appearance={appearance} />
      <Button kind={'icon'} onSubmit={onSubmit}>
        <Icon icon={'send'} stroke={'white'} />
      </Button>
    </Row>
  </Wrap>
)

Comments.defaultProps = {
  appearance: 'default'
}

export default Comments
