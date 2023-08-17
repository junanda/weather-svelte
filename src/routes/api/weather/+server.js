
export const GET = () => {
    return new Response(
        JSON.stringify({message: 'success'}),
        {status: 200}
    )
}