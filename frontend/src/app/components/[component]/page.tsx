import ComponentPage from "@/components/Pages/ComponentPage";

interface PageProps {
  params: { component: string };
}

async function Component({ params }: PageProps) {
  const { component } = await params;
  return <ComponentPage component={component as string} />;
}

export default Component;
