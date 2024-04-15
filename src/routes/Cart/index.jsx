import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import CheckoutForm from '../../components/CheckoutForm';
import { Link } from 'react-router-dom';
import { addItem, removeItem, resetOrder } from '../../store/orderSlice';
import { useState } from 'react';
import Loader from '../../components/Loader';

function Cart() {
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    function calcTotalPrice(orderToCalc) {
        let totalPrice = 0;
        orderToCalc.forEach(item => {
            totalPrice += item.price * item.qty;
        });
        return totalPrice;
    }

    function changeQty(edit, item) {
        if (edit === 'incr') {
            dispatch(addItem(item));
        }
        if (edit === 'decr') {
            dispatch(removeItem(item));
        }
    }

    function mockupApiCallForPlacingOrder() {
        window.scrollTo(0,0);
        setIsLoading(true);
    
        // Simulate an asynchronous operation (fetching data from an API)
        setTimeout(() => {
            // After 2 seconds, update the state to reflect that the order has been submitted
            setIsSubmitted(true);
            setIsLoading(false); 
            dispatch(resetOrder());
        }, 2000);
    }
    

    const showCart = !isLoading && !isSubmitted;
    const showConfirmation = !isLoading && isSubmitted;

    return (
        <div className="cart">
            <h1>Cart</h1>
            {
                !showCart && !showConfirmation && <Loader />
            }
            {
                showCart &&

                <div className="cart__flex">
                    <section className="cart__flex-col cart__items">
                        <h2>Your Items</h2>
                        {order && order.length > 0 ? (
                            <>
                                <ul className='cart__list'>
                                    {order.map((item, index) => (
                                        <li key={index}>
                                            <div>
                                                <span className='cart_item-title'>{item.title}</span>
                                                <span>{item.size}</span>
                                            </div>
                                            <div className='cart__item-qty'>
                                                <button className='cart__btn--incr' onClick={() => changeQty('decr', item)}>
                                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M34.125 5.25H7.875C7.17881 5.25 6.51113 5.52656 6.01884 6.01884C5.52656 6.51113 5.25 7.17881 5.25 7.875V34.125C5.25 34.8212 5.52656 35.4889 6.01884 35.9812C6.51113 36.4734 7.17881 36.75 7.875 36.75H34.125C34.8212 36.75 35.4889 36.4734 35.9812 35.9812C36.4734 35.4889 36.75 34.8212 36.75 34.125V7.875C36.75 7.17881 36.4734 6.51113 35.9812 6.01884C35.4889 5.52656 34.8212 5.25 34.125 5.25ZM30.1875 22.3125H11.8125C11.4644 22.3125 11.1306 22.1742 10.8844 21.9281C10.6383 21.6819 10.5 21.3481 10.5 21C10.5 20.6519 10.6383 20.3181 10.8844 20.0719C11.1306 19.8258 11.4644 19.6875 11.8125 19.6875H30.1875C30.5356 19.6875 30.8694 19.8258 31.1156 20.0719C31.3617 20.3181 31.5 20.6519 31.5 21C31.5 21.3481 31.3617 21.6819 31.1156 21.9281C30.8694 22.1742 30.5356 22.3125 30.1875 22.3125Z" fill="white" />
                                                    </svg>
                                                </button>
                                                <span>{item.qty}</span>
                                                <button className="cart__btn--decr" onClick={() => changeQty('incr', item)}>
                                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M34.125 5.25H7.875C7.17881 5.25 6.51113 5.52656 6.01884 6.01884C5.52656 6.51113 5.25 7.17881 5.25 7.875V34.125C5.25 34.8212 5.52656 35.4889 6.01884 35.9812C6.51113 36.4734 7.17881 36.75 7.875 36.75H34.125C34.8212 36.75 35.4889 36.4734 35.9812 35.9812C36.4734 35.4889 36.75 34.8212 36.75 34.125V7.875C36.75 7.17881 36.4734 6.51113 35.9812 6.01884C35.4889 5.52656 34.8212 5.25 34.125 5.25ZM30.1875 22.3125H22.3125V30.1875C22.3125 30.5356 22.1742 30.8694 21.9281 31.1156C21.6819 31.3617 21.3481 31.5 21 31.5C20.6519 31.5 20.3181 31.3617 20.0719 31.1156C19.8258 30.8694 19.6875 30.5356 19.6875 30.1875V22.3125H11.8125C11.4644 22.3125 11.1306 22.1742 10.8844 21.9281C10.6383 21.6819 10.5 21.3481 10.5 21C10.5 20.6519 10.6383 20.3181 10.8844 20.0719C11.1306 19.8258 11.4644 19.6875 11.8125 19.6875H19.6875V11.8125C19.6875 11.4644 19.8258 11.1306 20.0719 10.8844C20.3181 10.6383 20.6519 10.5 21 10.5C21.3481 10.5 21.6819 10.6383 21.9281 10.8844C22.1742 11.1306 22.3125 11.4644 22.3125 11.8125V19.6875H30.1875C30.5356 19.6875 30.8694 19.8258 31.1156 20.0719C31.3617 20.3181 31.5 20.6519 31.5 21C31.5 21.3481 31.3617 21.6819 31.1156 21.9281C30.8694 22.1742 30.5356 22.3125 30.1875 22.3125Z" fill="white" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <span>{item.price}sek</span>
                                        </li>
                                    ))}
                                </ul>
                                <section className='cart__total'>
                                    <h3>Total price</h3>
                                    <p>{calcTotalPrice(order)}sek</p>
                                </section>
                            </>
                        ) : (
                            <>
                                <p className='cart__p--empty'>Your cart is empty.</p>
                                <Link to={'/shop'} className='button'>Start shopping</Link>
                            </>
                        )}
                    </section>
                    {
                        order && order.length > 0 &&
                        <section className="cart__flex-col cart__details">
                            <h2>Your Details</h2>
                            <CheckoutForm onSubmit={mockupApiCallForPlacingOrder} />
                        </section>
                    }
                </div>

            }
            {
                showConfirmation &&
                <div className='cart__flex cart__confirm'>
                    <h2>Confirmed!</h2>
                    <section className='cart__flex-col'>
                        <p>Your order is on it's way!</p>
                    </section>
                    <Link className='button' to={'/'}>Go to home page</Link>
                </div>
            }
        </div>
    );
}

export default Cart;
