import React, {useEffect, useState} from 'react';
import {Carousel} from '@mantine/carousel';
import {useMediaQuery} from '@mantine/hooks';
import {rem, useMantineTheme} from '@mantine/core';

import {FeaturedPostCard} from '../components';
import {getFeaturedPosts} from '../services';

const FeaturedPosts = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getFeaturedPosts().then((result) => {
            setFeaturedPosts(result);
            setDataLoaded(true);
        });
    }, []);

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    return (<Carousel
        loop
        slideSize="45%"
        breakpoints={[{maxWidth: 'sm', slideSize: '100%', slideGap: rem(2)}]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
    >
        {dataLoaded && featuredPosts.map((post, index) => (<Carousel.Slide key={index}>
            <FeaturedPostCard post={post}/>
        </Carousel.Slide>))}
    </Carousel>)
};

export default FeaturedPosts;