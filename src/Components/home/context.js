import React, { useContext, useEffect, useState } from "react"

const API_URL = `https://api.tvmaze.com/search/shows?q=all`

const AppContext = React.createContext()

const AppProvider = ({children}) =>{

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])

    const getMovies= async(url) =>{
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setMovie(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getMovies(API_URL)
    }, [])
    
    return <AppContext.Provider value={{movie}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}







