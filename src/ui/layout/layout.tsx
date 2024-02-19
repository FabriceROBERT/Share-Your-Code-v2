import React from "react";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/navigation/footer";
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
