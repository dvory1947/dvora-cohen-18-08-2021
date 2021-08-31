import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getCurrentWeather, getLocation, getDays, addToFavorites, removeFromFavorites } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './home.css'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const Home = (props) => {

    const classes = useStyles();
    const [city, setCity] = useState("Tel Aviv");
    const [key, setKey] = useState("215854");
    const [option, setOption] = useState("Add To");

    let currentLocation = {
        Name: props.location.LocalizedName,
        WeatherText: props.currentWeather.WeatherText,
        Temperature: {
            Value: props.currentWeather.Temperature?.Metric.Value,
            Unit: props.currentWeather.Temperature?.Metric.Unit,
        }
    };

    useEffect(() => {
        if (props.selectedFavorite) {
            props.getLocation(props.selectedFavorite.Name)
        }
        else {
            props.getLocation(city);
        }
        props.getCurrentWeather(key);
        props.getDays(key);

        if (props.favorites.find(f => f.Name === props.location.LocalizedName))
            setOption("Remove From");
    }, [])

    useEffect(() => {
        if (props.favorites.indexOf(currentLocation) === -1)
            setOption("Add To")
        setKey(props.location.Key);
        setCity(props.location.LocalizedName);
        props.getCurrentWeather(key);
        props.getDays(key);
    }, [props.location])

    function getBySearch() {
        props.getLocation(city);
    }

    const MyFavorites = () => {
        if (props.favorites.find(f => f.Name === props.location.LocalizedName)) {
            props.removeFromFavorites(currentLocation);
            setOption("Add To");
        }
        else {
            props.addToFavorites(currentLocation);
            setOption("Remove From");
        }

    }

    return (
        <div className="container">
            <div className="add-remov-search">
                <button onClick={MyFavorites}>
                    {option} My Favorites<Fab disabled aria-label="like" >
                        <FavoriteIcon />
                    </Fab>
                </button>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search By City"
                        inputProps={{ 'aria-label': 'search by city' }}
                        onChange={((e) => setCity(e.target.value))}
                        style={{ color: "darkblue" }}
                    />
                    <IconButton className={classes.iconButton} aria-label="search" onClick={getBySearch}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <div className="location">
                {props.location.LocalizedName}<br />
                {props.currentWeather.Temperature?.Metric.Value}°{props.currentWeather.Temperature?.Metric.Unit}
                <h2>{props.currentWeather.WeatherText}</h2>
            </div>
            <div className="days">{props.days.DailyForecasts?.map((d) => {
                let newDate = new Date(d.Date);
                return <div key={d.EpochDate} className="day">
                    <h4> {newDate.toString().split(' ')[0]}</h4>
                    {d.Temperature.Minimum.Value}°{d.Temperature.Minimum.Unit}
                </div>
            })}</div>
        </div>);
}
const mapStateToProps = (state) => {
    return {
        location: state.location,
        currentWeather: state.currentWeather,
        days: state.days,
        selectedFavorite: state.selectedFavorite,
        favorites: state.favorites,
    };
};

export default connect(mapStateToProps, {
    getLocation, getCurrentWeather, getDays,
    addToFavorites, removeFromFavorites
})(Home);

