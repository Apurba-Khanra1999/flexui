"use client";


import { AuthFormType } from "@/utils/Types";
import { Button, Card, CardBody, Input, Link, Tab, Tabs } from "@heroui/react";
import React from "react";
import { AppForm } from "../AppForm";
import { GoogleButton } from "../ui/GoogleButton";
import useHandleAuth from "@/utils/hooks/useHandleAuth";
import useGoogleAuth from "@/utils/hooks/uesGoogleAuth";

export const AuthForm = () => {
  const [selected, setSelected] = React.useState("login");
  const { mutate } = useHandleAuth();
  const { google_auth } = useGoogleAuth();
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // mutate({JSON.stringify(data, null, 2)})
    mutate(data as AuthFormType);
  };
  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full">
        <CardBody>
          <Tabs
            fullWidth
            aria-label="Tabs form"
            selectedKey={selected}
            size="md"
            onSelectionChange={(key) => setSelected(key.toString())}
          >
            <Tab key="login" title="Login">
              <AppForm
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-4"
              >
                <Input
                  isRequired
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  labelPlacement="outside"
                  errorMessage="Please enter a valid email"
                />
                <Input
                  isRequired
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  labelPlacement="outside"
                  validate={(value) => {
                    if (value.length < 8)
                      return "Password must be at least 8 characters";
                  }}
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="w-full flex flex-col gap-y-4">
                  <Button type="submit" fullWidth color="primary">
                    Login
                  </Button>
                  <GoogleButton
                    title="Login With Google"
                    onPress={() => google_auth()}
                  />
                </div>
              </AppForm>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <AppForm
                className="flex flex-col gap-4"
                onSubmit={handleFormSubmit}
              >
                <Input
                  isRequired
                  label="Name"
                  name="username"
                  placeholder="Enter your name"
                  type="string"
                  labelPlacement="outside"
                  validate={(value) => {
                    if (value.length < 3)
                      return "Name must be at least 3 characters";
                  }}
                />
                <Input
                  isRequired
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  labelPlacement="outside"
                  errorMessage="Please enter a valid email"
                />
                <Input
                  isRequired
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  labelPlacement="outside"
                  validate={(value) => {
                    if (value.length < 8)
                      return "Password must be at least 8 characters";
                  }}
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="w-full flex flex-col gap-y-4">
                  <Button type="submit" fullWidth color="primary">
                    Sign up
                  </Button>
                  <GoogleButton
                    title="Signup With Google"
                    onPress={() => google_auth()}
                  />
                </div>
              </AppForm>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};
