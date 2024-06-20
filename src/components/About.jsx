import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] mt-20 border-[#a1b562]">
        <div className="flex flex-row justify-between items-center">
          <p>What you can expect:</p>
          <div className="py-10 relative flex flex-col justify-between items-center">
          <p>
            We create tailored presentations to help<br></br> you persuade your
            colleagues, clients, or<br></br> investors. Whether it's live or digital,<br></br>
            delivered for one or a hundred people.<br></br>
          </p>
          <br></br>
          <br></br>
          <p>
          We believe the mix of strategy and<br></br> design (with a bit of coffee) is what <br></br>
          makes your message clear, convincing, <br></br>and captivating.
          </p>
          </div>
          <p>S: 
            Instagram <br />
            Behance   <br />
            facebook  <br />
            Linkedin  <br />
          </p>
        </div>
      </div>
      <div className="w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#a1b562]">
        <div className="w-1/2">
            <h1 className="text-[3.5vw]">Our approach:</h1>
            <button className="flex uppercase gap-5 items-center px-8 py-4 bg-zinc-900 mt-10 rounded-full text-white ">Read More
                <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]">
        </div>
      </div>
    </div>
  );
}

export default About;
