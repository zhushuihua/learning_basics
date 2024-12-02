export function load({ cookies }) {
    const visited = cookies.get('visited');
    console.log(visited)
    cookies.set('visited', 'true', { path: '/' })
    return { visited }
}