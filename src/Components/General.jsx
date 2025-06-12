

export default function General(
    { name, email, number, handleNameChange, handlemailChange, handleNumberChange }
) {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [number, setNumber] = useState();

    // function handleNameChange(e) {
    //     setName(e.target.value);
    // }
    // function handlemailChange(e) {
    //     setEmail(e.target.value);
    // }
    // function handleNumberChange(e) {
    //     setNumber(e.target.value);
    // }

    // const genObj = {
    //     name: name,
    //     email: email,
    //     number: number,
    // };


    return (
        <div className="gen">
            Name : <input type="text" value={name} onChange={handleNameChange} />
            Email : <input type="email" value={email} onChange={handlemailChange} />
            Phone Number : <input type="number" value={number} onChange={handleNumberChange} />
        </div>
    )
}
