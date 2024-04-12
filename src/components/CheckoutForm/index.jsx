import { useState } from "react";
import './index.css';

function CheckoutForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        cardNumber: "",
        expiryDate: "",
        cvv: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form data submitted: ", formData);
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>

                <div className="form__group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form__group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>


                <div className="form__group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                </div>
                <div className="form__group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
                </div>
                <div className="form__group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
                </div>

                <div className="form__group form__group--btn">
                    <button type="submit" className="button">Place order</button>
                </div>
            </form>
        </div>
    );
}

export default CheckoutForm;
