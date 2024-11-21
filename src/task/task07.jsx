import React from "react";
import Task07_card from "./task07_card";
import Task7_info from "./task7_info";

export default function Task07() {
  const products = [
    {
      id: 1,
      productName: " Iphone 11 pro",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
      description: "256GB, Navy Blue",
      qty: 2,
      price: 900,
    },
    {
      id: 2,
      productName: " Samsung galaxy Note 10",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
      description: "256GB, Navy Blue",
      qty: 2,
      price: 900,
    },
    {
      id: 3,
      productName: "Canon EOS M50",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
      description: "Onyx Black",
      qty: 2,
      price: 1199,
    },
    {
      id: 4,
      productName: "MacBook Pro",
      image:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
      description: "1TB, Graphite",
      qty: 2,
      price: 1799,
    },
  ];

  return (
    <>
      <h2 style={{ marginTop: "30px" }}>3.List Products</h2>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2" />
                          Continue shopping
                        </a>
                      </h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>{" "}
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* -------------------------card item--------- */}
                      <div>
                        {products.map((pro, index) => (
                          <React.Fragment key={pro.id}>
                            <Task07_card proProps={pro} indexProps={index} />
                          </React.Fragment>
                        ))}
                      </div>
                      {/* ---------------------------------- */}
                    </div>

                    {/* --------------------------cart info-------- */}

                    <Task7_info></Task7_info>

                    {/* ---------------------------------- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
