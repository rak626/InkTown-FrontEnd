import { useState, useEffect } from 'react'

function useSendPost(url, reqBody) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const sendData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Adjust content type if necessary
                        // Add any additional headers as needed
                    },
                    body: JSON.stringify(reqBody), // Convert body object to JSON string
                    // Add any additional options like credentials, mode, etc.
                })

                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }

                const responseData = await response.json()
                setData(responseData)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
                setError(error)
                setLoading(false)
            }
        }
        // Clean up function to cancel any ongoing fetch on component unmount
        return () => {
            // AbortController can be used to cancel fetch request but it's not supported in all browsers yet
            // For now, just ensure that the component is unmounted and not trying to update state
        }
    }, [url, reqBody]) // Re-run effect when URL or options change

    return { data, loading, error }
}

export default useSendPost

// Example usage of the hook
// function MyComponent() {
//   const apiUrl = 'https://example.com/api/data'; // Replace with your actual API endpoint
//   const postData = { /* Your POST data */ };

//   const { data, loading, error } = useFetch(apiUrl, { body: postData });

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       {/* Render fetched data */}
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }
