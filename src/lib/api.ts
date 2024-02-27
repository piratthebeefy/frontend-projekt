import { Post } from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

// The selected code is a function that returns an array of all the post slugs in the \_posts directory.
// The function uses the fs module to read the directory contents and returns the slugs as an array. This
// can be used to retrieve all the available posts on the site.
export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();

    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
