export default function General({
  name,
  email,
  number,
  handleNameChange,
  handlemailChange,
  handleNumberChange,
}) {
  const styles = {
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "column",
    width: "30vw",
    border: "3px solid white",
    borderRadius: "15px",
    padding: "10px 15px",
  };

  return (
    <div style={styles}>
      Name : <input type="text" value={name} onChange={handleNameChange} />
      Email : <input type="email" value={email} onChange={handlemailChange} />
      Phone Number :{" "}
      <input type="number" value={number} onChange={handleNumberChange} />
    </div>
  );
}
