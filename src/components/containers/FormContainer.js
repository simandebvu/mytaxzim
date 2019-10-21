import React, { Component } from 'react'

/* Import Form Items */
import Input from '../formitems/input';
// import Select from '../formitems/Select';
import CheckBox from '../formitems/CheckBox';
import Button from '../formitems/Button';
import { cloneNode } from '@babel/types';

export class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Tax Checker',
            earnings: '',
            taxCredits: ['Elderly', 'Blind', 'Disabled'],
            empt: [],
            numberError: "",
            nameError: '',

        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleCreditsCheckBox = this.handleCreditsCheckBox.bind(this);
    }

    validate = () => {
        // let numberError = "";
        // if (!this.state.Earnings.includes('@')) {
        //     numberError = "Enter a valid input.";
        // }
        // if (numberError) {
        //     this.setState(numberError);
        //     return false;
        // }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        //let userData = this.state.newUser;
        const { earnings } = this.state
        alert(`Your state values: \n 
            earnings: ${earnings} \n `)
        // const { name, value } = e.target;
        // let errors = this.state.errors;

        // switch (name) {
        //     case 'Earnings':
        //         console.log(name);

        //         break;
        // }

        // this.setState({ errors, [name]: value }, () => {
        //     console.log(errors);
        // });



        // const isValid = this.validate();
        // if (isValid) {
        //     alert("Submitted")
        // }
        // fetch('http://example.com', {
        //     method: "POST",
        //     body: JSON.stringify(userData),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // }).then(response => {
        //     response.json().then(data => {
        //         console.log("Successful" + data);
        //     })
        // })
    }

    handleClearForm() {

    }

    handleEarningsChange = event => {
        this.setState({ earnings: event.target.value });
        console.log(event.target.value)
        this.validateNumber();
    };

    validateNumber = () => {
        const { earnings } = this.state;
        this.setState({
            nameError:
                earnings.length > 3 ? null : 'Name must be longer than 3 characters'
        });
    }

    handleCreditsCheckBox(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.empt.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.empt.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.empt, newSelection];
        }

        this.setState(prevState => ({
            taxCredits:
                { ...prevState.empt, credits: newSelectionArray }
        })
        )
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <div onChange={this.handleEarningsChange.bind(this)}>
                        < Input
                            inputType={"number"}
                            title={"Earnings"}

                            name={"Earnings"}
                            placeholder={"0.00"}
                        />
                    </div>

                    < Input
                        inputType={"decimal"}
                        title={"Irregular Earnings"}
                        name={"Irregular Earnings"}
                        placeholder={"0.00"} />
                    <div style={{ fontSize: '12', color: 'red' }}>
                        {this.state.numberError}
                    </div>

                    < Input
                        inputType={"decimal"}
                        title={"Bonus"}
                        name={"Bonus"}
                        placeholder={"0.00"} />
                    <div style={{ fontSize: '12', color: 'red' }}>
                        {this.state.numberError}
                    </div>
                    {/* < Select
                        title={"Tax Credits"}
                        name={"Are you ?"}
                        value={this.state.taxCredits}
                        options={this.state.taxCredits}
                        placeholder={'Select Credits'}
                        handleChange={this.handleInput}
                    /> */}
                    {/* < CheckBox
                        title={'Tax Credits'}
                        name={'credits'}
                        options={this.state.taxCredits}
                        selectedOptions={this.state.taxCredits}
                        handleChange={this.handleCreditsCheckBox}
                    /> */}
                    < Input
                        inputType={"decimal"}
                        title={"Pension"}
                        name={"Pension"}
                        placeholder={"0.00"} />
                    <div style={{ fontSize: '12', color: 'red' }}>
                        {this.state.numberError}
                    </div>
                    < Input
                        inputType={"decimal"}
                        title={"Medical"}
                        name={"Medical"}
                        placeholder={"0.00"} />
                    <div style={{ fontSize: '12', color: 'red' }}>
                        {this.state.numberError}
                    </div>
                    < Input
                        inputType={"decimal"}
                        title={"Tax Deductibles"}
                        name={"Tax Deductibles"}
                        placeholder={"0.00"} />
                    <div style={{ fontSize: '12', color: 'red' }}>
                        {this.state.numberError}
                    </div>
                    < Button
                        id={"submitBtn"}
                        action={this.handleFormSubmit}
                        title={'Calculate'}
                        type={'primary'}
                        style={buttonStyle} />

                </form>
            </div>
        )
    }
}
const buttonStyle = {
    margin: '10px 10px 10px 10px'
}
export default FormContainer;
