import {Avatar, Button, createStyles, Group, Paper, rem, Text, Title} from '@mantine/core';
import moment from 'moment';
import Link from "next/link";

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

function FeaturedPostCard({post}) {
    const {classes} = useStyles();

    return (<Link href={`/post/${post.slug}`}>
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{backgroundImage: `url(${post.featuredImage.url})`}}
            className={classes.card}
        >
            <div>
                <Group spacing="xs" mb={5}>
                    <Avatar src={post.author.photo.url} alt={post.author.name}/>
                    <Text className={classes.category} size="xs">
                        {post.author.name}
                    </Text>
                </Group>
                <Text className={classes.category} size="xs">
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                </Text>
                <Title order={3} className={classes.title}>
                    {post.title}
                </Title>
            </div>
            <Button variant="white" color="dark">
                Продовжи читати
            </Button>

        </Paper>
    </Link>);
}

export default FeaturedPostCard;