import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const quickLinks = [
    { label: 'Dashboard', href: 'dashboard' },
    { label: 'Events', href: 'events' },
    { label: 'Complaints', href: 'complaints' },
    { label: 'Services', href: 'services' },
  ];

  const policyLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ];

  return (
    <footer className="bg-white shadow-md p-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Branding */}
        <div>
          <h3 className="text-lg font-bold text-gray-900">SocietySync</h3>
          <p className="text-sm text-gray-600 mt-1">Empowering Community Living</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 text-center">Quick Links</h4>
          <ul className="mt-2 space-y-1 flex items-center justify-center gap-4 underline md:no-underline">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900">Contact Us</h4>
          <p className="text-sm text-gray-600 mt-2">
            Email: <a href="mailto:support@societysync.com" className="hover:text-blue-600 hover:underline">support@societysync.com</a>
          </p>
          <p className="text-sm text-gray-600">Phone: +1 (555) 123-4567</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://twitter.com" className="text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="text-gray-600 hover:text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.186 0 3.566.012 4.827.07 1.314.065 2.479.292 3.422 1.074.944.783 1.496 1.91 1.574 3.26.054.693.07 1.522.07 4.83 0 3.309-.016 4.138-.07 4.83-.078 1.35-.63 2.478-1.574 3.261-.943.782-2.108 1.009-3.422 1.074-1.261.057-1.641.07-4.827.07-3.186 0-3.566-.012-4.827-.07-1.314-.065-2.479-.292-3.422-1.074-.944-.783-1.496-1.91-1.574-3.26-.054-.693-.07-1.522-.07-4.83 0-3.309.016-4.138.07-4.83.078-1.35.63-2.478 1.574-3.261.943-.782 2.108-1.009 3.422-1.074 1.261-.057 1.641-.07 4.827-.07zM12 0c-3.259 0-3.67.012-4.96.07-1.301.058-2.418.3-3.361.92-.947.62-1.596 1.47-1.855 2.57-.214.727-.362 1.499-.446 2.307-.092.802-.093 1.564-.093 3.604s.001 2.802.093 3.604c.084.808.232 1.58.446 2.307.259 1.1.908 1.95 1.855 2.57.943.62 2.06.862 3.361.92 1.29.058 1.701.07 4.96.07 3.259 0 3.67-.012 4.96-.07 1.301-.058 2.418-.3 3.361-.92.947-.62 1.596-1.47 1.855-2.57.214-.727.362-1.499.446-2.307.092-.802.093-1.564.093-3.604s-.001-2.802-.093-3.604c-.084-.808-.232-1.58-.446-2.307-.259-1.1-.908-1.95-1.855-2.57-.943-.62-2.06-.862-3.361-.92-1.29-.058-1.701-.07-4.96-.07zm0 5.838c-3.392 0-6.133 2.741-6.133 6.134 0 3.392 2.741 6.133 6.133 6.133 3.392 0 6.133-2.741 6.133-6.133 0-3.393-2.741-6.134-6.133-6.134zm0 10.174c-2.234 0-4.04-1.806-4.04-4.04s1.806-4.04 4.04-4.04c2.234 0 4.04 1.806 4.04 4.04s-1.806 4.04-4.04 4.04zm5.406-9.895c-.7 0-1.268-.568-1.268-1.268 0-.7.568-1.268 1.268-1.268.7 0 1.268.568 1.268 1.268 0 .7-.568 1.268-1.268 1.268z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">© 2025 SocietySync. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;