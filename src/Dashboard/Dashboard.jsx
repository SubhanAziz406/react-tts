import React from 'react';
import DashboardHeader from '../components/Dheader';
import Dbanner from '../components/Dbanner'; // Adjust the path as necessary

import RainbowServiceArea from '../components/Rainbowservice'
import ServiceAreap from '../components/ServiceAreap';
import FAQSection from '../components/Faq'
import Servicearea from '../components/Servicearea';


const Dashboard = () => {
    return (
        <div id="__next">
            
                <DashboardHeader />
                <Dbanner />
                <Servicearea />
                <RainbowServiceArea/>
                <ServiceAreap/>
                <FAQSection/>
            
        </div>
    );
};

export default Dashboard;