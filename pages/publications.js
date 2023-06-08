import React from 'react';
import {PostCard} from "../components";
import {getPosts} from "../services";

export default function Publications ({posts})  {
    console.log(posts)
    return (
        <div>
            {posts.map((post, index) => (<PostCard key={index} post={post.node}/>))}
        </div>
    );
};


export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: {posts},
    };
}