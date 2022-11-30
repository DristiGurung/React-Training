import {Link, useLoaderData } from "react-router-dom";
import { list } from "../post";
import moment from "moment";


export async function fetch(){
    const posts = await list();

    if(!posts){
        return[];
    }
    return posts.map(function(post){
        return {
           ...post,
           created_at:moment(post.created_at).format("MM Do YYYY")//.fromNow
        };
    });
}

export default function Home() {
    const posts = useLoaderData();
        return (
        <>
            <h1 className="title">Blog</h1>
            <ul className="posts">
                {
                   posts.map(function(post){
                    return( 
                        <li className="post">
                    <Link to ={`/post/${post.id}`}>
                        <date>{post.created_at}</date>
                        <span>{post.title}</span>
                    </Link>
                </li>
);                  
                })
            }
            </ul>
        </>
    )
}