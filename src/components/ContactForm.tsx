import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Send, User } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
    role: "student",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          childAge: "",
          message: "",
          role: "student",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("An error occurred.");
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <User className="w-6 h-6 text-primary" />
          For Students & Parents
        </CardTitle>
        <CardDescription>
          Interested in our English learning program? Send us your details and
          we'll help you get started!
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
                onChange={(e) => handleInputChange("name", e.target.value)}
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
                onChange={(e) => handleInputChange("email", e.target.value)}
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
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Optional"
              />
            </div>
            <div>
              <Label htmlFor="child-age">Child's Age</Label>
              <Select
                onValueChange={(value) => handleInputChange("childAge", value)}
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
              onChange={(e) => handleInputChange("message", e.target.value)}
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
  );
};

export default ContactForm;
