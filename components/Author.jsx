import React from 'react';
import {Avatar, Group, Paper, Title, Text} from '@mantine/core';

const Author = ({author}) => (<div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <Paper
        mt={30}
        shadow="md"
        p="xl"
        radius="md"
        sx={{backgroundColor: `#212529`}}
        // className={classes.card}
    >
        <Group position="center" spacing="xs" mb={5}>
            <Avatar size="xl" src={author.photo.url} alt={author.name}/>
            <Title variant="gradient"
                   gradient={{from: '#F8F9FA', to: '#E9ECEF', deg: 45}}
                   sx={{fontFamily: 'Greycliff CF, sans-serif'}}
                   ta="center"
            >
                {author.name}
            </Title>
        </Group>
        <Text c="#F8F9FA">{author.bio}</Text>
    </Paper>
</div>);

export default Author;
