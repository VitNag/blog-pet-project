import React from 'react';
import {useRouter} from 'next/router';

import {getCategories, getCategoryPost} from '../../services';
import {Categories, PostCard} from '../../components';
import LoaderComp from "../../components/LoaderComp";

import {Container, Grid} from '@mantine/core';

const CategoryPost = ({posts}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <LoaderComp/>;
    }

    return (<Container size="xl">
        <Grid>
            <Grid.Col xs={12} md={8}>
                {posts.map((post, index) => (<PostCard key={index} post={post.node}/>))}</Grid.Col>
            <Grid.Col xs={12} md={4}>
                <Categories/>
            </Grid.Col>
        </Grid>
    </Container>);
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({params}) {
    const posts = await getCategoryPost(params.slug);

    return {
        props: {posts},
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map(({slug}) => ({params: {slug}})), fallback: true,
    };
}