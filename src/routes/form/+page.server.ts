import { add, items } from './data'
export const actions = {
    create: async ({ request, cookies }) => {
        const item = await request.formData();
        add(item.get('task') as string)
    },
    delete: async ({ request, cookies }) => {
        const data = await request.formData()
        items.splice(+(data.get('id') as string), 1);
    }
}
export function load() {
    return {
        items
    }
}