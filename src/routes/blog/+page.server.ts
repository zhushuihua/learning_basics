import { error } from "@sveltejs/kit";
import { posts } from "./data";
export function load() {
    return { data: posts };
}