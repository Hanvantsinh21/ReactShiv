import React from 'react';
import WebCard from './WebCard';
import WebData from './WebData';

const WebService = () =>{
    return (
           <>
               <div className='my-5'>
                        <h1 className="text-center">Our Services </h1>
               </div>
               <div className="container-fluid mb-5">
                   <div className="row">
                       <div className="col-10 mx-auto">

                            <div className="row gy-4">
                                <div className="col-md-4 col-10 mx-auto">
                                {

                                    WebData.map((val, index) =>{
                                    return(                                
                                        <WebCard 
                                        key = {index}
                                        img = {val.imgsrc}
                                        title = {val.title}
                                        />)
                                    
                                     })
                                        
                                    

                                }

                               
                                </div>
                            </div>
                       </div>

            
                   </div>
               </div>

           </>
    )
};

export default WebService;
