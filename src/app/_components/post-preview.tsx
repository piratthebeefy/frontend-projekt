import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
};

// dalsi prispevky pod prvnim (hero) prispevkem

export function PostPreview({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: Props) {
    return (
        <div>
            <div className="mb-5">
                <CoverImage slug={slug} title={title} src={coverImage} />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link
                    as={`/main/news/posts/${slug}`}
                    href="/main/news/posts/[slug]"
                    className="transition-all ease-in-out drop-shadow-md dark:drop-shadow-dark-md hover:drop-shadow-xl dark:hover:drop-shadow-dark-xl hover:text-gray-800 hover:text-30xl dark:text-gray-300 dark:hover:text-gray-200"
                >
                    {title}
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
        </div>
    );
}
