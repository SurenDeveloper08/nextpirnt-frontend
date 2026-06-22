"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(
  () => import("react-quill-new"),
  { ssr: false }
);

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function BlogEditor({
  value,
  onChange,
}: Props) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      className="bg-white"
    />
  );
}