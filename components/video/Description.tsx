"use client";

import { compact } from "@/utilities/Num";
import { Video } from "@prisma/client";
import dayjs from "@/vendor/dayjs";
import { useState } from "react";

interface DescriptionProps {
  video: Video;
}
const Description: React.FC<DescriptionProps> = ({ video }) => {
  const [expanded, setexpanded] = useState(false);
  return (
    <div
      className={`bg-neutral-800 rounded-xl p-3 overflow-hidden ${
        expanded ? "h-fit" : "line-clamp-2 max-h-28"
      }`}
    >
      <div className="flex gap-3 text-neutral-200 font-medium">
        <p>{compact(video.viewCount)} views</p>
        <p>{dayjs(video.createdAt).format("MMM D , YYYY")}</p>
      </div>
      <div className={`${expanded ? "" : "line-clamp-2"}`}>
        <div className="whitespace-pre-line sm:text-sm">
          {video.description.split("\n").map((line, index) => {
            return line === "" ? <br key={index} /> : <p key={index}>{line}</p>;
          })}
        </div>
      </div>
      <p
        onClick={() => setexpanded((prev) => !prev)}
        className={`cursor-pointer ${expanded ? "mt-2" : ""}`}
      >
        {expanded ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default Description;
