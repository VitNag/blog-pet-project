import {Button, Container, createStyles, Group, rem, Text, Title} from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: rem(80),
        paddingBottom: rem(120),
        backgroundColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(220),
        lineHeight: 1,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        color: theme.colors[theme.primaryColor][3],

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(120),
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(38),
        color: theme.white,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(32),
        },
    },

    description: {
        maxWidth: rem(540),
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        color: theme.colors[theme.primaryColor][1],
    },
}));

export default function Error() {
    const {classes} = useStyles();

    return (<div className={classes.root}>
        <Container>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>Ви знайшли секретне місце...</Title>
            <Text size="lg" align="center" className={classes.description}>
                На жаль, це лише сторінка 404. Можливо, ви неправильно ввели адресу або сторінку було переміщено на іншу
                URL-адресу.
            </Text>
            <Group position="center">
                <Link href={'/'}>
                    <Button variant="white" size="md">
                        На головну сторінку
                    </Button>
                </Link>
            </Group>
        </Container>
    </div>);
}