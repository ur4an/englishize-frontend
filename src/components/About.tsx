import { BookOpen, Users, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description:
        "Engaging lessons with multimedia content that makes learning English fun and effective for kids.",
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description:
        "Qualified English teachers with experience in teaching children online using proven methods.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Track your child's progress with our comprehensive assessment and achievement system.",
    },
    {
      icon: Heart,
      title: "Child-Friendly",
      description:
        "Safe, supportive learning environment designed specifically for young English learners.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our
            <span className="text-primary"> English Program?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We make learning English an exciting adventure for kids through
            innovative teaching methods, interactive content, and personalized
            attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-card p-8 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Child's English Journey?
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Join over 10,000 happy families who trust us with their children's
            English education.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-white/80">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-white/80">Expert Teachers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
