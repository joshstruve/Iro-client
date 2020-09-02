import React, { Component } from 'react'
import { MdCheckCircle, MdCancel } from 'react-icons/md'

import Question from '../../components/Learning/item-components/Question'


class Learning extends Component {
    render() {
      return (
        <section>
          <div className='learning-card'>
              <Question />
          </div>
        </section>
      );
    }
  }
  
  export default Learning