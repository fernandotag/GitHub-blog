import { useEffect, useState } from 'react'
import {
  ProfileCardBody,
  ProfileCardContainer,
  ProfileCardFooter,
  ProfileCardHeader,
} from './styles'
import { api } from '../../../lib/Axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

interface IProfile {
  name: string
  followers: number
  githubUsername: string
  company: string
  url: string
  avatarUrl: string
  description: string
}

export function ProfileCard() {
  const [profile, setProfile] = useState<IProfile>()

  async function fetchUserData() {
    const response = await api.get('users/fernandotag')
    const {
      name,
      followers,
      login: githubUsername,
      company,
      html_url: url,
      avatar_url: avatarUrl,
      bio: description,
    } = response.data

    const newUserObj = {
      name,
      followers,
      githubUsername,
      company,
      url,
      avatarUrl,
      description,
    }
    setProfile(newUserObj)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <ProfileCardContainer>
      {profile && (
        <>
          <img
            width={148}
            height={148}
            src={profile?.avatarUrl}
            alt="Person Photo"
          />
          <div>
            <ProfileCardHeader>
              <h1>{profile?.name}</h1>
              <a href={profile?.url} target="_blank" rel="noreferrer">
                GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </ProfileCardHeader>
            <ProfileCardBody>
              <p>{profile?.description}</p>
            </ProfileCardBody>
            <ProfileCardFooter>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                {profile?.githubUsername}
              </span>
              <span>
                <FontAwesomeIcon icon={faUserGroup} />
                {profile?.followers} Followers
              </span>
            </ProfileCardFooter>
          </div>
        </>
      )}
    </ProfileCardContainer>
  )
}
