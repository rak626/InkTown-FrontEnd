export async function getReqHandler(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            // Headers only if required by the server
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            return await response.json()
        } else {
            const error = new Error(
                `Error fetching data: ${response.statusText}`
            )
            error.status = response.status // Add status code for more context
            throw error
        }
    } catch (error) {
        if (error.name === 'NetworkError') {
            console.error('Network error:', error)
        } else if (error.name === 'TypeError') {
            // Assume CORS or similar
            console.error('CORS or other cross-origin error:', error)
            // Provide specific guidance on how to resolve CORS (e.g., server setup)
        } else {
            console.error('Unknown error:', error)
        }
        throw error // Re-throw for handling in calling code
    }
}
