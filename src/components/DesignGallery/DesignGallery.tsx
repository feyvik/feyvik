/** @format */
import { useState } from "react";
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { CATEGORIES, DesignItems, type DesignCategory, type DesignItem } from "./designData";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const GalleryCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
  background: #f4f4f6;
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(45, 27, 105, 0.92) 0%,
      rgba(45, 27, 105, 0.2) 55%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    color: white;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .overlay-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    color: rgba(255,255,255,0.7);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transform: translateY(6px);
    opacity: 0;
    transition: all 0.3s ease 0.05s;
  }

  .overlay-title {
    font-size: 15px;
    font-weight: 600;
    transform: translateY(6px);
    opacity: 0;
    transition: all 0.3s ease 0.1s;
    margin-top: 4px;
  }

  .overlay-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    color: rgba(255,255,255,0.85);
    margin-top: 8px;
    transform: translateY(8px);
    opacity: 0;
    transition: all 0.3s ease 0.15s;
  }

  &:hover .overlay-tag,
  &:hover .overlay-title,
  &:hover .overlay-btn {
    transform: translateY(0);
    opacity: 1;
  }
`;

const CategoryBtn = styled.button<{ $active: boolean }>`
  border-radius: 50px !important;
  padding: 0.5rem 1.25rem !important;
  font-size: 0.8rem !important;
  font-weight: 600 !important;
  transition: all 0.2s ease !important;
  background: ${({ $active }) => ($active ? "#3D5AFE" : "transparent")} !important;
  color: ${({ $active }) => ($active ? "#ffffff" : "#555")} !important;
  border: 1.5px solid ${({ $active }) => ($active ? "#3D5AFE" : "#ddd")} !important;
  box-shadow: none !important;
  transform: none !important;

  &:hover {
    background: ${({ $active }) => ($active ? "#3D5AFE" : "rgba(61,90,254,0.07)")} !important;
    border-color: #3D5AFE !important;
    color: ${({ $active }) => ($active ? "#fff" : "#3D5AFE")} !important;
    transform: none !important;
    box-shadow: none !important;
  }
`;

type ModalProps = {
  item: DesignItem;
  onClose: () => void;
};

const DesignModal = ({ item, onClose }: ModalProps) => (
  <div
    onClick={onClose}
    className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 px-4">
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-2xl bg-white dark:bg-[#0d0d14] rounded-2xl overflow-hidden shadow-2xl">
      <button
        type="button"
        style={{ padding: 0 }}
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors">
        <FeatherIcon icon="x" size={18} />
      </button>

      <div className="w-full aspect-video bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 space-y-3">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-[#3D5AFE]/10 text-[#3D5AFE]"
              style={{ fontSize: "12px" }}>
              {tag}
            </span>
          ))}
        </div>
        <h4 className="leading-tight dark:text-white">{item.title}</h4>
        {item.client && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Client: {item.client}
          </p>
        )}
      </div>
    </div>
  </div>
);

export default function DesignGallery() {
  const [active, setActive] = useState<DesignCategory>("all");
  const [selected, setSelected] = useState<DesignItem | null>(null);
  const animRef = useScrollAnimation();

  const filtered =
    active === "all"
      ? DesignItems
      : DesignItems.filter((item) => item.category === active);

  return (
    <section className="py-24 px-6">
      <div ref={animRef} className="animate-on-scroll max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] uppercase mb-3">
              Graphic Design
            </p>
            <h2 className="leading-tight dark:text-white">
              Design Work
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mt-3 leading-relaxed">
              Brand identities, social graphics, and print work — where visual
              language meets intentional craft.
            </p>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(({ key, label }) => (
            <CategoryBtn
              key={key}
              $active={active === key}
              onClick={() => setActive(key)}>
              {label}
            </CategoryBtn>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <GalleryCard key={item.id} onClick={() => setSelected(item)}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="overlay">
                  <span className="overlay-tag">{item.tags[0]}</span>
                  <p className="overlay-title">{item.title}</p>
                  <span className="overlay-btn">
                    View <FeatherIcon icon="zoom-in" size={13} />
                  </span>
                </div>
              </GalleryCard>
            ))}

            {/* "More coming" placeholder when few items */}
            {filtered.length < 3 && (
              <div className="rounded-2xl border-2 border-dashed border-[#3D5AFE]/20 bg-[#3D5AFE]/03 aspect-[4/3] flex flex-col items-center justify-center gap-3 text-center p-6">
                <div className="w-12 h-12 rounded-full bg-[#3D5AFE]/10 flex items-center justify-center">
                  <FeatherIcon icon="plus" size={20} className="text-[#3D5AFE]" />
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  More work coming soon
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#3D5AFE]/10 flex items-center justify-center">
              <FeatherIcon icon="image" size={24} className="text-[#3D5AFE]" />
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              No work in this category yet — check back soon.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 pt-10 border-t border-gray-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Want to work together on a brand or design project?
          </p>
          <Link
            to="/"
            state={{ scrollTo: "contact" }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3D5AFE] hover:underline">
            Get in touch <FeatherIcon icon="arrow-right" size={15} />
          </Link>
        </div>
      </div>

      {selected && (
        <DesignModal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
