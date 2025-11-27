import React from 'react';
function Hero() {
    return (  
        <section className='container-fluid' id='supportHero'> 
            <div className='pt-5' id='supportWrapper'>
                <h4 className='fs-2'>Support Portal</h4>   
                <div className='p-5 ' > 
                <a href=''>Track tickets</a>
            </div>
            
            </div>

            <div className='row' >
                <div className='col-1'></div>
            <div className='col-5 p-3 mb-5'  > 
                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder='Eg. how do I activate F&O, why is ym order getting rejected..'/><br/>
                <a href=''>Track account opening</a>
                <a href=''>Track segment activation</a>
                <a href=''>Intraday margins</a>
                <a href=''>Kite user manual</a>
            </div>
            <div className='col-1'></div>
            <div className='col-5 p-3' > 
                <h1  className='fs-3'>Featured</h1>
                <ol>
                    <li  className='p-1'><a href=''>Current Takeovers and Delisting - January 2024</a></li>
                    <li  className='p-1'><a href=''>Latest Intraday leverages - MIS & CO</a></li>
                </ol>
             
                
                
            </div>
            
            </div>
        </section>
        
    );
}

export default Hero;