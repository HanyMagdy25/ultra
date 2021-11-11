import React from 'react';
import { InfoSection, Pricing} from '../../components';
import { homeObjone , homeObjtwo ,homeObjthree , homeObjfour} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjone}/>
            <InfoSection {...homeObjtwo}/>
            <InfoSection {...homeObjthree}/>
            <Pricing/>
            <InfoSection {...homeObjfour}/>
        </>
    )
}

export default Home
