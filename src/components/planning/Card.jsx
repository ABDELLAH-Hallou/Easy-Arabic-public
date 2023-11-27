import React from 'react';
import '../../assets/styles/MatchCard.css'
import { flags } from './flags';
import { stadiums } from './stadiums';

var icon_calender = require('./icons/icon-calendar.gif')
var logo_wc = require('./icons/wc.png')
var icon_clock = require('./icons/icon_clock.png')
var icon_whistle = require('./icons/icons_whistle.png')
var icon_2022 = require('./icons/2022.png')

function Card({ match }) {
    var [date, time] = match.date.split('T');
    time = time.substring(0, 5);
    let newdate = date.slice(5);
    const imageh = flags.find(flag => flag.name === match.homeTeam.name);
    const imagea = flags.find(flag => flag.name === match.awayTeam.name);
    const stadium = stadiums.find(stadium => stadium.name == match.venue);
    return (
        <div className='my-8 px-4 md:px-28'>
            <div className='border-2 px-4 py-2 border-black rounded-xl bg-gray-100'>
                <div className=' flex flex-row  justify-between flex-nowrap items-center'>
                    <div className=' flex md:flex-row flex-col items-start justify-between md:flex-nowrap flex-wrap md:items-center md:w-52 w-12'>
                        <img src={imageh.src} className="md:h-20 h-10 border-black border-2 rounded-full" />
                        <span className=''>{match.homeTeam.name}</span>
                    </div>
                    <div className='mx-16'>
                        {newdate} - {time}
                    </div>
                    <div className='flex md:flex-row-reverse flex-col justify-between md:flex-nowrap flex-wrap items-end md:items-center  md:w-52 w-42'>
                        <img src={imagea.src} className="md:h-20 h-10 border-black border-2 rounded-full" />
                        <span className=''>{match.awayTeam.name} </span>
                    </div>
                </div>
                <div className='flex flex-row  justify-evenly flex-nowrap items-center mt-2 pt-2 border-t-2'>
                    <div className=' flex flex-row  flex-nowrap items-center'>
                        <span className=''>{match.officials[0].name}</span>
                    </div>
                    <div className='flex flex-row flex-nowrap items-center'>
                        <span className=''>{match.venue},{match.location} </span>
                    </div>
                </div>
            </div>
            {/* <div style={{marginTop: "350px"}}>
          <div className="-mt-64 ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
                <div className="p-2 sm:p-10 text-center">
                    <div style={{height: "350px"}}
                     className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg hover:bg-white bg-white">
                        <div className="space-y-10">
                            <div className="px-6 py-4">
                                <div className="px-10 max-w-2xl">
                                    <img className="w-20 h-20 m-auto" src="https://1.bp.blogspot.com/-I2CXXftUfwg/Xmk8N-NQ9BI/AAAAAAABX-8/TEL_4B7_aLQpuiRQPm1rrD4OHfmAahlbACLcBGAsYHQ/s1600/Liverpool%2BFC256x.png" alt="Liverpool" />
                                </div>
                                <div className="space-y-5">
                                    <div className="font-bold text-xl mb-2">Liverpool</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 sm:p-10 text-center">
                    <div style={{height: "350px"}} className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600">
                        <div className="space-y-10">
                            <div className="px-6 py-4">
                                <div className="space-y-5">
                                    <div className="font-bold text-xl mb-2">Result</div>
                                    <p className="text-6xl">
                                        0 - 1
                                    </p>
                                    <p id="data" className="text-base">
                                            2021-08-03
                                    </p>
                                    <p id="ref" className="text-base">
                                        Atkinson M.
                                    </p>
                                    <p id="stadium" className="text-base">
                                        Anfield (Liverpool)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 sm:p-10 text-center">
                    <div style={{height: "350px"}} className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg hover:bg-white bg-white ">
                        <div className="space-y-10">
                            <div className="px-6 py-4">
                                <div className="px-10 max-w-2xl">
                                    <img className="w-20 h-20 m-auto" src="https://i.pinimg.com/originals/1a/02/f3/1a02f3ad7f2491c89e89aad80b562d89.jpg" alt="Chelsea" />
                                </div>
                                <div className="space-y-5">
                                    <div className="font-bold text-xl mb-2">Chelsea</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
          </div>
      </div> */}
        </div>


    );
}

export default Card;