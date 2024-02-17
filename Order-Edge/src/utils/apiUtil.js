import axios from 'axios'

const BASE_URL = `http://localhost:9090`

export async function fetchApiDetails(url, headers) {
    try {
        // Await the Axios GET request
        const response = await axios.get(BASE_URL + url, { headers })

        // Extract data from the response
        const data = response.data
        return data
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error)
        throw error
    }
}
export async function fetchApiDetailsWithParams(url, headers, params) {
    try {
        // Await the Axios GET request
        const response = await axios.get(BASE_URL + url, { headers, params })

        // Extract data from the response
        const data = response.data
        return data
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error)
        throw error
    }
}

export async function sendApiDetails(url, headers, requestData) {
    console.log(`Sending API request to ${BASE_URL + url}`)
    console.log('Request body:', JSON.stringify(requestData))

    try {
        const response = await axios.post(BASE_URL + url, requestData, headers)

        if (response.status >= 200 && response.status < 300) {
            console.log('API response received successfully:', response.data)
            return response.data
        } else {
            throw new Error(`API request failed with status ${response.status}`)
        }
    } catch (error) {
        console.error('Error sending API data:', error)
        // Customize error handling as needed, e.g., return a specific error object
        throw error
    }
}
