import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import eclips from "./assets/Ellipse 1.png";
import rec30 from "./assets/Rectangle 30.png";
import rec32 from "./assets/Rectangle 32.png";
import rec34 from "./assets/Rectangle 34.png";
import facebook from "./assets/fb.png";
import insta from "./assets/insta.png";
import twitter from "./assets/Group.png";
import Lin from "./assets/Linkedin.png";

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="nav_links" id="navLinks">
            <a href="#">Works</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="burger-icon">
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </header>
      <section>
        <div className="container">
          <div className="hero_content">
            <div className="hero_text">
              <h1>Hi, I am John, Creative Technologist</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="btn">Download Resume</button>
            </div>
            <div className="hero_image">
              <img src={eclips} alt="man" />
            </div>
          </div>
        </div>
      </section>
      <section className="posts">
        <div className="container">
          <div className="post_content">
            <div className="post_text">
              <h5>Recent posts</h5>
              <h6>View all</h6>
            </div>
            <div className="post_cards">
              <div className="card_1">
                <h1>Making a design system from scratch</h1>
                <span>12 Feb 2020 | Design, Pattern</span>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="card_2">
                <h1>Creating pixel perfect icons in Figma</h1>
                <span>12 Feb 2020 | Design, Pattern</span>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="works">
        <div className="container">
          <h1>Featured works</h1>
          <div className="works_content">
            <div className="works_image">
              <img src={rec30} alt="rectangle" />
            </div>
            <div className="works_text">
              <h2>Designing Dashboards</h2>
              <div className="small_text">
                <p className="p1">2020</p>
                <p className="p2">Dashboard</p>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="works_content2">
            <div className="works_image">
              <img src={rec32} alt="rectangle" />
            </div>
            <div class="works_text">
              <h2>Vibrant Portraits of 2020</h2>
              <div className="small_text">
                <p className="p1">2018</p>
                <p className="p2">Illustration</p>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="works_content3">
            <div className="works_image">
              <img src={rec34} alt="rectangle" />
            </div>
            <div className="works_text">
              <h2>36 Days of Malayalam type</h2>
              <div className="small_text">
                <p className="p1">2018</p>
                <p className="p2">Typography</p>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </section>
      <footer>
        <div className="icons">
          <img src={facebook} alt="facebook" />
          <img src={insta} alt="insta" />
          <img src={twitter} alt="twit" />
          <img src={Lin} alt="linked" />
        </div>
        <h3>Copyright ©2020 All rights reserved</h3>
      </footer>
    </>
  );
}

export default App;
