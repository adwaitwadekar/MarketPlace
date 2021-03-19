// ExpandedReport.js

import React from 'react';
import { Button } from '@material-ui/core';
//import Grid from '@material-ui/core/Grid';


const ExpandedReport = (props) => {
    const { id, src } = props;

    const closeExpandedReport = () => { 
        let expandedReportFrame_id = document.getElementById("expandedReportFrame");
        console.log(expandedReportFrame_id.src);
        if (expandedReportFrame_id !== null) {
            document.getElementById("expandedReportFrame").src = "";
            document.getElementById("closeIconExpanded").id = "closeIcon";
            setTimeout(() => document.getElementById("expandedReportFrame").id = "ExpandedReport", .5 * 1000);
        } 
    }
    //use expandedReportFrame for button display logic
    if(document.getElementById("expandedReportFrame") == undefined){
        console.log("undefined iframe caught MAKE BUTTON DISSAPPEAR")
    }

    return (
        <div>
            <div id="closeIcon" aria-label="close" style={{margin: '2px', paddingLeft: '50px'}}>
                <Button id="" onClick={closeExpandedReport} variant="contained" color="primary">Close</Button>
            </div>

            <div>
                <iframe id={id} src={src} width= "0px" height= "0px" style={{ borderWidth: '0', width: '95%', height: '85%' }}> 
                </iframe>
            </div>
            
        </div>
    )
}

export default ExpandedReport;

// CONDITIONAL RENDERING NOT WORKING

// return (
//     <div>
//         {(props.src == undefined) ? (
//             <div>
//                 <iframe id={props.id} src={props.src} width= "0px" height= "0px" style={{width: '94%', height: '89%'}} frameBorder= '0'> 
//                 </iframe>
//             </div>
//         ) : (
//             <Grid id="closeIcon" aria-label="close" style={{margin: 'auto', paddingLeft: '50px'}} >
//                 <Button id="" onClick={closeExpandedReport} variant="contained" color="primary">Close</Button>
//                 <iframe id={props.id} src={props.src} width= "0px" height= "0px" style={{width: '94%', height: '89%'}} frameBorder= '0'> 
//                 </iframe>
//             </Grid>
//         )}
//     </div>
// )