import { useEffect, useState } from "react";
import { footerData } from "../data/footerdata";
import { GoPlus } from "react-icons/go";

function Footer() {
  const [openFooters, setOpenFooters] = useState(
    Array(footerData.length).fill(true)
  );

  const [disableButton, setDisableButton] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setOpenFooters(Array(footerData.length).fill(true));
        setDisableButton(true);
      } else {
        setDisableButton(false);
        setOpenFooters(Array(footerData.length).fill(false));
      }
    });
  }, []);

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
          disableButton={disableButton}
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
  disableButton,
}) {
  return (
    <div className={`${styling} basis-1/4 grow-0 shrink-0`}>
      {img ? (
        <button
          className="flex md:mb-7 mb-2 items-center justify-between w-full"
          onClick={() => handleFooter(index)}
          disabled={disableButton}
        >
          <img src={imgLink} alt="" className="" />
          <div className="md:hidden block">
            <GoPlus />
          </div>
        </button>
      ) : (
        <button
          className="flex items-center md:mb-7 mb-2 justify-between w-full"
          onClick={() => handleFooter(index)}
          disabled={disableButton}
        >
          <div className="font-semibold capitalize text-xl">{heading}</div>
          <div className="md:hidden block">
            <GoPlus />
          </div>
        </button>
      )}

      <div className="md:space-y-4 space-y-1">
        {isOpen &&
          child.map((childItem, childIndex) => (
            <div key={childIndex} className="flex gap-1 md:gap-2 items-center">
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
