import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h2 className="card-title fs-1 text fw-lighter">Vendee</h2>
              <p className="card-text fs-5 d-none d-sm-block ">
              Vendée E-Commerce is a premier online platform offering a diverse range of products, 
              exceptional customer service, and seamless shopping experiences. 
              Discover quality, affordability, and convenience with every click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
