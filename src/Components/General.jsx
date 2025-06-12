

export default function General(
    { name, email, number, handleNameChange, handlemailChange, handleNumberChange }
) {
  

    return (
        <div className="gen">
            Name : <input type="text" value={name} onChange={handleNameChange} />
            Email : <input type="email" value={email} onChange={handlemailChange} />
            Phone Number : <input type="number" value={number} onChange={handleNumberChange} />
        </div>
    )
}
