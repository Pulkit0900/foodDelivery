import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";

import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";
import Category from "../components/UI/category/Category.jsx";
import '../styles/home.css';

import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';

import products from '../assets/fake-data/products.js';
import foodCategoryImg1 from '../assets/images/hamburger.png';
import foodCategoryImg2 from '../assets/images/pizza.png';
import foodCategoryImg3 from '../assets/images/bread.png';

import whyImg from '../assets/images/location.png';
import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import networkImg from '../assets/images/network.png';
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.js";

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: "FoodEazy provides a quick delivery service to all our customers in a limited time"
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: "FoodEazy provides a super dine in facility to all our customers"
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: "FoodEazy provides a easy pick up service to all our trusted customers"
  },
]

const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizzas, setHotPizzas] = useState([])

  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === 'Pizza')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotPizzas(slicePizza)
  }, [])

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    if (category === 'BURGER') {
      const filteredProducts = products.filter(item => item.category === 'Burger')
      setAllProducts(filteredProducts);
    }
    if (category === 'PIZZA') {
      const filteredProducts = products.filter(item => item.category === 'Pizza')
      setAllProducts(filteredProducts);
    }
    if (category === 'BREAD') {
      const filteredProducts = products.filter(item => item.category === 'Bread')
      setAllProducts(filteredProducts);
    }
  }, [category])

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favourite Food Item
                </h1>

                <p>Explore restaurants that deliver near you, or try yummy takeout fare. With a place for every taste, it’s easy to find food you crave, and order online or through the FoodEazy app. Find great meals fast with lots of local menus. Enjoy eating the convenient way with places that deliver to your door. </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn"><Link to='/pizzas'> See all Foods </Link></button>
                </div>

                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2"><span className="shipping__icon"><i class="ri-car-line"></i></span> No shipping charge </p>
                  <p className="d-flex align-items-center gap-2"><span className="shipping__icon"><i class="ri-shield-check-line"></i></span> 100% secure checkout </p>
                </div>

                {/* <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/pizzas">
                    Menu <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button> */}
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h5 className="feature__subtitle mb-4"> What we serve </h5>
              <h2 className="feature__title"> Just sit back at home </h2>
              <h2 className="feature__title"> we will <span> take care </span></h2>
            </Col>

            {
              featureData.map((item, index) => (
                <Col lg='4' md='6' sm='6' key={index} className="mt-5">
                  <div className="feature__item text-center px-5 py-3">
                    <img src={item.imgUrl} alt='feature-img' className="w-25 mb-3" />
                    <h5 className="fw-bold mb-3"> {item.title} </h5>
                    <p> {item.desc} </p>
                  </div>
                </Col>
              ))
            }

            {/* <Col lg='4' md='4'></Col>
            <Col lg='4' md='4'></Col> */}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2> Popular Foods </h2>
            </Col>

            <Col lg='12'>
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className={`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''} `} onClick={() => setCategory('ALL')}> All </button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''} `} onClick={() => setCategory('BURGER')}><img src={foodCategoryImg1} alt="" /> Burger </button>
                <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''} `} onClick={() => setCategory('PIZZA')}><img src={foodCategoryImg2} alt="" /> Pizza </button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''} `} onClick={() => setCategory('BREAD')}><img src={foodCategoryImg3} alt="" /> Bread </button>
              </div>
            </Col>

            {
              allProducts.map(item => (
                <Col lg='3' md='4' key={item.id} className="mt-5">
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'><img src={whyImg} alt="why-tasty-treat" className="w-100" /></Col>
            <Col lg='6' md='6'>
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4"> Why <span> FoodEazy ? </span></h2>
                <p className="tasty__treat-desc"> FoodEazy has an Innovative food ordering app available on iPhone and Android. You can find nearby Restaurants and place order by viewing Restaurant Menu. </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-item d-flex align-items-center gap-2"><i class="ri-checkbox-circle-line"></i> Complete Online Solution </p>
                    <p className="choose__us-desc"> Our Online Ordering Solution allows you to take orders through Your own Website, Your Own Mobile App, And through FoodEazy website and Mobile App.</p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-item d-flex align-items-center gap-2"> <i class="ri-checkbox-circle-line"></i> Win Win Business Model </p>
                    <p className="choose__us-desc"> From Quick Setup to Instant Order Notifications, Dynamic Pricing, Instant Payment and Social Media Marketing, We have you covered. </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-item d-flex align-items-center gap-2"> <i class="ri-checkbox-circle-line"></i> Worldwide Support </p>
                    <p className="choose__us-desc"> FoodEazy support is available worldwide. Contact our support team and we'll connect you to an expert to get your issue resolved within 24 Business hours. </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg='12' className="text-center mb-5">
              <h2> Hot Pizza </h2>
            </Col>

            {
              hotPizzas.map(item => (
                <Col lg='3' md='4' key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>

            <Col lg='6' md='6'>
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4"> Testimonial </h5>
                <h2 className="testimonial__title mb-4"> What our <span> customers </span> are saying</h2>
                <TestimonialSlider />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
