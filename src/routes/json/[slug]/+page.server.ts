import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params: { slug } }) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/' + slug);
    const json = await data.json();
    if (json.title) {
        return ({
            json
        });
    }
    else throw error(404, 'Not found')
};