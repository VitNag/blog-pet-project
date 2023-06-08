import React from 'react';
import {useRouter} from 'next/router';

import {Author, Categories, Comments, CommentsForm, LoaderComp, PostDetail, PostWidget} from '../../components';
import {getPostDetails, getPosts} from '../../services';
import AdjacentPosts from '../../sections/AdjacentPosts';

import {Container, Grid} from '@mantine/core';

const PostDetails = ({post}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <LoaderComp/>;
    }

    return (<Container size="xl">
        <Grid>
            <Grid.Col xs={12} md={8}> <PostDetail post={post}/>
                <Author author={post.author}/>
                <AdjacentPosts slug={post.slug} createdAt={post.createdAt}/>
                <CommentsForm slug={post.slug}/>
                <Comments slug={post.slug}/></Grid.Col>
            <Grid.Col xs={12} md={4}>
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                <Categories/>
            </Grid.Col>
        </Grid>
    </Container>);
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({params}) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data,
        },
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({node: {slug}}) => ({params: {slug}})), fallback: true,
    };
}