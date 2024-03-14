import { Metadata } from 'next';
import { HeroPost } from '../../_components/hero-post';
import { MoreStories } from '../../_components/more-stories';
import { getAllPosts } from '@/lib/api';
import Container from '@/app/_components/container';

export const metadata: Metadata = {
    title: `Kultivátor: Novinky`,
    description: `Stránky pražské metalové kapely.`,
};

const News = () => {
    // nacteni prispevku z _post slozky, prvni prispevek je "heroPost" a udaje o nem sa jako props poslou dolu (prebere si je ./posts/[slug]/page.tsx)
    // ostatni prispevky (pokud existuji) se jako props predaji do komponenty MoreStories
    const allPosts = getAllPosts();
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <main className="transition-all ease-in-out drop-shadow-md dark:drop-shadow-dark-md hover:drop-shadow-xl dark:hover:drop-shadow-dark-xl hover:text-gray-800 hover:text-55xl hover:lg:text-110xl dark:text-gray-300 dark:hover:text-gray-100">
            <Container>
                <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                />
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
        </main>
    );
};

export default News;
