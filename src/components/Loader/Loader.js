import React, { useState } from 'react';
import './Loader.css'
import SyncLoader from "react-spinners/SyncLoader";


const Loader = () => {

    let [loading, setLoading] = useState(true);



    return (
        <div className='container py-5'>
            <div className='flex flex-center'>
                <SyncLoader
                    color={"#36d7b7"}
                    loading={loading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    )
}

export default Loader