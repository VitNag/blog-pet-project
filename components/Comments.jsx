import React, {useEffect, useState} from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import {getComments} from '../services';

import {createStyles, Group, Paper, rem, Text,} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    comment: {
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    },

    body: {
        paddingLeft: rem(54), paddingTop: theme.spacing.sm, fontSize: theme.fontSizes.sm,
    },

    content: {
        '& > p:last-child': {
            marginBottom: 0,
        },
    },
}));

const Comments = ({slug}) => {
    const {classes} = useStyles();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug).then((result) => {
            setComments(result);
        });
    }, []);

    return (<>
        {comments.length > 0 && (
            <Paper sx={{backgroundColor: `#212529`}} withBorder radius="md" className={classes.comment}>
                <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                    {comments.length}
                    {' '}
                    Comments
                </h3>
                {comments.map((comment, index) => (<Paper mb={10} withBorder radius="md" className={classes.comment}>
                    <Group>
                        <div>
                            <Text fz="sm">{comment.name}</Text>
                            <Text fz="xs" c="dimmed">
                                {moment(comment.createdAt).format('MMM DD, YYYY')}
                            </Text>
                        </div>
                        <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
                    </Group>
                </Paper>))}
            </Paper>)}
    </>);
};

export default Comments;
