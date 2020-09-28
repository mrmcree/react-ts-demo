import React, {useState, useEffect} from 'react'

const LinkButton: React.FC = () => {
    const [like, setLike] = useState(0)
    /* useEffect dom加载完执行 */
    useEffect(() => {
        document.title = `点击了${like}次`
    })
    return (
        <>
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
