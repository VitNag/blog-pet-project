import {Accordion, Container, createStyles, getStylesRef, MantineProvider, rem, ThemeIcon, Title,} from '@mantine/core';
import {IconPlus} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        minHeight: rem(900),
        backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
        position: 'relative',
        color: theme.black,
    },

    title: {
        color: theme.white,
        fontSize: 52,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },

    item: {
        backgroundColor: theme.white,
        borderBottom: 0,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.lg,
        overflow: 'hidden',
    },

    control: {
        fontSize: theme.fontSizes.lg, padding: `${theme.spacing.lg} ${theme.spacing.xl}`, color: theme.black,

        '&:hover': {
            backgroundColor: 'transparent',
        },
    },

    content: {
        paddingLeft: theme.spacing.xl, lineHeight: 1.6, color: theme.black,
    },

    icon: {
        ref: getStylesRef('icon'), marginLeft: theme.spacing.md,
    },

    gradient: {
        backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${theme.colors[theme.primaryColor][5]} 100%)`,
    },

    itemOpened: {
        [`& .${getStylesRef('icon')}`]: {
            transform: 'rotate(45deg)',
        },
    },

    button: {
        display: 'block', marginTop: theme.spacing.md,

        [theme.fn.smallerThan('sm')]: {
            display: 'block', width: '100%',
        },
    },
}));
const placeholder = ''
const nextjs = ''


const TechStack = () => {
    const {classes} = useStyles();
    return (<MantineProvider inherit theme={{colorScheme: 'light'}}>
        <div className={classes.wrapper}>
            <Container size="sm">
                <Title align="center" className={classes.title}>
                    NextJS
                </Title>

                <Accordion
                    chevronPosition="right"
                    defaultValue="server-rendering"
                    chevronSize={50}
                    variant="separated"
                    disableChevronRotation
                    chevron={<ThemeIcon radius="xl" className={classes.gradient} size={32}>
                        <IconPlus size="1.05rem" stroke={1.5}/>
                    </ThemeIcon>}
                >
                    <Accordion.Item className={classes.item} value="server-rendering">
                        <Accordion.Control>Серверний рендерінг</Accordion.Control>
                        <Accordion.Panel>Next.js дозволяє виконувати серверний рендерінг контенту, що
                            дозволяє завантажувати початковий HTML-код на стороні сервера перед відправкою до
                            клієнта. Це забезпечує кращу продуктивність та SEO, оскільки пошукові системи зможуть
                            індексувати вміст.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="static-generation">
                        <Accordion.Control>Статичний генерація</Accordion.Control>
                        <Accordion.Panel>Next.js підтримує статичну генерацію, що дозволяє попередньо генерувати
                            сторінки під час збірки проекту. Можна використовувати цю функціональність для
                            створення заздалегідь згенерованих сторінок блогу, що покращує швидкість завантаження та
                            продуктивність.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="dynamic-routing">
                        <Accordion.Control>Динамічна маршрутизація</Accordion.Control>
                        <Accordion.Panel>За допомогою Next.js можливо легко створювати динамічні маршрути для
                            своїх сторінок блогу. Наприклад, можливо мати маршрут "/posts/[id]", де "id" є
                            динамічним параметром, що дозволяє показувати окремі сторінки для кожного посту в
                            блозі.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="client-rendering">
                        <Accordion.Control>Клієнтський рендерінг</Accordion.Control>
                        <Accordion.Panel>Next.js також підтримує клієнтський рендерінг за допомогою React, що
                            дозволяє оновлювати вміст на стороні клієнта без перезавантаження сторінки. Це особливо
                            корисно для взаємодії користувача з блогом.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="easy-deployment">
                        <Accordion.Control>Легке розгортання</Accordion.Control>
                        <Accordion.Panel>Next.js має вбудовану підтримку розгортання веб-додатків. Можливо легко
                            розгорнути свій проект на платформах, таких як Vercel, що дозволяє швидко розгорнути
                            блог та налаштувати автоматичні релізи.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="extensibility">
                        <Accordion.Control>Розширюваність</Accordion.Control>
                        <Accordion.Panel>Next.js заснований на React, тому можливо використовувати всі
                            функціональності та бібліотеки React для побудови блогу. Можна
                            використовувати компоненти, хуки та інші функції React, що спрощує розробку та підтримку
                            проекту.
                        </Accordion.Panel>
                    </Accordion.Item>

                </Accordion>



                <Title mt={50} align="center" className={classes.title}>
                    Технології що використовуються
                </Title>

                <Accordion
                    chevronPosition="right"
                    defaultValue="nextjs"
                    chevronSize={50}
                    variant="separated"
                    disableChevronRotation
                    chevron={<ThemeIcon radius="xl" className={classes.gradient} size={32}>
                        <IconPlus size="1.05rem" stroke={1.5}/>
                    </ThemeIcon>}
                >
                    <Accordion.Item className={classes.item} value="nextjs">
                        <Accordion.Control>NextJS</Accordion.Control>
                        <Accordion.Panel>{nextjs}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="another-account">
                        <Accordion.Control>Can I create more that one account?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="newsletter">
                        <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="credit-card">
                        <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="payment">
                        <Accordion.Control>What payment systems to you work with?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="payment">
                        <Accordion.Control>What payment systems to you work with?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="payment">
                        <Accordion.Control>What payment systems to you work with?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>

                </Accordion>
            </Container>
        </div>
    </MantineProvider>);
};

export default TechStack;