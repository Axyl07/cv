import '/home/aryan/repos/cv/src/Styles/Resume.css'

export default function Resume({ name, email, number, schoolName, titleOfStudy, dateOfStudy, companyName, positionTitle, responsibilities, from, to }) {
    


    return (
        <div className='resume' >
            <div>
            <h1>{name}</h1>
            <span>+91 {number} | {email}
            </span>
            </div>
            ------------------------------------------------------------------------------------------------
            <div style={{ display: 'flex', flexDirection:'column' }} >
                <h2>Education:</h2>
                <h3>School Name : {schoolName}</h3>
                <span> Course : {titleOfStudy} <b>{dateOfStudy}(Graduation)</b> </span>
            </div>
            ------------------------------------------------------------------------------------------------
            <div>
                <h2>Work Experience</h2>
                <p>Company Name : {companyName}</p>
                <p>Title/Position : {positionTitle}</p>
                <p>Responsibiliies : {responsibilities}</p>
                <p>From : {from}</p>
                <p>To : {to}</p>
            </div>



        </div>
    )
}