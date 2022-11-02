import React, { useEffect } from 'react';
import '../App.css';


function Home() {
    useEffect(() => {
        document.body.className = 'blobs-active';

        return() => (
            document.body.classList = ""
        )
    }, []);
    return(
        <div className='home-container'>
            
        </div>
    )
}

export default Home;