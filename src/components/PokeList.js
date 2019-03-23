import React from 'react';
import PokeCss from '../Styling/Poke.css';

const PokeList = (props)=>{
    let i=0;
    const names=props.list.map(
        (poke)=>{
            i=i+1;
            const url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
            if( poke.name.includes(props.str) )
                return (
                        <div key={poke.name} className="contain">
                            <div className="image-div"><img className="image" src={url} alt="poke-img"/></div>
                            <div className="name">{poke.name}</div>
                        </div>
                        );
        }
    );
    return(
        <div className="PokeContain">
            {names}
            
        </div>
    );
};
export default PokeList;
