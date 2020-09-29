import React from 'react';
import * as Components from './components'
import useURLLoader from "./hooks/useURLLoader";

const {Hello, LinkButton} = Components

interface ShowResult {
    message: string,
    status: number
}

interface ThemeProps {
    [key: string]: { color: string, background: string }
}

 const themes: ThemeProps = {
    'light': {
        color: '#000',
        background: "#fff"
    },
    'dark': {
        color: "#fff",
        background: '#000'
    }
}

export const ThemeContext = React.createContext(themes.light)
const App: React.FC = () => {
    const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
    const dogResult = data as ShowResult
    return (
        <>
            <div className="App">
                <ThemeContext.Provider value={themes.light}>
                <header className="App-header">
                    <Hello msg='hello'/>
                    <LinkButton/>
                    {loading ? <p>读取中</p> : <img alt='dog' style={{width:'10px'}} src={dogResult?.message}/>}

                </header>
                </ThemeContext.Provider>
            </div>
        </>
    )
}
export default App;
