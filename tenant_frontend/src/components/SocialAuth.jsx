import React, { useCallback, useState } from 'react'
import '../assests/socialAuth.css'
import { User } from './auth_components/User' // component display user (see detail on /example directory)
import {
LoginSocialGoogle,
// LoginSocialAmazon,
// LoginSocialFacebook,
// LoginSocialGithub,
// LoginSocialInstagram,
// LoginSocialLinkedin,
// LoginSocialMicrosoft,
// LoginSocialTwitter,
// LoginSocialApple,
} from 'reactjs-social-login'

// CUSTOMIZE ANY UI BUTTON
import {
 // FacebookLoginButton,
  GoogleLoginButton,
//   GithubLoginButton,
//   AmazonLoginButton,
//   InstagramLoginButton,
//   LinkedInLoginButton,
//   MicrosoftLoginButton,
//   TwitterLoginButton,
//  AppleLoginButton,
} from 'react-social-login-buttons'

// REDIRECT URL must be same with URL where the (reactjs-social-login) components is locate
// MAKE SURE the (reactjs-social-login) components aren't unmounted or destroyed before the ask permission dialog closes
const REDIRECT_URI = window.location.href;

export const SocialAuth = () => {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState(null)

  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])

  return (
    <>
      {provider && profile ? (
        <User provider={provider} profile={profile} onLogout={onLogoutSuccess} />
      ) : (
        <div className={`App ${provider && profile ? 'hide' : ''}`}>
          <h1 className='title'> Authorization page</h1>
          {/* <LoginSocialFacebook
            isOnlyGetToken
            appId={process.env.REACT_APP_FB_APP_ID || ''}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook> */}

          <LoginSocialGoogle
            isOnlyGetToken
            client_id={process.env.REACT_APP_GG_APP_ID || '509460893565-0bsb4g1ns84o1042gmn1nnejqpv6n7j6.apps.googleusercontent.com'}
            scope={'https://www.googleapis.com/auth/userinfo.email'}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>

          {/* <LoginSocialApple
            client_id={process.env.REACT_APP_APPLE_ID || ''}
            scope={'name email'}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={err => {
              console.log(err);
            }}
          >
            <AppleLoginButton />
          </LoginSocialApple>

          <LoginSocialAmazon
            isOnlyGetToken
            client_id={process.env.REACT_APP_AMAZON_APP_ID || ''}
            redirect_uri={REDIRECT_URI}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
            onLoginStart={onLoginStart}
          >
            <AmazonLoginButton />
          </LoginSocialAmazon>

          <LoginSocialInstagram
            isOnlyGetToken
            client_id={process.env.REACT_APP_INSTAGRAM_APP_ID || ''}
            client_secret={process.env.REACT_APP_INSTAGRAM_APP_SECRET || ''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <InstagramLoginButton />
          </LoginSocialInstagram>

          <LoginSocialMicrosoft
            isOnlyGetToken
            client_id={process.env.REACT_APP_MICROSOFT_APP_ID || ''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <MicrosoftLoginButton />
          </LoginSocialMicrosoft>

          <LoginSocialLinkedin
            isOnlyGetToken
            client_id={process.env.REACT_APP_LINKEDIN_APP_ID || ''}
            client_secret={process.env.REACT_APP_LINKEDIN_APP_SECRET || ''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <LinkedInLoginButton />
          </LoginSocialLinkedin>

          <LoginSocialGithub
            isOnlyGetToken
            client_id={process.env.REACT_APP_GITHUB_APP_ID || ''}
            client_secret={process.env.REACT_APP_GITHUB_APP_SECRET || ''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <GithubLoginButton />
          </LoginSocialGithub>

         

          <LoginSocialTwitter
            isOnlyGetToken
            client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY || ''}
            redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider)
              setProfile(data)
            }}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <TwitterLoginButton />
          </LoginSocialTwitter> */}

          
        </div>
      )}
    </>
  )
}

