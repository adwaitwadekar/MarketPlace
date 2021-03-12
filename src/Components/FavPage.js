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
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function FavPage(props) {


    const closeExpandedReport = () => { 
        let expandedReportFrame_id = document.getElementById("expandedReportFrame");
        console.log(expandedReportFrame_id);
        if (expandedReportFrame_id !== null) {
            document.getElementById("expandedReportFrame").src = "";
            document.getElementById("closeIconExpanded").id = "closeIcon";
            setTimeout(() => document.getElementById("expandedReportFrame").id = "ExpandedReport", .5 * 1000);
        } 
    }

    const WhiteTextTypography = withStyles({
        root: {
          color: "#FFFFFF"
        }
      })(Typography);

    return (
        <div container class="reports-grid">
            <Grid item className='AppBar' style={{background: 'rgba(33,31,19,1)', fontFamily: 'Roboto'}}>
                <Grid container justify='space-between'>
                    {/* Client Logo */}
                    <Grid item xs={3}>
                    <Link to="/" className="link">
                        {<img src={logo} alt="logo" style={{ width: '250px', padding: '5px 0px 0px 5px'}}></img>}
                    </Link>
                </Grid>

                <Grid item xs={4} style={{padding: '10px 0px 0px 0px'}}>
                    <WhiteTextTypography variant='p' style={{fontSize:'35px'}}><strong>Favorited Assets</strong></WhiteTextTypography>
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
                        <AccountCircle style={{width: '70px', height:'70px'}} />
                        {/* <Avatar alt="useravatar">B</Avatar> */}            
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
                            <Grid item className="NavCard" onClick={closeExpandedReport} style={{justifyContent: 'center'}}>
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
            {/* Main Dashboard for Previews Page*/}
            <Grid className="previews-dashboard">

                {/*Expanded Report*/}
                <ExpandedReport id="ExpandedReport" />
                
                <IconButton id="closeIcon" aria-label="close" disableRipple disableFocusRipple disableTouchRipple>
                    <CloseIcon id="" onClick={closeExpandedReport}/>
                </IconButton>
                <Grid container id='previews-wrapper'>
                    <Grid container className='previews-container'>
                        {reportsList.map((report) => {
                            for(var x in window.sessionStorage){
                                if(x == report.id){
                                    return (
                                        <Grid item className='thumbnail'>
                                            <Thumbnail key={report.id} props={report}/>
                                        </Grid> 
                                    );
                                }
                            }
                        })}  
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className='NavRight'>
                <NavRight />
            </Grid>
        </div>
    )
}

export default FavPage;