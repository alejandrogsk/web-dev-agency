import Image from "next/image";
import React from "react";


const HeroSection = ({ hero }) => {
    const { title, subtitle, button } = hero;

    return (
        <>
            <section className="home-hs">
                <div className="home-hs__content ml-layout">
                    <h1>
                        {title} <span className="orange-point">.</span>
                    </h1>

                    <p>{subtitle}</p>

                    <a>{button}</a>
                </div>
            
                <div className="home-hs__img">
                    <img
                        className="home-hs__img-laptop"
                        src="/img/images/home-laptop.png"
                    />

                    <div className="home-hs__img-card">
                        <div>
                            <span>+</span>
                            <h6>200%</h6>
                            <p>Es lo que crecerá el ecommerce los proxioms años.</p>
                        </div>
                        <svg
                            width="205"
                            height="99"
                            viewBox="0 0 205 99"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.9193 66.5695C6.02211 69.3178 -5 88.1821 -5 88.1821V112H203.016C203.016 112 250.62 7.81581 216.961 1.32834C189.834 -3.90038 182.522 55.0238 154.817 56.8659C137.533 58.0151 120.178 43.8718 103.067 46.2801C85.9906 48.6835 90.7867 69.4332 73.6401 71.4213C57.6087 73.2801 39.8461 64.1238 23.9193 66.5695Z"
                                fill="url(#paint0_linear_446_113)"
                                stroke="#F84525"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_446_113"
                                    x1="106.487"
                                    y1="21.5303"
                                    x2="106.487"
                                    y2="112"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#F84525" />
                                    <stop
                                        offset="1"
                                        stopColor="#FFC300"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>


            </section>
<HeroMobile />
        </>
    );
};

export default HeroSection;

const HeroMobile = () => {
    return (
        <div className="home-hs-m__img">
            <img
                className="home-hs-m__img-laptop"
                src="/img/images/home-laptop.png"
            />

            <div className="home-hs-m__img-card">
                <div>
                    <span>+</span>
                    <h6>200%</h6>
                    <p>Es lo que crecerá el ecommerce los proxioms años.</p>
                </div>
                <svg
                    width="307"
                    height="174"
                    viewBox="0 0 307 174"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-15.5 94C-47.7471 98.9519 -63 131.085 -63 131.085V174H311.803C311.803 174 351.528 -42.2338 306 -0.500007C264 38 264.92 93.181 215 96.5C183.858 98.5706 161.832 70.3198 131 74.6592C100.232 78.9896 91.8948 130.418 61 134C32.1145 137.349 13.197 89.5933 -15.5 94Z"
                        fill="url(#paint0_linear_492_3)"
                        stroke="#F84525"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_492_3"
                            x1="137.878"
                            y1="10.9915"
                            x2="137.878"
                            y2="174"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#F84525" />
                            <stop
                                offset="1"
                                stopColor="#FFC300"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>

    );
};
