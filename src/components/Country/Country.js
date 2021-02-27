import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props)
    const {name,population,flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='country-info'>
            <img src={flag} alt=""/>
            <h3>{name}</h3>
            <h5>Population: {population}</h5>
            <button onClick={()=>handleAddCountry(props.country)} style={{fontSize:'18px',backgroundColor:'lightCyan',borderRadius:'5px'}}>Add Country</button>
        </div>
    );
};

export default Country;