import { HeroPost } from '../_components/hero-post';
import { MoreStories } from '../_components/more-stories';
import { getAllPosts } from '@/lib/api';
import Container from '@/app/_components/container';

const News = () => {
    const allPosts = getAllPosts();

    const heroPost = allPosts[0];

    const morePosts = allPosts.slice(1);

    return (
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
    );
};

export default News;
