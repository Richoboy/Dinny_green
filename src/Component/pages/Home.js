import React from "react";
import { Link } from "react-router-dom";
import Frame from "../Assets/Frame 3.png";
// import Rec from "../Assets/Rectangle 65.png";
import ellipse from "../Assets/Ellipse 8.png";
import din from "../Assets/dinny6.png";
import CardComp from "../CardComp";
import dinny from "../Assets/dinnygreen.jpg";
import play from "../Assets/Group 62.png";
import ell from "../Assets/Ellipse 21.png";
import yog from "../Assets/yogendra.png";
import jm from "../Assets/james.png";
import logo from "../Assets/Group 61.png";

const Home = () => {
  return (
    <div className="hero">
      <div className="cover">
        {/* <img src="images/Child.jpg" alt="child" /> */}
        <h1>Give Your Child A 
          <br />Chance To Be Unique</h1>
        <div className="write">
          Experts agree that a child’s personality doesn’t fully form until they
          are in elementary school.
          <br />
          <Link to='/'>Sign in</Link> to enroll your child

          <div className="bbn">
            <button className="sign">Sign Up</button>
            <button className="more">Learn more</button>
          </div>
        </div>

        <div className="gap"></div>
      </div>

      <div className="learn">
        <div className="pic">
          <img src={Frame} alt="" />
        </div>
        <div className="fee">
          <h4>
            Advance Learning System <br />
            Around The World
          </h4>
          <div className="new">
            <p>
              We have made a collaborative effort in bringing together
              scientific expertise from other countries, steered jointly by
              their governments on the basis of shared, policy-driven interests.{" "}
            </p>
          </div>
          <div className="nos">
            <div>
              25k <sup>+</sup> <br /> <p>Teachers</p>
            </div>
            <div className="git">
              74k <sup>+</sup>
              <br /> <p> Active Courses</p>
            </div>
            <div className="lit">
              250 <br /> <p className="e2">Extra Curriular </p>
            </div>
          </div>
          <button className="on">Learn more</button>
        </div>
      </div>

      <div className="features">
        <div className="overlay">
          <div className="h31">
            <h3>Our Features</h3>
            <p className="h32">
              Dinny Green International School is nurtured in grace and truth,
              raising green,
              <br /> flourishing and successful children.
            </p>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <div className="box">
                <div>
                  <img src={ellipse} alt="circle" />
                </div>
                <div className="awesome">
                  <h4>Awesome Teachers</h4>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipisicing elit, sed do eiusmod ukkf <br /> tempor
                    incididunt u.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="box">
                <div>
                  <img src={ellipse} alt="circle" />
                </div>
                <div className="awesome">
                  <h4>Awesome Teachers</h4>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipisicing elit, sed do eiusmod ukkf <br /> tempor
                    incididunt u.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="box">
                <div>
                  <img src={ellipse} alt="circle" />
                </div>
                <div className="awesome">
                  <h4>Awesome Teachers</h4>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipisicing elit, sed do eiusmod ukkf <br /> tempor
                    incididunt u.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="box">
                <div>
                  <img src={ellipse} alt="circle" />
                </div>
                <div className="awesome">
                  <h4>Awesome Teachers</h4>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipisicing elit, sed do eiusmod ukkf <br /> tempor
                    incididunt u.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="find">
        <div className="more">
          <h1>
            Find Out More About
            <br />
            Our Learning Experience
          </h1>
          <p>
            We have built hospitals, arranged doctor appointments <br /> have
            the diagnose and treat yourem ipsu r aol ad <br />
            meniam, quis nostrud exercitation.
          </p>
          <br />
          <ul>
            <li>
              <i class="fa-solid fa-circle-check"></i> Culture in diversity
            </li>
            <li>
              <i class="fa-solid fa-circle-check"></i> We have built hospitals,
              arranged doctor.
            </li>
            <li>
              <i class="fa-solid fa-circle-check"></i> We have built hospitals,
              arranged doctor.
            </li>
          </ul>
          <button className="en">Learn more</button>
        </div>
        <div className="girl">
          <img src={din} alt="read" />
        </div>
      </section>

      <section className="popular">
        <div className="poptext">
          <h2>Popular Classes</h2>
          <br />
          <p>
            We have built hospitals, arranged doctor appointments have the
            diagnose and treat <br /> yourem ipsu r aol ad meniam, quis nostrud
            exercitation.
          </p>
        </div>

        <CardComp />
        <button className="btn">View all courses</button>
      </section>

      <section className="student">
        <div className="know">
          <h2>Find Out How We Help Students</h2>
          <p>
            authentic ‘voice and choice’ matter and a big part of this is
            leaving ‘room for interpretation’ in the assignment. Those gray
            areas
            <br /> can confuse students unaccustomed to agency and choice, but
            once they become comfortable with it, it can be a significant <br />{" "}
            factor in helping them show what their ‘best’ actually is.
          </p>
        </div>
        <div className="book">
          <img src={dinny} alt="books" />
          <div className="box1">
            <img src={play} alt="vid" />
          </div>
        </div>
      </section>

      <section className="stories">
        <div class="blureme"></div>
        <div class="stories_txt">
          <h1>Success Stroies</h1>
        </div>

        <div class="stories_imgs">
          <div class="story1">
            {" "}
            <img src={ell} class="sucess1" alt="" />
          </div>
          <div class="story2">
            <img src={yog} class="sucess2" alt="" />
          </div>
          <div class="story3">
            {" "}
            <img src={jm} class="sucess3" alt="" />
          </div>
        </div>

        <p>
          <em>
            We have built hospitals, arranged doctor appointments have the
            diagnose and treat yourem ipsu r aol ad <br /> meniam, quis nostrud
            exercitation.We doctor appointments have the diagnose and treat
            yourem ipsu r <br /> exercitatranged docts have the diagnose and
            treat ipsu r aol{" "}
          </em>
        </p>
      </section>

      <section class="teacher">
        <div class="teacher_row">
          <h2>Our Instructors & Teachers</h2>
          <p>
            We have the best teachers and instructors that would be able to
            train your kids, making <br />
            them Creative, God fearing, Respectfull and Intelligent.{" "}
          </p>
        </div>

        <div class="flexwapper">
          <div class="teacher_section">
            <div class="section1">
              <div class="linear">
                <div class="bb">
                  <button>Full time</button>
                  <p>
                    {" "}
                    <strong>Masters in Geology</strong>{" "}
                  </p>
                  <p class="font">
                    <i class="fa fa-calendar"></i> 28th April 2021
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="section2">
            <div class="linear2">
              <div class="bb2">
                <button>Full time</button>
                <p>
                  Doctor appointments have the <br /> diagnose
                </p>
                <p class="font2">
                  <i class="fa fa-calendar"></i> 28th April 2021
                </p>
              </div>
            </div>
          </div>

          <div class="section3">
            <div class="linear3">
              <div class="bb3">
                <button>Full time</button>
                <p>
                  {" "}
                  Doctor appointments have the <br /> diagnose
                </p>
                <p class="font3">
                  <i class="fa fa-calendar"></i> 28th April 2021
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="bnb">See all </button>
      </section>

      <section class="contact">
        <h1>Contact Us</h1>
        <div class="contact_form">
          <form action="#">
            <input type="text" name="" placeholder="Name" required />
            <input type="email" name="" placeholder="Email" required />
            <br />
            <input type="phonet" name="" placeholder="Phone" required />
            <input type="subject" name="" placeholder="Subject" required />
            <br /> <br />
            <textarea
              type="Message"
              cols="125"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <br />
            <br />
            <br />
          </form>
        </div>

        <button>Send now</button>
      </section>

      {/* <section style={{ width: '70%',}} className= 'experiment'>
        <div className="overlay"></div>
      </section> */}

      <footer>
        <div class="foot">
          <div class="foot1">
            <img src={logo} width="120.64px" height="99.64px" alt="" />
            <p>
              Replenish him third creature and meat <br /> blessed void a fruit
              gathered you’re, <br /> they’re two waters own morning <br />{" "}
              gathered greater.
            </p>
          </div>

          <div class="foot2">
            <h4>
              {" "}
              <span class="line">About</span> Us
            </h4>
            <li>Afficiates</li>
            <li>Partners</li>
            <li>Reviews</li>
            <li>Blogs</li>
          </div>

          <div class="foot2">
            <h4>
              <span class="line">Popular</span> Classes
            </h4>
            <li>Creche</li>
            <li>Primary</li>
            <li>Secondary</li>
            <li>Highschool</li>
          </div>

          <div class="foot2">
            <h4>
              {" "}
              <span class="line">News</span>letter
            </h4>
            <p class="news">
              Sign up to newsletter to get <br /> Latest updates
            </p>
            <input type="email" placeholder="Enter Email address" />
            {/* <i class="fa fa-mouse-pointer mouse"></i> */}

            <input class="btnn" type="button" value="search" />

            <div class="socials">
              <div>
              
                <img src="../Assets/Vector (10).png" alt="" />
              </div>
              <div class="space">
              
                <img src="../Assets/Vector (11).png" alt="" />
              </div>
              <div>
                
                <img src="../Assets/Vector (12).png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="align">
          <p>Copywright @ 2020 Dinnygreen international</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
