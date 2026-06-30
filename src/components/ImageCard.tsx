/** @format */
import img1 from "../assets/project/1.jpg";
import img2 from "../assets/project/2.jpg";
import img3 from "../assets/project/3.jpg";
import img4 from "../assets/project/4.jpg";
import img5 from "../assets/project/5.jpg";
import img6 from "../assets/project/6.jpg";
import img7 from "../assets/project/7.jpg";
import img8 from "../assets/project/8.jpg";
import img9 from "../assets/project/9.jpg";
import img10 from "../assets/project/16.png";
import img11 from "../assets/project/17.png";

export interface Image {
  id: number;
  image: string;
  name: string;
  description: string;
  link: string;
}

export const ProjectImage: Image[] = [
  {
    id: 1,
    image: img3,
    name: "Personal portfolio website",
    description:
      "A personal portfolio site showcasing my work, skills, and experience as a frontend engineer — built to give visitors a clear picture of my background and the projects I've shipped.",
    link: "https://feyvik.vercel.app/",
  },
  {
    id: 2,
    image: img10,
    name: "Student Micro gig",
    description:
      "The fastest way for Nigerian students to earn from short remote tasks — Data Entry, Transcription, Research, and more. Get paid directly to your bank account.",
    link: "https://recallr.com.ng/",
  },
  {
    id: 3,
    image: img11,
    name: "Drag-and-drop event website builder",
    description:
      "Drag-and-drop event website builder, Angular 19 with SSR (architecture + Claude-assisted implementation)",
    link: "https://recallr.com.ng/",
  },
  {
    id: 4,
    image: img1,
    name: "HouseAfrica Website",
    description:
      "HouseAfrica a startup with the aim of building a blockchain based property record system to help homer buyers and financial companies to access, verify and value properties starting from Real Estate Project Virtualization.",
    link: "https://houseafrica.io/",
  },
  {
    id: 5,
    image: img2,
    name: "Sytemap",
    description:
      "A digital property registry system that helps estate developers, property buyers, and private estates to digitally register and track their property status.",
    link: "https://developer.sytemap.com/map/crown-field-estate",
  },
  {
    id: 6,
    image: img4,
    name: "FLE Tribe Community Website",
    description:
      "The FLE Tribe Blog, is an extension of The FLE Tribe's mission to support beginners in their tech journeys. It offers a collection of beginner-friendly articles, stories, and resources designed to inspire and guide aspiring tech enthusiasts.",
    link: "https://blog.thefletribe.com.ng",
  },
  {
    id: 7,
    image: img5,
    name: "Chakam App",
    description:
      "The Chakam trend was one of the funniest moments to come out of Nigerian Gen Z culture. It’s that internet slang that mimics a camera click “chakam!” basically like saying “Gotcha!” or “Screenshot!” when someone makes a bold statement you just know they’ll switch up on later.",
    link: "https://chakam.vercel.app/",
  },
  {
    id: 8,
    image: img6,
    name: "Covid-19",
    description:
      "its a website that provides global update on coronavirus and guides to prevent the spread of coronavirus.",
    link: "https://covid-19-app-ccb27.web.app/",
  },
  {
    id: 9,
    image: img7,
    name: "User Management Dashboard",
    description:
      "This is a User Management Dashboard built to help admins or authorized users efficiently manage user data and system access.",
    link: "https://user-dashboard-mauve.vercel.app/user-dashboard",
  },
  {
    id: 10,
    image: img8,
    name: "Zeopool Website",
    description:
      "An Africa-based stakepool focused on educating women in blockchain technology.",
    link: "https://zoepool.com/",
  },
  {
    id: 11,
    image: img9,
    name: "Image Link Generator",
    description:
      "It is a drag and drop image uploader. It is built with React.js, Firebase storage and material ul",
    link: "https://image-uploader-one.vercel.app/",
  },
];
