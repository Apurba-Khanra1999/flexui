import ComponentPage from "@/components/Pages/ComponentPage";

interface PageProps {
  params: Promise<{ component: string }>;
}

async function Component({ params }: PageProps) {
  const component = (await params).component;
  return <ComponentPage component={component} />;
}

export default Component;
