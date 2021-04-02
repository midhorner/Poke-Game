import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './pokedex.css';

class Pokedex extends Component {
  render() {
    let title;
    /* Use a boolean prop to alter text and class names */
    if (this.props.isWinner){
      title = <h1 className="winner">Winner!</h1>;
    }
    else {
      title = <h1 className="loser">Loser!</h1>
    }
    
    return(
    <div className="Pokedex">      
      {title}
      <h3>Total Experience: {this.props.exp}</h3>
      <div className="Pokedex-cards">
        {this.props.pokemon.map((p) => (<Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_xp={p.base_xp} />)) }
        {/* despite the fact that 'pokemon' is a variable and the static defProps, must still call this.props when mapping (and probably a lot of other times) */}
     </div>
    </div>
    );
  }
}

export default Pokedex;