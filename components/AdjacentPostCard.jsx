import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import {IconArrowBigLeftFilled, IconArrowBigRightFilled} from '@tabler/icons-react';

import {Button, createStyles, Paper, rem, Text, Title} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(440),
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


function AdjacentPostCard({post, position}) {
    const {classes} = useStyles();

    return (<>
        <Link href={`/post/${post.slug}`}>
            <Paper
                mt={30}
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

                <Button color="white" radius="md" size="md">
                    {position === 'LEFT' && (<IconArrowBigLeftFilled/>)}
                    {position === 'RIGHT' && (<IconArrowBigRightFilled/>)}
                </Button>
            </Paper>
        </Link>
    </>)
}

export default AdjacentPostCard;