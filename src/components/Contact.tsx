import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, User, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    experience: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      childAge: "",
      experience: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@englishforkids.com",
      description: "Get a response within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Education Street, Learning City",
      description: "Schedule a visit anytime",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in
            <span className="text-accent"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your child's English learning journey? Contact us
            today or apply to become one of our amazing teachers!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-card transition-all duration-300"
            >
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-primary font-medium mb-1">{info.content}</p>
                <p className="text-muted-foreground text-sm">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Student Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <User className="w-6 h-6 text-primary" />
                For Students & Parents
              </CardTitle>
              <CardDescription>
                Interested in our English learning program? Send us your details
                and we'll help you get started!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="student-name">Parent/Student Name *</Label>
                    <Input
                      id="student-name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="student-email">Email Address *</Label>
                    <Input
                      id="student-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <Label htmlFor="child-age">Child's Age</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("childAge", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-8">6-8 years</SelectItem>
                        <SelectItem value="9-12">9-12 years</SelectItem>
                        <SelectItem value="13-16">13-16 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="student-message">Message *</Label>
                  <Textarea
                    id="student-message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Tell us about your child's English learning goals..."
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-button transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Teacher Application Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="w-6 h-6 text-secondary" />
                For Teachers
              </CardTitle>
              <CardDescription>
                Passionate about teaching English to kids? Join our team of
                amazing educators!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="teacher-name">Full Name *</Label>
                    <Input
                      id="teacher-name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="teacher-email">Email Address *</Label>
                    <Input
                      id="teacher-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Professional email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="teacher-phone">Phone Number</Label>
                    <Input
                      id="teacher-phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="Contact number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Teaching Experience</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("experience", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="teacher-message">
                    Why do you want to teach with us? *
                  </Label>
                  <Textarea
                    id="teacher-message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Tell us about your teaching philosophy and experience with children..."
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-secondary hover:opacity-90 shadow-button transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Apply to Teach
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
