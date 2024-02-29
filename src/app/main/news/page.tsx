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
    const allPosts = getAllPosts();

    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <main>
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
