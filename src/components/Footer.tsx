import React from 'react';
import { Home, Mail, MessageSquare, TrendingUp, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Take Quiz", href: "#quiz" },
        { name: "Pricing", href: "#pricing" },
        { name: "Features", href: "#features" },
        { name: "Community", href: "#community" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Style Guides", href: "#" },
        { name: "Trend Reports", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Refund Policy", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Youtube className="h-5 w-5" />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold">FreshLook</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your home with the latest interior and exterior design trends.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FreshLook. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@freshlook.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;