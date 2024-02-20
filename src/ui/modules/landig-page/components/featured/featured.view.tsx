import Container from "@/ui/components/container/container";
import React from "react";

export default function FeaturedView() {
  return (
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="bg-primary h-96 col-span-7"></div>
        <div className="bg-secondary h-96 col-span-5"></div>
      </Container>
    </div>
  );
}
