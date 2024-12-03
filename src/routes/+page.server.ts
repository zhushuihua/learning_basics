import { error } from "@sveltejs/kit";

export async function load({ cookies }) {
    const visited = cookies.get('visited');
    cookies.set('visited', 'true', { path: '/' })
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return { visited }
}