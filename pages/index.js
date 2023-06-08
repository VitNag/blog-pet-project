import Head from 'next/head'

import FeaturedPosts from '../sections/FeaturedPosts'
import {Features} from '../components';
import {getPosts} from '../services';

import {Container, Title} from '@mantine/core';

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
                <Title mb={10} variant="gradient"
                       gradient={{from: '#F8F9FA', to: '#E9ECEF', deg: 45}}
                       sx={{fontFamily: 'Greycliff CF, sans-serif'}}
                >Обрані публікації</Title>
                <FeaturedPosts/>
                <Features/>
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