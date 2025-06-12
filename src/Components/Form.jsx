
import General from "./General";
import Education from "./Education";
import Practical from "./Practical";
import '/home/aryan/repos/cv/src/Styles/Form.css';

export default function Form({name,email,number,schoolName,titleOfStudy,dateOfStudy,companyName,positionTitle,responsibilities,from,to,handleNameChange, handlemailChange, handleNumberChange,handleSchoolChange,handletitleChange,handleDateChange,handleCompanyNameChange,handlepositionTitleChange,handleResponsibilitiesChange,handleFromDateChange,handleToDateChange }) {
    

    return (
        <div className="form">
            
            <General name={name} email={email} number={number} handleNameChange={handleNameChange} handlemailChange={handlemailChange} handleNumberChange={handleNumberChange} />
            <Education school={schoolName} title={titleOfStudy} date={dateOfStudy} handleDateChange={handleDateChange} handletitleChange={handletitleChange} handleSchoolChange={handleSchoolChange} />
            <Practical companyName={companyName} positionTitle={positionTitle} responsibilities={responsibilities} from={from} to={to} handleCompanyNameChange={handleCompanyNameChange} handlepositionTitleChange={handlepositionTitleChange} handleResponsibilitiesChange={handleResponsibilitiesChange} handleFromDateChange={handleFromDateChange} handleToDateChange={handleToDateChange} />
        </div>
    )



}