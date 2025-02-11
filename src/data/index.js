import jagruti from "@/assets/company/jagruti.png"

export const navBar = [
  {
    name:"Home",
    href:"/",
  },
  {
    name:"About",
    href:"#about",
  },
  {
    name:"Experience",
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
    id: 1,
    title: "Multi object detection and analysis with different sensors",
    description: "We develop a system that is capable of adjusting light. (Technologies/Tools Used: LiDAR Sensors, IR Sensors, Arduino UNO, Arduino IDE.)",
    image: "/object-detect.png"
  },
  {
    id: 2,
    title: "Design and implementation of uart using verilog",
    description: "UART is designed using Verilog and implemented successfully on Spartan6 FPGA Board. Functionality of UART is demonstrated by interfacing Bluetooth module HC05 and transferring numbers serially from mobile application to LED on FPGA Board with 650 baud rate.",
    image: "/uart.webp"
  },
  {
    id: 3,
    title: "Password based security lock system using STM32",
    description: "Made a security door lock, when the entered password is compared with the known password. This microcontroller is based on the STM32.",
    image: "/stm32.png"
  },
  {
    id: 4,
    title: "E-commerce website(MERN STACK)",
    description: "I have built an e-commerce website using the MERN stack for purchasing products online. The platform offers a seamless shopping experience with product browsing, secure checkout, and user-friendly features.",
    image: "/frostecommerce.png"
  },
  {
    id: 5,
    title: "E-commerce Website (Nike Store)",
    description: "Designed and developed a dynamic e-commerce website for a Nike store using HTML, CSS, and JavaScript.",
    image: "/nikestore.png"
  },
  {
    id: 6,
    title: "YouTube clone",
    description: "I have develop a YouTube web page clone using HTML and CSS",
    image: "/yt.png"
  },
];

export const experiences =[
  {
    company: "Google",
    logo: jagruti, // Replace with actual path
    title: "Software Engineer",
    duration: "Jan 2022 - Present",
    description: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    company: "Microsoft",
    logo: jagruti, // Replace with actual path
    title: "Frontend Developer",
    duration: "Aug 2020 - Dec 2021",
    description: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
]