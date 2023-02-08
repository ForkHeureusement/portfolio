import { useState } from 'react';
import './sass/index.scss'

const Form = () => {
  const [cocktail, setCocktail] = useState('');
  const headers = new Headers({
    'X-Api-Key': import.meta.env.NINJA_KEY
  });

  const getCocktails = (e) => {
    e.preventDefault();
    fetch(`https://api.api-ninjas.com/v1/cocktail?name=${cocktail}`, { headers })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Request failed:', error));
  }

  return (
    <form onSubmit={getCocktails}>
      <input type="search" value={cocktail} onChange={e => setCocktail(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  )
};

export default Form;