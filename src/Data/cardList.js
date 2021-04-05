// cardList.js 
import ds from '../imageAssets/DataServices.png'
import rs from '../imageAssets/ReportingServices.png'
import aa from '../imageAssets/AdvancedAnalytics.png'
import ss from '../imageAssets/SelfService.png'

export const cardList = [
    {
        id: 0,
        dept: "Dept. 1",
        title: "Data Services",
        img: ds, // department icon image goes here
        altText: "",
        metricsText: "PLACEHOLDER FOR KPIs",
        metrics: "",
        route: "/datapage"
    },
    {
        id: 1,
        dept: "Dept. 2",
        title: "Reporting Services",
        img: rs, // department icon image goes here
        altText: "",
        metricsText: "PLACEHOLDER FOR KPIs",
        metrics: "",
        route: "/previews"
    },
    {
        id: 2,
        dept: "Dept. 3",
        title: "Advanced Analytics",
        img: aa, // department icon image goes here
        altText: "",
        metricsText: "PLACEHOLDER FOR KPIs",
        metrics: "",
        route: "/"
    },
    {
        id: 3,
        dept: "Dept. 4",
        title: "Self Service",
        img: ss, // department icon image goes here
        altText: "",
        metricsText: "PLACEHOLDER FOR KPIs",
        metrics: "",
        route: "/selfservice"
    },
];
