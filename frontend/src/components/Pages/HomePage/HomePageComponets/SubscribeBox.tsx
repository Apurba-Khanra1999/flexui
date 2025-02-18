import { Button, Input } from "@heroui/react";

export default function SubscribeBox() {
  return (
    <div className="bg-primary lg:p-16 md:p-8 p-1 rounded-3xl">
      <div className="text-center flex flex-col gap-5 lg:py-[4.5rem] p-6 items-center bg-white rounded-2xl">
        <div className="max-w-3xl ">
          <h3 className="text-5xl font-bold">
            Experience the Future of Software Automation Try Fixora Today !
          </h3>
        </div>
        <div className="max-w-4xl text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex gap-3 max-w-96">
          <Input placeholder="your email address." variant="bordered" size="lg"/>
          <Button size="lg" color="primary" className="font-bold">Subscribe.</Button>
        </div>
        <div className="my-2">
            <p>We care about your data in our privacy policy</p>
        </div>
      </div>
    </div>
  );
}
