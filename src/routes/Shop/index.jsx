import { useState } from 'react';
import './index.css';
import Modal from '../../components/Modal';

function Shop() {
    const [modal, setModal] = useState(null);
    const dummyData = [
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image Two",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image Two",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image Three",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        {
            title: "Image One",
            price: 129,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg"
        },
        
    ]

    const cards = dummyData.map((card, index)=> {
        return (
            <article key={index} className="card" onClick={() => setModal(card)}>
                <figure>
                    <img src={card.imgUrl} alt="" />
                </figure>
                <div>
                    <h2>{card.title}</h2>
                    <p>{card.price}sek</p>
                </div>
            </article>
        );
    })

    return (
        <section className="shop">
            <h1>Shop</h1>
            <section className="shop__cards">
                {cards}
            </section>
            {
                modal &&
                <Modal info={modal} setModal={setModal} />
            }
        </section>
    );
}

export default Shop;