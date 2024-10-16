import React, {useEffect, useState } from 'react'
import Select, { components } from "react-select"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Form() {

const options = [
{value: "+91", label :"+91"},
{value: "+44", label :"+44"},
{value: "+61", label :"+61"},
{value: "+81", label :"+81"}
]

const selectCompany = [
{value: "Apple Inc", label :"Apple Inc"},
{value: "Microsoft Corporation", label :"Microsoft Corporation"},
{value: "Alphabet Inc", label :"Alphabet Inc"},
{value: "Amazon Web Services", label :"Amazon Web Services"}
]

const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      top: '30px',
      position: 'absolute',
      fontSize: "14px",
      fontFamily: 'Lato',
    }),
    control: (base) => ({
        ...base,
        fontSize: "14px",
        boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.06)',
        border: '1px solid #E2E3E9'

      }),
    
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: state.isFocused ? '#000' : '#666',  // Change the color of the icon
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,  // Rotate the icon when menu is open
        svg: {
            height: '12px',  // Change size of the dropdown arrow (SVG icon)
            width: '12px',
            fill: state.isFocused ? '#000' : '#666'
          }
      })
  };


const isSticky = (e) => {    
    const header = document.querySelector('.contentHeadHolder');
    const findOfset = document.querySelector('.findOfset').offsetTop-72;
    const scrollTop = window.scrollY;
     scrollTop >= findOfset ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
};


useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
    window.removeEventListener('scroll', isSticky);
    };    
});

const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);


return (
<>

<div className=" box mb-3">

    <div className="pageHead ">        
            <h1 className='mb-0'>Add User</h1>
            <span>Fill up the user details</span>        
        <div className="back_button">Back</div>
    </div>


    <div className="steps_pannel">

        <div className="step-txt stepActive">
            <div className="steps-flow">01</div>
            <div className="step_info">
                <div className="add-user-details">Add User Details</div>
                <span>Step 01</span>
            </div>
        </div>

        <div className="steps-line"></div>
        <div className="step-txt">
            <div className="steps-flow">02</div>
            <div className="step_info">
                <div className="add-user-details">View/Edit User Details</div>
                <span>Step 02</span>
            </div>
        </div>
        <div className="steps-line"></div>

        <div className="step-txt">
            <div className="steps-flow">03</div>
            <div className="step_info">
                <div className="add-user-details">Access Permission</div>
                <span>Step 03</span>
            </div>
        </div>
    </div> {/* steps_pannel */}

    </div>


    <div className="box findOfset" >


        <div class="contentHeadHolder">
            <div className='d-flex flex-column'>
                <h2 className='mb-0'>User Details </h2>
                <span class="requiredMsg">Indicates a required field <b>*</b></span>
            </div>
            <div className='d-flex'>
                <input type="button" className="btn btn-primary me-2" value="Save" />
                <input type="button" className="btn btn-outline-primary" value="Cancel" />
            </div>
        </div>

        <div className="formHolder">
            <div>
                <aside><label>First Name <b>*</b></label><input type="text" name="" id="" /></aside>
                <aside><label>Last Name <b>*</b></label><input type="text" name="" id="" /></aside>
            </div>
            <div>
                <aside><label>Email Address <b>*</b></label><input type="Email" name="" id="" /></aside>
                <aside><label>Contact No <b>*</b></label>
                    <div class="phone-input-container">
                        <Select options={options} defaultValue={{ label: "+91", value: 0 }} styles={customStyles}   />
                        <input type="tel" id="phone" placeholder="Enter phone number" pattern="[0-9]{10}" />
                    </div>
                </aside>
            </div>

            <div>
                <aside className='flexNone'><label>Job Function</label><input type="text" name="" id="" /></aside>
            </div>
            <div>
                <aside>
                    <label className="checkbox checkboxWithBigInfo"><input type="checkbox" name="" value=""
                            id="selectAll" /><span>Provide Access to user for specific period</span>User access will be
                        deactivated after defined access period</label>
                </aside>
            </div>
            <div>
                <aside className='dateHolder flexNone'>
                    <div><label>From</label>
                    <DatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)} 
                    showIcon={true} 
                    icon={"calenderIcon"}
                    className="custom_date_input"
                    calendarClassName="custom_calendar"
                    placeholderText="dd-mm-yyyy"
                    dateFormat="dd-MM-yyyy" 
                    />
                    </div>
                    <div><label>To</label>
                    <DatePicker 
                    selected={endDate}  
                    onChange={(date) => setEndDate(date)} 
                    showIcon={true} 
                    icon={"calenderIcon"}
                    className="custom_date_input"
                    calendarClassName="custom_calendar"
                    placeholderText="dd-mm-yyyy"
                    dateFormat="dd-MM-yyyy" 
                    /></div>
                </aside>

            </div>

        </div>

        <div class="contentHeadHolderB pt-0">
            <div className='d-flex flex-column'>
                <h2 className='mb-0'>User Company Details</h2>
                <span class="requiredMsg">Is it Internal User or External (Business Partner) User? <b>*</b></span>
            </div>
        </div>

        <div className="formHolder pt-0">
            <div>
                <aside><label class="radioBtn_big"><input type="radio" name="paymentType" value="netBanking"
                            id="" /><span></span>Internal</label>
                    <label class="radioBtn_big"><input type="radio" name="paymentType" value="netBanking"
                            id="" /><span></span>External</label></aside>
            </div>
            <div>
                <aside><label>Internal Company Name <b>*</b></label><Select options={selectCompany}  styles={customStyles} /></aside>
                <aside></aside>
            </div>
        </div>

        <div class="contentHeadHolderB pt-0">
            <div className='d-flex flex-column'>
                <h2 className='mb-0'>Address Details</h2>
            </div>
        </div>

        <div className="formHolder pt-0">
            <div>
                <aside><label>Address Line 1 <b>*</b></label><input type="text" name="" id="" /></aside>
            </div>
            <div>
                <aside><label>Address Line 2 <b>*</b></label><input type="text" name="" id="" /></aside>
            </div>
            <div>
                <aside><label>City <b>*</b></label><input type="text" name="" id="" /></aside>
                <aside><label>Zip Code <b>*</b></label><input type="text" name="" id="" /></aside>
            </div>
            <div>
                <aside><label>Country <b>*</b></label><input type="text" name="" id="" /></aside>
                <aside><label>State <b>*</b></label><input type="text" name="" id="" /></aside>
            </div>
        </div>



    </div>


</>
)
}

export default Form