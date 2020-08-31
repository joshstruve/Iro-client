import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import '../../../src/index.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='slim-container'>
        <h2>Sign Up</h2>
        <p>
        Iro uses spaced repetition learning to teach you the words for a variety of colors in the Japanese language.
        </p>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute
