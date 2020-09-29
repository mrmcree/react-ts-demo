import React, {useState, useEffect, useRef, useContext} from 'react'
import {ThemeContext} from '../App'

const LinkButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const theme = useContext(ThemeContext)

    /* useEffect dom加载完执行 */
    useEffect(() => {
        document.title = `点击了${like}次`
        if (domRef && domRef.current)
            domRef?.current.focus()
    })
    const domRef = useRef<HTMLInputElement>(null)
    const handleSwitch=(()=>{
        console.log(ThemeContext)

    })
    return (
        <>
            <input ref={domRef}/>
            <button onClick={handleSwitch}>switch theme</button>
            <p  style={theme}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, impedit.</p>
            <button

                onClick={() => {
                    setLike(like + 1)
                }}>
                {like}
            </button>
        </>
    )
}
export default LinkButton
