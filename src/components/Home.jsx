import React from "react";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";
import Login from "./Login";
import Register from "./Register";
import placeholder from "../assets/placeholder.png";
import search from "../assets/search.png";
import rise from "../assets/rise.png";
import { Link } from "react-router-dom";
function Home(){
    return (<>
       <Nav></Nav>
       <div className="home-container">
        <section className="home-header">
            <div className="home-title"><h1>Find Jobs <d> Near You</d></h1></div>
            <p>Connect with local opportunities and take the next step in your career.</p>
            <div className="home-search-container">
                <form >
                    <div className="search-container">
                    <input type="search" name="location" id="search-location" placeholder="Location (e.g., Deheradun)"/>
                    <input type="search" name="job-title" id="search-Job-title" placeholder="Job Title or keyword"/>
                    <input type="submit" value="Search" className="search-button"/>
                    </div>
                </form>
             
            </div>
               <div className="home-btns">
                      <button className="get-started-btn">Get Started</button>
                      <Link to="/post-job">
                        <button className="post-job-btn">Post a Job</button>
                      </Link>
                </div>
        </section>
        <section className="Growth-section">
            <div className="growth-content">
                <h2>Empowering Local Talent</h2>
                <p>Discover how JobFinder is transforming the local job market by connecting job seekers with nearby opportunities.</p> 
               
            </div>
        </section>
        <section className="why-choose">

           <div className="why-title">
            <h2>Why Choose JobFinder?</h2>
            <p>Everything you need to find your dream job</p>

           </div>
           <div className="card-container">
            <div className="card">
             <img src={placeholder} alt="placeholder" />
                <h3>Location-Based</h3>
                <p>Find opportunities near you with our smart location-based search</p>
            </div>
              <div className="card">
                <img src={search} alt="Search"/>
                <h3>Easy Search</h3>
                <p>Filter by skills, experience, and more to find the perfect match</p>
            </div>
              <div className="card">
                <img src={rise} alt="Rise"/>
                <h3>Quick Apply</h3>
                <p>Apply to multiple jobs in seconds with our streamlined process</p>
            </div>
           </div>

        </section>
        <section className="journey-container">
            <div className="journey-content">
                <h2>Ready to Start Your Journey?</h2>
                <p>Join thousands of job seekers finding their dream careers</p>
                <Link to="/register">
                    <button>Create Free Account</button>
                </Link>
            </div>
        </section>
       </div>
       <Footer/>
    </>);
}

export default Home;