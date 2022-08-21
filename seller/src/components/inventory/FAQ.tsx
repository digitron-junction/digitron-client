import { SectionCard, Comment } from 'src/components';

const faqs = [
    {
        question: 'What are NFTs?',
        answer: 'They are non fungible token. Unique and once created they are stored in blockchain?'
    },
    {
        question: 'What will be an advantage for minting an NFT?',
        answer: 'You can use it to create a unique item for your business. It will act as a certificate of authentiiy for your product.'
    },
    {
        question: 'Any charges for minting an NFT?',
        answer: 'A very neglibable amount of 0.001 ETH.'
    },
    {
        question: 'How to make a NFT?',
        answer: 'Worry no more, create an account with keplr wallet?'
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
