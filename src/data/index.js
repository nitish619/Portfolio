import jagruti from "@/assets/company/jagruti.png"
import objectDetect from "@/assets/object-detect.png"
import stm32 from "@/assets/stm32.png"
import yt from "@/assets/yt.png"
import nikestore from "@/assets/nikestore.png";
import frostEcommerce from "@/assets/frostecommerce.png";
import uart from "@/assets/uart.webp";

export const navBar = [
  // {
  //   name:"Home",
  //   href:"/",
  // },
  {
    name:"About",
    href:"#about",
  },
  {
    name:"Work",
    href:"#experience",
  },
  {
    name:"Projects",
    href:"#projects",
  },
  {
    name:"Contact",
    href:"#contact",
  },
]

export const projects = [
  {
    title: "E-commerce website(MERN STACK)",
    description: "I have built an e-commerce website using the MERN stack for purchasing products online. The platform offers a seamless shopping experience with product browsing, secure checkout, and user-friendly features.",
    image: frostEcommerce,
    link: "https://github.com/nitish619/ecommerce-mern"
  },
  {
    title: "E-commerce Website (Nike Store)",
    description: "Designed and developed a dynamic e-commerce website for a Nike store using HTML, CSS, and JavaScript.",
    image: nikestore,
    link: "https://github.com/nitish619/Nike-store-clone"
  },
  {
    title: "YouTube clone",
    description: "I have develop a YouTube web page clone using HTML and CSS",
    image: yt,
    link: "https://github.com/nitish619/YouTube-clone"
  },
  {
    title: "Multi object detection and analysis with different sensors",
    description: "We develop a system that is capable of adjusting light. (Technologies/Tools Used: LiDAR Sensors, IR Sensors, Arduino UNO, Arduino IDE.)",
    image: objectDetect,
    link: "https://github.com/nitish619"
  },
  {
    title: "Design and implementation of uart using verilog",
    description: "UART is designed using Verilog and implemented successfully on Spartan6 FPGA Board. Functionality of UART is demonstrated by interfacing Bluetooth module HC05 and transferring numbers serially from mobile application to LED on FPGA Board with 650 baud rate.",
    image: uart,
    link: "https://github.com/nitish619"
  },
  {
    title: "Password based security lock system using STM32",
    description: "Made a security door lock, when the entered password is compared with the known password. This microcontroller is based on the STM32.",
    image: stm32,
    link: "https://github.com/nitish619"
  },
];

export const experiences =[
  {
    company: "Jagruti Rehabilition Center",
    logo: jagruti, // Replace with actual path
    title: "Web Developer",
    duration: "Dec 2024 - Present",
    description: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    company: "Jagruti Rehabilition Center",
    logo: jagruti, // Replace with actual path
    title: "Web Developer Intern",
    duration: "Oct 2024 - Dec 2024",
    description: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
]