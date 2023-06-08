import React, {useState} from 'react';
import {submitComment} from '../services';

import {Button, Group, SimpleGrid, Textarea, TextInput, Title} from '@mantine/core';
import {useForm} from '@mantine/form';

const CommentsForm = ({slug}) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const form = useForm({
        initialValues: {
            name: '', email: '', message: '',
        }, validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            message: (value) => value.trim().length === 0,
        },
    });
    const handlePostSubmission = (res) => {

        const name = res.name
        const email = res.email
        const comment = res.message

        const commentObj = {
            name, email, comment, slug,
        };

        submitComment(commentObj)
            .then((res) => {
                if (res.createComment) {

                    form.setValues('');

                    setShowSuccessMessage(true);
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 3000);
                }
            });

    }

    return (<form onSubmit={form.onSubmit((res) => handlePostSubmission(res))}>
        <Title
            mt={30}
            order={2}
            size="h1"
            sx={(theme) => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`})}
            weight={900}
            align="center"
        >
            Будемо на зв'язку
        </Title>

        <SimpleGrid cols={2} mt="xl" breakpoints={[{maxWidth: 'sm', cols: 1}]}>
            <TextInput
                label="Ім'я"
                placeholder="Ваше ім'я"
                name="name"
                variant="filled"
                {...form.getInputProps('name')}
            />
            <TextInput
                label="Електронна пошта"
                placeholder="Ваша електронна адреса"
                name="email"
                variant="filled"
                {...form.getInputProps('email')}
            />
        </SimpleGrid>

        <Textarea
            mt="md"
            label="Повідомлення"
            placeholder="Ваше повідомлення"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps('message')}
        />

        <Group mb={30} position="center" mt="xl">
            <Button type="submit" size="md">
                Надіслати коментар
            </Button>
            {showSuccessMessage && <span>Коментар надіслано на перевірку</span>}
        </Group>
    </form>);
};

export default CommentsForm;
