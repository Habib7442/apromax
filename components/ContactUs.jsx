import React, { useState } from 'react';
import { Client, Databases } from 'appwrite';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactIcon } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import servicesData from "@/constants/ServicesData";

// Initialize Appwrite client
const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL) // Your Appwrite Endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // Your project ID

const databases = new Databases(client);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    designation: '',
    region: '',
    service: '',
    industry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        process.env.NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID,
        'unique()',
        formData
      );
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        designation: '',
        region: '',
        service: '',
        industry: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 py-1 text-sm text-white font-bold backdrop-blur-3xl">
            Contact Us <ContactIcon className="w-5 h-5 ml-2" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="firstName"
              placeholder="First Name"
              className="bg-slate-800 border-slate-700"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              className="bg-slate-800 border-slate-700"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-slate-800 border-slate-700"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            name="designation"
            placeholder="Designation"
            className="bg-slate-800 border-slate-700"
            value={formData.designation}
            onChange={handleInputChange}
          />
          <Select onValueChange={(value) => handleSelectChange('region', value)}>
            <SelectTrigger className="bg-slate-800 border-slate-700">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800">
              <SelectItem value="na">North America</SelectItem>
              <SelectItem value="eu">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => handleSelectChange('service', value)}>
            <SelectTrigger className="bg-slate-800 border-slate-700">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800">
              {servicesData.map((service, idx) => (
                <SelectItem
                  key={idx}
                  value={service.title.toLowerCase().replace(" ", "-")}
                >
                  {service.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => handleSelectChange('industry', value)}>
            <SelectTrigger className="bg-slate-800 border-slate-700">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800">
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            name="message"
            placeholder="Your message"
            className="bg-slate-800 border-slate-700"
            value={formData.message}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            className="bg-blue-200 hover:bg-blue-400 font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {submitStatus === 'success' && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500">Error sending message. Please try again.</p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUs;