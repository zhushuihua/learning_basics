let index = 0;
export const items: { id: number, content: string }[] = [];
export function add(content: string) {
    items.push({ id: ++index, content });
}