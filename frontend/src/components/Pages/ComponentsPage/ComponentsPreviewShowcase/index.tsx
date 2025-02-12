"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import request from "@/utils/AxiosUtils";
import { CATEGORIES } from "@/utils/AxiosUtils/api";
import { Spinner } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { UIComponentsPreviewShowcase } from "./UIComponentsPreviewShowcase";
import { UIElementsPreviewShowcase } from "./UIElementsPreviewShowcase";

export default function ComponentsPreviewShowcase() {
  const { data: categories, isLoading } = useQuery({
    queryKey: [CATEGORIES],
    queryFn: async () => request({ url: CATEGORIES, method: "GET" }),
  });
  const [categoryId, setCategoryId] = useState("1");
  return (
    <div className="my-4">
      <div>
        {isLoading ? (
          <div className="w-full my-4 flex justify-center">
            <Spinner />
          </div>
        ) : (
          <div>
            <Tabs
              defaultValue="1"
              onValueChange={(value) => setCategoryId(value)}
            >
              <TabsList
                defaultValue="1"
                className="bg-slate-200 dark:bg-slate-700"
              >
                {categories &&
                  categories?.map((cat: Record<string, string>) => (
                    <TabsTrigger
                      className={`${cat?.id == categoryId && "bg-white dark:bg-slate-900"}`}
                      key={cat?.id}
                      value={cat?.id}
                    >
                      {cat?.categoryName}
                    </TabsTrigger>
                  ))}
              </TabsList>
              {categoryId == "1" ? (
                <TabsContent value={categoryId}>
                  <UIElementsPreviewShowcase categoryId={categoryId} />
                </TabsContent>
              ) : (
                <TabsContent value={categoryId}>
                  <UIComponentsPreviewShowcase categoryId={categoryId} />
                </TabsContent>
              )}
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
