export default function Testing() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <span className="bg-pink-100 text-pink-700 rounded-lg p-2">
          <i className="fas fa-vial"></i>
        </span>
        Pruebas y Despliegue
      </h2>

      {/* Checklist de pruebas */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-tasks text-blue-600"></i>
          Checklist de Pruebas
        </h3>
        <div className="space-y-3">
          {[
            { category: 'Autenticación', tests: [
              'El usuario puede iniciar sesión con su correo @christusmuguerza.org',
              'Se muestra la pantalla de login de Microsoft correctamente',
              'Después del login, el usuario es redirigido al dashboard',
              'El botón de cerrar sesión funciona correctamente',
              'La sesión persiste al recargar la página (sessionStorage)',
              'Si el token expira, se renueva automáticamente (silent refresh)',
            ]},
            { category: 'Autorización', tests: [
              'Los roles se asignan correctamente según los grupos de AD',
              'Un usuario Admin puede acceder a todas las secciones',
              'Un usuario Médico solo ve las secciones permitidas',
              'Un usuario sin grupo asignado tiene acceso de solo lectura',
              'Si un usuario es removido del grupo, pierde el acceso',
            ]},
            { category: 'Seguridad', tests: [
              'El token JWT se valida correctamente en el backend',
              'Los endpoints protegidos rechazan requests sin token',
              'Los tokens expiran y se renuevan correctamente',
              'No se exponen datos sensibles en el frontend',
              'MFA funciona si está configurado en Azure AD',
            ]},
            { category: 'Integración', tests: [
              'Microsoft Graph API retorna la info correcta del usuario',
              'Los grupos del usuario se obtienen correctamente',
              'El nombre y email del usuario coinciden con AD',
              'La sincronización de roles funciona en tiempo real',
            ]},
          ].map((section) => (
            <div key={section.category} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">{section.category}</h4>
              <ul className="space-y-1.5">
                {section.tests.map((test, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <input type="checkbox" className="mt-0.5 rounded border-gray-300" readOnly />
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Ambiente de pruebas */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-flask text-purple-600"></i>
          Estrategia de Ambientes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
              <i className="fas fa-code-branch"></i> Desarrollo
            </h4>
            <ul className="text-xs text-yellow-700 space-y-1">
              <li>• Usar cuenta de dev de Christus Muguerza</li>
              <li>• localhost:5173 como redirect URI</li>
              <li>• Datos de prueba</li>
              <li>• Sin MFA para facilitar pruebas</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
              <i className="fas fa-server"></i> Staging
            </h4>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Misma App Registration que producción</li>
              <li>• URL de staging como redirect URI</li>
              <li>• Usuarios de prueba reales</li>
              <li>• MFA activado</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
              <i className="fas fa-globe"></i> Producción
            </h4>
            <ul className="text-xs text-green-700 space-y-1">
              <li>• URL de producción como redirect URI</li>
              <li>• Todos los usuarios de Christus Muguerza</li>
              <li>• MFA obligatorio</li>
              <li>• Conditional Access Policies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-bug text-red-600"></i>
          Errores Comunes y Soluciones
        </h3>
        <div className="space-y-3">
          {[
            {
              error: 'AADSTS65001: The user or administrator has not consented',
              solution: 'El administrador de Azure AD debe hacer "Grant admin consent" en los permisos de la aplicación.',
            },
            {
              error: 'AADSTS50011: The redirect URI does not match',
              solution: 'Verificar que la URL de redirect en authConfig.ts coincida exactamente con la configurada en Azure AD.',
            },
            {
              error: 'AADSTS7000218: The request body must contain client_secret',
              solution: 'Para SPAs no se necesita client_secret. Verificar que la app esté registrada como "Single-page application" (SPA), no como "Web".',
            },
            {
              error: 'Token no contiene los grupos del usuario',
              solution: 'Si el usuario tiene más de 150 grupos, Azure AD no los incluye en el token. Usar Microsoft Graph API para consultar los grupos.',
            },
            {
              error: 'CORS error al llamar al backend',
              solution: 'Configurar CORS en el backend para permitir requests desde el dominio del frontend.',
            },
            {
              error: 'Invalid audience claim in token',
              solution: 'Verificar que el Client ID en la configuración del backend coincida con el audience del token.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4">
              <p className="font-mono text-xs text-red-600 bg-red-50 px-2 py-1 rounded mb-2">
                ❌ {item.error}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-green-700">✅ Solución:</span> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline de implementación */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-calendar-alt text-indigo-600"></i>
          Timeline Estimado de Implementación
        </h3>
        <div className="space-y-3">
          {[
            { week: 'Semana 1', task: 'Solicitud y aprobación con TI de Christus Muguerza', status: 'coordination' },
            { week: 'Semana 2', task: 'Registro de app en Azure AD y configuración de permisos', status: 'azure' },
            { week: 'Semana 3', task: 'Desarrollo del frontend con MSAL.js', status: 'frontend' },
            { week: 'Semana 4', task: 'Desarrollo del backend con validación JWT', status: 'backend' },
            { week: 'Semana 5', task: 'Pruebas de integración en staging', status: 'testing' },
            { week: 'Semana 6', task: 'Pruebas con usuarios reales y ajustes', status: 'testing' },
            { week: 'Semana 7', task: 'Despliegue a producción', status: 'production' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`w-24 text-xs font-bold ${
                item.status === 'production' ? 'text-green-700' :
                item.status === 'testing' ? 'text-amber-700' :
                'text-blue-700'
              }`}>{item.week}</div>
              <div className="flex-1 bg-gray-50 rounded-lg px-4 py-2 text-sm text-gray-700 border border-gray-200">
                {item.task}
              </div>
              <div className={`w-3 h-3 rounded-full ${
                item.status === 'production' ? 'bg-green-500' :
                item.status === 'testing' ? 'bg-amber-500' :
                item.status === 'coordination' ? 'bg-purple-500' :
                item.status === 'azure' ? 'bg-blue-500' :
                item.status === 'frontend' ? 'bg-green-500' :
                'bg-amber-500'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
