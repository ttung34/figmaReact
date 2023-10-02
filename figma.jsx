import React from 'react';
import Img from "./imag/Happy Bunch Avatar.png"

function Figma () {
    return (
        <div className='container'>
            <div className="container-singup">

                <div className="container-singup-header">
                    <div className="container-singup-header-logo">
                        <img src={Img} />
                    </div>

                    <div className="container-singup-header-info">
                        <h3>Payment info</h3>
                    </div>
        
                </div>

                <div className="container-singup-inputFullname">
                    <p>Full Name</p>
                        <input type="text" name="fullName" id="fullName" placeholder='Alex Smith' />
                </div>

                <div className="container-singup-inputCredit">
                    <p>Credit Card Number</p>
                    <input type="number" name="credit" id="credit" placeholder='1234 1234 1234 1234'  />
                    <i class="fa-regular fa-credit-card"></i>
                </div>



                <div className="container-singup-inputDateCVV">

                    <div className="container-singup-inputDate">

                        <p>Exp Date</p>
                            <input type="text" name="date" id="date" placeholder='MM/YY' />

                    </div>

                    <div className="container-singup-inputCVV">

                        <p>CVV</p>
                            <input type="number" name="cvv" id="cvv" placeholder='...' />
                            <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>


                </div>


                <div className="container-singup-inputCode">
                    <p>Zip Code</p>
                        <input type="number" name="number" id="number" placeholder='90210'/>
                </div>



                <div className="container-singup-confirm">
                    <button>Confirm Payment</button>
                    <p>You verify that this info is correct</p>
                </div>

            </div>
        </div>
    )
}

export default Figma