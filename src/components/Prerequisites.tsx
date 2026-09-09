export default function Prerequisites() {
  const sectionsData = [
    {
      title: '1. Registro de Aplicación en Azure AD',
      items: [
        'Client ID (Application ID) — identificador único de la app',
        'Tenant ID — identificador del directorio de Christus Muguerza',
        'Nombre del Tenant (ej: christusmuguerza.onmicrosoft.com)',
        'Confirmar que la app está registrada como "Single-page application" (SPA)',
      ],
      icon: 'fa-clipboard-list',
      bgClass: 'bg-blue-50 border border-blue-200',
      titleClass: 'font-semibold text-blue-800 flex items-center gap-2',
    },
    {
      title: '2. Permisos (API Permissions) configurados',
      items: [
        'Microsoft Graph → User.Read (Delegated) — lectura de perfil del usuario',
        'Microsoft Graph → GroupMember.Read.All (Delegated) — lectura de grupos',
        'Microsoft Graph → Directory.Read.All (Delegated) — si necesitas más info del directorio',
        'Opcional: API personalizada del backend con scope definido',
      ],
      icon: 'fa-key',
      bgClass: 'bg-green-50 border border-green-200',
      titleClass: 'font-semibold text-green-800 flex items-center gap-2',
    },
    {
      title: '3. URLs de Redirección configuradas',
      items: [
        'URL de desarrollo: http://localhost:5173 (Vite dev server)',
        'URL de staging: https://staging.tu-app.com/auth/callback',
        'URL de producción: https://tu-app.com/auth/callback',
      ],
      icon: 'fa-link',
      bgClass: 'bg-purple-50 border border-purple-200',
      titleClass: 'font-semibold text-purple-800 flex items-center gap-2',
    },
    {
      title: '4. Grupos de Seguridad para Roles',
      items: [
        'Object ID del grupo "Admins del Sistema"',
        'Object ID del grupo "Médicos"',
        'Object ID del grupo "Enfermería"',
        'Object ID del grupo "Administrativos"',
        'Object ID del grupo "Solo Lectura"',
      ],
      icon: 'fa-users',
      bgClass: 'bg-amber-50 border border-amber-200',
      titleClass: 'font-semibold text-amber-800 flex items-center gap-2',
    },
    {
      title: '5. Políticas de Conditional Access',
      items: [
        '¿Se requiere MFA (autenticación multifactor)?',
        '¿Hay restricciones de ubicación/IP?',
        '¿La app necesita ser aprobada por admin para todos los usuarios?',
        '¿Hay alguna política de cumplimiento (compliance) que afecte?',
      ],
      icon: 'fa-shield-alt',
      bgClass: 'bg-red-50 border border-red-200',
      titleClass: 'font-semibold text-red-800 flex items-center gap-2',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <span className="bg-green-100 text-green-700 rounded-lg p-2">
          <i className="fas fa-clipboard-check"></i>
        </span>
        Requisitos Previos
      </h2>

      {/* Aviso importante */}
      <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
        <div className="flex items-start gap-3">
          <i className="fas fa-exclamation-circle text-red-500 text-xl mt-0.5"></i>
          <div>
            <h3 className="font-bold text-red-800">⚠️ Importante: Requiere Coordinación con TI de Christus Muguerza</h3>
            <p className="text-red-700 text-sm mt-1">
              Para esta integración necesitas que el <strong>administrador de Azure AD</strong> de Christus Muguerza 
              te proporcione acceso y credenciales. No puedes hacer esto solo desde tu lado.
            </p>
          </div>
        </div>
      </div>

      {/* Lo que necesitas solicitar */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-handshake text-blue-600"></i>
          Lo que debes solicitar al equipo de TI de Christus Muguerza
        </h3>
        <div className="space-y-4">
          {sectionsData.map((section) => (
            <div key={section.title} className={`${section.bgClass} rounded-lg p-4`}>
              <h4 className={`${section.titleClass}`}>
                <i className={`fas ${section.icon}`}></i>
                {section.title}
              </h4>
              <ul className="mt-2 space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <i className="fas fa-check text-green-500 mt-1 text-xs"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Email template */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-envelope text-indigo-600"></i>
          Plantilla de Correo para Solicitar al Equipo de TI
        </h3>
        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 text-sm text-gray-700 leading-relaxed">
          <p><strong>Asunto:</strong> Solicitud de Registro de Aplicación en Azure AD — [Nombre del Sistema]</p>
          <br/>
          <p>Estimado equipo de TI de Christus Muguerza,</p>
          <br/>
          <p>Solicito su apoyo para registrar una nueva aplicación en Azure Active Directory (Entra ID) para integrarla con nuestro sistema [Nombre del Sistema].</p>
          <br/>
          <p><strong>Datos de la aplicación:</strong></p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Nombre: [Nombre del Sistema]</li>
            <li>Tipo: Single-page application (SPA)</li>
            <li>Plataforma: React / JavaScript</li>
            <li>URLs de redirección: [URLs]</li>
            <li>Propósito: Autenticación de usuarios del sistema con credenciales corporativas</li>
          </ul>
          <br/>
          <p><strong>Permisos requeridos (Microsoft Graph - Delegados):</strong></p>
          <ul className="list-disc ml-6 space-y-1">
            <li>User.Read</li>
            <li>GroupMember.Read.All</li>
          </ul>
          <br/>
          <p><strong>Información que necesitamos:</strong></p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Application (Client) ID</li>
            <li>Tenant ID</li>
            <li>Object IDs de los grupos de seguridad para mapeo de roles</li>
          </ul>
          <br/>
          <p>Quedo atento a sus comentarios. Gracias.</p>
          <br/>
          <p>Saludos cordiales,<br/>[Tu Nombre]<br/>[Tu Departamento]</p>
        </div>
      </div>

      {/* Herramientas de desarrollo */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-tools text-gray-600"></i>
          Herramientas de Desarrollo Necesarias
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-green-50 border-green-200">
            <i className="fas fa-check-circle text-green-500"></i>
            <div>
              <p className="font-medium text-sm text-gray-800">Node.js 18+</p>
              <p className="text-xs text-gray-500">Runtime para ejecutar el proyecto</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-green-50 border-green-200">
            <i className="fas fa-check-circle text-green-500"></i>
            <div>
              <p className="font-medium text-sm text-gray-800">npm o yarn</p>
              <p className="text-xs text-gray-500">Gestor de paquetes</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50 border-gray-200">
            <i className="fas fa-download text-gray-400"></i>
            <div>
              <p className="font-medium text-sm text-gray-800">@azure/msal-browser</p>
              <p className="text-xs text-gray-500">Librería de autenticación Microsoft</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50 border-gray-200">
            <i className="fas fa-download text-gray-400"></i>
            <div>
              <p className="font-medium text-sm text-gray-800">@azure/msal-react</p>
              <p className="text-xs text-gray-500">Componentes React para MSAL</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50 border-gray-200">
            <i className="fas fa-download text-gray-400"></i>
            <div>
              <p className="font-medium text-sm text-gray-800">React Router</p>
              <p className="text-xs text-gray-500">Para rutas protegidas</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50 border-gray-200">
            <i className="fas fa-download text-gray-400"></i>
            <div>
              <p className="font-medium text-sm text-gray-800">Visual Studio Code</p>
              <p className="text-xs text-gray-500">Editor de código recomendado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
