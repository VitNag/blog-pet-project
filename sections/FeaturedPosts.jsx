import React, {useEffect, useState} from 'react';
import {Carousel} from '@mantine/carousel';


import {FeaturedPostCard} from '../components';
import {getFeaturedPosts} from '../services';

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 1024}, items: 5,
    }, desktop: {
        breakpoint: {max: 1024, min: 768}, items: 3,
    }, tablet: {
        breakpoint: {max: 768, min: 640}, items: 2,
    }, mobile: {
        breakpoint: {max: 640, min: 0}, items: 1,
    },
};

const FeaturedPosts = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getFeaturedPosts().then((result) => {
            setFeaturedPosts(result);
            setDataLoaded(true);
        });
    }, []);

    return (<div>
        <Carousel
            height={200}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            breakpoints={[{maxWidth: 'md', slideSize: '50%'}, {maxWidth: 'sm', slideSize: '100%', slideGap: 0},]}
        >
            {dataLoaded && featuredPosts.map((post, index) => (<FeaturedPostCard key={index} post={post}/>))}
        </Carousel>
    </div>);
};

export default FeaturedPosts;