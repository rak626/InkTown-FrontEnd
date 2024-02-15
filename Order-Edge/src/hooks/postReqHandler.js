export async function postReqHandler(url, reqBody) {
    try {
        const response = await fetch(url, {
            // mode: 'no-cors',
            method: 'POST',
            headers: {      
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        })

        if (response.ok) {
            // Handle success
            console.log('Form data submitted successfully')
            const resBody = await response.json()
            console.log(resBody);
            return resBody
        } else {
            // Handle error
            console.error('Error submitting form data')
        }
    } catch (error) {
        // Handle network error
        console.error('Network error:', error)
    }
}
