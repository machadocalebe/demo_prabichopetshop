import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromoBanner } from "@/components/PromoBanner";
import { Categories } from "@/components/Categories";
import { Reasons } from "@/components/Reasons";
import { Stores } from "@/components/Stores";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PromoBanner />
        <Categories />
        <Reasons />
        <Stores />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
