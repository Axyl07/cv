export default function Education({ school, title, date, handleSchoolChange, handletitleChange, handleDateChange }) {
    
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
        <div style={styles} >
            School Name: <input type="text" value={school} onChange={handleSchoolChange} />
            Title of Study : <input type="text" value={title} onChange={handletitleChange}/>
            Date of Study : <input type="date" value={date} onChange={handleDateChange}/>
        </div>
    )
}