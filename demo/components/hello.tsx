import React from 'react'

interface HelloProps{
    msg?:string|number;
}
const Hello:React.FC<HelloProps> = (props) => {
    return <h2>{props.msg}</h2>
}
Hello.defaultProps={
    msg:'hello'
}
export default Hello

