/** @format */

const timelineData = [
  {
    year: "2019",
    title: "Primedsoft — Frontend Developer (Intern)",
    description:
      "Started my journey in tech, learning HTML, CSS, JavaScript, and Bootstrap while building my first responsive interfaces.",
    side: "left",
  },
  {
    year: "2020",
    title: "HelixGade — Frontend Developer",
    description:
      "Built frontend interfaces using Angular and React, strengthening my foundation in component-based development.",
    side: "right",
  },
  {
    year: "2021",
    title: "HouseAfrica — Lead Frontend Engineer",
    description:
      "Led frontend engineering for three years, building and refactoring responsive applications across Angular and React, and working closely with designers to ship consistent, polished products.",
    side: "left",
  },
  {
    year: "2022",
    title: "KodeCamp — React Tutor and Team Lead",
    description:
      "Taught React development, led student teams through real projects, and ran one-on-one sessions to close individual learning gaps.",
    side: "right",
  },
  {
    year: "2024",
    title: "Phreetech — Frontend Engineer",
    description:
      "Converted design prototypes into fully responsive layouts and integrated APIs, optimizing performance through refactoring and lazy loading.",
    side: "left",
  },
  {
    year: "2025",
    title: "Founder, FLE Tribe",
    description:
      "Founded a community helping beginners learn tech through structured, hands-on support — making technical education more accessible.",
    side: "right",
  },
];

export default function CareerTimeline() {
  return (
    <div className="min-h-screen py-16">
      <div className="text-center mb-20">
        <h2 className="text-5xl dark:text-light">Career Timeline</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2" />

        <div className="flex flex-col gap-16">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative grid grid-cols-2 gap-x-12 items-start">
              <div className="absolute left-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-[#3D5AFE] -translate-x-1/2 z-10" />

              {item.side === "left" ? (
                <>
                  <div className="text-right pr-8">
                    <p className="text-2xl text-[#3D5AFE] mb-3">{item.year}</p>
                    <h3 className="text-xl mb-3 dark:text-light">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed">{item.description}</p>
                  </div>
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <div className="pl-8">
                    <p className="text-2xl text-[#3D5AFE] mb-3">{item.year}</p>
                    <h3 className="text-xl mb-3 dark:text-light">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed">{item.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
