import { createContext, useEffect, useState } from 'react'

const Context = createContext<any>(null)

export default Context

export function ContextProvider(props: any) {

    const [data, setData] = useState({
        token: null,
        access_level: null
    })

    useEffect(() => {
        (async () => {
            let lastData: any = JSON.parse(await localStorage.getItem('@user_data') || '')
            setData(lastData || data)
        })()
    }, [])

    useEffect(() => {
        localStorage.setItem('@user_data', JSON.stringify(data))
    }, [data])

    return(
        <Context.Provider value={{ data, setData }}>
            {props.children}
        </Context.Provider>
    );

}
