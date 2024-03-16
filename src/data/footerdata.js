import { BiMessageAltDetail } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
export const footerData = [
  {
    heading: "",
    styling: "lg:col-span-4 md:col-span-6 col-span-12",
    img: true,
    imgLink:
      "https://www.hopenotout.com/cdn/shop/files/logo_155x.png?v=1646720065",
    children: [
      { child: "customercare@hnostores.com", icon: BiMessageAltDetail },
      { child: " Call: 042-35950470", icon: IoCallOutline },
      { child: " Whatsapp: +92 329 3323332", icon: IoCallOutline },
      { child: " Whatsapp: +92 325 5222455", icon: IoCallOutline },
      { child: TiSocialFacebook, icon: "facebook" },
    ],
  },
  {
    heading: "guidlines",
    styling: "lg:col-span-2 md:col-span-6 col-span-12",
    children: [
      { child: "shipping", icon: "" },
      { child: "replacement & claim", icon: "" },
      { child: "policy", icon: "" },
    ],
  },
  {
    heading: "about us",
    styling: "lg:col-span-2 md:col-span-6 col-span-12",
    children: [{ child: "about us", icon: "" }],
  },
  {
    heading: "newsletter signup",
    styling: "lg:col-span-4 md:col-span-6 col-span-12",
    children: [
      {
        child:
          "Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers",
        icon: "",
      },
    ],
  },
];
