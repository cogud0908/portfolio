import React from "react";

export interface ProjectProps {
  title: string;
  skilles: string[];
  href: string;
  thumbnail: string;
  content: React.ReactElement[];
}
