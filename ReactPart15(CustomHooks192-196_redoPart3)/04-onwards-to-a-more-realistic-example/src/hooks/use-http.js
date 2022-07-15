import React, { useState } from 'react'

function useHttp(requestConfig, applyData) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  

    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url, 
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                }

            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data)
            // we remove this so the component can pass in a function that will convert it the way the component needs 
            // const loadedTasks = [];

            // for (const taskKey in data) {
            //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
            // }

            // setTasks(loadedTasks);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };

    return { isLoading, error, sendRequest }
}

export default useHttp
