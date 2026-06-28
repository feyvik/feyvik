/** @format */

import AboutHero from "../components/AboutHero";
import CareerTimeline from "../components/CareerTimeline";
import ImageCarousel from "../components/ImageCarousel";
import ProfileExtras from "../components/ProfileExtras";

export default function About() {
  return (
    <div className="px-6">
      <AboutHero />
      <CareerTimeline />
      <ProfileExtras />
      <ImageCarousel />
    </div>
  );
}
