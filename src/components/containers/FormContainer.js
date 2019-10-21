import React, { Component } from 'react'

/* Import Form Items */
import Input from '../formitems/input';
// import Select from '../formitems/Select';
//import CheckBox from '../formitems/CheckBox';
import Button from '../formitems/Button';
//import { cloneNode } from '@babel/types';

export class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Tax Checker',
            earnings: '',
            irregularEarnings: '',
            bonus: '',
            pension: '',
            medical: '',
            taxDeductions: '',
            taxCredits: ['Elderly', 'Blind', 'Disabled'],
            empt: [],
            numberError: "",
            nameError: '',
            taxTables: [
                [0, 700, 0, 0],
                [700, 3000, 20, 140],
                [3000, 10000, 25, 290],
                [10000, 20000, 30, 790],
                [20000, 30000, 35, 1790],
                [30000, 999999999, 40, 3290]
            ],
            netTaxAmount: ''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleIrregularEarnings = this.handleIrregularEarnings.bind(this);
    }

    validate = () => {

    }

    handleFormSubmit(e) {
        e.preventDefault();
        //let userData = this.state.newUser;
        const { earnings, irregularEarnings, bonus, pension, medical, taxDeductions } = this.state
        let totalEarnings = Number(earnings) + Number(irregularEarnings);
        let bonusPimped = Number(bonus) - 1000;
        let totalBonus = bonusPimped > 0 ? bonusPimped : 0;
        let totalDeductibles = Number(pension) + Number(taxDeductions);

        let taxableIncome = totalEarnings + totalBonus - totalDeductibles;

        for (var i = 0; i < this.state.taxTables.length; i++) {
            //console.log(this.state.taxTables[i]);
            //Medical Aid?
            let item = this.state.taxTables[i];
            for (var j = 0; j < item.length; j++) {
                if (taxableIncome > item[0] && taxableIncome < item[1]) {
                    let grossTax = (taxableIncome * (Number(item[2]) / 100)) - item[3];
                    let netTax = grossTax - (medical / 2);
                    this.setState({ netTaxAmount: netTax.toFixed(2) });
                    var a = netTax.toFixed(2);
                }
                //console.log(item[0] + " --- " + item[1]);
            }
        }

        alert(`Result: \n 
        Total Tax: ${a} `);

    }

    handleClearForm() {

    }



    validateNumber = () => {
        const { earnings } = this.state;
        this.setState({
            nameError:
                earnings.length > 3 ? null : 'Name must be longer than 3 characters'
        });
    }

    /* 
    Form Component handling methods
    */

    handleEarningsChange = event => {
        this.setState({ earnings: event.target.value });
        this.validateNumber();
    };

    handleIrregularEarnings = event => {
        this.setState({ irregularEarnings: event.target.value });
        this.validateNumber();
    };

    handleBonus = event => {
        this.setState({ bonus: event.target.value });
        this.validateNumber();
    };

    handlePension = event => {
        this.setState({ pension: event.target.value });
        this.validateNumber();
    };

    handleMedical = event => {
        this.setState({ medical: event.target.value });
        this.validateNumber();
    };

    handleDeductibles = event => {
        this.setState({ taxDeductions: event.target.value });
        this.validateNumber();
    };


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
                    <div onChange={this.handleIrregularEarnings.bind(this)}>
                        < Input
                            inputType={"decimal"}
                            onChange={this.handleIrregularEarnings}
                            title={"Irregular Earnings"}
                            name={"Irregular Earnings"}
                            placeholder={"0.00"} />
                    </div>

                    <div onChange={this.handleBonus.bind(this)}>
                        < Input
                            inputType={"decimal"}
                            title={"Bonus"}
                            name={"Bonus"}
                            placeholder={"0.00"} />
                    </div>

                    <div onChange={this.handlePension.bind(this)}>
                        < Input
                            inputType={"decimal"}
                            title={"Pension"}
                            name={"Pension"}
                            placeholder={"0.00"} />
                    </div>

                    <div onChange={this.handleMedical.bind(this)}>
                        < Input
                            inputType={"decimal"}
                            title={"Medical"}
                            name={"Medical"}
                            placeholder={"0.00"} />
                    </div>

                    <div onChange={this.handleDeductibles.bind(this)}>
                        < Input
                            inputType={"decimal"}
                            title={"Tax Deductibles"}
                            name={"Tax Deductibles"}
                            placeholder={"0.00"} />
                    </div>

                    < Button
                        id={"submitBtn"}
                        action={this.handleFormSubmit}
                        title={'Calculate !'}
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
// let numberError = "";
// if (!this.state.Earnings.includes('@')) {
//     numberError = "Enter a valid input.";
// }
// if (numberError) {
//     this.setState(numberError);
//     return false;
// }