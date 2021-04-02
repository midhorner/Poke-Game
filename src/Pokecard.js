import React, {Component} from 'react';
import './pokecard.css'

const Poke_Img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
// make image sources variables - easier to use other variables inside string

// let LeadingZero = (number) => {
//   if (number > 99) { return number; }
//   if (number < 10) { return `00${number}`; }
//   if (10 < number < 100 ) { return `0${number}`; }    
// }
// My function to add leading zeros

let LeadingZero = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
// his function uses slice() to cut off the back 3 numbers (slice() starts from right to left if using negative)*

class Pokecard extends Component {
  render() {
    const { id, name, type, base_xp } = this.props;
    let imgSrc = `${Poke_Img}${LeadingZero(id)}.png`;
    
    // final image source variable
    return(
    <div className="Pokecard">
     <div className="Pokecard-name">{name}</div>
     <img className="Pokecard-img" src={imgSrc} alt={name} />
     <div className="Pokecard-type">Type: {type}</div>
     <div className="Pokecard-exp">EXP: {base_xp}</div>
    </div>
    );
  }
}

export default Pokecard;