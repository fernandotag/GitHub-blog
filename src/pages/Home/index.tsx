import { ProgressBar } from 'react-loader-spinner'
import { api } from '../../lib/Axios'
import { PostCard } from './PostCard'
import { ProfileCard } from './ProfileCard'
import { HomeContainer, PostList, SearchLabel, SearchSection } from './styles'

import { useEffect, useState } from 'react'
import { defaultTheme } from '../../styles/themes/default'

export interface IPost {
  title: string
  text: string
  createdAt: Date
  id: number
}

interface IGitHubPostResponse {
  items: [
    {
      number: number
      title: string
      created_at: Date
      body: string
    },
  ]
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState(false)

  async function fetchPosts(query = '') {
    const normalizedResponse: IPost[] = []

    setLoading(true)

    const response = await api.get<IGitHubPostResponse>(
      `search/issues?q=${
        query || ''
      }%20label:published%20repo:fernandotag/github-blog`,
    )

    response.data.items.every((post) =>
      normalizedResponse.push({
        id: post.number,
        title: post.title,
        text: post.body,
        createdAt: post.created_at,
      }),
    )

    setPosts(normalizedResponse)
    setLoading(false)
  }

  const handleKeypressOnSearchInput = (key: string, text: string) => {
    if (key === 'Enter') {
      fetchPosts(text)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <ProfileCard />
      <SearchSection>
        <SearchLabel>
          <span>Posts</span>
          {posts.length < 2 ? (
            <small>{posts.length} post</small>
          ) : (
            <small>{posts.length} posts</small>
          )}
        </SearchLabel>
        <input
          type="text"
          onBlur={(e) => fetchPosts(e.target.value)}
          onKeyDown={(event) =>
            handleKeypressOnSearchInput(event.key, event.currentTarget.value)
          }
          placeholder="Search a Post"
        />
      </SearchSection>
      <PostList>
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
        {!loading &&
          posts &&
          posts.map((post) => (
            <li key={`${post.id}`}>
              <PostCard post={post}></PostCard>
            </li>
          ))}
      </PostList>
    </HomeContainer>
  )
}

export default Home
