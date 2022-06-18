import React from "react";

function About(){
    return (
        <div>
            
                <div className="card bg-secondary text-warning mt-5">
                    <div className="row">
                        <div className="col ms-4 mt-5 ">
                            <a href="#" className="navbar-brand text-light">
                                <img width="120px" height="120px"
                                    src="https://st3.depositphotos.com/27847728/34794/v/600/depositphotos_347943270-stock-illustration-initial-letter-logo-design-vector.jpg"
                                    alt=""></img></a>
                                    <p>IT'S A BRAND</p>
                        </div>
                        <div className="col">
                                <h4>ADDRESS</h4>
                                <p>Post box No. 10</p>
                                <p>Harita, Housar-635 108</p>
                                <p>Ph:8897450872 </p>
                                <p>Fax: 04344-276865</p>
                        </div>
                        <div className="col">
                            <h4>CALL US ON</h4>
                            <p>Toll Free: 18002587444</p>
                            <p>Ph:+91-9177100359</p>
                        </div>
                        <div className="col text-center mt-3">
                            <h6>ldhanush02@gmail.com</h6>
                            <h6>20071a6933@vnrvjiet.in</h6>
                            <button className="btn btn-info bg-danger mt-3">CONTACT US</button>
                            
                        </div>
                    </div>

            </div>
        </div>
    );
}
export default About