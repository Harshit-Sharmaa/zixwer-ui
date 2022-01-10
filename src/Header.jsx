import React, { useState } from "react"


const Header = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="header">
                <div className="h1">
                    <div><img src="./photos/p1.png" className="ibc" /></div>
                    <div><button className="gt">GET IN TOUCH</button></div>
                    <div className="burger">
                        <i class="fas fa-bars" onClick={() => { setOpen(!open) }}></i>
                    </div>
                </div>
                {open &&
                        <div className="hh">
                            <h2 className="btit">BUILDING TOMMOROW’S INDIA TODAY</h2>
                            <h2 className="ob">OUR BUILDINGS</h2>
                            <h2 className="tfin">THE FUTURE IS NOW</h2>
                            <h2 className="tsf">THE SHERIFF FOUNDATION</h2>
                            <h2 className="ex">EXPERIENCE IBC</h2>
                            <h2 className="dp">DIVERSED PORTFOLIOS</h2>
                            <h2 className="cu" >CONTACT US</h2>
                        </div>
                }
                <div className="h2">
                    <h2 className="btit">BUILDING TOMMOROW’S INDIA TODAY</h2>
                    <h2 className="ob">OUR BUILDINGS</h2>
                    <h2 className="tfin">THE FUTURE IS NOW</h2>
                    <h2 className="tsf">THE SHERIFF FOUNDATION</h2>
                    <h2 className="ex">EXPERIENCE IBC</h2>
                    <h2 className="dp">DIVERSED PORTFOLIOS</h2>
                    <h2 className="cu">CONTACT US</h2>
                </div>
            </div>
        </>
    )

}

export default Header;