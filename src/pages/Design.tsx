/** @format */
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import DesignGallery from "../components/DesignGallery/DesignGallery";

export default function Design() {
  return (
    <div className="min-h-screen">
      <div
        className="pt-32 pb-16 px-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(45,27,105,0.06) 0%, rgba(61,90,254,0.05) 60%, rgba(39,151,250,0.04) 100%)",
        }}>
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 hover:text-[#3D5AFE] transition-colors mb-10">
            <FeatherIcon icon="arrow-left" size={16} />
            Back to Home
          </Link>

          <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] uppercase mb-4">
            Creative Work
          </p>
          <h1 className="dark:text-light mb-4">
            Graphic Design
            <span className="text-[#3D5AFE]"> Portfolio</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed">
            From brand identity systems to social graphics and print — visual
            work that communicates clearly and leaves an impression.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Logo & Brand Identity",
              "Social Media Graphics",
              "Print & Flyers",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-4 py-1.5 rounded-full border border-[#3D5AFE]/25 text-[#3D5AFE] bg-[#3D5AFE]/05"
                style={{ fontSize: "12px" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <DesignGallery />
    </div>
  );
}
