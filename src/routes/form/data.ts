let index = 0;
export const items: { id: number, content: string }[] = [];
export function add(content: string) {
    if (items.find((item) => item.content === content)) {
        throw new Error('duplicated error')
    }
    items.push({ id: ++index, content });
}