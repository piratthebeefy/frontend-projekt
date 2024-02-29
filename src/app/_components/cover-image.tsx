import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    title: string;
    src: string;
    slug?: string;
};

// komponenta vykreslující cover obrázek pro blogový příspěvek. Obrázek zároveň funguje po kliknutí jako odkaz na stránku s příspěvkem
const CoverImage = ({ title, src, slug }: Props) => {
    const image = (
        <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('shadow-sm w-full', {
                'hover:shadow-lg transition-shadow duration-200': slug,
            })}
            width={1300}
            height={630}
        />
    );
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link
                    as={`/main/news/posts/${slug}`}
                    href="/main/news/posts/[slug]"
                    aria-label={title}
                >
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    );
};

export default CoverImage;
