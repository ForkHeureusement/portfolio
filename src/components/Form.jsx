import { useState } from 'react';
const Form = () => {
  import.meta.env.NINJA_KEY
  const [cocktail, setCocktail] = useState('');
  const headers = {
    'X-Api-Key': process.env.NINJA_KEY
  };
  console.log(process.env.YOUR_ENV_VARIABLE)
  const getCocktails = (e) => {
    e.preventDefault();
    fetch(`https://api.api-ninjas.com/v1/cocktail?name=${cocktail}`, { headers })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status code: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log(data)
    )
    .catch(error => console.error(error));
  };

  return (
  <>

    <form className="form"onSubmit={getCocktails}>
      <input type="search" value={cocktail} onChange={e => setCocktail(e.target.value)} />
      <input type="submit" value="Chercher" />
    </form>
  </>
  );

};

export default Form;
