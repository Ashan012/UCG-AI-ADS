import React, { type Dispatch } from "react";
import type { Project } from "../types";

function ProjectCard({
  gen,
  setGenration,
  forCommunity = false,
}: {
  gen: Project;
  setGenration: Dispatch<React.SetStateAction<Project[]>>;
  forCommunity?: boolean;
}) {
  return (
    <div key={gen.id} className="mb-4 break-inside-avoid">
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition group"></div>

      {/* Preview */}
      <div>
        {gen.genratedImage && (
          <img
            src={gen.genratedImage}
            alt={gen.productName}
            className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${gen.genratedVideo ? "group-hover:opacity-0" : "group-hover:scale-105"}`}
          />
        )}
      </div>
      {/* Details */}
      <div></div>
    </div>
  );
}

export default ProjectCard;
