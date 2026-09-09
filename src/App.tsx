import { useState } from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Prerequisites from './components/Prerequisites';
import AzureConfig from './components/AzureConfig';
import FrontendCode from './components/FrontendCode';
import BackendCode from './components/BackendCode';
import Architecture from './components/Architecture';
import Testing from './components/Testing';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Resumen', icon: 'fa-home' },
    { id: 'architecture', label: 'Arquitectura', icon: 'fa-sitemap' },
    { id: 'prerequisites', label: 'Requisitos', icon: 'fa-clipboard-check' },
    { id: 'azure-config', label: 'Config Azure AD', icon: 'fa-cloud' },
    { id: 'frontend', label: 'Frontend (React)', icon: 'fa-code' },
    { id: 'backend', label: 'Backend (API)', icon: 'fa-server' },
    { id: 'testing', label: 'Pruebas', icon: 'fa-vial' },
    { id: 'contact', label: 'Contacto IT', icon: 'fa-envelope' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <nav className="lg:w-72 lg:min-h-screen bg-white border-r border-gray-200 shadow-sm">
          <div className="p-4 lg:sticky lg:top-20">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Guía de Integración
            </h3>
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <i className={`fas ${section.icon} w-5 text-center ${
                      activeSection === section.id ? 'text-blue-600' : 'text-gray-400'
                    }`}></i>
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10 max-w-5xl">
          {activeSection === 'overview' && <Overview />}
          {activeSection === 'architecture' && <Architecture />}
          {activeSection === 'prerequisites' && <Prerequisites />}
          {activeSection === 'azure-config' && <AzureConfig />}
          {activeSection === 'frontend' && <FrontendCode />}
          {activeSection === 'backend' && <BackendCode />}
          {activeSection === 'testing' && <Testing />}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>
    </div>
  );
}
