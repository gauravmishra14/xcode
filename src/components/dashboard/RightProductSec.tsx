import React from "react";
import { IProduct } from "utils/InterfacePool";

const RightProductSec = (props: any) => {
  const { products } = props;
  return (
    <div className="product-list-wrap">
      {products &&
        products.map((item: IProduct, key: number) => {
          return (
            <div className="product-wrap" key={key}>
              <div className="img-holder">
                <span className="discount">{item.discount}%</span>
                <img src={item.image} alt="product" className="prdt-img" />
              </div>
              <div>
                <div className="desc-row">
                  <div className="title-txt">{item.brand}</div>
                  <div>
                    Color:{" "}
                    <span
                      style={{
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        backgroundColor: `${item.colour.color}`,
                      }}
                    ></span>
                  </div>
                </div>
                <div className="desc-row">
                  <div className="title-txt">{item.title}</div>
                  <div>
                    Add <span className="add-btn">+</span>
                  </div>
                </div>
                <div className="desc-row">
                  <div className="title-txt">
                    Rs.{""}
                    {item.price.final_price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RightProductSec;
