import React from 'react';
import * as Components from './components'
const {Hello, LinkButton} = Components

const App: React.FC = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Hello msg='hello'/>
                    <LinkButton/>
                </header>
            </div>
        </>
    )
}
export default App;
