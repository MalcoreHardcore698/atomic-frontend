import React from 'react'
import styled, { css } from 'styled-components'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'

import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Image from '../../atomic-ui/components/Image'
import Meta from '../../atomic-ui/components/Meta'
import Divider from '../../atomic-ui/components/Divider'
import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import HTMLView from '../HTMLView'
import Comments from '../Comments'
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

export const Loader = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`

export const HTMLContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: var(--default-gap);

  img {
    border-radius: var(--surface-border-radius);
  }
`

export const HTMLView = ({ content }) => (
  <HTMLContent dangerouslySetInnerHTML={{ __html: content }} />
)

export const View = ({
  article,
  appearance,
  className,
  style,
  onLink,
  onCommentLink,
  onCommentReply,
  onCommentLike,
  onCommentSend
}) => {
  const { data, loading, error } = useQuery(queries.GET_ARTICLE, {
    variables: {
      id: article
    }
  })
  const [loadComments, { dataComments, loadingComments, errorComments }] = useLazyQuery(
    queries.GET_COMMENTS,
    {
      variables: {
        id: article
      }
    }
  )

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
            comments={dataComments}
            appearance={'ghost'}
            errorComments={errorComments}
            loadingComments={loadingComments}
            onLoad={loadComments}
            onLink={onCommentLink}
            onReply={onCommentReply}
            onLike={onCommentLike}
            onSubmit={onCommentSend}
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
