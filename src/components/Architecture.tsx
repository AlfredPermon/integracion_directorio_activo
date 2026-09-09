export default function Architecture() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <span className="bg-indigo-100 text-indigo-700 rounded-lg p-2">
          <i className="fas fa-sitemap"></i>
        </span>
        Arquitectura de Integración
      </h2>

      {/* Diagrama visual */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm overflow-x-auto">
        <h3 className="font-bold text-gray-800 mb-6 text-center text-lg">Flujo de Autenticación OAuth 2.0 + PKCE</h3>
        <div className="min-w-[700px]">
          {/* Diagrama ASCII-like con divs */}
          <div className="flex items-center justify-between gap-4 mb-8">
            {/* Usuario */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-300">
                <i className="fas fa-user-md text-blue-600 text-2xl"></i>
              </div>
              <p className="text-xs font-bold text-gray-700 mt-2 text-center">Usuario<br/>Christus Muguerza</p>
            </div>

            {/* Flecha */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full h-0.5 bg-blue-300 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-blue-300"></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">1. Click "Iniciar Sesión"</span>
            </div>

            {/* Frontend */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center border-2 border-green-300">
                <i className="fas fa-desktop text-green-600 text-2xl"></i>
              </div>
              <p className="text-xs font-bold text-gray-700 mt-2 text-center">Frontend<br/>React + MSAL.js</p>
            </div>

            {/* Flecha */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full h-0.5 bg-purple-300 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-6 border-t-transparent border-b-transparent border-l-purple-300"></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">2. Redirect a login Microsoft</span>
            </div>

            {/* Azure AD */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center border-2 border-purple-300">
                <i className="fas fa-cloud text-purple-600 text-2xl"></i>
              </div>
              <p className="text-xs font-bold text-gray-700 mt-2 text-center">Azure AD<br/>(Entra ID)</p>
            </div>
          </div>

          {/* Segunda fila - retorno */}
          <div className="flex items-center justify-between gap-4 mb-8">
            {/* Backend */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-amber-100 rounded-xl flex items-center justify-center border-2 border-amber-300">
                <i className="fas fa-server text-amber-600 text-2xl"></i>
              </div>
              <p className="text-xs font-bold text-gray-700 mt-2 text-center">Backend<br/>API (.NET/Node)</p>
            </div>

            {/* Flecha */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full h-0.5 bg-amber-300 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-6 border-t-transparent border-b-transparent border-r-amber-300"></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">5. Valida token JWT</span>
            </div>

            {/* Token */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-red-100 rounded-xl flex items-center justify-center border-2 border-red-300">
                <i className="fas fa-key text-red-600 text-2xl"></i>
              </div>
              <p className="text-xs font-bold text-gray-700 mt-2 text-center">JWT Token<br/>+ Claims</p>
            </div>

            {/* Flecha */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full h-0.5 bg-green-300 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-6 border-t-transparent border-b-transparent border-r-green-300"></div>
              </div>
              <span className="text-xs text-gray-500 mt-1">4. Retorna token al Frontend</span>
            </div>

            {/* Frontend */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center border-2 border-green-300">
                <i className="fas fa-check-circle text-green-600 text-2xl"></i>
              </div>
              <p className="text-xs font-bold text-gray-700 mt-2 text-center">Sesión<br/>Iniciada ✓</p>
            </div>
          </div>

          {/* Flujo detallado */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-700 text-sm mb-3">📋 Flujo Detallado:</h4>
            <ol className="text-xs text-gray-600 space-y-2">
              <li className="flex gap-2"><span className="font-bold text-blue-600">1.</span> Usuario hace click en "Iniciar Sesión con Christus Muguerza"</li>
              <li className="flex gap-2"><span className="font-bold text-blue-600">2.</span> MSAL.js redirige al login de Microsoft (login.microsoftonline.com)</li>
              <li className="flex gap-2"><span className="font-bold text-blue-600">3.</span> Usuario ingresa credenciales corporativas (@christusmuguerza.org)</li>
              <li className="flex gap-2"><span className="font-bold text-blue-600">4.</span> Azure AD valida y retorna un Authorization Code → se intercambia por Access Token (JWT)</li>
              <li className="flex gap-2"><span className="font-bold text-blue-600">5.</span> El token se envía al Backend que lo valida contra Microsoft y extrae: nombre, email, grupos/roles</li>
              <li className="flex gap-2"><span className="font-bold text-blue-600">6.</span> El sistema mapea los grupos de AD a roles internos (Admin, Doctor, Enfermería, etc.)</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Componentes necesarios */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Componentes del Sistema</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-700 flex items-center gap-2">
              <i className="fas fa-laptop-code"></i> Frontend (React)
            </h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>• @azure/msal-react</li>
              <li>• @azure/msal-browser</li>
              <li>• Manejo de estado de autenticación</li>
              <li>• Rutas protegidas</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-700 flex items-center gap-2">
              <i className="fas fa-server"></i> Backend (API)
            </h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>• Validación de JWT tokens</li>
              <li>• Microsoft Graph API client</li>
              <li>• Mapeo de grupos → roles</li>
              <li>• Middleware de autorización</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-700 flex items-center gap-2">
              <i className="fas fa-cloud"></i> Azure AD (Entra ID)
            </h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>• App Registration</li>
              <li>• Enterprise Application</li>
              <li>• Grupos de seguridad</li>
              <li>• Conditional Access Policies</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-700 flex items-center gap-2">
              <i className="fas fa-database"></i> Base de Datos
            </h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>• Tabla de usuarios (sincronizada con AD)</li>
              <li>• Tabla de roles</li>
              <li>• Mapeo usuario-rol</li>
              <li>• Log de auditoría de accesos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
