import React, { Component } from 'react';

class InputSubmission extends Component {
  constructor(){
    super();

    this.state = { title: '', body: ''}
  }

  handleClick(e) {

    // create and save idea
    this.props.sendIdea( Object.assign(this.state, {id: Date.now()}) )

    //reset state
    this.setState( {title: '', body: ''} )
  }


  render() {
      return (
        <div className='InputSubmissionForm'>
          <input
            type='text'
            placeholder='ReactIdeas'
            value={ this.state.title }
            onChange={ ( event ) => this.setState({ title: event.target.value }) }
             /><br/>
          <textarea
            placeholder='ReactBox Body'
            value={ this.state.body }
            onChange={ (event) => this.setState({ body: event.target.value }) }
          /><br/>

          {/* clear state and create idea */}
          <button onClick={ this.handleClick.bind(this) } >Submit</button>
        </div>
      )
  }
}

export default InputSubmission;
