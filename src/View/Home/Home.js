import React from "react";
import { Navbar } from "./../../Component/Navbar/Navbar";
import { Footer } from "../../Component/Footer/Footer";
import  img  from '../Home/1st.webp';
import './Home.css'


export function Home() {
    return (
        <>
            <Navbar />
            <Img />
            <Text />
            <Text1 />
            <Footer />

        </>
    );
}


export function Img() {
    return (
        <>
            <section className="img">
                <h1 >Find your forever<br></br> companion</h1>
            </section>
        </>
    );
}

export function Text() {
    return (
        <>
            <div className="maintext">
                <div className="text">
                    <h1>Know the </h1>
                    <h1>name of the</h1>
                    <h1> animal you want?</h1>
                </div>
                <div>
                    <form>
                        <input className="in" type="text" placeholder="Name" />
                        <input className="sbutten" type="submit" value="search" />
                    </form>
                </div>
            </div>
        </>
    )
}

export function Text1() {
    return (
        <>
            <div className="main1">
                <div className="about">
                    <h1>About Us</h1>
                    <p>Leaf Animals is an adoption website that connects animals in need with the right people. Based online, we work as an independent third party between those looking to rehome an animal and those wishing to adopt, foster or sponsor an animal.</p>
                    <input className="sbutten1" type="submit" value="Learn more" />
                </div>
                {/* <div className="about2">
                    <img src={img2} />
                </div> */}
            </div>



        </>
    )
}