//reportsList.js 

import ico from '../imageAssets/reportImages/ICO.png'
import ect from '../imageAssets/reportImages/ECT.png'
import mro from '../imageAssets/reportImages/MRO.png'
import tlo from '../imageAssets/reportImages/te_air.png'
import smple from '../imageAssets/reportImages/TempLabor.png'

export const reportsList = [
    {
        id: 0,
        title: "Input Cost Optimization",
        src: "https://shinyproxy.sandbox.sbd-caspian.com/app/gsm_input_cost_monitoring",
        img: ico,
        desc: "This application uses full company spend and applies commodity and FX rates to pinpoint savings opportunities and risks at a supplier, plant, material level of detail",
        fav: true,
    },
    {
        id: 1,
        title: "Electronics Cost Tool",
        src: "",
        img: ect,
        desc: "This application uses specific information describing the price and materials that are used in electronic components and allows for cross-portfolio comparison to haromize vendor spend",
        fav: true,
    },
    {
        id: 2,
        title: "Temp Labor Optimization",
        src: "",
        img: tlo,
        desc: "This suite of dashboards visualizes Temp Labor spend to highlight non-compliant spend, excess overtime, and pay rates for specific functions. The intended use is to identify opportunities to use preferred vendors, normalize pay rates, and improve resource planning to avoid overtime if possible",
        fav: true,
    },
    {
        id: 3,
        title: "MRO Compliance Dashboard",
        src: "",
        img: mro,
        desc: "This application uses specific information describing the price and materials that are used in electronic components and allows for cross-portfolio comparison to haromize vendor spend",
        fav: true,
    },
    {
        id: 4,
        title: "Sample Asset - Coronatracker",
        src: "https://www.coronatracker.com/analytics/",
        img: smple,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        fav: false,
    },
]
