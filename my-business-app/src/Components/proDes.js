import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Data from "./products.json";
import Modal from "react-modal";

function ProDes({ addToCart }) {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const product = Data.find((product) => product.id === parseInt(id));

  const relatedProducts = React.useMemo(() => {
    if (!product) return [];
    // Prioritize products from the same category
    const sameCategory = Data.filter(
      (item) => item.id !== product.id && item.category === product.category
    );
    // Other products if we need more to reach 4
    const otherProducts = Data.filter(
      (item) => item.id !== product.id && item.category !== product.category
    );
    return [...sameCategory, ...otherProducts].slice(0, 4);
  }, [product]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      maxWidth: "360px",
      width: "90%",
      height: "auto",
      margin: "auto",
      top: "100px",
      borderRadius: "8px",
      padding: "24px 20px",
      position: "relative",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    },
  };

  const handleClick = () => {
    if (addToCart && product) {
      addToCart(product);
    }
    openModal();
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div id="productDescription">
          <div className="productDescription_container">
            <div className="productDescription_content-1">
              <section>
                <Skeleton height={450} width={400} />
              </section>

              <section>
                <p>
                  <Skeleton />
                  <p>
                    <Skeleton width={150} />
                    <h1>
                      <Skeleton />
                    </h1>
                  </p>
                </p>
                <h2>
                  <Skeleton />
                </h2>
                <p>
                  <Skeleton height={140} />
                </p>
                <Skeleton width={100} />
              </section>
            </div>

            <div className="productDescription_content-2">
              <nav id="inline-navlink">
                <Link to="description">Description</Link>
                <Link to="reviews">Reviews</Link>
              </nav>
              <Skeleton height={120} />
            </div>

            <div className="productDescription_content-3">
              <p>Related Products</p>
              <div className="relatedProducts_container">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="relatedProducts_cards">
                    <Skeleton height={240} width={240} />
                    <h4>
                      <Skeleton height={20} />
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div>
          <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
          >
            <div className="alert" style={{ position: "relative" }}>
              <button
                onClick={closeModal}
                className="modal-close-icon"
                aria-label="Close modal"
              >
                &times;
              </button>
              <p style={{ margin: "10px 0 16px 0", fontSize: "15px", color: "#333", lineHeight: "1.4" }}>
                <strong>"{product?.title}"</strong> is added to cart!
              </p>
              <button>
                <Link to="/cart"> See cart</Link>
              </button>
            </div>
          </Modal>

          {product ? (
            <>
              <div id="productDescription">
                <div className="category-back-link" style={{ textAlign: "left", marginBottom: "20px" }}>
                  <button onClick={() => navigate(-1)} className="back-btn">
                    &larr; Go back
                  </button>
                </div>
                <div className="productDescription_container">
                  <div className="productDescription_content-1">
                    <section id="im_sec">
                      <img alt={product.title} src={product.image} />
                    </section>

                    <section>
                      <p>
                        Home/ {product.category}/ {product.title}
                        <p>
                          {product.category}
                          <h1>{product.title}</h1>
                        </p>
                      </p>
                      <h2>
                        ${product.price} <span>+ Free Shipping</span>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam aperiam dolorum dolores, rem minima delectus nisi
                        eveniet beatae? Non eligendi laudantium officia dolorum
                        error similique magni, distinctio veritatis molestiae
                        voluptatum.
                      </p>
                      <button onClick={handleClick}>ADD TO CART</button>
                      <br />
                      <hr />
                      <p>Category: {product.category}</p>
                    </section>
                  </div>

                  <div className="productDescription_content-2">
                    <nav id="inline-navlink">
                      <Link to="description">Description</Link>
                      <Link to="reviews">Reviews</Link>
                    </nav>
                    <Outlet />
                  </div>

                  <div className="productDescription_content-3">
                    <p id="title">Related Products</p>
                    {relatedProducts && relatedProducts.length > 0 ? (
                      <div className="relatedProducts_container">
                        {relatedProducts.map((relProduct) => (
                          <div
                            key={relProduct.id}
                            className="relatedProducts_cards"
                          >
                            <Link to={`/product/${relProduct.id}`}>
                              <img alt={relProduct.title} src={relProduct.image} />
                            </Link>
                            <h4>{relProduct.title}</h4>
                            <span>{relProduct.category}</span>
                            <p>${relProduct.price}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p> Loading...</p>
                    )}
                  </div>
                </div>
                <div id="return">
                  <button onClick={() => navigate(-1)} className="back-btn" style={{ fontSize: "1.15rem" }}>
                    &larr; Go back
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p>Product not found </p>
          )}
        </div>
      </>
    );
  };

  return <div>{loading ? <Loading /> : <ShowProduct />}</div>;
}

export default ProDes;
