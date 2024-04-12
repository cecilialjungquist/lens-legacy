import { useSelector } from 'react-redux';
import './index.css';
import CheckoutForm from '../../components/CheckoutForm';
import { Link } from 'react-router-dom';

function Cart() {
    const order = useSelector(state => state.order);
    console.log(order);

    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="cart__flex">
                <section className="cart__flex-col cart__items">
                    <h2>Your Items</h2>
                    <ul>
                        {
                            order && order.length > 0 ? order.map(item => {
                                return (
                                    <li key={item.id}><span>{item.title}</span> <span>{item.price}sek</span></li>
                                );
                            }) : (
                                <>
                                    <p className='cart__p--empty'>Your cart is empty.</p>
                                    <Link to={'/shop'} className='button'>Start shopping</Link>
                                </>
                            )
                        }
                    </ul>
                </section>
                {
                    order && order.length > 0 &&
                    <section className="cart__flex-col cart__details">
                        <h2>Your Details</h2>
                            <CheckoutForm  />
                    </section>
                }
            </div>
        </div>
    );
}

export default Cart;