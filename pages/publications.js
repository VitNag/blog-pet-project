import React from 'react';
import {Categories, PostCard, PostWidget} from "../components";

import {getPosts} from '../services';
import {Container, Grid} from '@mantine/core';


export default function Publications({posts}) {
    console.log(posts)
    return (

        <Container size="xl">
            <Grid>
                <Grid.Col xs={12} md={8}>
                    {posts.map((post, index) => (<PostCard key={index} post={post.node}/>))}</Grid.Col>
                <Grid.Col xs={12} md={4}>
                    <PostWidget/>
                    <Categories/>
                </Grid.Col>
            </Grid>
        </Container>);
};


export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: {posts},
    };
}