import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseApi = (Url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        let isMounted = true;

        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true)
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                })
                if (isMounted) {
                    setData(response.data)
                    setError(null)
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message)
                    setData([])
                }
            } finally {
                isMounted &&
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 2000)
            }
        }


        fetchData(Url)


        const cleanUp = () => {
            isMounted = false
            source.cancel()
        }

        return cleanUp

    }, [])

    return { data, isLoading, error }
}

export default UseApi