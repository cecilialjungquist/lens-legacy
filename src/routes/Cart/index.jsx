import { useSelector } from 'react-redux';
import './index.css';
import CheckoutForm from '../../components/CheckoutForm';
import { Link } from 'react-router-dom';

function Cart() {
    const order = useSelector(state => state.order);


    function calcTotalPrice(orderToCalc) {
        let totalPrice = 0;
        orderToCalc.forEach(item => {
            totalPrice += item.price * item.qty;
        });
        return totalPrice;
    }


    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="cart__flex">
                <section className="cart__flex-col cart__items">
                    <h2>Your Items</h2>
                    {order && order.length > 0 ? (
                        <>
                            <ul className='cart__list'>
                                {order.map(item => (
                                    <li key={item.id}>
                                        <span>{item.title}</span>
                                        <span>{item.qty}</span>
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
                        <CheckoutForm />
                    </section>
                }
            </div>
        </div>
    );
}

export default Cart;
