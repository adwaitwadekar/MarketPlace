import React from 'react';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import CloseIcon from '@material-ui/icons/Close';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { cardList } from '../Data/cardList';
import { reportsList } from '../Data/reportsList.js';
import ExpandedReport from './ExpandedReport.js';
import NavCard from './NavCard.js';
import NavRight from './NavRight.js';
import Thumbnail from './Thumbnail.js';
import { assetsList } from '../sampleData.js';
import { withStyles } from "@material-ui/core/styles";
import logo from '../SBD.png';
import '../styles/datapage.css';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import bob from '../imageAssets/Bob_ProfilePic.png'
import Avatar from '@material-ui/core/Avatar';


class DataPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            token: ""
        }
    }

    

    componentDidMount() {

        // move useStyles out of componentDidMount()
        const useStyles = makeStyles((theme) => ({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                },
            },
            search: {
                display: 'flex',
                position: 'static',
                color: 'white',
                borderRadius: 100,
                backgroundColor: fade(theme.palette.common.white, 0.35),
                '&:hover': {
                    backgroundColor: fade(theme.palette.common.black, 0.25),
                },
                width: '100%',
                alignItems: 'stretch',
                justify: 'center',
                justifyContent: 'space-between',
                [theme.breakpoints.up('md')]: {
                    margin: theme.spacing(5, 29, 0),
                    padding: theme.spacing(1, 1, .25, 2),
                    width: 'auto',
                },
            },
            searchIcon: {
                marginBottom: '1px',
                marginLeft: '3px',
                padding: theme.spacing(.25, 0, 0, .25),
                height: '85%',
                position: 'relative',
                left: '0px',
                pointerEvents: 'none',
                display: 'flex',
                backgroundColor: '#FFD20D',
                borderRadius: 50,
                color: '#ffffff'
            },
            inputRoot: {
                color: 'inherit',
            },
            homeImg: {
                // used css-loader instead of app.css here
                //backgroundImage: `url(${Background})`
            },
            headerStyle: {
                // grey shading for header
                backgroundColor: 'rgba(128,128,128,0.0)'
            },
            inputInput: {
                padding: theme.spacing(.5, 0, 1.25, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: '0px',
                transition: theme.transitions.create('width'),
                textAlign: 'left',
                [theme.breakpoints.up('md')]: {
                    width: '44ch',
                },
            },
        }));
    }

    render(){

        var {isLoaded, items} = this.state;

        return(
            <div container class="reports-grid">
            <Grid item className='AppBar' style={{background: 'rgba(33,31,19,1)', fontFamily: 'Roboto'}}>
                <Grid container justify='space-between'>
                    {/* Client Logo */}
                    <Grid item xs={3}>
                    <Link to="/" className="link">
                        {<img src={logo} alt="logo" style={{ width: '250px', padding: '5px 0px 0px 5px'}}></img>}
                    </Link>
                </Grid>

                <Grid item xs={4} style={{padding: '18px 0px 0px 0px', borderRadius: '100'}}>
                    
                </Grid>

                {/* Profile group ITEM */}
                <Grid item style={{color:"#FFD20D"}}>
                    <Link to='/favpage' style={{color:"#FFD20D"}}>
                        <IconButton aria-label="favorite icon" color="inherit" style={{margin:0, padding:0}}>
                            <Badge >
                                <StarsRoundedIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                    </Link>
                    <IconButton aria-label="show 5 new notifications" color="inherit" style={{ margin: 0 }}>
                        <Badge badgeContent={5} color="secondary">
                            <NotificationsIcon fontSize='large' />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Avatar alt="Bob Slowikowski" src={bob} style={{width: '70px', height:'70px'}}></Avatar>           
                    </IconButton>      
                </Grid>
                </Grid>
            </Grid>

            {/* Left Navigation */}
            <div className="NavLeft" style={{background: '#55544c'}}>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                    justify='space-between'
                    style={{background:'#55544c'}}
                >
                    {/* Navigation Cards */}
                    {cardList.map((dept) => {                      
                        return (
                            <Grid item className="NavCard" style={{justifyContent: 'center'}}>
                                <NavCard className='NavCard' key={dept.id} properties={dept}></NavCard>         
                            </Grid>
                        );
                    })}
                    {/* Help Icon */}
                    <Grid item style={{paddingTop: '342px'}}> 
                        <HelpIcon fontSize='large' style={{color: 'gray'}}/>
                    </Grid>

                </Grid>
            </div>
            {/* Main Dashboard for data Page*/}
            <Grid className="previews-dashboard" id="dataDash">
                <Grid item >
                   
                </Grid>
            </Grid>
        </div>
        )
        
    }
}

export default DataPage;