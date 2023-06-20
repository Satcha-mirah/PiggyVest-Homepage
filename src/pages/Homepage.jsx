import React from "react";
import Logo from "../assets/logo.svg";
import Rect from "../assets/rect.png";
import Header from "../assets/headerImg.png";
import Card1 from "../assets/card1.png";
import Card2 from "../assets/card2.png";
import Team from "../assets/team-image.jpg";
import Img1 from "../assets/image1.png";
import Img2 from "../assets/image2.png";
import Img3 from "../assets/image3.png";
import Compliance from "../assets/compliance-f24fa70ce98ff6f4dcdfddeefc2bdd5a.webp";
import "../index.css";
function HomePage() {
    return (
        <div className="Header-container w-full justify-evenly">
            <div className=" flex w-90 justify-items-center mr-20 ml-20 mt-2">
                <div className="flex flex-row  justify-evenly ">
                    <img src={Logo} alt="" className="pt-8  ml-9 mb-6" />
                    <div className="flex flex-row pt-30 list-none space-x-12 mx-10 justify-between items-center font-semibold mt-5 ">
                        <li>Save</li>
                        <li>Invest</li>
                        <li>Stories</li>
                        <li>FAQs</li>
                        <li>Resources</li>
                    </div>
                    <div className="flex flex-row w-80 justify-between mt-7 ml-14 ">
                        <button className="h-12 w-20 bg-white border-2 border-black text-black rounded-lg font-semibold">
                            Sign in
                        </button>
                        <br></br>

                        <button className="h-12 w-56 bg-black text-white rounded-lg font-semibold">
                            Create free Account
                        </button>
                    </div>
                </div>
            </div>

            <div className="content flex item-center mr-20 ml-20 mt-20">
                <div className="left-content flex flex-col">
                    <button className="h-8 w-40 bg-gray-200 text-blue-500 font-semibold ml-10 rounded-xl mb-10">
                        Our Mission
                    </button>
                    <h2 className="ml-10 font-semibold text-6xl leading-tight">
                        To give everyone<br></br> the power to better<br></br>{" "}
                        manage & grow<br></br> their finances.
                    </h2>
                </div>

                <div className="right-content ml-5">
                    <div className="relative">
                        <img src={Rect} alt="" className="ml-40 " />
                        <img
                            src={Header}
                            alt=""
                            className="absolute right-10 top-10 bottom-0"
                        />
                        <img
                            src={Card1}
                            alt=""
                            className="absolute h-20 w-50 top-40 bottom-0 left-10 "
                        />
                        <img
                            src={Card2}
                            alt=""
                            className="absolute h-20 w-50 top-[80%] bottom-[20%] left-[82%] right-[0px]"
                        />
                    </div>
                </div>
            </div>

            <div className="second-content flex flex-row items-center gap-20 mt-[100px] max-w-[1200px] mx-auto w-[90%] pb-[30px]">
                <div className="flex-1 mt-30">
                <img src={Team} className="rounded-xl w-full mt-[30px]"/>
                </div>
                <div className="right-content flex-1 ">
                    <h2 className=" font-serif text-4xl mb-[20px]">A Short Story</h2>
                    <div className=" font-serif">
                       <p className="mb-[20px]">PiggyVest is the first online "Savings and
                        investment"app in West
                        Africa. We first launched as "Piggybanking" on the 7th
                        of January
                        2016 as a savings-only platform.</p> 

                       <p className="mb-[20px]">For 3 years, we offered only savings to our users. Then
                        in April of
                        2019, we rebranded to "PiggyVest" and began offering
                        direct
                        investment opportunities to users in addition to
                        savings.</p>
                        
                       <p className="mb-[20px]">5 years on we have continued to deliver
                        excellent service to our
                        4,000,000 users and counting, helping them manage their
                        finances with simplicity and transparency. Combined, our
                        users save & invest billions of Naira every month that they
                        would have instead spent</p>
                        

                       <p className="mb-[20px]">PiggyVest is on a mission 'to give everyone the power to
                        better
                        manage & grow their finances', and we intend to be the
                        best at
                        this.From all of us at PiggyVest. thank you❤️</p>
                    </div>
                </div>
            </div>
            <div className="w-[100%] h-[200px] bg-gray-100  mb-[100px]">
                <div className="max-w-[1200px] mx-auto w-[90%] flex flex-row gap-20">
                <h2 className="text-4xl font-semibold mt-[70px]">As featured in</h2>
                <img src={Img1} alt="" className="h-[50px] w-[200px] mt-[70px]"/>
                <img src={Img2} alt="" className="h-[50px] w-[200px] mt-[70px]"/>
                <img src={Img3} alt="" className="h-[50px] w-[200px] mt-[70px]"/>
                </div>                
            </div>

            <div className="flex flex-row  max-w-[1200px] mx-auto w-[90%] gap-[150px]">
             <div className="flex flex-col mb-[30px]">
                <img src={Logo} alt="" className="h-[50px] w-[200px] mb-[20px]"/>
                <img src={Compliance} alt="" className="h-[100px] w-[200px] border border-b-gray-200 rounded-lg"/>
             </div>

             <div className="flex flex-col">
               <h2 className="font-semibold">Products</h2>
               <ul className="list-none">
               <li>Piggybank</li>
               <li>Invest</li>
               <li>Safelock</li>
               <li>Target Savings</li>
               <li>Flex Naira</li>
               </ul>
             </div>

             <div className="flex flex-col">
               <h2 className="font-semibold">Company</h2>
               <ul className="list-none">
               <li>About</li>
               <li>FAQs</li>
               <li>Blog</li>
               </ul>
             </div>

             <div className="flex flex-col">
               <h2 className="font-semibold">Legal</h2>
               <ul className="list-none">
               <li>Terms</li>
               <li>Privacy</li>
               <li>Security</li>
               </ul>
             </div>

             <div className="flex flex-col leading-loose">
              <div className="flex flex-row gap-[10px] mb-[10px]">
                <i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z"/></svg></i>
                <i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M0 0v16h16V0H0zm12.8 5.6v.3c0 3.3-2.5 7-7 7c-1.4 0-2.7-.4-3.8-1.1h.6c1.2 0 2.2-.4 3.1-1.1c-1.1 0-2-.7-2.3-1.7h.5c.2 0 .4 0 .6-.1c-1.1-.2-2-1.2-2-2.4c.3.2.7.3 1.1.3c-.7-.4-1.1-1.2-1.1-2c0-.5.1-.9.3-1.2C4 5.1 5.9 6 7.9 6.1c0-.2-.1-.4-.1-.6C7.8 4.1 8.9 3 10.3 3c.7 0 1.3.3 1.8.8c.6-.1 1.1-.3 1.6-.6c-.2.6-.6 1.1-1.1 1.4c.5-.1 1-.2 1.4-.4c-.3.6-.7 1-1.2 1.4z"/></svg></i>
                <i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M224 202.66A53.34 53.34 0 1 0 277.36 256A53.38 53.38 0 0 0 224 202.66Zm124.71-41a54 54 0 0 0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33ZM224 338a82 82 0 1 1 82-82a81.9 81.9 0 0 1-82 82Zm85.38-148.3a19.14 19.14 0 1 1 19.13-19.14a19.1 19.1 0 0 1-19.09 19.18ZM400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48Zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0c-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132c1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0c25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88Z"/></svg></i>
              </div>
              <p>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
              <p>contact@piggyvest.com</p>
              <p>+234 700 933 933 933</p>
             </div>


            </div>

        <div className="mb-[50px] max-w-[1200px] mx-auto w-[90%]">
            <p className="flex items-center justify-center pb-[15px]">Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our <br></br>customers have saved and invested billions of Naira that they would normally be tempted to spend</p>
            <div>
                <p className="text-blue-700 flex items-center justify-center">2016 - 2023 PiggyTech Global Limited - RC 1405222</p>
            </div>
        </div>
            

        </div>
    );
}
export default HomePage;