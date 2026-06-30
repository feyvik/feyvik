/** @format */

import styled from "styled-components";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const certificates = [
  {
    title: "Thrive in a Remote Environment",
    issuer: "talstack",
    year: "2025",
    credential:
      "https://app.talstack.com/certificate/51cff7e4-f9b9-40f8-8e41-107c2f5df506/verification",
  },
  {
    title: "Take Ownership of Your Work",
    issuer: "talstack",
    year: "2025",
    credential:
      "https://app.talstack.com/certificate/ca600643-034b-47e8-a13b-782e49ce9d6d/verification",
  },
  {
    title: "Effective Problem Solving",
    issuer: "talstack",
    year: "2025",
    credential:
      "https://app.talstack.com/certificate/1982ccbb-389c-4d72-b09a-52c200dca069/verification",
  },
  {
    title: "Collaborate with Your Team",
    issuer: "talstack",
    year: "2025",
    credential:
      "https://app.talstack.com/certificate/9ee0201d-58f7-42d2-adfe-b147ff1f202a/verification",
  },
  {
    title: "Time Management",
    issuer: "talstack",
    year: "2025",
    credential:
      "https://app.talstack.com/certificate/76848f86-c605-4719-8bf9-ee9aa0fd10c3/verification",
  },
];

const volunteerItems = [
  {
    role: "DevFest Volunteer — Registration",
    org: "DevFest",
    period: "2025",
    description:
      "Volunteered on the registration team for DevFest, supporting attendee check-in and on-the-day coordination for a large developer community gathering.",
  },
  {
    role: "Tech4Good Volunteer — Registration",
    org: "T4G",
    period: "2025",
    description:
      "Volunteered on the registration team for T4G, supporting attendee check-in and on-the-day coordination for a large developer community gathering.",
  },
  {
    role: "Community Lead & Founder",
    org: "FLE Tribe",
    period: "2025 – Present",
    description:
      "Built and continue to grow a free peer-learning community focused on frontend engineering, pairing beginners with mentors and creating structured curricula that are openly accessible.",
  },
  {
    role: "Tech Educator",
    org: "Independent",
    period: "2022 – Present",
    description:
      "Deliver free workshops and one-on-one sessions on HTML, CSS, JavaScript, and React for people entering tech from non-traditional backgrounds.",
  },
];

/* ── shared styled primitives ── */

const Card = styled.div`
  border: 1px solid rgba(45, 27, 105, 0.12);
  border-radius: 16px;
  background: #fff;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  .dark & {
    background: #1a1a2e;
    border-color: rgba(255, 255, 255, 0.08);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px rgba(45, 27, 105, 0.1);
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 50px;
  background: rgba(61, 90, 254, 0.08);
  color: #3d5afe;
`;

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] uppercase mb-3">
    {text}
  </p>
);

const Certificates = () => {
  const animRef = useScrollAnimation();

  return (
    <section className="py-16 px-6">
      <div ref={animRef} className="animate-on-scroll max-w-6xl mx-auto">
        <SectionLabel text="Certifications" />
        <h2 className="leading-tight dark:text-light mb-2">
          Learning Never Stops
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mb-10 leading-relaxed">
          A selection of courses and certifications that shaped my technical
          foundation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certificates.map((cert, i) => (
            <Card key={i} className="p-6 flex gap-4 items-start stagger-child">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#3D5AFE]/10 flex items-center justify-center text-[#3D5AFE]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="leading-snug dark:text-light mb-1">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge>{cert.year}</Badge>
                  {cert.credential && (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#3D5AFE] hover:underline inline-flex items-center gap-1">
                      View credential
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="11"
                        height="11">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Volunteer = () => {
  const animRef = useScrollAnimation();

  return (
    <section
      className="py-16 px-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(45,27,105,0.04) 0%, rgba(39,151,250,0.03) 100%)",
      }}>
      <div ref={animRef} className="animate-on-scroll max-w-6xl mx-auto">
        <SectionLabel text="Volunteer & Community" />
        <h2 className="leading-tight dark:text-light mb-2">
          Giving Back to the Ecosystem
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mb-10 leading-relaxed">
          Teaching, mentoring, and community-building alongside the day job —
          because access to tech education should never be a privilege.
        </p>

        <div className="flex flex-col gap-6">
          {volunteerItems.map((item, i) => (
            <Card
              key={i}
              className="p-6 flex flex-col sm:flex-row gap-5 stagger-child">
              <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0">
                <div className="w-10 h-10 rounded-xl bg-[#2D1B69]/10 dark:bg-[#3D5AFE]/15 flex items-center justify-center text-[#2D1B69] dark:text-[#3D5AFE]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="18"
                    height="18">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="hidden sm:block w-px flex-1 bg-gray-200 dark:bg-white/10 mt-3" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h4 className="leading-snug dark:text-white">{item.role}</h4>
                  <Badge>{item.period}</Badge>
                </div>
                <p className="text-sm font-semibold text-[#3D5AFE] mb-3">
                  {item.org}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ProfileExtras() {
  return (
    <>
      <Certificates />
      <Volunteer />
    </>
  );
}
