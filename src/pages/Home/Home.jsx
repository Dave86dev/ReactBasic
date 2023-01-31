
import React, { useState, useEffect } from 'react';
import { bringCharacters } from '../../services/apiCalls';
import './Home.css';

export const Home = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        if (characters.length === 0) {

            bringCharacters()
                .then(resultado => {

                    setTimeout(()=>{

                        setCharacters(resultado.data.results);
                    }, 2000);

                })
                .catch(error => console.log(error));
        }

    }, [characters]);


    return (
        <div className="homeDesign">

            {characters.length > 0 ? (
                characters.map(character => {
                    return (
                        <div key={character.id}>
                            {character.name}
                        </div>
                    )
                })

            ) : (
                <div>NO HAN VENIDO AUN</div>

            )

        }

        </div>
    )
}