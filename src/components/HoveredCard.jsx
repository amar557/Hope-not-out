function HoveredCard({ img, title, styling = "flex-grow" }) {
  return (
    <div
      className={`${styling} group flex-shrink   md:basis-[23%] lg:basis-[19%] basis-[48%]  group relative overflow-hidden  hover:cursor-pointer hover-effect`}
    >
      <img
        src={img}
        alt=""
        className=" transition-all duration-1000 h-[50vw] md:h-[30vw] w-full group-hover:scale-125"
      />
      <p className=" absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 z-20 text-white uppercase text-center font-semibold text-2xl">
        {title}
      </p>
    </div>
  );
}

export default HoveredCard;
