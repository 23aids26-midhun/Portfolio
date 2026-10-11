import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-12 section-title">Get In Touch</h2>
                
                <div className="max-w-5xl mx-auto">
                    <div className="gradient-bg rounded-2xl p-10 card-hover">
                        <div className="grid md:grid-cols-2 gap-12">
                            
                            {/* LEFT COLUMN - Contact Information */}
                            <div>
                                {/* Contact Information Title */}
                                <div className="flex items-center mb-6">
                                    <div className="w-4 h-4 bg-[#64ffda] mr-3"></div>
                                    <h3 className="text-2xl font-bold gradient-text">Contact Information</h3>
                                </div>
                                
                                {/* Email Box */}
                                <div className="square-chip p-5 mb-4">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                                            <i className="fas fa-envelope text-[#64ffda] text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white mb-1">Email</p>
                                            <p className="text-[#8892b0] break-all">midhunbharathi5@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Location Box */}
                                <div className="square-chip p-5 mb-6">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                                            <i className="fas fa-map-marker-alt text-[#64ffda] text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white mb-1">Location</p>
                                            <p className="text-[#8892b0]">Namakkal, Tamil Nadu, India</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Connect with me Title */}
                                <div className="flex items-center mb-5 mt-8">
                                    <div className="w-3 h-3 bg-[#64ffda] mr-2"></div>
                                    <h4 className="text-xl font-bold gradient-text">Connect with me</h4>
                                </div>
                                
                                {/* Social Icons */}
                                <div className="flex space-x-4">
                                    <a 
                                        href="https://linkedin.com/in/midhunan-nanthan-s-715025382" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center hover:bg-[#64ffda] hover:text-[#0a192f] transition-all square-chip"
                                    >
                                        <i className="fab fa-linkedin-in text-xl"></i>
                                    </a>
                                    <a 
                                        href="https://github.com/23aids26-midhun" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center hover:bg-[#64ffda] hover:text-[#0a192f] transition-all square-chip"
                                    >
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>
                            
                            {/* RIGHT COLUMN - Contact Form */}
                            <div>
                                {/* Form Title */}
                                <div className="flex items-center mb-6">
                                    <div className="w-4 h-4 bg-[#64ffda] mr-3"></div>
                                    <h3 className="text-2xl font-bold gradient-text">Send a Message</h3>
                                </div>
                                
                                {submitted && (
                                    <div className="mb-5 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                                        ✓ Message sent successfully!
                                    </div>
                                )}
                                
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block text-[#8892b0] mb-2 text-sm font-medium">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            required
                                            className="w-full px-5 py-3 rounded-lg bg-[#0a192f]/80 border border-blue-500/30 text-white placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-all"
                                        />
                                    </div>
                                    
                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-[#8892b0] mb-2 text-sm font-medium">Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            required
                                            className="w-full px-5 py-3 rounded-lg bg-[#0a192f]/80 border border-blue-500/30 text-white placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-all"
                                        />
                                    </div>
                                    
                                    {/* Message Field */}
                                    <div>
                                        <label className="block text-[#8892b0] mb-2 text-sm font-medium">Your Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your message here..."
                                            required
                                            rows="5"
                                            className="w-full px-5 py-3 rounded-lg bg-[#0a192f]/80 border border-blue-500/30 text-white placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-all resize-none"
                                        ></textarea>
                                    </div>
                                    
                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#64ffda]/30 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 cursor-pointer"
                                    >
                                        <span>Send Message</span>
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;