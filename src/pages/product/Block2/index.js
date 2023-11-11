import React, { useState } from "react";

function Block2() {
  const imageData = [
    {
      id: 1,
      ima: "/images/product1.webp",
      msg: "Adjustable Ring – Cuban Link – Tarnish Free | Nish Hair X Evil Eye Jewel",
      pr: "Rs. 1,099.00",
    },
    {
      id: 2,
      ima: "/images/product2.webp",
      msg: "ARATA CLEANSING SHAMPOO",
      pr: "Rs. 299.00",
    },
    {
      id: 3,
      ima: "/images/product3.webp",
      msg: "Arata Nourishing Conditioner",
      pr: "Rs. 675.00",
    },
    {
      id: 4,
      ima: "/images/product4.webp",
      msg: "Arata Hydrating Shampoo",
      pr: "Rs. 675.00",
    },
    {
      id: 5,
      ima: "/images/product5.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 6,
      ima: "/images/product6.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 7,
      ima: "/images/product7.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 8,
      ima: "/images/product8.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 9,
      ima: "/images/product9.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 10,
      ima: "/images/product10.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 11,
      ima: "/images/product11.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
    {
      id: 12,
      ima: "/images/product12.webp",
      msg: "Arata Nourishing Hempocado Oil",
      pr: "Rs. 675.00",
    },
  ];

  const [identity, setIdentity] = useState(null);

  const handleShowDiv = (i) => {
    setIdentity(i + 1);
  };
  const handleHideDiv = (i) => {
    setIdentity(null);
  };

  return (
    <div className="w-full h-full ">
      <div className="flex flex-wrap h-max gap-5 ml-5">
        {imageData.map((item, i) => (
          <div key={item.id} className=" w-[350px] h-max overflow-hidden">
            <div
              onMouseEnter={() => handleShowDiv(i)}
              onMouseLeave={handleHideDiv}
              className="relative border border-black overflow-hidden"
            >
              <div className="w-full h-max overflow-y-hidden">
                <a href="/product/details">
                  <img src={item.ima} alt="" className="bg-cover" />
                </a>
              </div>

              <div
                className={`absolute bottom-0 z-[999] duration-500  transition-transform left-0 bg-[#8E9491] 
                   w-full  justify-center flex items-center  text-white font-semibold text-xs h-10 
                  ${item.id !== identity ? "translate-y-12" : "translate-y-0 "}
                  `}
              >
                {" "}
                QUICK VIEW{" "}
              </div>
            </div>
            <div>
              <p className="text-center font-semibold ">{item.msg}</p>
              <p className="text-[#14B4B0] text-center font-semibold">
                {item.pr}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Block2;