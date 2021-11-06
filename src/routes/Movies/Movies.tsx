import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './Movies.css';

import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import MovieComponent from '../components/MovieComponent/MovieComponent';

export default ({title,items}) => {
    
    const [scrollX, setScrollX] = useState(-400);
    
    const handleLeftArrow = () => {
        let x = scrollX + 150;
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {

    }

    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title="Filmes"/>

            <div className="movieRow">
            <h2>{title}</h2>
           
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
           
            
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,    
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item,key) =>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
                
            </div>
        </div>


        </div>
    );

            }
