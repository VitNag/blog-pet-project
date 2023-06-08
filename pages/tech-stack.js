import {Accordion, Container, createStyles, getStylesRef, MantineProvider, rem, ThemeIcon, Title,} from '@mantine/core';
import {IconPlus} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        minHeight: rem(1700),
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
                    GraphQL
                </Title>

                <Accordion
                    chevronPosition="right"
                    chevronSize={50}
                    variant="separated"
                    disableChevronRotation
                    chevron={<ThemeIcon radius="xl" className={classes.gradient} size={32}>
                        <IconPlus size="1.05rem" stroke={1.5}/>
                    </ThemeIcon>}
                >
                    <Accordion.Item className={classes.item} value="effective-queries">
                        <Accordion.Control>Ефективні запити</Accordion.Control>
                        <Accordion.Panel>GraphQL дозволяє клієнту точно вказувати, які дані йому потрібні, тому лише
                            необхідна інформація передається через мережу. Це забезпечує ефективнішу комунікацію між
                            клієнтом та сервером, особливо при наявності об'ємного обсягу даних.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="flexibility">
                        <Accordion.Control>Гнучкість</Accordion.Control>
                        <Accordion.Panel>GraphQL надає клієнту можливість отримувати лише ту інформацію, яка йому
                            потрібна. Клієнт може визначити структуру даних, яку він очікує, і отримувати ці дані у
                            відповіді. Це дозволяє уникнути проблеми під- або надзавантаження, яка може виникнути з
                            використанням традиційних REST API.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="req">
                        <Accordion.Control>Один запит - багато данних</Accordion.Control>
                        <Accordion.Panel>GraphQL дозволяє отримувати багато різних типів даних за один запит. Запити
                            можуть включати декілька поля та зв'язків між об'єктами. Це зменшує кількість запитів, які
                            необхідно виконати для отримання повної інформації про блог, та зменшує навантаження на
                            сервер</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="docs">
                        <Accordion.Control>Автоматичне документування</Accordion.Control>
                        <Accordion.Panel>GraphQL надає можливість автоматично генерувати документацію API. Це спрощує
                            розробку та розуміння API для інших розробників, які можуть працювати над проектом у
                            майбутньому.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="mutations">
                        <Accordion.Control>Мутації</Accordion.Control>
                        <Accordion.Panel>GraphQL також надає можливість виконувати мутації, що дозволяє модифікувати
                            дані на сервері. Це означає, що клієнт може створювати нові записи, оновлювати існуючі дані
                            або видаляти інформацію через запити GraphQL.
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>

                <Title mt={50} align="center" className={classes.title}>
                    Mantine UI
                </Title>

                <Accordion
                    chevronPosition="right"
                    chevronSize={50}
                    variant="separated"
                    disableChevronRotation
                    chevron={<ThemeIcon radius="xl" className={classes.gradient} size={32}>
                        <IconPlus size="1.05rem" stroke={1.5}/>
                    </ThemeIcon>}
                >
                    <Accordion.Item className={classes.item} value="effective-queries">
                        <Accordion.Control>Швидкий старт</Accordion.Control>
                        <Accordion.Panel>Mantine UI надає готові компоненти, які можна використовувати зразу без
                            необхідності створювати їх з нуля. Це дозволяє прискорити розробку вашого проекту.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="flexibility">
                        <Accordion.Control>Однорідний дизайн</Accordion.Control>
                        <Accordion.Panel>Mantine UI має консистентний стиль дизайну для всіх своїх компонентів. Це
                            допомагає створювати єдиний та професійний вигляд для вашого інтернет-блогу.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="req">
                        <Accordion.Control>Відповідність до сучасних тенденцій</Accordion.Control>
                        <Accordion.Panel>Mantine UI враховує останні тенденції веб-дизайну та інтерфейсів, що дозволяє
                            вашому блогу виглядати сучасно та привабливо для користувачів.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="docs">
                        <Accordion.Control>Гнучкість та налаштовування</Accordion.Control>
                        <Accordion.Panel>Mantine UI надає можливість налаштовувати свої компоненти, щоб вони відповідали
                            вашим потребам. Ви можете змінювати кольори, розміри, стилі та інші аспекти компонентів
                            залежно від вашого проекту.
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="mutations">
                        <Accordion.Control>Реактивність</Accordion.Control>
                        <Accordion.Panel>Mantine UI підтримує реактивний підхід до розробки, де зміни в компонентах
                            автоматично оновлюються без перезавантаження сторінки. Це полегшує розробку та відладку
                            вашого проекту.
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    </MantineProvider>);
};

export default TechStack;