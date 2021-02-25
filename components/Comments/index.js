import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

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

export const Comments = ({
  comments,
  loading,
  appearance,
  onLink,
  onReply,
  onLike,
  onAttach,
  onSubmit
}) => {
  const user = useSelector((state) => state.user)
  const [message, setMessage] = useState('')
  const messageRef = useRef(null)

  return (
    <Wrap>
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            user={comment.author}
            message={comment.text}
            likes={comment.likes?.length}
            time={comment.time}
            isLiked={comment.likes.find((likedUser) => likedUser.email === user.email)}
            onLink={onLink}
            onReply={onReply}
            onLike={(liked) => onLike(comment.id, liked)}
          />
        ))
      ) : (
        <CentralAlert>Вы можете оставить комментарий первым</CentralAlert>
      )}

      <Row>
        <Button kind={'icon'} disabled={loading || !comments} onSubmit={onAttach}>
          <Icon icon={'attach'} stroke={'white'} />
        </Button>
        <Input
          name={'text'}
          ref={messageRef}
          placeholder={'Отправьте комментарий...'}
          disabled={loading && !comments}
          appearance={appearance}
          onChange={(e) => setMessage(e?.target?.value || '')}
          onKeyDown={(e) => {
            // Pressed ENTER
            if (e.keyCode === 13) {
              onSubmit(message)
              messageRef.current.value = ''
            }
          }}
          tabIndex={-1}
        />
        <Button
          kind={'icon'}
          onClick={() => {
            onSubmit(message)
            messageRef.current.value = ''
          }}>
          <Icon icon={'send'} stroke={'white'} />
        </Button>
      </Row>
    </Wrap>
  )
}

Comments.defaultProps = {
  appearance: 'default'
}

export default Comments
