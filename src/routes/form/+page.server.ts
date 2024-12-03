import { add, items } from './data'
export const actions = {
    default: async ({ request, cookies }) => {
        const item = await request.formData();
        add(item.get('task') as string)
    },
}
export function load() {
    return {
        items
    }
}