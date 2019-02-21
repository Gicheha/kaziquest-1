import React from 'react'
import styled from 'styled-components'
import UseInputValue from '../resources/useinputvalue';
import { postJob } from '../../lib/addjobapi';
import Header from '../resources/header';

const AddJobWrapper = styled.div`
    height: 700px;
    background: white;
    margin: auto;
    width: 500px;
    padding: 10px;
    
`

const Title = styled.p`
    font-size: 1.5em;
    text-align: center;
    color: black;
`


const InputTitle = styled.p`
    font-size: 15px;
    color: black;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  max-width: 300px;
  border-radius: 3px;
  height: 30px;
`;

const TextArea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  max-width: 300px;
  border-radius: 3px;
`;

const JobForm = styled.div`
   display: grid;
   justify-content: center;
   grid-template-rows: 1fr auto; 
   grid-template-columns: 1fr 1fr;
   height: 400px;
`
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  background: white;
  :hover{
      cursor: pointer;
  }
`;

const HR = styled.hr`

`


const AddJob = React.memo(function AddJob() {
    const jobTitle = UseInputValue('')
    const jobDesc = UseInputValue('')
    const industry = UseInputValue('')
    const salary = UseInputValue('')
    const posted = UseInputValue('')
    const due = UseInputValue('')
    const location = UseInputValue('')
    const experience = UseInputValue('')
    const requirements = UseInputValue('')
    const responsibilities = UseInputValue('')

    function handleSubmit () {
        const formData = new FormData()

        formData.append('jobTitle', jobTitle.value)
        formData.append('jobDes', jobDesc.value)
        formData.append('industry', industry.value)
        formData.append('salary', salary.value)
        formData.append('due', due.value)
        formData.append('posted', posted.value)
        formData.append('location', location.value)
        formData.append('experience', experience.value)
        formData.append('requirements', requirements.value)
        formData.append('responsibilities', responsibilities.value)

        postJob(formData)

    }

    return (
        <div>
        {console.log('rerendering ..')}
        <Header />
        <AddJobWrapper>
            <Title> ADD A JOB </Title>

            <JobForm onSubmit={e => {
                e.preventDefault()
                handleSubmit()
            }}>
                <div>
                    <InputTitle> Title </InputTitle>
                    <Input {...jobTitle}/>
                    <InputTitle> Job Description </InputTitle>
                    <TextArea {...jobDesc} />
                    <InputTitle> Industry </InputTitle>
                    <Input {...industry} />
                    <InputTitle> Salary </InputTitle>
                    <Input {...salary} type="number"/>
                    <InputTitle> Date Due </InputTitle>
                    <Input {...due} type="date"/>
                </div>
                <div>
                    <InputTitle> Posted </InputTitle>
                    <Input {...posted} type="date"/>
                    <InputTitle> Location </InputTitle>
                    <Input {...location} />
                    <InputTitle> Experience </InputTitle>
                    <Input {...experience} />
                    <InputTitle> Requirements </InputTitle>
                    <TextArea {...requirements} />
                    <InputTitle> Responsibilities </InputTitle>
                    <TextArea {...responsibilities} />
                </div>      

                <Button>  ADD + </Button>
            </JobForm>
            
        
        </AddJobWrapper>
        </div>
        
    )
})

export default AddJob