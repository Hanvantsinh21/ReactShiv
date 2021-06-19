 import React from 'react';
 import WebCommon from './WebCommon';
 import Hyt02 from  '../src/img/Hyt02.jpg'


 const WebHome = () =>{
     return (
            <>
               <WebCommon
               	name="Grow your business with"
                	imgsrc={Hyt02}
                	visit="/service"
                	btname="Get Started" />
            </>
     )
 };

 export default WebHome;
