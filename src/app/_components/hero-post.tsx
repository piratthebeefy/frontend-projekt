import Avatar from '@/app/_components/avatar';
import CoverImage from '@/app/_components/cover-image';
import { type Author } from '@/interfaces/author';
import Link from 'next/link';
import DateFormatter from './date-formatter';

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
};

// prvni prispevek, nekdriv jde obrazek, pak vedle sebe nadpis v linku (pod nim pak datum), vycuc z prispevku (exceprt) a avatar autora
export function HeroPost({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: Props) {
    return (
        <section>
            <div className="mb-8 md:mb-16">
                <CoverImage title={title} src={coverImage} slug={slug} />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-50xl lg:text-105xl leading-tight">
                        <Link
                            as={`/main/news/posts/${slug}`}
                            href="/main/news/posts/[slug]"
                            className="transition-all ease-in-out drop-shadow-md dark:drop-shadow-dark-md hover:drop-shadow-xl dark:hover:drop-shadow-dark-xl hover:text-gray-800 hover:text-55xl hover:lg:text-110xl dark:text-gray-300 dark:hover:text-gray-100"
                        >
                            {title}
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        <DateFormatter dateString={date} />
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                    <Avatar name={author.name} picture={author.picture} />
                </div>
            </div>
        </section>
    );
}
