// App.js 

// Dependencies
import React from 'react'

// Material UI Components
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';
import HelpIcon from '@material-ui/icons/Help';
import CloseIcon from '@material-ui/icons/Close';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import bob from './imageAssets/Bob_ProfilePic.png'
import Avatar from '@material-ui/core/Avatar';


// React Router Components
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

// Custom Components
import DeptCard from './Components/Card';
import { cardList } from './Data/cardList';
import { reportsList } from './Data/reportsList.js';
import ExpandedReport from './Components/ExpandedReport.js';
import NavCard from './Components/NavCard.js';
import NavRight from './Components/NavRight.js';
import Thumbnail from './Components/Thumbnail.js';
import { assetsList } from './sampleData.js';
import DataPage from './Components/DataPage.js';
import FavPage from './Components/FavPage.js'


// Stylesheets
import './styles/App.css';
import './styles/Previews.css';

// Images
// ==================
// Import any logos, other images;
import logo from './SBD.png'

function App() {
    return (
        // react router routes for primary landing page, thumbnail previews page
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/previews">
                    <Previews />
                </Route>
                <Route exact path="/dataservices">
                    <Home />
                </Route>
                <Route exact path="/datapage">
                    <DataPage />
                </Route>
                <Route exact path="/favpage">
                    <FavPage />
                </Route>
            </Switch>
        </Router>
  );
}

// App Home page
function Home() {

    // Material UI styles - can be customized
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
            color: 'black'
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

    // 'classes' declaration
    const classes = useStyles();

    //whiteTextTypography
    const WhiteTextTypography = withStyles({
        root: {
          color: "#FFFFFF"
        }
      })(Typography);

    return (
        // Grid Wrapper
        <Grid container direction="column" id="homeWrapper" >

      {/* Header CONTAINER */}
      <Grid item container 
      direction="row" justify="space-between" >
        
        {/* Client logo ITEM */}
        <Grid item xs={6} >{<img src={logo} alt="logo" style={{width: '250px', padding: '5px 0px 0px 5px'}}></img>}</Grid>

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
            {/* <Avatar alt="useravatar">B</Avatar> */}            
          </IconButton>      
        </Grid>
      </Grid>

      {/* Content ITEM CONTAINER */}
      <Grid item container
      direction="column" justify="flex-start" alignItems="center">

        <Grid item>
          <WhiteTextTypography variant='p' style={{fontSize:'35px', margin:'55px 0 25px'}}>
            Welcome Bob, to the <strong>Integrated Data and Analytics Portal</strong>
          </WhiteTextTypography>
        </Grid>

        <Grid item style={{padding: '2em'}}>
          <WhiteTextTypography variant='p' style={{fontSize: '20px'}}>
            <i>This portal allows Business and IT users to access data assets across the enterprise.</i>
          </WhiteTextTypography>
        </Grid>

        <Grid className={classes.search}>
            <InputBase
                placeholder="Search Assets"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
        </Grid>

      </Grid>

      {/* Card Carousel ITEM CONTAINER  TODO- Add text under card (try here)*/}
      <Grid item container 
      direction="row" justify="space-evenly">
        {cardList.map((dept) => {
          return (
            <DeptCard key={dept.id} properties={dept} xs={3} sm={6}></DeptCard>
            );
        })}
      </Grid>

      {/* Alerts/Announcements info ITEM CONTAINER */}
      <Grid item container style={{padding: '50px'}}
      justify="space-around" alignItems="first baseline" spacing={6} stlye={{height: '35%', margin: '0px 20px'}}>
        <Grid
          item
          xs={12}
          sm={7}
          style={{padding: '24px 55px 0px 28px'}}>
          
          <Typography variant="h5" gutterBottom>
                Intelligent Alert / Recommended Reports
            </Typography>
            <Typography variant="p" gutterBottom>
                This is a placeholder to have either weather alerts impacting the region / area to be concerned about or to have the <br/> recommended reports / assets, based on the SSO authentication. 
            </Typography>
        </Grid>

        <Grid
          item 
          style={{backgroundColor:'lightGray', height: '150px', minWidth: '500px'}}>
          <Typography variant="h5" gutterBottom>
              Org Updates & Announcements
          </Typography>
          <Typography variant="p" gutterBottom>
              Vertical / scrollable updates ticker.
          </Typography>
        </Grid>

        <Grid item style={{ }}>
            <CalendarTodaySharpIcon id="CalendarTodaySharpIcon">
            </CalendarTodaySharpIcon>
        </Grid>

      </Grid>

    </Grid>
  )}

// react router reports preview page

function Previews() {

    // Material UI styles
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
            marginBottom: '5px',
            marginLeft: '3px',
            padding: theme.spacing(.25, 0, 0, .25),
            height: '100%',
            position: 'relative',
            left: '0px',
            pointerEvents: 'none',
            display: 'flex',
            backgroundColor: '#FFD20D',
            borderRadius: 100,
            color: fade(theme.palette.common.white, 1)
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(.5, 1, 1.25, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: 0,
            transition: theme.transitions.create('width'),
            width: '100%',
            textAlign: 'left',
            [theme.breakpoints.up('md')]: {
                width: '43ch',
            },
        },
    }));

    // 'classes' declaration
    const pclasses = useStyles();

    // ExpandedReport function that closes the expanded report in the iframe
    const closeExpandedReport = () => { 
        let expandedReportFrame_id = document.getElementById("expandedReportFrame");
        console.log(expandedReportFrame_id);
        if (expandedReportFrame_id !== null) {
            document.getElementById("expandedReportFrame").src = "";
            document.getElementById("closeIconExpanded").id = "closeIcon";
            setTimeout(() => document.getElementById("expandedReportFrame").id = "ExpandedReport", .5 * 1000);
        } 
    }

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
            <Grid className="previews-dashboard" style={{backgroundColor: 'white'}}>

                {/*Expanded Report*/}
                <ExpandedReport id="ExpandedReport" />       
                

                <Grid container id='previews-wrapper'>
                    <Grid container className='previews-container'>
                        {reportsList.map((report) => {
                            if(report.fav){
                                sessionStorage.setItem(report.id, report.title)
                                console.log(report.title)
                            }
                            return (
                                <Grid item className='thumbnail'>
                                    <Thumbnail key={report.id} props={report}/>
                                </Grid> 
                            );
                        })} {console.log("Thumbnails Generated and Fav assets loaded to session storage")}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;