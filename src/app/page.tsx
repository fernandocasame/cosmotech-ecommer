import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { Results } from "@/components/Results";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <Results />
      <Testimonials />
      <About />
      <ContactCta />
      <Footer />
    </main>
  );
}
