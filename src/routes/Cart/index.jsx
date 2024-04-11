import { useSelector } from 'react-redux';
import './index.css';

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
                            order && order.map(item => {
                                return (
                                    <li key={item.id}><span>{item.title}</span> <span>{item.price}sek</span></li>
                                );
                            })
                        }
                    </ul>
                </section>
                <section className="cart__flex-col cart__details">
                    <h2>Your Details</h2>
                </section>
            </div>
        </div>
    );
}

export default Cart;