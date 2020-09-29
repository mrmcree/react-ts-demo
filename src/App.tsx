import React from 'react';
import * as Components from './components'
import useURLLoader from "./hooks/useURLLoader";

const {Hello, LinkButton} = Components

interface ShowResult {
    message: string,
    status: number
}

const App: React.FC = () => {
    const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
    const dogResult = data as ShowResult
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Hello msg='hello'/>
                    <LinkButton/>
                    {loading ? <p>读取中</p> : <img alt='dog' src={dogResult?.message}/>}

                </header>
            </div>
        </>
    )
}
export default App;
