import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import '../../index.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span>
          {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login' className='navlink'>Login</Link>
        {' '}
        <Link to='/register' className='navlink'>Sign Up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <h1>
          <Link to='/'>
            Iro
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header
