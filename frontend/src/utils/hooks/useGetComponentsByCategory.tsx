"use client";
import { useQuery } from "@tanstack/react-query";
import request from "../AxiosUtils";
import { GET_DOCS_LIST_WITH_CODE } from "../AxiosUtils/api";

export default function useGetComponentsByCategory({
  categoryId,
}: {
  categoryId: string | number;
}) {
  console.log(categoryId);
  const { data, isLoading } = useQuery({
    refetchOnMount: true,
    queryKey: [GET_DOCS_LIST_WITH_CODE],
    queryFn: async () =>
      request({
        url: categoryId
          ? `${GET_DOCS_LIST_WITH_CODE}?categoryId=${categoryId}`
          : GET_DOCS_LIST_WITH_CODE,
        method: "GET",
      }),
  });
  return { data, isLoading };
}
