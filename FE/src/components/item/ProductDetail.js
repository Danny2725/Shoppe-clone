// ProductDetail.js
import React from 'react';
const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail__info">
        <h2 className="product-detail__name">{product.name}</h2>
        <div className="product-detail__sale-info">
          <span className="product-detail__sale-label">
            {product.saleInfo.saleLabel}
          </span>
        </div>
        <div className="product-detail__price">
          <span className="product-detail__price-old">
            {product.saleInfo.oldPrice}
          </span>
          <span className="product-detail__price-new">
            {product.saleInfo.newPrice}
          </span>
        </div>
        <div className="product-detail__action">
          <span className="product-detail__rating">
            {/* Mã xử lý đánh giá sao tùy thuộc vào dữ liệu */}
          </span>
          <span className="product-detail__sold">Đã bán: {product.soldCount}</span>
        </div>
        <div className="product-detail__favorite">
          <span>Yêu thích: {product.favorite}</span>
        </div>
        <div className="product-detail__sale-off">
          <span className="product-detail__sale-off-percent">
            Giảm giá: {product.saleOff.percent}
          </span>
          <span className="product-detail__sale-off-label">
            {product.saleOff.label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
