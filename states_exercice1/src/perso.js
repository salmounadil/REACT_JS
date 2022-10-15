import React, { Component } from 'react'

export default class Perso extends Component {

  render() {
    return (
      <div>
        {this.props.real.map((e) =>
          <h1 key={e.id}>Je m'appelle {e.nom} {e.prenomnom} , j'ai {e.age} ans
            et j'habite à {e.adresse}

          </h1>
        )}
        <button onClick={this.props.func}> Clique</button>
      </div>

    )



  }
}
