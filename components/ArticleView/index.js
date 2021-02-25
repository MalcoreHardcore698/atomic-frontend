import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useQuery, useMutation } from '@apollo/react-hooks'

import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'
import Divider from '../../atomic-ui/components/Divider'
import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import HTMLView from '../HTMLView'
import Comments from '../Comments'
import { Loader } from '../Styled'
import queries from '../../graphql/queries'

export const Wrap = styled(Column)`
  flex-grow: 1;

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      padding: var(--default-gap);
      background: var(--surface-background);
      border: var(--surface-border);
      border-radius: var(--surface-border-radius);
      box-shadow: var(--surface-shadow);
    `}

  ${({ appearance }) =>
    appearance === 'ghost' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}
`

export const Poster = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 512px;
  border-radius: var(--surface-border-radius);

  @media only screen and (max-width: 480px) {
    height: 256px;
  }
`

export const Content = styled(Column)`
  grid-gap: 0;
`

export const View = ({
  article,
  appearance,
  className,
  style,
  onLink,
  onCommentLink,
  onCommentReply
}) => {
  const [comments, setComments] = useState([])

  const { data, loading, error } = useQuery(queries.GET_ARTICLE, {
    variables: {
      id: article
    }
  })

  const { data: dataComments, loading: loadingComments, error: errorComments } = useQuery(
    queries.GET_COMMENTS,
    {
      variables: {
        id: article
      }
    }
  )

  const [
    sendComment,
    { data: dataSendComment, loading: loadingSendComment, error: errorSendComment }
  ] = useMutation(queries.SEND_COMMENT)

  const [likeComment] = useMutation(queries.LIKE_COMMENT)

  useEffect(() => {
    if (!loadingComments && dataComments) {
      setComments(dataComments.getComments)
    }
  }, [dataComments, loadingComments])

  useEffect(() => {
    if (!loadingSendComment && dataSendComment) {
      setComments(dataSendComment.sendComment)
    }
  }, [dataSendComment, loadingSendComment])

  return (
    <Wrap className={className} style={style} appearance={appearance}>
      {!loading && data ? (
        <React.Fragment>
          {data.getArticle.preview && <Poster src={data.getArticle.preview.path} />}

          <Content>
            <Meta date={data.getArticle.createdAt} category={data.getArticle.category?.name} />
            <Title tag={'h3'} onClick={onLink} style={{ marginTop: -5, marginBottom: 5 }}>
              {data.getArticle.title}
            </Title>

            {data.getArticle.body && <HTMLView content={data.getArticle.body} />}
          </Content>

          <Divider clear />

          <Title tag={'h4'}>Комментарии</Title>
          <Comments
            comments={comments}
            appearance={'ghost'}
            error={errorComments || errorSendComment}
            loading={loadingComments || loadingSendComment}
            onLink={onCommentLink}
            onReply={onCommentReply}
            onLike={(id, liked) =>
              likeComment({
                variables: { comment: id, liked }
              })
            }
            onSubmit={(value) =>
              sendComment({
                variables: {
                  article: data.getArticle.id,
                  text: value
                }
              })
            }
          />
        </React.Fragment>
      ) : error ? (
        <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
          Упс! Не удалось загрузить информацию о статье
        </Alert>
      ) : (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </Wrap>
  )
}

View.defaultProps = {
  appearance: 'default'
}

export default View
