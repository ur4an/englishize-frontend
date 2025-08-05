import heroImage from "@/assets/hero-english-learning.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Hero image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Children learning English online"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Learn English
          <span className="block text-accent"> with Fun!</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in [animation-delay:0.2s]">
          Join thousands of kids learning English online with our interactive
          lessons, engaging books, and personalized teaching approach.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:0.4s]">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-button transition-all duration-300 hover:scale-105"
          >
            Start Learning Today
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Explore Our Books
          </Button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent/20 rounded-full animate-bounce [animation-delay:1s]"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-secondary/20 rounded-full animate-bounce [animation-delay:2s]"></div>
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/20 rounded-full animate-bounce [animation-delay:3s]"></div>
    </section>
  );
};

export default Hero;
