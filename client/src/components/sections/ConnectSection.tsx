import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMPANY_NAME } from "@/lib/constants";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Send 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ConnectSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-fungi-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white bg-fungi-green py-4 rounded-md mb-6">Connect With Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions about mushroom cultivation or our products? 
            Get in touch with our team of experts for personalized assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-fungi-green mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-fungi-bark">Your Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-fungi-bark">Email Address</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-fungi-bark">Subject</Label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-fungi-bark">Your Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="mt-1"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-fungi-green hover:bg-fungi-bark"
                disabled={submitting}
              >
                {submitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-fungi-green mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-fungi-green mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-fungi-bark">Our Location</h4>
                    <p className="text-gray-600">123 Mycelium Lane, Mushroom Valley, OR 97000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-fungi-green mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-fungi-bark">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-fungi-green mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-fungi-bark">Email</h4>
                    <p className="text-gray-600">info@frontierfungi.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-fungi-green mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-fungi-bark">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                    <p className="text-gray-600">Saturday: 10am - 2pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-fungi-green mb-4">Connect on Social Media</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-fungi-cream rounded-lg hover:bg-fungi-green hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  <span>Facebook</span>
                </a>
                
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-fungi-cream rounded-lg hover:bg-fungi-green hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  <span>Instagram</span>
                </a>
                
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-fungi-cream rounded-lg hover:bg-fungi-green hover:text-white transition-colors"
                >
                  <Youtube className="h-5 w-5 mr-2" />
                  <span>YouTube</span>
                </a>
                
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-fungi-cream rounded-lg hover:bg-fungi-green hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5 mr-2" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-fungi-green mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-fungi-bark">Do you ship internationally?</h4>
                  <p className="text-gray-600">Yes, we ship to select countries. Contact us for details.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-fungi-bark">How quickly will I receive my order?</h4>
                  <p className="text-gray-600">Domestic orders typically ship within 1-3 business days.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-fungi-bark">Do you offer consultations?</h4>
                  <p className="text-gray-600">Yes, we provide expert growing consultations. Contact us to schedule.</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-4 border-fungi-green text-fungi-green hover:bg-fungi-green hover:text-white"
                onClick={() => window.location.href = '/learn'}
              >
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="aspect-video rounded-lg overflow-hidden shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178785.79458261512!2d-121.95567087783243!3d45.54096543858022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1701189648477!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`${COMPANY_NAME} Location Map`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}