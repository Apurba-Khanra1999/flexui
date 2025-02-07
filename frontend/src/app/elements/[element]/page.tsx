
import ElementPage from "@/components/Pages/ElementPage";

interface PageProps {
  params: { element: string };
}


async function Element({params}:PageProps) {
  const { element } = await params;
  return <ElementPage element={element as string}/>;
}

export default Element;
