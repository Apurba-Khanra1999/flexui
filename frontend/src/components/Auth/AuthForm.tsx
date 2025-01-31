"use client";

import { Button, Card, CardBody, Input, Link, Tab, Tabs } from "@heroui/react";
import React from "react";
import { AppForm } from "../AppForm";

export const AuthForm = () => {
  const [selected, setSelected] = React.useState("login");

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
              <AppForm className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  labelPlacement="outside"
                  errorMessage="Please enter a valid email"
                />
                <Input
                  isRequired
                  label="Password"
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
                <div className="w-full">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </AppForm>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <AppForm className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Name"
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
                  placeholder="Enter your email"
                  type="email"
                  labelPlacement="outside"
                  errorMessage="Please enter a valid email"
                />
                <Input
                  isRequired
                  label="Password"
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
                <div className="w-full">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </AppForm>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};
