import React from 'react';

import moment from 'moment';
import {Avatar, Group, Image, Paper, Text, Title} from '@mantine/core';
import {IconCalendarEvent} from '@tabler/icons-react';


const PostDetail = ({post}) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return <h3 key={index}>{modifiedText.map((item, i) => <React.Fragment
                    key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index}>{modifiedText.map((item, i) => <React.Fragment
                    key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index}>{modifiedText.map((item, i) => <React.Fragment
                    key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (<Image
                    key={index}
                    alt={obj.title}
                    src={obj.src}
                />);
            default:
                return modifiedText;
        }
    };

    return (<>
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{backgroundColor: `white`, color: '#101113'}}
        >
            <Image mb={15} mx="auto" radius="md" src={post.featuredImage.url} alt="main image"/>

            <Group spacing="xl" mb={5}>
                <Group spacing="xs" mb={5}>
                    <Avatar src={post.author.photo.url} alt={post.author.name}/>
                    <Text variant="gradient"
                          gradient={{from: '#2B8A3E', to: '#37B24D', deg: 45}}
                          sx={{fontFamily: 'Greycliff CF, sans-serif'}}
                          ta="center"
                          fz="xl"
                          fw={700}>
                        {post.author.name}
                    </Text>
                </Group>
                <Group spacing="xs" mb={5}>
                    <IconCalendarEvent/>
                    <Text variant="gradient"
                          gradient={{from: '#2B8A3E', to: '#37B24D', deg: 45}}
                          sx={{fontFamily: 'Greycliff CF, sans-serif'}}
                          ta="center"
                          fz="xl"
                          fw={700}>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </Text>
                </Group>
            </Group>
            <Title mt={30} order={1} variant="gradient"
                   gradient={{from: '#2B8A3E', to: '#37B24D', deg: 45}}
                   sx={{fontFamily: 'Greycliff CF, sans-serif'}}
                   ta="center">{post.title}</Title>
            {post.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                return getContentFragment(index, children, typeObj, typeObj.type);
            })}

        </Paper>

    </>);
};

export default PostDetail;
