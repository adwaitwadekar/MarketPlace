// ExpandedReport.js

import React from 'react';
import { Button } from '@material-ui/core';


const ExpandedReport = (props) => {
    const { id, src } = props;

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
        <div>
            <div id="closeIcon" aria-label="close" style={{margin: 'auto', paddingLeft: '50px'}}><Button id="" onClick={closeExpandedReport} variant="contained" color="primary">Close</Button></div>
            <div>
                <iframe id={id} src={src} width= "0px" height= "0px" style={{ borderWidth: '0' }}> 
                </iframe>
            </div>
            
        </div>
    )
}

export default ExpandedReport;