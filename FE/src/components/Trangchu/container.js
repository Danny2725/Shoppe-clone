import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/features/prodSlice';
import ProductDetail from '../item/ProductDetail';

export const Container = () => {
  const products = useSelector(selectProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Xử lý sự kiện click cho một sản phẩm
  const handleProductClick = (product) => {
    // Đặt sản phẩm được chọn
    setSelectedProduct(product);
  };

  // Nếu có sản phẩm được chọn, render component ProductDetail
  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} />;
  }
  return (
    <div className="app__container">
      <div className="grid">
        <div className="grid__row app__content">
          <div className="grid__column-2">
          <nav className="category">
          <h3 className="category__heading">
            <i className="category__heading-icon fa-solid fa-list" />
            Danh Mục
          </h3>
          <ul className="category__list">
            <li className="category__item category__item--active">
              <a href="#" className="category__item--link">
                Bàn phím + Chuột gaming
              </a>
            </li>
            <li className="category__item ">
              <a href="#" className="category__item--link">
                Loa karaoke
              </a>
            </li>
            <li className="category__item ">
              <a href="#" className="category__item--link">
                Loa Bluetooth
              </a>
            </li>
            <li className="category__item ">
              <a href="#" className="category__item--link">
                Deal tháng 9
              </a>
            </li>
            <li className="category__item ">
              <a href="#" className="category__item--link">
                Tai nghe Bluetooth
              </a>
            </li>
            <li className="category__item ">
              <a href="#" className="category__item--link">
                Đồ chơi trend
              </a>
            </li>
            <li className="category__item ">
              <a href="#" className="category__item--link">
                Bộ sạc điện thoại
              </a>
            </li>
            <li className="category__item ">
              <a href="#" className="category__item--link">
                Loa Máy Tính
              </a>
            </li>
          </ul>
        </nav>
          </div>
          <div className="grid__column-10">
          <div className="home-filter">
          <span className="home-filter__label">Sắp xếp theo</span>
          <button className="home-filter-btn btn btn--primary">Phổ biến</button>
          <button className="home-filter-btn home-filter-btn--select btn">
            Mới nhất
          </button>
          <button className="home-filter-btn home-filter-btn--select btn">
            Bán chạy
          </button>
          <div className="select-input">
            <span className="select-input__label">Giá</span>
            <i className="select-input__icon fa-solid fa-chevron-down" />
            <ul className="select-input__list">
              <li className="select-input__item">
                <a href="" className="select-input__link">
                  Giá: Từ thấp đến cao
                </a>
              </li>
              <li className="select-input__item">
                <a href="" className="select-input__link">
                  Giá: Từ cao đến thấp
                </a>
              </li>
            </ul>
          </div>
          <div className="home-filter__page">
            <span className="home-filter__page-num">
              <span className="home-filter__page-curent">1</span>/14
            </span>
            <div className="home-filter__page-control">
              <a
                href=""
                className="home-filter__page-btn home-filter__page-btn--disable"
              >
                <i className="home-filter__page-icon fa-solid fa-chevron-left" />
              </a>
              <a href="" className="home-filter__page-btn">
                <i className="home-filter__page-icon fa-solid fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
            {/* SẢN PHẨM */}
            <div className="home-product">
              <div className="grid__row">
                {products.map((product) => (
                  <div className="grid__column-2-4" key={product.id} onClick={() => handleProductClick(product)}>
                    <a className="home-product-item" href="#">
                      <div
                        className="home-product-item__img"
                        style={{
                          backgroundImage: `url(${product.image})`,
                        }}
                      />
                      <h4 className="home-product-item__name">
                        {product.name}
                      </h4>
                      <div className="home-product-item__hastag">
                        <span className="home-product-item__hastag--sale">
                          {product.saleInfo.saleLabel}
                        </span>
                      </div>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          {product.saleInfo.oldPrice}
                        </span>
                        <span className="home-product-item__price-new">
                          {product.saleInfo.newPrice}
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__rating">
                          {/* Mã xử lý đánh giá sao tùy thuộc vào dữ liệu */}
                        </span>
                        <span className="home-product-item__sold">
                          {product.soldCount}
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <span>{product.favorite}</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          {product.saleOff.percent}
                        </span>
                        <span className="home-product-item__sale-off-label">
                          {product.saleOff.label}
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <ul className="paganation home-product--paganation">
            <li className="paganation-item ">
              <a href="#" className="paganation-item-link">
                <i className="paganation-item-icon">
                  <i className="fa-solid fa-angle-left" />
                </i>
              </a>
            </li>
            <li className="paganation-item">
              <a
                href="#"
                className="paganation-item-link paganation-item--active"
              >
                <i className="paganation-item-icon">1</i>
              </a>
            </li>
            <li className="paganation-item">
              <a
                href="#"
                className="paganation-item-link paganation-item--select"
              >
                <i className="paganation-item-icon">2</i>
              </a>
            </li>
            <li className="paganation-item">
              <a
                href="#"
                className="paganation-item-link paganation-item--select"
              >
                <i className="paganation-item-icon">3</i>
              </a>
            </li>
            <li className="paganation-item">
              <a
                href="#"
                className="paganation-item-link paganation-item--select"
              >
                <i className="paganation-item-icon">4</i>
              </a>
            </li>
            <li className="paganation-item">
              <a
                href="#"
                className="paganation-item-link paganation-item--select"
              >
                <i className="paganation-item-icon">5</i>
              </a>
            </li>
            <li className="paganation-item">
              <a href="#" className="paganation-item-link">
                <i className="paganation-item-icon">...</i>
              </a>
            </li>
            <li className="paganation-item">
              <a
                href="#"
                className="paganation-item-link paganation-item--select"
              >
                <i className="paganation-item-icon">14</i>
              </a>
            </li>
            <li className="paganation-item">
              <a href="#" className="paganation-item-link">
                <i className="paganation-item-icon">
                  <i className="fa-solid fa-angle-right" />
                </i>
              </a>
            </li>
          </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
