
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-pgpurple-900 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-pgpurple-100">
              Have questions about our PG accommodation? Get in touch with us!
            </p>
          </div>
        </section>
        
        {/* Contact Info & Form Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
              
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-pgpurple-100 text-pgpurple-600">
                            <MapPin size={20} />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Address</h3>
                          <address className="not-italic text-gray-600">
                            <p>Shivam PG</p>
                            <p>123 PG Street, Locality</p>
                            <p>City, State - 123456</p>
                          </address>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-pgpurple-100 text-pgpurple-600">
                            <Phone size={20} />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <p className="text-gray-600">+91 9876543210</p>
                          <p className="text-gray-600">+91 9876543211</p>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-pgpurple-100 text-pgpurple-600">
                            <Mail size={20} />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-gray-600">info@shivampg.com</p>
                          <p className="text-gray-600">support@shivampg.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Operating Hours</h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Monday - Friday:</span>
                        <span>9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Saturday:</span>
                        <span>10:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday:</span>
                        <span>Closed (Emergencies Only)</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="font-semibold mb-2">Emergency Contact</h3>
                      <p className="text-gray-600">For urgent matters outside operating hours:</p>
                      <p className="font-medium">+91 9876543212</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">What is the minimum stay period?</h3>
                <p className="text-gray-600">The minimum stay period is 3 months. We offer discounts for longer stays.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Is food included in the rent?</h3>
                <p className="text-gray-600">Yes, we offer 3 meals a day included in the monthly rent.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">What security measures are in place?</h3>
                <p className="text-gray-600">We have 24/7 security guards, CCTV surveillance, and secure entry systems.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">What about laundry facilities?</h3>
                <p className="text-gray-600">Laundry service is available at a nominal additional charge.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Are visitors allowed?</h3>
                <p className="text-gray-600">Visitors are allowed in common areas during specified hours.</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">What's the notice period for vacating?</h3>
                <p className="text-gray-600">A one-month notice is required before vacating.</p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">Still have questions? Feel free to reach out to us.</p>
              <Button className="bg-pgpurple-500 hover:bg-pgpurple-600">Contact Support</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
