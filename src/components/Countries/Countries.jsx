import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    
    return (
        <div>
           <h1>In The Countries: {countries.length}</h1> 
           <div>
            {
                countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;