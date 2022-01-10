import React from "react"

const Footer = () => {
    return (
        <div className="footer">
            <div className="signup">
                <p>Sign up to receive exclusive news and offers about the latest launches</p>
                <input type="text" placeholder="Enter email" className="input" />
                <button>SIGN UP</button>
            </div>
            <div className="l6">

            </div>
            <div className="contact">
                <p className="watf">WE ARE THE FUTURE</p>
                <p className="c1">WHO WE ARE</p>
                <p className="c2">LEADERSHIP TEAM</p>
                <p className="c3">INVESTOR RELATION</p>
                <p className="c4">THE THIRD SPACE</p>
                <p className="c5">CAREERS</p>
                <p className="c6">MEDIA CENTRE</p>
                <p className="c7">SUSTAINABILITY</p>
                <p className="c8">CONTACT US</p>
            </div>
            <div className="lowfoot">
                <span className="pp">PRIVACY POLICY</span>
                <span className="vl"></span>
                <span className="tac">TERMS AND CONDITIONS</span>
            </div>
        </div>
    )
}

export default Footer;