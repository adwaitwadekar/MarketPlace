//NavCard.js

import React from 'react' 
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import '../styles/NavCard.css'
import {Link} from 'react-router-dom'

class NavCard extends React.Component {
    constructor(props) {
        super(props);
        const { id, img, title, route } = props.properties;
        this.state = {
            id: id,
            img: img,
            title: title,
            clicked: false,
            route: route,
        }
        this.handleClick = this.handleClick.bind(this);
        //this.handleMouseOver = this.handleMouseOver.bind(this);
        //this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleClick(e) {
        // e.currentTarget.className = "NavCard-wrapper-shaded";
        // let navCardShadedCollection = document.getElementsByClassName("NavCard-wrapper-shaded");
        // let highlightBarCollection = document.getElementsByClassName("NavCard-highlightBar");
        // let highlightedCollection = document.getElementsByClassName("NavCard-highlighted");
        // for (let i = 0; i < highlightBarCollection.length; i++) {
        //     if (e.currentTarget.id === highlightBarCollection[i].id) {
        //         highlightBarCollection[i].className = "NavCard-highlighted";
        //     }
        // };
        // for (let i = 0; i < navCardShadedCollection.length; i++) {
        //     if (navCardShadedCollection[i].className === "NavCard-wrapper-shaded" && navCardShadedCollection[i].id !== e.currentTarget.id) {
        //         navCardShadedCollection[i].className = "NavCard-wrapper";
        //         highlightedCollection[i].className = "NavCard-highlightBar";
        //     }
        // };
    }


  
    render() {

        return (
            <Grid container id={this.state.id} onClick={this.handleClick} className="NavCard-wrapper" >
                <Grid item id={this.state.id} className="NavCard-highlightBar"></Grid>
                    <Grid item className="NavCard-content">
                        <Link to={this.state.route}>
                        <Grid item>
                            {<img src={this.state.img} className="NavCard-icon" style={{objectFit:'contain'}}></img>}
                        </Grid>
                        <Grid item style={{padding:'5px'}}>
                            <p style={{color: 'white'}}>{this.state.title}</p>
                            
                        </Grid>
                        </Link>
                </Grid>
            </Grid>

        )
    }
}



export default NavCard;
