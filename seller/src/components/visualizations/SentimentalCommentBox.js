import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SectionCard, Comment } from 'src/components';

const sentimentIdentifier = {
    positive: {
        text: 'Positive',
        img: `/static/images/Happy.png`
    },
    partiallyNegative: {
        text: 'Partsially Negative',
        img: `/static/images/PartialHappy.png`
    },
    neutral: {
        text: 'Neutral',
        img: `/static/images/Neutral.png`
    },
    partiallyGood: {
        text: 'Partially Good',
        img: `/static/images/PartialSad.png`
    },
    negative: {
        text: 'Negative',
        img: `/static/images/Sad.png`
    }
};

function SentimentImage({ img }) {
    const SentimentEmoji = styled(Avatar)(
        ({ theme }) => `
            width: 50%;
            height: 50%;
            margin: auto;
            padding: ${theme.spacing(5, 0)};
            z-index: 1;
        `
    );

    const Background = styled(Avatar)(
        ({ theme }) => `
            position: absolute;
            width: 60%;
            height: 100%;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            padding: ${theme.spacing(5, 0)};
            filter: blur(12px);
            z-index: -1;
        `
    );

    const DropShadow = styled(Box)(
        ({ theme }) => `
            position: absolute;
            width: 70%;
            height: 70%;
            top: 50%; left: 50%;
            background: rgba(249, 47, 47, 0.38);
            filter: blur(80px);
            transform: translate(-50%, -50%) rotate(10.61deg);
            z-index: -1;
        `
    );

    return (
        <Box sx={{ position: 'relative' }}>
            <Background src={img} />
            <DropShadow />
            <SentimentEmoji src={img} />
        </Box>
    );
}

export default function SentimentalCommentBox({ highlightComment, highlightedComment, allComments }) {
    return (
        <SectionCard
            key={highlightComment}
            title={highlightComment ? sentimentIdentifier[highlightedComment.sentiment].text : 'Top Comments'}
        >
            {highlightComment ? (
                <>
                    <SentimentImage img={sentimentIdentifier[highlightedComment.sentiment].img} />
                    <Comment
                        sentiment={highlightedComment.sentiment}
                        author={highlightedComment.author}
                        content={highlightedComment.content}
                    />
                </>
            ) : (
                allComments.map((comment, index) => (
                    <Comment
                        key={index}
                        variant={index < 2 ? 'golden' : 'blue'}
                        author={comment.author}
                        content={comment.content}
                    />
                ))
            )}
        </SectionCard>
    );
}
