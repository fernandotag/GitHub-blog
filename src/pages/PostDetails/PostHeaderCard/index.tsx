import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PostHeaderCardContainer,
  PostHeaderCardFooter,
  PostHeaderCardHeader,
  PostHeaderCardTitle,
} from './styles'
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { enUS } from 'date-fns/locale'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNowStrict } from 'date-fns'
import { NavLink } from 'react-router-dom'

interface PostHeaderCardProps {
  title: string
  url: string
  githubUsername: string
  numberOfComments: number
  createdAt: Date
}

export function PostHeaderCard({
  url,
  title,
  numberOfComments,
  githubUsername,
  createdAt,
}: PostHeaderCardProps) {
  const formattedCreatedAt = formatDistanceToNowStrict(new Date(createdAt), {
    locale: enUS,
    addSuffix: true,
  })

  return (
    <PostHeaderCardContainer>
      <PostHeaderCardHeader>
        <NavLink to={'/'}>
          <FontAwesomeIcon icon={faArrowLeft} /> voltar
        </NavLink>
        <a href={url} target="_blank" rel="noreferrer">
          GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </PostHeaderCardHeader>
      <PostHeaderCardTitle>
        <p>{title}</p>
      </PostHeaderCardTitle>
      <PostHeaderCardFooter>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {githubUsername}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendar} />
          {formattedCreatedAt}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {numberOfComments} Comments
        </span>
      </PostHeaderCardFooter>
    </PostHeaderCardContainer>
  )
}
