import './index.css';

function Modal({ info, setModal }) {
    const { title, price, desc, imgUrl } = info;
    return (
        <div className="modal__backdrop">
            <article className="modal">
                <figure>
                    this is the image
                </figure>
                <div>
                    <div>
                        <h2>{title}</h2>
                        <p>{price}sek</p>
                        <p>{desc}</p>
                    </div>
                    <button>
                        Buy
                    </button>
                </div>
                <button onClick={() => setModal(null)}>close modal</button>
            </article>
        </div>
    );
}

export default Modal;