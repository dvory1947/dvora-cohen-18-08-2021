import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { selectFromFavorites } from '../actions';
import { useHistory } from 'react-router-dom';
import './favorites.css'

const Favorites = (props) => {
    const history = useHistory();

    const goHome = (name) => {
        console.log(name);
        props.selectFromFavorites(name);
        history.push('/')
    }
    return <div>
        <h1 style={{"text-align": "center"}}>My Favoites</h1>
        <div className="chart">{props.favorites?.map((f) => {
            return <div key={f.Name} className="element" onClick={(() => { goHome(f) })}>
                <h4> {f.Name}</h4>
                {f.Temperature?.Value}°{f.Temperature?.Unit}
                <h4>{f.WeatherText}</h4>
            </div>
        })}</div>
    </div>
}
const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
    };
};

export default connect(mapStateToProps, { selectFromFavorites })(Favorites);