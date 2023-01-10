import React from "react";

export interface ProjectProps {
  title: string;
  skilles: string[];
  href?: string;
  thumbnail: string;
  summary: React.ReactElement[];
}
