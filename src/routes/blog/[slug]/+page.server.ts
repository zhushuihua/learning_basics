import { error } from "@sveltejs/kit";
import { posts } from "../data";
export function load({ params: { slug } }) {
    const post = posts.find(post => post.slug === slug)
    if (!post) { error(404); }
    return { data: post }
}