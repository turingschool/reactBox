import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputSubmission from './InputSubmission'
import IdeasList from './IdeasList'

class App extends Component {
  constructor(){
    super();

    this.state = { ideas: [] }
  }

  componentDidMount() {
    let ideasFromStorage = localStorage.getItem('ideas');
    ideasFromStorage = JSON.parse(ideasFromStorage);

    this.setState({ideas: ideasFromStorage ? ideasFromStorage : []})
  }

  addIdea(idea) {
    //here we will add an idea
    this.state.ideas.push( idea )

    //set state.ideas to local storage
    localStorage.setItem('ideas', JSON.stringify(this.state.ideas) )

    this.setState( {ideas: this.state.ideas} )
  }

  deleteIdea(id){
    //make new array without idea
    let newIdeasList = this.state.ideas.filter((idea) => idea.id !== id )
    // change state of ideas -> second argument is the callback to perform after setting state
    this.setState( {ideas: newIdeasList},
                      () => localStorage.setItem('ideas', JSON.stringify(this.state.ideas)) )
  }

  render() {
    return (
      <div>
        <InputSubmission sendIdea={ this.addIdea.bind(this) } />

        <IdeasList ideas={ this.state.ideas } handleDeleteIdea={ this.deleteIdea.bind(this) } />
      </div>
    );
  }
}

export default App;
