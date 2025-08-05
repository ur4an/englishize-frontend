import Hero from "@/components/Hero";
import About from "@/components/About";
import Books from "@/components/Books";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Books />
      <Contact />
    </div>
  );
};

export default Index;
