import {  useState } from 'react';
import Form from './Components/Form'
import Resume from './Components/Resume'
import './index.css'
import Button from './Components/Button';
function App() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState();
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitle] = useState('');
    const [dateOfStudy, setDate] = useState();
    const [companyName, setCompanyName] = useState();
    const [positionTitle, setPositionTitle] = useState();
    const [responsibilities, setResponsibilities] = useState();
    const [from, setFrom] = useState();
  const [to, setTo] = useState();
  
  const [stateOfButton, setStateofButton] = useState('edit');

  function handleButton() {
    stateOfButton == 'submit' ? setStateofButton('edit') : setStateofButton('submit'); 
  }



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
    stateOfButton == 'edit' ? <div className='main'>
        <h1>CV</h1>
        <Form name={name} email={email} number={number} schoolName={schoolName} title={titleOfStudy} companyName={companyName} positionTitle={positionTitle} date={dateOfStudy} responsibilities={responsibilities} from={from} to={to} handleCompanyNameChange={handleCompanyNameChange} handleDateChange={handleDateChange} handleFromDateChange={handleFromDateChange} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleResponsibilitiesChange={handleResponsibilitiesChange} handlemailChange={handlemailChange} handleSchoolChange={handleSchoolChange} handlepositionTitleChange={handlepositionTitleChange} handletitleChange={handletitleChange} handleToDateChange={handleToDateChange} />
        
        
        
        
        
        
      <Resume name={name} email={email} number={number} schoolName={schoolName} titleOfStudy={titleOfStudy} companyName={companyName} positionTitle={positionTitle} dateOfStudy={dateOfStudy} responsibilities={responsibilities} from={from} to={to} />
        <Button state={stateOfButton} handleButton={handleButton} />   
    </div> : <div>
        <Resume name={name} email={email} number={number} schoolName={schoolName} titleOfStudy={titleOfStudy} companyName={companyName} positionTitle={positionTitle} dateOfStudy={dateOfStudy} responsibilities={responsibilities} from={from} to={to} />
        
        <Button state={stateOfButton} handleButton={handleButton} />
        </div> 

        
      
    
    
  
    
  )
}

export default App
