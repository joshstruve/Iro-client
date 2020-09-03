import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Header from '../../components/Header/Header'

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section className='container'>
        <Header />
        <h2>Login</h2>
        <p></p>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    );
  }
}

export default LoginRoute
