export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Banner de alerta */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
        <div className="flex items-start gap-3">
          <i className="fas fa-exclamation-triangle text-amber-500 text-xl mt-0.5"></i>
          <div>
            <h3 className="font-bold text-amber-800 text-lg">Mensaje del Sistema</h3>
            <p className="text-amber-700 mt-1 italic">
              "En producción se integra con el Directorio Activo de Christus Muguerza"
            </p>
            <p className="text-amber-600 text-sm mt-2">
              Esta guía explica paso a paso cómo realizar dicha integración con el entorno Microsoft 365.
            </p>
          </div>
        </div>
      </div>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-700 rounded-lg p-2">
            <i className="fas fa-question-circle"></i>
          </span>
          ¿Qué significa esta integración?
        </h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            Christus Muguerza utiliza <strong>Microsoft 365</strong> como su plataforma de productividad, 
            lo que significa que todos los empleados tienen cuentas en <strong>Azure Active Directory</strong> 
            (ahora llamado <strong>Microsoft Entra ID</strong>). La integración permite que los usuarios 
            del sistema inicien sesión con sus <strong>mismas credenciales corporativas</strong> (correo 
            Christus Muguerza y contraseña), sin necesidad de crear usuarios adicionales.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <i className="fas fa-user-check text-green-600 text-2xl mb-2"></i>
              <h4 className="font-semibold text-green-800 text-sm">Single Sign-On (SSO)</h4>
              <p className="text-green-700 text-xs mt-1">Login con credenciales corporativas</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <i className="fas fa-users-cog text-blue-600 text-2xl mb-2"></i>
              <h4 className="font-semibold text-blue-800 text-sm">Roles desde AD</h4>
              <p className="text-blue-700 text-xs mt-1">Grupos y roles sincronizados</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <i className="fas fa-shield-alt text-purple-600 text-2xl mb-2"></i>
              <h4 className="font-semibold text-purple-800 text-sm">Seguridad Corporativa</h4>
              <p className="text-purple-700 text-xs mt-1">MFA y políticas de Christus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso general */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-indigo-100 text-indigo-700 rounded-lg p-2">
            <i className="fas fa-route"></i>
          </span>
          Proceso General de Integración
        </h2>
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="space-y-4">
            {[
              { step: 1, title: 'Solicitar acceso al equipo de TI de Christus Muguerza', desc: 'Necesitas que el administrador de Azure AD registre tu aplicación y te proporcione el Client ID y Tenant ID.' },
              { step: 2, title: 'Registrar la aplicación en Azure AD (Entra ID)', desc: 'El administrador de TI registra la app en el portal de Azure, configura los permisos y las URLs de redirección.' },
              { step: 3, title: 'Implementar MSAL.js en el Frontend (React)', desc: 'Usar la librería @azure/msal-react para manejar la autenticación con el flujo Authorization Code + PKCE.' },
              { step: 4, title: 'Validar tokens en el Backend', desc: 'El backend valida el JWT token de Microsoft Graph y extrae la información del usuario (nombre, email, grupos/roles).' },
              { step: 5, title: 'Mapear roles de AD a roles del sistema', desc: 'Los grupos de seguridad de Azure AD se mapean a los roles del sistema (Admin, Médico, Enfermería, etc.).' },
              { step: 6, title: 'Pruebas y despliegue a producción', desc: 'Probar en ambiente de desarrollo/staging antes de pasar a producción con el tenant real de Christus Muguerza.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {item.step}
                </div>
                <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías clave */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="bg-emerald-100 text-emerald-700 rounded-lg p-2">
            <i className="fas fa-microchip"></i>
          </span>
          Tecnologías Clave
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <i className="fas fa-cloud text-blue-600 text-lg"></i>
              <h4 className="font-bold text-gray-900">Microsoft Entra ID (Azure AD)</h4>
            </div>
            <p className="text-gray-600 text-sm">Servicio de identidad en la nube de Microsoft. Gestiona usuarios, grupos y aplicaciones.</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <i className="fas fa-lock text-green-600 text-lg"></i>
              <h4 className="font-bold text-gray-900">MSAL.js (Microsoft Authentication Library)</h4>
            </div>
            <p className="text-gray-600 text-sm">Librería oficial de Microsoft para autenticación en aplicaciones JavaScript/React.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <i className="fas fa-project-diagram text-purple-600 text-lg"></i>
              <h4 className="font-bold text-gray-900">Microsoft Graph API</h4>
            </div>
            <p className="text-gray-600 text-sm">API unificada para acceder a datos de Microsoft 365 (usuarios, grupos, correo, etc.).</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <i className="fas fa-key text-amber-600 text-lg"></i>
              <h4 className="font-bold text-gray-900">OAuth 2.0 + OpenID Connect</h4>
            </div>
            <p className="text-gray-600 text-sm">Protocolos estándar de autenticación y autorización utilizados por Azure AD.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
