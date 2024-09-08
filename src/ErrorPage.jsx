import { ErrorPageStyle } from './components/componentStyle'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <ErrorPageStyle>
      <div className="container">
        <div>
          <h2>404</h2>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking  for does not exist. Please check the URL and try again. but you can click here  to go back to the home page
          </p>
          <NavLink to={'/'}>
            <Button>Go back to home</Button>
          </NavLink>
        </div>
      </div>
    </ErrorPageStyle>
  )
}
