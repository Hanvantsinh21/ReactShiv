import React from 'react';
import WebCommon from './WebCommon';
import Hyt01 from  '../src/img/Hyt01.jpg'

const WebAbout = () =>{
    return (
           <>
                <WebCommon name="Welcome to About page"
                	imgsrc={Hyt01}
                	visit="/contact"
                	btname="Contact Now"/>
           </>
    )
};

export default WebAbout;


/* <div className="container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">

</div>
</div>
</div> */
