import { useState } from "react";
import General from "./General";
import Education from "./Education";
import Practical from "./Practical";


export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState();
    const [schoolName, setSchoolName] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState();
    const [companyName, setCompanyName] = useState();
    const [positionTitle, setPositionTitle] = useState();
    const [responsibilities, setResponsibilities] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
 
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handlemailChange(e) {
        setEmail(e.target.value);
    }
    function handleNumberChange(e) {
        setNumber(e.target.value);
    }
    function handleSchoolChange(e) {
        setSchoolName(e.target.value);
    }
    function handletitleChange(e) {
        setTitle(e.target.value);
    }
    function handleDateChange(e) {
        setDate(e.target.value);
    }
    function handleCompanyNameChange(e) {
        setCompanyName(e.target.value);
    }
    function handlepositionTitleChange(e) {
        setPositionTitle(e.target.value);
    }
    function handleResponsibilitiesChange(e) {
        setResponsibilities(e.target.value);
    }
    function handleFromDateChange(e) {
        setFrom(e.target.value);
    }
    function handleToDateChange(e) {
        setTo(e.target.value);
    }

    return (
        <div>
            
            <General name={name} email={email} number={number} handleNameChange={handleNameChange} handlemailChange={handlemailChange} handleNumberChange={handleNumberChange} />
            <Education school={schoolName} title={title} date={date} handleDateChange={handleDateChange} handletitleChange={handletitleChange} handleSchoolChange={handleSchoolChange} />
            <Practical companyName={companyName} positionTitle={positionTitle} responsibilities={responsibilities} from={from} to={to} handleCompanyNameChange={handleCompanyNameChange} handlepositionTitleChange={handlepositionTitleChange} handleResponsibilitiesChange={handleResponsibilitiesChange} handleFromDateChange={handleFromDateChange} handleToDateChange={handleToDateChange} />
        </div>
    )



}