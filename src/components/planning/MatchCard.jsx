import React from 'react';
import '../../assets/styles/MatchCard.css'
import { flags } from './flags';
import { stadiums } from './stadiums';

var icon_calender = require('./icons/icon-calendar.gif')
var logo_wc = require('./icons/wc.png')
var icon_clock = require('./icons/icon_clock.png')
var icon_whistle = require('./icons/icons_whistle.png')
var icon_2022 = require('./icons/2022.png')

function MatchCard({ match }) {
  var [date, time] = match.date.split('T');
  time = time.substring(0, 5);
  let newdate = date.slice(5);
  const imageh = flags.find(flag => flag.name === match.homeTeam.name);
  const imagea = flags.find(flag => flag.name === match.awayTeam.name);
  const stadium = stadiums.find(stadium => stadium.name == match.venue);
  return (
    <div>

      <div className="matches-container">
        <div className="match">
          <div>
            <img src={logo_wc} className="logo_wc"></img>
          </div>
          <div className='match_info'>
            <div className='datetime'>
              <p className='p_text equipe'>
                <img src={icon_calender} class="featured-image" />

                {newdate}

              </p>
              <p className='p_text equipe '>
                <img src={icon_clock} class="featured-image" />

                {time}

              </p>
            </div>
            <div>
              <p>
                <div className="organise_match">
                  <div className='equipe'>
                    <img src={imageh.src} className="flag" />
                    <span className='p_text center'>{match.homeTeam.name}</span>
                  </div>
                  <span className='vs'>vs</span>
                  <div className='equipe'>
                    <img src={imagea.src} className="flag" />
                    <span className='p_text centrer'>{match.awayTeam.name} </span>
                  </div>
                </div>
              </p>
            </div>
            <div className='stad_ref'>
              <div>
                <p className='equipe'>
                  <div>  <img src={stadium.src} className=" stad" /> <p className='stad_name'>{match.venue},{match.location}</p></div>
                </p>
              </div>
              <p className='equipe'>
                <img src={icon_whistle} class="featured-image" /> <p className='stad_name'>{match.officials[0].name}</p>
              </p>
            </div>
          </div>

          <img src={icon_2022} className="i2022"></img>

        </div>

      </div>


    </div>

  );
}

export default MatchCard;