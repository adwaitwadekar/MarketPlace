import React from 'react';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import CloseIcon from '@material-ui/icons/Close';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { cardList } from '../Data/cardList';
import NavCard from './NavCard.js';
import NavRight from './NavRight.js';
import Thumbnail from './Thumbnail.js';
import logo from '../SBD.png';
import '../styles/datapage.css';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import bob from '../imageAssets/Bob_ProfilePic.png'
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';


class SelfService extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
    }

    render(){
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

                <Grid item xs={4} style={{padding: '18px 0px 0px 0px', borderRadius: '100',}}>
                    
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
            {/* Main Dashboard for Self Service*/}
            <Grid container direction='column' alignItems='center'>
                <Grid item style ={{ padding: '60px' }}>
                   <Typography variant='h4'>Operational Dashboard</Typography>
                </Grid>
                <Grid item container direction='column' alinItems='flex-start' style={{ padding: '20px 0px 0px 0px'}}>
                    <Typography variant='h6' style={{padding: '20px 0px 40px 100px'}}><u>System Health Check</u></Typography>
                    <table style={{width: '80%', margin: 'auto'}}>
                        <tr class='spaceUnder'>
                            <td>Processing EMR  <span class="dotRed" ></span></td>
                            <td>Redshift  <span class="dot"></span></td>
                            <td>S3  <span class="dot"></span></td>
                            <td>Alteryx Server  <span class="dot"></span></td>
                        </tr>
                        <tr>
                            <td>Access EMR  <span class="dot" ></span></td>
                            <td>Jupyter Notebooks  <span class="dot"></span></td>
                            <td>Data Robot  <span class="dot"></span></td>
                            <td>Alteryx Workspace  <span class="dot"></span></td>
                        </tr>
                    </table>
                </Grid>
                <Grid item container direction='column' alinItems='flex-start' style={{ padding: '40px 0px 0px 0px'}}>
                    <Typography variant='h6' style={{padding: '20px 0px 40px 100px'}}><u>Datasets</u></Typography>
                    <table style={{width: '80%', margin: 'auto'}}>
                        <tr class='spaceUnder'><td>BODS</td></tr>
                        <tr class='spaceUnder'><td>SAP</td></tr>
                        <tr class='spaceUnder'><td>JDA</td></tr>
                        <tr class='spaceUnder'><td>MAC Tools</td></tr>
                    </table>
                </Grid>
            </Grid>
        </div>
        )
        
    }
}

export default SelfService;