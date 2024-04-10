import './index.css'

function Home() {
    return (
        <div className="home">
            <div className='home__heading'>
                <h1>Lens Legacy</h1>
                <p>This is where the magic happens.</p>
            </div>

            <section className="home__slideshow">
                <figure>
                    <img src="ellie-ellien-KH0CwR1y2hk-unsplash.jpg" />
                    {/* {https://unsplash.com/photos/a-group-of-metal-leaves-sitting-on-top-of-a-white-surface-uuCjYxJVf4o} */}
                </figure>
                <figure>
                    <img src="evie-s-uuCjYxJVf4o-unsplash.jpg" />
                    {/* https://unsplash.com/photos/brown-seed-on-vase-KH0CwR1y2hk */}
                </figure>
                <figure>
                    <img src="silas-baisch-K785Da4A_JA-unsplash.jpg" />
                    {/* https://unsplash.com/photos/blue-and-clear-body-of-water-K785Da4A_JA */}
                </figure>
            </section>

        </div>
    );
}

export default Home;