"use client";
import { Loader } from "@/components/ui/Loader";
import request from "@/utils/AxiosUtils";
import { GET_DOCS_LIST_WITH_CODE } from "@/utils/AxiosUtils/api";
import { useQuery } from "@tanstack/react-query";
import { ComponentWithPreviewShowcase } from "./ComponentsWithPreviewShowcase";

export const ComponentsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: [GET_DOCS_LIST_WITH_CODE],
    queryFn: async () => request({ url: GET_DOCS_LIST_WITH_CODE }),
  });
  if (isLoading) return <Loader />;
  return (
    <div>
      <ComponentWithPreviewShowcase data={data} />
    </div>
  );
};
