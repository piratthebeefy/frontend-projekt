import markdownStyles from './markdown-styles.module.css';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

type Props = {
    content: string;
};

// rehypeRaw nejspis naprimo modifikuje DOM
export function PostBody({ content }: Props) {
    return (
        <div className="max-w-2xl mx-auto">
            <Markdown
                className={markdownStyles['markdown']}
                rehypePlugins={[rehypeRaw]}
            >
                {content}
            </Markdown>
        </div>
    );
}
