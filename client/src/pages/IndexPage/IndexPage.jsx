import axios from 'axios'
import { useEffect, useState } from 'react'

const IndexPage = () => {

    let API_URL = `${process.env.REACT_APP_SERVER_URL}/popular/movies`
    const [data, setData] = useState()

    useEffect( () => {
        const axiosCall = async () => {
            const dataFromAxios = await axios.get(API_URL)
            setData(dataFromAxios.data.popularMovies)
        }
        axiosCall()
    }, [])

    console.log(data)
    return (
        data.map((movie) => {
            return <p>{movie.title}</p>
        })
    )
}

export default IndexPage