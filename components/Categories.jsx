import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {Paper, Stack, Text, Title} from '@mantine/core';

import {getCategories} from '../services';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => {
            setCategories(newCategories);
        });
    }, []);

    return (<Paper
        shadow="md"
        p="md"
        radius="md"
        sx={{backgroundColor: `#212529`}}
    >
        <Title mb={10} variant="gradient"
               gradient={{from: '#F8F9FA', to: '#E9ECEF', deg: 45}}
               sx={{fontFamily: 'Greycliff CF, sans-serif'}}
        >Categories</Title>
        <Stack spacing="xs" justify="flex-start">
            {categories.map((category, index) => (<Link key={index} href={`/category/${category.slug}`}>
                <Text c='white' fz="lg" fw={500}>{category.name}</Text>
            </Link>))}
        </Stack>
    </Paper>);
};

export default Categories;
