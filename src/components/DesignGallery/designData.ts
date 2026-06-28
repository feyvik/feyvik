/** @format */

// Thumbnails (JPG) for gallery cards
import portfolio1 from "../../assets/project/10.jpg";
import portfolio2 from "../../assets/project/11.jpg";
import portfolio3 from "../../assets/project/12.jpg";
import portfolio4 from "../../assets/project/13.jpg";
import portfolio5 from "../../assets/project/14.jpg";
import portfolio6 from "../../assets/project/15.jpg";

// Full PDF sources for modal viewer (use ?url to get the raw file URL)
import pdf2 from "../../assets/project/11.pdf?url";
import pdf3 from "../../assets/project/12.pdf?url";

export type DesignCategory = "all" | "logo" | "social" | "print";

export interface DesignItem {
  id: number;
  image: string;       // thumbnail shown in the grid card
  pdfSrc?: string;     // if set, modal shows a PDF iframe instead of the image
  title: string;
  client?: string;
  category: Exclude<DesignCategory, "all">;
  tags: string[];
}

export const DesignItems: DesignItem[] = [
  {
    id: 1,
    image: portfolio1,
    title: "Redesign of Church Flyer",
    client: "Learning",
    category: "print",
    tags: ["Flyer", "Print Design", "Layout"],
  },
  {
    id: 2,
    image: portfolio2,
    pdfSrc: pdf2,
    title: "Visual Brand Collateral",
    client: "Personal Project",
    category: "social",
    tags: ["Social Media", "Graphics", "Branding"],
  },
  {
    id: 3,
    image: portfolio3,
    pdfSrc: pdf3,
    title: "Print Design for Event",
    client: "Community Organization",
    category: "print",
    tags: ["Flyers", "Posters", "Event Materials"],
  },
  {
    id: 4,
    image: portfolio4,
    title: "Event Marketing Materials",
    client: "Corporate Client",
    category: "print",
    tags: ["Brochures", "Flyers", "Event Materials"],
  },
  {
    id: 5,
    image: portfolio5,
    title: "Social Media Campaign Assets",
    client: "Startup Company",
    category: "social",
    tags: ["Instagram", "Facebook", "Content Creation"],
  },
  {
    id: 6,
    image: portfolio6,
    title: "Logo Design for Tech Startup",
    client: "Tech Startup",
    category: "logo",
    tags: ["Logo", "Brand Identity", "Color System"],
  },
];

export const CATEGORIES: { key: DesignCategory; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "logo", label: "Logo & Brand" },
  { key: "social", label: "Social Media" },
  { key: "print", label: "Print & Flyers" },
];
