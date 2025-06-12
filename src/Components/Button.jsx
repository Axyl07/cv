import '/src/Styles/Button.css';


export default function Button({ state, handleButton }) {
    return (
        state == 'edit' ? <button className='btn' type="button" onClick={handleButton} >Submit</button> : <button type="button" className='btn' onClick={handleButton} >Edit</button> 
    )
}