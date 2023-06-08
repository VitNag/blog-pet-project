import Head from 'next/head'
import FeaturedPosts from '../sections/FeaturedPosts'
import {Categories, PostCard, PostWidget} from '../components';
import {getPosts} from '../services';

import {Container, Grid, Stack} from '@mantine/core';


export default function Home({posts}) {
    return (<>
        <Head>
            <title>NUNG DEV</title>
            <meta name="description" content="Pet project showing Hygraph project CMS"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
            <Container size="xl">
                <FeaturedPosts/>
                {/*<Grid>*/}
                {/*    <Grid.Col lg={8} md={12}>*/}
                {/*        {posts.map((post, index) => (<PostCard key={index} post={post.node}/>))}*/}
                {/*    </Grid.Col>*/}
                {/*    <Grid.Col lg={4} md={12}>*/}
                {/*        <Stack>*/}
                {/*            <PostWidget/>*/}
                {/*            <Categories/>*/}
                {/*        </Stack>*/}
                {/*    </Grid.Col>*/}
                {/*</Grid>*/}
            </Container>
        </main>
    </>)
}

// Fetch data at build time
export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: {posts},
    };
}