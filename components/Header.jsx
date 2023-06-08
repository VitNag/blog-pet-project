import {Burger, Container, createStyles, Group, Header, Paper, rem, Text, Transition,} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {useRouter} from 'next/router';
import {IconInfoSquare} from '@tabler/icons-react';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative', zIndex: 1,
    },

    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0, padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({variant: 'light', color: theme.primaryColor}).background,
            color: theme.fn.variant({variant: 'light', color: theme.primaryColor}).color,
        },
    },
}));

const mockdata = [

    {
        "link": "/tech-stack", "label": "Технології"
    }, {
        "link": "/publications", "label": "Публікації"
    }, {
        "link": "/about-me", "label": "Про розробника"
    }, {
        "link": "/guestbook", "label": "Стінка відвідування"
    }

];

export function HeaderResponsive() {
    const router = useRouter()
    const [opened, {toggle, close}] = useDisclosure(false);
    const active = router.pathname;
    const {classes, cx} = useStyles();

    const items = mockdata.map((link) => (<a
        key={link.label}
        href={link.link}
        className={cx(classes.link, {[classes.linkActive]: active === link.link})}
        onClick={(event) => {
            close();
        }}
    >
        {link.label}
    </a>));

    return (<Header height={HEADER_HEIGHT} mb={30} className={classes.root}>
        <Container className={classes.header}>
            <a href={"/"} className={cx(classes.link, {[classes.linkActive]: active === "/"})}>
                <Text variant="gradient"
                      gradient={{
                          from: '#F8F9FA', to: '#E9ECEF', deg: 45
                      }}
                      sx={{fontFamily: 'Greycliff CF, sans-serif'}}
                      ta="center"
                      fz="xl"
                      fw={700}>
                    NUNG DEV <IconInfoSquare size={20}/>
                </Text></a>
            <Group spacing={5} className={classes.links}>
                {items}
            </Group>

            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm"/>

            <Transition transition="pop-top-right" duration={200} mounted={opened}>
                {(styles) => (<Paper className={classes.dropdown} withBorder style={styles}>
                    {items}
                </Paper>)}
            </Transition>
        </Container>
    </Header>);
}