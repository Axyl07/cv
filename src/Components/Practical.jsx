export default function Practical({companyName,positionTitle,responsibilities,from,to,handleCompanyNameChange,handlepositionTitleChange,handleResponsibilitiesChange,handleFromDateChange,handleToDateChange }) {
    return (
        <div>
            Company Name: <input type="text" value={companyName} onChange={handleCompanyNameChange} />
            Position Title : <input type="text" value={positionTitle} onChange={handlepositionTitleChange} />
            Main Responsibilities  : <textarea name="responsibility" id="responsibility" value={responsibilities} onChange={handleResponsibilitiesChange} ></textarea>
            From : <input type="date" value={from} onChange={handleFromDateChange} />
            To : <input type="date" value={to} onChange={handleToDateChange} />
        </div>
    )
}