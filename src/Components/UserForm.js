import React, { Component } from 'react'
import { Confirm } from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails'

export class UserForm extends Component {
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        city:'',
        bio:''
    }

    //proceed to the next step
    nextStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step+1
        })
    }

    //Go back to previous step

    prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step-1
        })
    }

    //handle fields change
    handleChange=input=>e=>{
        this.setState({[input]:e.target.value});

    }
    render() {
        const {step}=this.state;
        const { firstName,lastName,email,occupation,city,bio}=this.state;
        const values={firstName,lastName,email,occupation,city,bio}

        switch(step){
            case 1:
                return(
                    <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values} />
                )

             case 2:
                return(
                    <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values} />
                );

             case 3:
                 return (
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values} />
                );
             case 3:
                 return <h1>Success</h1>      
        }
        return (
            <div>
            </div>
        )
    }
}

export default UserForm