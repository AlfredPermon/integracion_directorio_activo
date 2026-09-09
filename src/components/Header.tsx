export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <i className="fas fa-shield-alt text-2xl text-blue-200"></i>
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold">
              Integración Directorio Activo — Christus Muguerza
            </h1>
            <p className="text-blue-200 text-sm mt-1">
              Guía técnica para autenticación con Microsoft 365 / Azure Active Directory (Entra ID)
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-blue-100 text-xs font-medium px-3 py-1.5 rounded-full">
            <i className="fas fa-microsoft"></i> Microsoft 365
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-blue-100 text-xs font-medium px-3 py-1.5 rounded-full">
            <i className="fas fa-key"></i> OAuth 2.0 / OIDC
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-blue-100 text-xs font-medium px-3 py-1.5 rounded-full">
            <i className="fas fa-lock"></i> MSAL.js
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-blue-100 text-xs font-medium px-3 py-1.5 rounded-full">
            <i className="fas fa-code-branch"></i> React + Vite
          </span>
        </div>
      </div>
    </header>
  );
}
