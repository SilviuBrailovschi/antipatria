import React from "react";
import { ImageSliderContainer } from "@/components/ImageSliderContainer/ImageSliderContainder";

export default function Home() {
  const homeSectionStyle = {};
  return (
    <section style={homeSectionStyle}>
      <ImageSliderContainer />
    </section>
  );
}
