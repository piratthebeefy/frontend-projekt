import { Post } from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

// The selected code is a function that returns an array of all the post slugs in the \_posts directory.
// funkce fs prohleda _posts slozku a vrati pole vsech souboru
export function getPostSlugs() {
    console.log(`getPostSlugs je ${fs.readdirSync(postsDirectory)}`);
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
    // jmeno souboru, bez pripony, pak skonstruuje nazev souboru i s cestou
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    // precte soubor a vrati metada i jeho obsah jako pole
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Post;
}

// tahle funkce vrati obsah vsech markdown souboru, a seradi je dle datumu
export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();

    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
