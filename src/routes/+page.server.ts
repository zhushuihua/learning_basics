export async function load({ cookies }) {
    const visited = cookies.get('visited');

    console.log(visited)
    cookies.set('visited', 'true', { path: '/' })
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return { visited }
}