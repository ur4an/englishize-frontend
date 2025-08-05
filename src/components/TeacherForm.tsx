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
import { Send, GraduationCap } from "lucide-react";

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
    role: "teacher",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data being submitted:", formData);
    
    try {
      const res = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          experience: "",
          message: "",
          role: "teacher",
        });
      } else {
        const errorText = await res.text();
        console.error("Server error:", errorText);
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Network error. Please check if the server is running.");
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <GraduationCap className="w-6 h-6 text-secondary" />
          For Teachers
        </CardTitle>
        <CardDescription>
          Passionate about teaching English to kids? Join our team of amazing
          educators!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="teacher-name">Full Name *</Label>
              <Input
                id="teacher-name"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="teacher-email">Email Address *</Label>
              <Input
                id="teacher-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
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
                name="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Contact number"
              />
            </div>
            <div>
              <Label htmlFor="experience">Teaching Experience</Label>
              <Select
                name="experience"
                value={formData.experience}
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
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
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
  );
};

export default TeacherForm;