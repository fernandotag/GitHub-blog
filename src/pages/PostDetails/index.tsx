import { useEffect, useState } from 'react'
import { PostContent, PostDetailsContainer } from './styles'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/Axios'
import { ProgressBar } from 'react-loader-spinner'
import { defaultTheme } from '../../styles/themes/default'
import { PostHeaderCard } from './PostHeaderCard'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface IPostDetails {
  title: string
  numberOfComments: number
  createdAt: Date
  githubUsername: string
  url: string
  text: string
}

interface IGitHubPostDetailsResponse {
  title: string
  comments: number
  created_at: Date
  user: { login: string }
  html_url: string
  body: string
}

export function PostDetails() {
  const [post, setPost] = useState<IPostDetails>({} as IPostDetails)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  async function fetchPostDetails(postId: string) {
    const response = await api.get<IGitHubPostDetailsResponse>(
      `/repos/fernandotag/github-blog/issues/${postId}`,
    )
    const {
      title,
      comments: numberOfComments,
      created_at: createdAt,
      user: { login: githubUsername },
      html_url: url,
      body: text,
    } = response.data

    setPost({
      title,
      numberOfComments,
      createdAt,
      githubUsername,
      url,
      text,
    })
    setLoading(false)
  }

  useEffect(() => {
    if (id != null) {
      fetchPostDetails(id)
    }
  }, [id])

  return (
    <PostDetailsContainer>
      {post.url && (
        <PostHeaderCard
          url={post.url}
          title={post.title}
          githubUsername={post.githubUsername}
          numberOfComments={post.numberOfComments}
          createdAt={post.createdAt}
        />
      )}
      {loading && (
        <ProgressBar
          height="80"
          width="100%"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor={defaultTheme['base-label']}
          barColor={defaultTheme.blue}
        />
      )}
      <PostContent>
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            },
          }}
        >
          {post.text}
        </ReactMarkdown>
      </PostContent>
    </PostDetailsContainer>
  )
}
