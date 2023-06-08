import {Button, Container, createStyles, Group, Image, List, rem, Text, ThemeIcon, Title,} from '@mantine/core';
import {IconCheck} from '@tabler/icons-react';
import image from '../public/creator.svg';

import Link from "next/link";

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex', justifyContent: 'space-between', paddingTop: `calc(${theme.spacing.xl} * 2)`,
    },

    content: {
        maxWidth: rem(480), marginRight: `calc(${theme.spacing.xl} * 3)`,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%', marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(44),
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant({variant: 'light', color: theme.primaryColor}).background,
        borderRadius: theme.radius.sm,
        padding: `${rem(4)} ${rem(12)}`,
    },
}));

const AboutMe = () => {
    const {classes} = useStyles();
    return (<div>
        <Container size='xl'>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        Віталій <span className={classes.highlight}>Нагорняк</span> Front-end розробник
                    </Title>
                    <Text color="dimmed" mt="md">
                        Фронтенд розробник програмного забезпечення з понад 2-річним досвідом в галузі ІТ, зокрема у
                        створенні веб-додатків. Захоплюється використанням своїх технічних навичок для створення
                        захоплюючих та інтуїтивно
                        зрозумілих користувацьких взаємодій. Швидко навчається і завжди радий приймати нові виклики.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={<ThemeIcon size={20} radius="xl">
                            <IconCheck size={rem(12)} stroke={1.5}/>
                        </ThemeIcon>}
                    >
                        <List.Item>
                            Володіє глибокими знаннями веб-технологій, таких як HTML, CSS та JavaScript
                        </List.Item>
                        <List.Item>
                            Має досвід у використанні фреймворків React та Next.js
                        </List.Item>
                        <List.Item>
                            Освоїв навички створення адаптивних та інтерактивних інтерфейсів користувача з використанням
                            Tailwind CSS
                        </List.Item>
                        <List.Item>
                            Знайомий з проблемами сумісності з браузерами та засобами відладки, такими як Chrome
                            DevTools
                        </List.Item>
                        <List.Item>
                            Має досвід роботи з системами контролю версій, такими як Git
                        </List.Item>
                        <List.Item>
                            Володіє знаннями про найкращі практики SEO та техніки оптимізації продуктивності веб-сайтів
                        </List.Item>
                        <List.Item>
                            Розуміє принципи доступності та веб-стандартів
                        </List.Item>
                        <List.Item>
                            Знайомий з методологіями Agile-розробки та має досвід роботи в командному середовищі
                        </List.Item>
                    </List>

                    <Group mt={30}>
                        <Link href={'https://www.linkedin.com/in/vitalii-nahorniak/'}>
                            <Button radius="xl" size="md" className={classes.control}>
                                Linkedin
                            </Button>
                        </Link>
                    </Group>
                </div>
                <Image src={image.src} alt={'Hero'} className={classes.image}/>
            </div>
        </Container>
    </div>);
};

export default AboutMe;