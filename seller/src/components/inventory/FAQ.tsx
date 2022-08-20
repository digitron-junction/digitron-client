import { SectionCard, Comment } from 'src/components';

const faqs = [
    {
        question: 'Question?',
        answer: 'Answer?'
    },
    {
        question: 'Question?',
        answer: 'Answer?'
    },
    {
        question: 'Question?',
        answer: 'Answer?'
    },
    {
        question: 'Question?',
        answer: 'Answer?'
    }
];

export default function FAQ() {
    return (
        <SectionCard title="FAQ">
            {faqs.map((faq, index) => (
                <Comment key={index} style="blue" title={faq.question} content={faq.answer} />
            ))}
        </SectionCard>
    );
}
