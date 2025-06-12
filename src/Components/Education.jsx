export default function Education({school,title,date,handleSchoolChange,handletitleChange,handleDateChange }) {
    return (
        <div>
            School Name: <input type="text" value={school} onChange={handleSchoolChange} />
            Title of Study : <input type="text" value={title} onChange={handletitleChange}/>
            Date of Study : <input type="date" value={date} onChange={handleDateChange}/>
        </div>
    )
}