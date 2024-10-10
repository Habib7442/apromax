"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Client, Databases, Storage } from 'appwrite';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Set your Appwrite endpoint
    .setProject('YOUR_PROJECT_ID'); // Set your project ID

const databases = new Databases(client);
const storage = new Storage(client);

export default function CareerPage() {
    const [submitStatus, setSubmitStatus] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            // Upload resume
            const file = data.resume[0];
            const uploadedFile = await storage.createFile('BUCKET_ID', 'unique()', file);

            // Save form data to database
            await databases.createDocument(
                'DATABASE_ID',
                'COLLECTION_ID',
                'unique()',
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    position: data.position,
                    experience: data.experience,
                    message: data.message,
                    resumeFileId: uploadedFile.$id
                }
            );

            setSubmitStatus('success');
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        }
    };

    return (
        <div className="bg-gradient-to-b from-slate-900 to-gray-900 min-h-screen text-white py-10 lg:py-22 md:py-32">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 lg:mt-7 text-blue-400">Join Our Team</h1>
                <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                    At AproMax Engineering, we&apos;re always looking for talented individuals to join our innovative team. 
                    If you&apos;re passionate about engineering and want to make a difference, we&apos;d love to hear from you!
                </p>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Innovative projects that challenge and inspire</li>
                            <li>Collaborative and supportive work environment</li>
                            <li>Opportunities for professional growth and development</li>
                            <li>Competitive salary and benefits package</li>
                            <li>Work-life balance and flexible scheduling options</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
                        <ul className="space-y-2">
                            <li>Senior Mechanical Engineer</li>
                            <li>Electrical Systems Designer</li>
                            <li>Software Developer (IoT)</li>
                            <li>Project Manager</li>
                            <li>CAD Technician</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Apply Now</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input 
                                id="name" 
                                {...register("name", { required: "Name is required" })} 
                                className="bg-gray-700"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                id="email" 
                                type="email" 
                                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} 
                                className="bg-gray-700"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input 
                                id="phone" 
                                {...register("phone", { required: "Phone number is required" })} 
                                className="bg-gray-700"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="position">Position</Label>
                            <Select onValueChange={(value) => register("position").onChange({ target: { value } })}>
                                <SelectTrigger className="bg-gray-700">
                                    <SelectValue placeholder="Select a position" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Senior Mechanical Engineer">Senior Mechanical Engineer</SelectItem>
                                    <SelectItem value="Electrical Systems Designer">Electrical Systems Designer</SelectItem>
                                    <SelectItem value="Software Developer (IoT)">Software Developer (IoT)</SelectItem>
                                    <SelectItem value="Project Manager">Project Manager</SelectItem>
                                    <SelectItem value="CAD Technician">CAD Technician</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="experience">Years of Experience</Label>
                            <Input 
                                id="experience" 
                                type="number" 
                                {...register("experience", { required: "Experience is required", min: { value: 0, message: "Experience cannot be negative" } })} 
                                className="bg-gray-700"
                            />
                            {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="message">Why do you want to join our team?</Label>
                            <Textarea 
                                id="message" 
                                {...register("message", { required: "Message is required" })} 
                                className="bg-gray-700"
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        <div>
                            <Label htmlFor="resume">Upload Resume (PDF only)</Label>
                            <Input 
                                id="resume" 
                                type="file" 
                                accept=".pdf" 
                                {...register("resume", { required: "Resume is required" })} 
                                className="bg-gray-700"
                            />
                            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>}
                        </div>
                        <Button type="submit" className="w-full">Submit Application</Button>
                    </form>
                    {submitStatus === 'success' && (
                        <Alert className="mt-4 bg-green-700">
                            <AlertTitle>Success!</AlertTitle>
                            <AlertDescription>Your application has been submitted successfully.</AlertDescription>
                        </Alert>
                    )}
                    {submitStatus === 'error' && (
                        <Alert className="mt-4 bg-red-700">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>There was an error submitting your application. Please try again.</AlertDescription>
                        </Alert>
                    )}
                </div>
            </div>
        </div>
    );
}