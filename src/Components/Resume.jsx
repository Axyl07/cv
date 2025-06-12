import '/home/aryan/repos/cv/src/Styles/Resume.css'

export default function Resume({ name, email, number, schoolName, titleOfStudy, dateOfStudy, companyName, positionTitle, responsibilities, from, to }) {
    


    return (
        <div className='resume' >
            <div>
            <h1>{name}</h1>
            <span>+91 {number} | {email}
            </span>
            </div>
            ------------------------------------------------------------------------------------------------------------------------
            <div>
                <h2>Education:</h2>
                <p>{schoolName}</p>
                <span>{titleOfStudy} {dateOfStudy} </span>
            </div>
            ------------------------------------------------------------------------------------------------------------------------
            <div>
                <h2>Work Experience</h2>
                {companyName}{positionTitle}{responsibilities}{from}{to }
            </div>



        </div>
    )
}