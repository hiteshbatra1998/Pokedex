import React from 'react';

// const PokeList = () =>{
//     render(){
//         return(
//             <div className="Poke-Container">
//                 Hi
//             </div>
//         );
//     }
// };

const PokeList = (props)=>{
    const names=props.list.map(
        (poke)=>{
            if( poke.name.includes(props.str) )
                return <div key={poke.name}>{poke.name}</div>
        }
    );
    return(
        <div>
            {names}
            
        </div>
    );
};
export default PokeList;