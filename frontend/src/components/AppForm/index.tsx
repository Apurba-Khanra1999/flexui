"use client";

import { AppFormType } from "@/utils/Types";
import { Form } from "@heroui/react";

export const AppForm = ({
  children,
  onSubmit,
  className,
  ...props
}: AppFormType) => {
  return (
    <Form
      className={`w-full max-w-xs ${className}`}
      validationBehavior="native"
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </Form>
  );
};
