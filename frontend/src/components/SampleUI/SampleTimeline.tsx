import React from "react";

const timelineEvents = [
  { year: "1984", event: "First Macintosh computer" },
  { year: "1998", event: "iMac" },
  { year: "2001", event: "iPod" },
  { year: "2007", event: "iPhone" },
  { year: "2015", event: "Apple Watch" },
];

const TimelineIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export const SampleTimeline = () => {
  return (
    <ul className="timeline animate-float hover:animate-none">
      {timelineEvents.map((item, index) => (
        <li key={item.year}>
          {index !== 0 && <hr className="dark:bg-slate-800" />}{" "}
          {/* Add <hr> between items */}
          <div className="timeline-start">{item.year}</div>
          <div className="timeline-middle">
            <TimelineIcon />
          </div>
          <div className="timeline-end timeline-box bg-slate-200 border-slate-300 shadow-md dark:bg-slate-800 dark:border-slate-800">
            {item.event}
          </div>
          <hr className="dark:bg-slate-800" />
        </li>
      ))}
    </ul>
  );
};
