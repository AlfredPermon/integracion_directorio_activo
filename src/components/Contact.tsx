export default function Contact() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <span className="bg-indigo-100 text-indigo-700 rounded-lg p-2">
          <i className="fas fa-envelope"></i>
        </span>
        Contacto y Siguientes Pasos
      </h2>

      {/* Resumen de acción */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg">
        <h3 className="text-xl font-bold mb-3">📋 Resumen: ¿Qué necesitas hacer ahora?</h3>
        <div className="space-y-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <p className="font-semibold">Enviar solicitud al equipo de TI de Christus Muguerza</p>
                <p className="text-blue-100 text-sm mt-1">Usa la plantilla de correo de la sección "Requisitos" para solicitar el registro de la aplicación en Azure AD.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <p className="font-semibold">Obtener las credenciales (Client ID, Tenant ID)</p>
                <p className="text-blue-100 text-sm mt-1">Una vez registrada la app, el administrador te proporcionará los IDs necesarios para la configuración.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <p className="font-semibold">Implementar el código frontend con los valores reales</p>
                <p className="text-blue-100 text-sm mt-1">Reemplazar los placeholders en authConfig.ts con los valores reales proporcionados por TI.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
              <div>
                <p className="font-semibold">Coordinar con el equipo de backend</p>
                <p className="text-blue-100 text-sm mt-1">El backend también necesita configurarse con las mismas credenciales para validar los tokens.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Referencias útiles */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-book text-blue-600"></i>
          Documentación de Referencia
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { title: 'MSAL.js para React', url: 'https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-single-page-app-react-sign-in', desc: 'Guía oficial de Microsoft para implementar MSAL en React' },
            { title: 'Azure AD App Registration', url: 'https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app', desc: 'Cómo registrar una aplicación en Azure AD' },
            { title: 'Microsoft Graph API', url: 'https://learn.microsoft.com/en-us/graph/use-the-api', desc: 'Documentación de la API para consultar datos de Microsoft 365' },
            { title: 'OAuth 2.0 Auth Code + PKCE', url: 'https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow', desc: 'Flujo de autenticación usado por SPAs' },
            { title: 'Token Claims Reference', url: 'https://learn.microsoft.com/en-us/entra/identity-platform/id-token-claims-reference', desc: 'Referencia de los claims incluidos en los tokens' },
            { title: 'Conditional Access', url: 'https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview', desc: 'Políticas de acceso condicional de Azure AD' },
          ].map((ref) => (
            <a
              key={ref.title}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
            >
              <div className="flex items-start gap-3">
                <i className="fas fa-external-link-alt text-gray-400 group-hover:text-blue-500 mt-0.5"></i>
                <div>
                  <p className="font-semibold text-sm text-gray-800 group-hover:text-blue-700">{ref.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{ref.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Preguntas frecuentes */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-question-circle text-amber-600"></i>
          Preguntas Frecuentes
        </h3>
        <div className="space-y-4">
          {[
            {
              q: '¿Necesito crear usuarios nuevos en el sistema?',
              a: 'No. Los usuarios se autentican con sus cuentas existentes de Christus Muguerza (Microsoft 365). El sistema los reconoce automáticamente la primera vez que inician sesión.'
            },
            {
              q: '¿Qué pasa si un empleado deja la organización?',
              a: 'Al deshabilitar su cuenta en Azure AD, automáticamente pierde acceso al sistema. No necesitas eliminar usuarios manualmente.'
            },
            {
              q: '¿Se necesita sincronizar datos de usuarios?',
              a: 'No es necesario sincronizar. La información del usuario (nombre, email, departamento) se obtiene en tiempo real de Azure AD cada vez que inician sesión.'
            },
            {
              q: '¿Puedo usar esto con Outlook/Exchange?',
              a: 'Sí. Microsoft Graph API permite acceder al correo, calendario y contactos del usuario si se solicitan los permisos adecuados.'
            },
            {
              q: '¿Cuánto cuesta esta integración?',
              a: 'No tiene costo adicional. Azure AD, Microsoft Graph y MSAL.js son servicios incluidos en la licencia Microsoft 365 de Christus Muguerza.'
            },
            {
              q: '¿Qué tan seguro es?',
              a: 'Muy seguro. Utiliza los mismos estándares de seguridad que Microsoft 365: OAuth 2.0, tokens JWT con expiración, MFA, Conditional Access y auditoría de accesos.'
            },
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <p className="font-semibold text-gray-800 text-sm flex items-start gap-2">
                <i className="fas fa-chevron-right text-blue-500 mt-0.5 text-xs"></i>
                {faq.q}
              </p>
              <p className="text-sm text-gray-600 mt-1.5 ml-5">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nota final */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <i className="fas fa-check-circle text-green-600 text-2xl mt-0.5"></i>
          <div>
            <h3 className="font-bold text-green-800 text-lg">Conclusión</h3>
            <p className="text-green-700 text-sm mt-2 leading-relaxed">
              La integración con el Directorio Activo de Christus Muguerza se realiza a través de 
              <strong> Azure Active Directory (Microsoft Entra ID)</strong> usando el protocolo <strong>OAuth 2.0</strong> con 
              la librería <strong>MSAL.js</strong>. El proceso principal requiere coordinación con el equipo de TI 
              para registrar la aplicación y obtener las credenciales. Una vez configurado, los usuarios podrán 
              iniciar sesión con sus credenciales corporativas de Microsoft 365, sin necesidad de usuarios adicionales.
            </p>
            <p className="text-green-600 text-xs mt-3">
              Última actualización: 2026 | Versión de la guía: 1.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
