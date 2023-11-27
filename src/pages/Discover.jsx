import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Tours} from '../utils';
import Duration from '../assets/images/duration-50px.webp'

export default function About() {

    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTours = async () => {
            setLoading(true);
            setTours(Tours);
            setLoading(false);
        };
        fetchTours();
    }, []);
            
    let tourStyle = {
        width: '400px',
        margin: '10px',
        position:'relative',
        
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: '25px 25px 25px 25px',
        position: 'relative',
        overflow: 'hidden',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgb(0 0 0 / 20%)',
    }
    let imageTourStyle = {
        borderRadius: '25px 25px 0px 0px',
    }
    let promotionStyle = {
        position: 'absolute',
        top: '35px',
        left:'10px',
        innerHeight: '20px',
        backgroundColor: '#662046',
        padding: '5px 10px 5px 10px',
        boxSizing:'border-box',
        color: 'white',
    }
    let titleStyle = { 
        boxSizing: 'border-box',
        textDecoration: 'none',
        width: '100%',
        flexGrow: 1,
        flexShrink: 1,
        fontSize: '1.25em',
        letterSpacing: 0,
        color: '#662046',
        fontWeight: 500,
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
    }
    let priceStyle = {
        padding: '5px 20px 5px 20px',
        marginTop: '15px',
        borderTopWidth: '1px',
        borderWightWidth: '1px',
        borderBottomWidth: '1px',
        borderLeftWidth: '1px',
        borderRadius: '10px 10px 10px 10px',
        // -webkit-box-sizing: 'border-box',
        boxSizing: 'border-box',
        borderColor: '#662046',
        borderStyle: 'solid',
        display: 'flex',
        color: '#662046',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'flex-end',
        flexShrink: '1',
        flexBasis: 'auto',
        minWidth: '100px',
    }
    return <>
        <div className='tours-container' style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center',gap:'15px', padding: '60px'}}>
            {
            tours.map((tour) => {
                let promotionTag = tour.promotionTag ? <div className='promotion-tag' style={promotionStyle}>{tour.promotionTag}</div> : null;
                let tags = tour.tags.map((tag) => {
                    return <span className='tag' style={{width:'70px', margin:'5px', cursor:'pointer', backgroundColor: '#808080' , padding:'8px', borderRadius:'10px', color:'white'}} >{tag}</span>
                })
                return <div className='tour' style={tourStyle}>
                        
                        <img src={tour.image} style={imageTourStyle}></img>
                            {promotionTag}
                            <div className='tour-content' style={{padding:'20px'}}>
                                <h3 style={titleStyle}>{tour.title}</h3>
                                <div style={{}}>
                                    {tags}
                                </div>
                                <div style={{color:'#8E8F8B', display:'flex',alignItems:'center', justifyContent:'flex-end'}}><div style={{marginRight:'7px'}}>{tour.duration}</div> <div><img src={Duration} width="40"></img></div></div>
                                <div style={priceStyle}>From <br /> <span style={{fontSize: '1.25em',letterSpacing:0}}>{tour.price}</span></div>
                            </div>
                    </div>
                })
            }
        </div>
    </>
}