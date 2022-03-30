import React from 'react';
import { useParams } from 'react-router-dom';

const Subpost = () => {
    const{subpost}=useParams()
    return (
        <div>
            amar nam sohan{subpost}
        </div>
    );
};

export default Subpost;