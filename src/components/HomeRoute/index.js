import {Link} from 'react-router-dom'

import Header from '../Header'

import ReactContext from '../../context/ReactContext'

import {
  HomeContainer,
  HomeHeading,
  HomePara,
  Button,
  Image,
  Name,
  Topic,
} from './styledComponents'

const HomeRoute = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <ReactContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)
        return (
          <div>
            <Header />

            {isRegistered === true ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topic}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomePara>Please register for the topic</HomePara>
                <Link to="/register">
                  <Button onClick={onRegister}>Register</Button>
                </Link>

                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default HomeRoute
