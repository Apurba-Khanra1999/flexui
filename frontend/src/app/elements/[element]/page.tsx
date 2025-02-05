
import ElementPage from "@/components/Pages/ElementPage";

async function Element({params}: {params: {element: string}}) {
  const { element } = await params;
  return <ElementPage element={element as string}/>;
}

export default Element;
