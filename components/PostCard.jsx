import React from 'react';
import moment from 'moment';
import {Avatar, Group, Image, Paper, Text, Title,Button} from '@mantine/core';
import {IconCalendarEvent} from '@tabler/icons-react';
import Link from "next/link";

const PostCard = ({post}) => {

    return (<>
        <Paper
            withBorder
            mb={20}
            shadow="md"
            p="xl"
            radius="md"
            sx={{backgroundColor: `white`, color: '#101113'}}
        >
            <Image mb={15} height={300} mx="auto" radius="md" src={post.featuredImage.url} alt="main image"/>
            <Title mt={30} mb={10} order={1} variant="gradient"
                   gradient={{from: '#101113', to: '#5C5F66', deg: 45}}
                   sx={{fontFamily: 'Greycliff CF, sans-serif'}}
                   ta="center">{post.title}</Title>
            <Group spacing="xl" mb={5}>
                <Group spacing="xs" mb={5}>
                    <Avatar src={post.author.photo.url} alt={post.author.name}/>
                    <Text
                        fz="xl"
                        fw={500}>
                        {post.author.name}
                    </Text>
                </Group>
                <Group spacing="xs" mb={5}>
                    <IconCalendarEvent/>
                    <Text
                        fz="xl"
                        fw={500}>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </Text>
                </Group>
            </Group>
            <Text fz="md">
                {post.excerpt}
            </Text>
            <Link href={`/post/${post.slug}`}>
                <Button
                    variant="gradient"
                    gradient={{from: '#2B8A3E', to: '#37B24D', deg: 45}}
                    size="lg"
                    radius="md"
                    mt="xl"
                >
                    Продовжи читати
                </Button>
            </Link>
        </Paper>
    </>)
};

export default PostCard;
