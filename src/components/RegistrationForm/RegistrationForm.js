import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(user => {
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div>
          <Label htmlFor='registration-name-input' hidden>
            Enter your name<Required />
          </Label>
          <Input
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            placeholder='Enter your name'
            required
          />
        </div>
        <div>
          <Label htmlFor='registration-username-input' hidden>
            Enter a username<Required />
          </Label>
          <Input
            id='registration-username-input'
            name='username'
            placeholder='Enter a username'
            required
          />
        </div>
        <div>
          <Label htmlFor='registration-password-input' hidden>
            Enter a password<Required />
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            placeholder='Enter a password'
            required
          />
        </div>
        <footer>
          <Button type='submit'>
            Sign up
          </Button>
          {' '}
          <div>
          <Link to='/login'>Already have an account?</Link>
          </div>
        </footer>
      </form>
    )
  }
}

export default RegistrationForm
