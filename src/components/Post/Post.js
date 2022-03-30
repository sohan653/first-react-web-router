import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
    const[posts,setPost]=useState([])
    const[load,isloaded]=useState(true)
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts`
        const getitem= async()=>{
            const item=await axios(url)
            setPost(item.data)
            isloaded(false)
        }
        getitem()
        console.log(posts)
    },[])
   
    return load? (
        <h1>loading</h1>
    ):(
        <div className='p-3'>  
          {posts.map(post => <Link className='p-4' key={post.id} to={`/post/${post.id}`}>{post.id}</Link>)}
          <Outlet></Outlet>
        </div>
    );
};

export default Post;