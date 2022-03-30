import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ShowInformation = ({user}) => {
    const navigate=useNavigate();
    const navi=()=>{
        const path=`/information/${id}`
        navigate(path)
    }
    const {name,username,id}=user
    return (
        <div>
            <h1 className='text-3xl'>{name}</h1>
            <Link to={`/information/${id}`}>Details</Link>
            <button onClick={navi} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {username} id: {id}
            </button>
        </div>
    );
};

export default ShowInformation;