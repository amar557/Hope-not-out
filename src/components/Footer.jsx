import { useState } from "react";
import { footerData } from "../data/footerdata";
import { GoPlus } from "react-icons/go";

function Footer() {
  const [openFooters, setOpenFooters] = useState(
    Array(footerData.length).fill(true)
  );

  function handleFooter(index) {
    setOpenFooters((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }

  return (
    <div className="bg-[#f3f3f3] grid grid-cols-12 items-start justify-between px-4 lg:px-24 pt-20 pb-8">
      {footerData.map((data, i) => (
        <FooterBlock
          key={i}
          index={i}
          heading={data.heading}
          child={data.children}
          styling={data.styling}
          img={data.img}
          imgLink={data.imgLink}
          isOpen={openFooters[i]}
          handleFooter={handleFooter}
        />
      ))}
    </div>
  );
}

function FooterBlock({
  index,
  heading,
  child,
  styling,
  img,
  imgLink,
  isOpen,
  handleFooter,
}) {
  return (
    <div className={`${styling} basis-1/4 grow-0 shrink-0`}>
      {img ? (
        <div
          className="flex mb-7 items-center justify-between"
          onClick={() => handleFooter(index)}
        >
          <img src={imgLink} alt="" className="" />
          <button className="md:hidden block">
            <GoPlus />
          </button>
        </div>
      ) : (
        <div
          className="flex items-center mb-7 justify-between"
          onClick={() => handleFooter(index)}
        >
          <div className="font-semibold capitalize text-xl">{heading}</div>
          <button className="md:hidden block">
            <GoPlus />
          </button>
        </div>
      )}

      <div className="space-y-4">
        {isOpen &&
          child.map((childItem, childIndex) => (
            <div key={childIndex} className="flex gap-2 items-center">
              {childItem.icon && (
                <p className="text-[#878787]">{<childItem.icon />}</p>
              )}
              <p className="text-[#878787]">{childItem.child}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Footer;
