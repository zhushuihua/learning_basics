import { error, fail } from '@sveltejs/kit';
import { add, items } from './data'
export const actions = {
    create: async ({ request, cookies }) => {
        await new Promise((solve) => setTimeout(solve, 2000))
        const item = await request.formData();
        try {
            add(item.get('task') as string)
            return { message: 'done' };
        }
        catch (e: any) {
            return fail(422, {
                description: item.get('task') as string,
                error: e.message
            })
        }
    },
    delete: async ({ request, cookies }) => {
        const data = await request.formData()
        let id = +(data.get('id') as string);
        const index = items.findIndex((item) => item.id === id);
        if (index >= 0) {
            console.log('index to be deleted', index)
            items.splice(index, 1);
        }
    }
}
export function load() {
    return {
        items
    }
}