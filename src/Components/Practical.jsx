export default function Practical({ companyName, positionTitle, responsibilities, from, to, handleCompanyNameChange, handlepositionTitleChange, handleResponsibilitiesChange, handleFromDateChange, handleToDateChange }) {
    
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
            Company Name: <input type="text" value={companyName} onChange={handleCompanyNameChange} />
            Position Title : <input type="text" value={positionTitle} onChange={handlepositionTitleChange} />
            Main Responsibilities  : <textarea name="responsibility" id="responsibility" value={responsibilities} onChange={handleResponsibilitiesChange} ></textarea>
            From : <input type="date" value={from} onChange={handleFromDateChange} />
            To : <input type="date" value={to} onChange={handleToDateChange} />
        </div>
    )
}