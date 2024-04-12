import { useDispatch } from 'react-redux';
import useIsDesktop from '../../hooks/useIsDesktop';
import './index.css';
import { addItem } from '../../store/orderSlice';

function Modal({ product, setActiveCardId }) {
    const { title, price, desc, imgUrl } = product;
    const isDesktop = useIsDesktop();
    const dispatch = useDispatch();

    function handleAddToCart() {
        dispatch(addItem(product));
        setActiveCardId(null)
    }


    return (
        <div className="modal__backdrop">
            <article className="modal">
                <button onClick={() => setActiveCardId(null)} className='modal__close'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM16 28C9.4 28 4 22.6 4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28Z" fill="#b2b2b2" />
                        <path d="M21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z" fill="#b2b2b2" />
                    </svg>
                </button>
                { isDesktop &&
                    <figure className='modal__figure'>
                        <img src={imgUrl} />
                    </figure>
                }
                <div className='modal__info'>
                    <div>
                        <h2>{title}</h2>
                        <p>{price}sek</p>
                        <p>{desc}</p>
                    </div>
                    <button className='button' onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </article>
        </div>
    );
}

export default Modal;