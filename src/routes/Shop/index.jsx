import { useState, useEffect } from 'react';
import './index.css';
import Modal from '../../components/Modal';
import anime from 'animejs/lib/anime.es.js';

function Shop() {
    const [activeCardId, setActiveCardId] = useState(null);
    const products = getProducts();

    useEffect(() => {
        animateSlideshow();
    }, [])

    function animateSlideshow() {
        anime({
            targets: '.shop__product',
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 750,
            delay: anime.stagger(100),
        });
    }


    return (
        <section className="shop">
            <h1>Shop</h1>
            <section className="shop__products">
                {products && products.map((product) => {
                    return (
                        <article
                            key={product.id}
                            className="shop__product"
                            onClick={() => setActiveCardId(product.id)}
                        >
                            <figure>
                                <img src={product.imgUrl} />
                            </figure>
                            <div className='shop__product-info'>
                                <h2>{product.title}</h2>
                                <p>{product.types[0].price}sek</p>
                            </div>
                        </article>
                    );
                })}
            </section>
            {
                activeCardId && products && (
                    <Modal product={products[activeCardId - 1]} setActiveCardId={setActiveCardId} />
                )
            }
        </section>
    );
}

function getProducts() {
    const dummyData = [
        {
            title: "Img 098",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "ellie-ellien-KH0CwR1y2hk-unsplash.jpg",
            author: 'https://unsplash.com/photos/a-group-of-metal-leaves-sitting-on-top-of-a-white-surface-uuCjYxJVf4o',
            types: [
                { size: '60x38', price: 129 },
                { size: '121x72', price: 199 },
            ]

        },
        {
            title: "Img 099",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "evie-s-uuCjYxJVf4o-unsplash.jpg",
            author: 'https://unsplash.com/photos/brown-seed-on-vase-KH0CwR1y2hk',
            types: [
                { size: '60x38', price: 169 },
                { size: '121x72', price: 259 },
            ]
        },
        {
            title: "Img 100",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "silas-baisch-K785Da4A_JA-unsplash.jpg",
            author: 'https://unsplash.com/photos/blue-and-clear-body-of-water-K785Da4A_JA',
            types: [
                { size: '60x38', price: 129 },
                { size: '121x72', price: 199 },
            ]
        },
        {
            title: "Img 101",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "declan-sun-2aZlAV53kww-unsplash.jpg",
            author: 'https://unsplash.com/photos/a-long-white-hallway-with-shelves-and-stairs-2aZlAV53kww',
            types: [
                { size: '60x38', price: 59 },
                { size: '121x72', price: 129 },
            ]
        },
        {
            title: "Img 142",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "iskra-photography-2u6LfY4lUZk-unsplash.jpg",
            author: 'https://unsplash.com/photos/a-group-of-people-standing-on-top-of-a-beach-next-to-the-ocean-2u6LfY4lUZk',
            types: [
                { size: '60x38', price: 169 },
                { size: '121x72', price: 259 },
            ]
        },
        {
            title: "Img 103",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "hiroyuki-sen-H8qB5Hy-gbo-unsplash.jpg",
            author: "https://unsplash.com/photos/a-very-tall-building-with-lots-of-windows-H8qB5Hy-gbo",
            types: [
                { size: '60x38', price: 169 },
                { size: '121x72', price: 259 },
            ]
        },
        {
            title: "Img 104",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "matthew-mcbrayer-qD9xzm7yK9U-unsplash.jpg",
            author: 'https://unsplash.com/photos/low-angle-view-of-blue-clouds-qD9xzm7yK9U',
            types: [
                { size: '60x38', price: 59 },
                { size: '121x72', price: 129 },
            ]
        },
        {
            title: "Img 111",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgUrl: "zeke-tucker-0EP4QyCjtgE-unsplash.jpg",
            author: 'https://unsplash.com/photos/green-leafed-tree-0EP4QyCjtgE',
            types: [
                { size: '60x38', price: 129 },
                { size: '121x72', price: 199 },
            ]
        }
    ];


    return dummyData.map((obj, index) => ({
        ...obj,
        id: index + 1
    }))
}

export default Shop;