import React from 'react'
const IdeasList = ( {ideas, handleDeleteIdea} ) => {
  return(
    <div>
      {ideas.map( (idea) => <Idea {...idea}
                                  key={idea.id}
                                  handleDelete={handleDeleteIdea}
                                  /> )}
    </div>
  )
}

const Idea = ( { title, body, id, handleDelete } ) => {
  return(
    <div id={id} className="idea">
      <h1>{title} - {id}</h1>
      <h4>{body}</h4> <br/>
      <button onClick={ () => handleDelete(id) } >Delete</button>
    </div>
  )
}

export default IdeasList;
