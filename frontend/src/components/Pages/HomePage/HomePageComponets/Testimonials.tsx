import { Chip } from "@heroui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    designation: "CEO, Tech Solutions",
    testimonial:
      "This product has completely transformed our workflow. We used to spend hours on manual tasks, but now everything is automated and streamlined. The user-friendly interface and excellent customer support make it a must-have for any business looking to scale efficiently.",
  },
  {
    name: "Jane Smith",
    designation: "Marketing Manager, ABC Corp",
    testimonial:
      "I was skeptical at first, but this service has exceeded my expectations in every way. The features are not only innovative but also practical, making our marketing campaigns more efficient and data-driven. I especially appreciate how responsive their team is whenever we need assistance.",
  },
  {
    name: "Michael Brown",
    designation: "CTO, Innovate Inc.",
    testimonial:
      "A game-changer in the industry! We have tried multiple solutions over the years, but nothing compares to the performance, reliability, and customization options this platform offers. It has significantly improved our team’s productivity and allowed us to focus on what truly matters—innovation.",
  },
];

export default function Testimonials() {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="text-center my-16">
      <div>
        <Chip size="lg" color="primary">
          Clients
        </Chip>
      </div>
      <div className="mx-auto my-8 max-w-2xl">
        <h3 className="text-5xl font-bold">
          Don’t take our word for it. See what our clients say.
        </h3>
      </div>
      <div className="flex gap-1 mx-auto w-fit">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar size={18} color="#ffd700" key={index} />
        ))}
      </div>
      <div className="">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="max-w-3xl mx-auto my-10">
                <p className="text-3xl">{testimonial.testimonial}</p>
              </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p>{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
