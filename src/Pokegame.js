import React, {Component} from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
    {id: 4, name: 'Charmander', type: 'fire', base_xp: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_xp: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_xp: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_xp: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_xp: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_xp: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_xp: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_xp: 65}
    ]
  };
  handleClick = (e) => {
    window.location.reload();
    return false;
  }
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon]
    // hand2 is an array generated from defProps
    while(hand1.length < hand2.length){
      // we'll splice a random pokemon from hand2 and push it into hand1 until both hands have an equal number of pokemon
      let randIdx = Math.floor(Math.random() * hand2.length);
      // generates a random number we then use as the "start" to splice from hand2
      let randPokemon = hand2.splice(randIdx, 1)[0]; 
      // this takes the random index generated by randIdx and uses it as the "start" for splice from hand2, we splice 1 pokemon splice(start = starting index, # of items spliced from array)
      // not sure why [0] is needed at the end, but just remember it in the future
      hand1.push(randPokemon);
      // this pushes the pokemon spliced from hand2 into hand1
    }
    let totalExp = (exp, pokemon) => exp + pokemon.base_xp;
    // totalExp is the variable/function we set for the reduce() function
    // reduce() takes arguments that add together values from an array 
    // reduce(exp, pokemon) => exp = base_xp will give us a sum of all the base_xp in the pokemon array - it "accumulates" base_xp and stores it in exp.
    let exp1 = hand1.reduce(totalExp, 0);
    let exp2 = hand2.reduce(totalExp, 0);
    // feeding the reduce() function our (variable, 0) for accumulating base_xp will give each hand the total sum of base_xp from each pokemon
    // 0 is the starting point for the "accumulater"
    // we then pass our "reducer function" as a prop down to pokedex where we compare the values of each hand to extablish the "winning(which hand has greater exp)" hand
    return(
      <div className="Pokegame">
        <h1><button onClick={this.handleClick}>Reset Game</button></h1>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
        {/* isWinner a simple Boolean that calculates which is greater (exp1,exp2) before it's even passed down
        REMEMBER boolean variables can be set with any condition that satisfies a true/false equation, no matter how convoluted */}
      </div>
    );
  }
}

export default Pokegame;