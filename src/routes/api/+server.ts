import { json } from '@sveltejs/kit';

export function GET() {
    return new Response(
        '{"a":35}', {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    );
}
export async function POST({ request }) {
    const data = await request.json();
    console.log(data);
    return json({ a: 35, b: 44 });
}