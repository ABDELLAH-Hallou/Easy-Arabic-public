import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/planning/Card';

var logo_wc = require('../components/planning/icons/wc.png')
function Planning() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchMatches() {
      const response = await axios.get('https://copa22.medeiro.tech/matches');
      setMatches(response.data);
    }
    fetchMatches()

  }, []);

  return (
    <div>
      <div
      className="bg-cover h-max md:h-screen md:pb-0 pb-8 mt-2 md:px-8 flex flex-row flex-wrap justify-start md:flex-nowrap md:justify-between md:items-center md:flex-row-reverse bg-gradient-to-t md:bg-gradient-to-r  from-red-900 to-blue-100">
        <img src={logo_wc} className=""></img>
        
        <span style={{ fontFamily:"qatarwcbold"}} className=' px-6 text-white' >
        <span className=' font-bold text-5xl md:text-6xl '>
          FIFA WORLD CUP <span className='block  font-extrabold text-yellow-400 text-7xl md:text-9xl'>Qatar</span> 2022
        </span>
        <span className='text-start text-xl md:text-2xl  block'>
          Greetings, World Cup enthusiasts! Are you ready to follow all the action of the World Cup Qatar 2022?
          </span>
          
        </span>
      </div>
      {matches.map(match => (

        <Card key={match.id} match={match} />
      ))}
    </div>
  );
}

export default Planning;
