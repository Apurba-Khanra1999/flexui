"use client";

import { ElementPage } from "@/components/Pages/ElementPage";
import { useParams } from "next/navigation";

function Element() {
  const params = useParams();
  const element = params?.element;
  return <ElementPage element={element as string}/>;
}

export default Element;
