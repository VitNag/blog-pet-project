import {Button, Col, createStyles, Grid, rem, SimpleGrid, Text, ThemeIcon, Title,} from '@mantine/core';
import {IconCircleDotted, IconFileCode, IconFlame, IconReceiptOff} from '@tabler/icons-react';
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(36),
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

const features = [{
    icon: IconReceiptOff,
    title: 'Чистий код',
    description: 'Сайт написаний за допомогою сучасних рішень',
}, {
    icon: IconFileCode,
    title: 'Використання TypeScript',
    description: 'Строга типізація та повний контроль над функціями',
}, {
    icon: IconCircleDotted,
    title: 'Швидкодія',
    description: 'Доступ до відаленої бази даних здійснюється за допомогою graphql',
}, {
    icon: IconFlame,
    title: 'Адаптивний дизайн',
    description: 'Зручний для користування інтерфейс як на ПК так і на телефоні',
},];

export default function Features() {
    const {classes} = useStyles();

    const items = features.map((feature) => (<div key={feature.title}>
        <ThemeIcon
            size={44}
            radius="md"
            variant="gradient"
            gradient={{from: '#2B8A3E', to: '#37B24D', deg: 45}}
        >
            <feature.icon size={rem(26)} stroke={1.5}/>
        </ThemeIcon>
        <Text fz="lg" mt="sm" fw={500}>
            {feature.title}
        </Text>
        <Text c="dimmed" fz="sm">
            {feature.description}
        </Text>
    </div>));

    return (<div className={classes.wrapper}>
        <Grid gutter={80}>
            <Col span={12} md={5}>
                <Title className={classes.title} order={2}>
                    NUNG DEV Сучасний та цікавий блог для програмістів
                </Title>
                <Text c="dimmed">
                    Тут ви можете знайти публікації на різні теми та залишити коментарі якщо вважаєте що щось
                    написано не правильно
                </Text>
                <Link href={"/publications"}>
                    <Button
                        variant="gradient"
                        gradient={{from: '#2B8A3E', to: '#37B24D', deg: 45}}
                        size="lg"
                        radius="md"
                        mt="xl"
                    >
                        Публікації
                    </Button>
                </Link>
            </Col>
            <Col span={12} md={7}>
                <SimpleGrid cols={2} spacing={30} breakpoints={[{maxWidth: 'md', cols: 1}]}>
                    {items}
                </SimpleGrid>
            </Col>
        </Grid>
    </div>);
}