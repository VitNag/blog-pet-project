import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Link from 'next/link';
import {getRecentPosts, getSimilarPosts} from '../services';

import {createStyles, Paper, rem, Text, Title} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(220),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
    },

    category: {
        color: theme.white, opacity: 0.7, fontWeight: 700, textTransform: 'uppercase',
    },
}));

function PostWidget({categories, slug}) {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((result) => {
                setRelatedPosts(result);
            });
        } else {
            getRecentPosts().then((result) => {
                setRelatedPosts(result);
            });
        }
    }, [slug]);

    const {classes} = useStyles();

    return (<>
        <Paper
            mb={10}
            shadow="md"
            p="md"
            radius="md"
            sx={{backgroundColor: `#212529`}}
        >
            <Title mb={10} variant="gradient"
                   gradient={{from: '#F8F9FA', to: '#E9ECEF', deg: 45}}
                   sx={{fontFamily: 'Greycliff CF, sans-serif'}}
            >{slug ? 'Пов’язані публікації' : 'Останні публікації'}</Title>
            {relatedPosts.map((post, index) => (<Link key={post.title} href={`/post/${post.slug}`}>
                <Paper
                    mb={10}
                    shadow="md"
                    p="xl"
                    radius="md"
                    sx={{backgroundImage: `url(${post.featuredImage.url})`}}
                    className={classes.card}
                >
                    <div>
                        <Text className={classes.category} size="xs">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </Text>
                        <Title order={3} className={classes.title}>
                            {post.title}
                        </Title>
                    </div>
                </Paper>
            </Link>))}
        </Paper>
    </>)
}

export default PostWidget;