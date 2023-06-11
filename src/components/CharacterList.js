import React, {useEffect, useState} from 'react';
import '../App.css';

function Characterdivst() {
    const [characters, setCharacters] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const url = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setCharacters(data.results);
        })
        .catch(error => {
            console.log('Error: ' + error);
        });
    }, []);

    const handleSearch = event => {
        setSearchQuery(event.target.value);
    }

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return (
        <div className='characterList'>
            <h2>Characters</h2>
            <input
                type="text"
                placeholder="Search Characters"
                value={searchQuery}
                onChange={handleSearch}
            />    
            <div className='list'>
                {filteredCharacters.map(character => (
                    <div key={character.id} className='characters'>
                        <img src={character.image} alt={character.name} />
                        <div className='description'>
                            <h3>{character.name}</h3>
                            <p>Status: {character.status}</p>
                            <p>Species: {character.species}</p>
                            <p>Location: {character.location.name}</p>
                        </div>
                        

                    </div>
                ))}
            </div>
        </div>
    )



}

export default Characterdivst;