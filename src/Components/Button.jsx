export default function Button({ state,handleButton }) {
    return (
        state == 'edit' ? <button type="button" onClick={handleButton} >Submit</button> : <button type="button" onClick={handleButton} >Edit</button> 
    )
}