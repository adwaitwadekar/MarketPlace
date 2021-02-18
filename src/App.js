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
import { fade, makeStyles } from '@material-ui/core/styles';

// React Router Components
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

// Custom Components
import DeptCard from './Components/Card'
import { cardList } from './Data/cardList'
import { reportsList } from './Data/reportsList.js'
import ExpandedReport from './Components/ExpandedReport.js'
import NavCard from './Components/NavCard.js'
import NavRight from './Components/NavRight.js'
import Thumbnail from './Components/Thumbnail.js'

// Stylesheets
import './styles/App.css';
import './styles/Previews.css';

// Images
// ==================
// Import any logos, other images;





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
            backgroundColor: fade(theme.palette.common.black, 0.35),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.25),
            },
            width: '100%',
            alignItems: 'stretch',
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
            backgroundColor: 'blue',
            borderRadius: 100,
            color: '#ffffff'
        },
        inputRoot: {
            color: 'inherit',
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


    return (
        // Grid Wrapper
        <Grid container
            id='homeWrapper' direction="row">
            {/* Header contianer */}
            <Grid container
                direction="row"
                justify="space-around"
                alignItems="stretch"
                spacing={10}
                style={{ color: '#000000', overflow: 'hidden' }}>
                {/* Client Logo */}
                <Grid item style={{ marginTop: '30px', marginLeft: '5px' }}>
                    {/* !! Place Client Logo here !! 
                        TODO - Add styling to img to avoid heading errors*/}
                    {/*<img src={logo} style={{width: '250px'}}></img>*/}
                </Grid>
                {/* Welcome Message */}
                <Grid item xs={6} style={{ textAlign: 'center', marginLeft: '21em', marginTop: '20px'}}>
                    <Typography variant='p' style={{fontSize:'30px', margin:'55px 0 25px'}}>
                        Hello {'{User}'}, Welcome to the <strong>Integrated Data and Analytics Portal</strong>
                    </Typography>
                    <Typography style={{height: '15px'}}></Typography>
                    <Typography variant='p' style={{padding: '20px'}}>
                        This portal allows Business and IT users to access data assets across the enterprise.
                    </Typography>
                    { /* Search Bar */}
                    <Grid className={classes.search}>
                        <InputBase
                            placeholder="Search Reporting Assets"
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
                {/* Header Icons */}
                </Grid>
                <Grid item className={classes.root} style={{paddingLeft: '11em', color:"blue"}}>
                    <IconButton aria-label="favorite icon" color="inherit" style={{margin:0, padding:0}}>
                        <Badge color="secondary">
                            <StarsRoundedIcon fontSize='large' />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 5 new notifications" color="inherit" style={{ margin: 0, padding: '13px' }}>
                        <Badge badgeContent={5} color="secondary">
                            <NotificationsIcon fontSize='large' />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircle style={{width: '70px', height:'70px'}} />
                    </IconButton>
                </Grid>
            </Grid>
            {/* Card Carousel */}
            <Grid
                container
                direction="row"
                justify="space-evenly"
                spacing={10}
                style={{ alignItems:'center', marginTop: '78px', marginBottom: '0px'}}>
                    {cardList.map((dept) => {
                        return (
                            <DeptCard key={dept.id} properties={dept}></DeptCard>
                        );
                    })}
            </Grid>
            {/* Alerts/Announcements */}
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="first baseline"
                alignContent='center'
                spacing={6}
                style={{height: "35%", margin: '0px 20px'}}>
                <Grid
                    item
                    xs={12}
                    lg={7}
                    style={{padding: '24px 55px'}}>
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
    );
}

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
            position: 'relative',
            bottom: '3px',
            color: 'white',
            borderRadius: 100,
            backgroundColor: fade(theme.palette.common.black, 0.35),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.25),
            },
            width: '100%',
            justifyContent: 'space-between',
            [theme.breakpoints.up('xs')]: {
                margin: theme.spacing(5, 2, 0),
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
            backgroundColor: 'blue',
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
    const classes = useStyles();

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
            <Grid item className='AppBar'>
                <Grid container justify='space-between' style={{padding: '0px 18px'}}>
                    {/* Client Logo */}
                    <Grid item style={{ marginTop: '30px', marginLeft: '5px' }}>
                        <Link to="/" className='link'>
                            {/* !! Place Client Logo here !! */}
                            {/*<img src={CLIENT LOGO} style={{ width: '250px' }}></img>*/}
                        </Link>
                        </Grid>                   
                    <Grid item style={{ textAlign: 'left', marginLeft: '37em'}}>
                        { /* Search Bar */}
                        <Grid item className={classes.search}>
                                <InputBase
                                    placeholder="Search Reporting Assets"
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
                    {/* Header Icons */}
                    <Grid item className={classes.root} style={{ paddingLeft: '355px', color: 'blue', alignItems: 'flex-end' }}>
                        <IconButton aria-label="fav-Icon" color="inherit" style={{ margin: 0, padding: '0px' }}>
                            <Badge color="secondary">
                                <StarsRoundedIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 5 new notifications" color="inherit" style={{ margin: 0, padding: '13px' }}>
                            <Badge badgeContent={5} color="secondary">
                                <NotificationsIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <AccountCircle style={{ width: '70px', height: '70px' }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

            {/* Left Navigation */}
            <div class="NavLeft">
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                >
                    {/* Navigation Cards */}
                    {cardList.map((dept) => {
                                               
                        return (
                            <Grid container className="NavCard" onClick={closeExpandedReport} style={{justifyContent: 'center'}}>
                                <NavCard className='NavCard' key={dept.id} properties={dept}></NavCard>         
                               
                            </Grid>
                        );
                    })}
                    {/* Help Icon */}
                    <Grid item style={{paddingTop: '440px'}}> 
                        <HelpIcon fontSize='large' style={{color: 'gray'}}/>
                    </Grid>

                </Grid>
            </div>
            {/* Main Dashboard for Previews Page*/}
            <Grid className="previews-dashboard">

                {/*Expanded Report*/}
                <ExpandedReport id="ExpandedReport" />
                <IconButton id="closeIcon" aria-label="close" disableRipple disableFocusRipple disableTouchRipple>
                    <CloseIcon id="" onClick={closeExpandedReport} fontSize='medium'/>
                </IconButton>
                <Grid container id='previews-wrapper'>
                    <Grid container className='previews-container'>
                        {reportsList.map((report) => {
                            return (
                                <Grid item className='thumbnail'>
                                    <Thumbnail key={report.id} props={report}/>
                                </Grid> 
                            );
                        })}  
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className='NavRight'>
                <NavRight />
            </Grid>
        </div>
    );
}



export default App;
