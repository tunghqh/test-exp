import React from "react";
import "./Credit.scss";

function Credit() {
  return (
    <div className="credit">
      <div className="credit__text">
          <h2 className="credit__head">CREDIT PACKS</h2>
          <div className="credit__des">Choose credit plan designed to meet your needs.</div>
      </div>
      <div className="credit__liss">
        <div className="credit__item">
            <div className="credit__item-title">STANDARD</div>
            <div className="credit__item-price">
                <p>$50</p>
                <span>*VAT not includes in price</span>
            </div>
            <div className="credit__item-credit">
                <div className="credit__number">50 Credit</div>
                <div className="credit__total">Total Credit</div>
                <div className="credit__end">50 Credit</div>
            </div>
        </div>
        <div className="credit__item">
            <div className="credit__item-title">STANDARD</div>
            <div className="credit__item-price">
                <p>$100</p>
                <span>*VAT not includes in price</span>
            </div>
            <div className="credit__item-credit">
                <div className="credit__number">100 Credit + 5 Credit</div>
                <div className="credit__total">Total Credit</div>
                <div className="credit__end">105 Credit</div>
            </div>
        </div>
        <div className="credit__item">
            <div className="credit__item-title">STANDARD</div>
            <div className="credit__item-price">
                <p>$250</p>
                <span>*VAT not includes in price</span>
            </div>
            <div className="credit__item-credit">
                <div className="credit__number">250 Credit + 20 Credit</div>
                <div className="credit__total">Total Credit</div>
                <div className="credit__end">270 Credit</div>
            </div>
        </div>
        <div className="credit__item">
            <div className="credit__item-title">STANDARD</div>
            <div className="credit__item-price">
                <p>$1000</p>
                <span>*VAT not includes in price</span>
            </div>
            <div className="credit__item-credit">
                <div className="credit__number">100 Credit + 130 Credit</div>
                <div className="credit__total">Total Credit</div>
                <div className="credit__end">1130 Credit</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Credit;
