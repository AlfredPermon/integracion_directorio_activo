export default function AzureConfig() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <span className="bg-purple-100 text-purple-700 rounded-lg p-2">
          <i className="fas fa-cloud"></i>
        </span>
        Configuración en Azure AD (Entra ID)
      </h2>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <p className="text-blue-800 text-sm">
          <strong>📝 Nota:</strong> Estos pasos los debe realizar el <strong>administrador de Azure AD</strong> de Christus Muguerza 
          en el portal de Azure (portal.azure.com). Tú solo necesitas los datos resultantes.
        </p>
      </div>

      {/* Paso 1 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
          <h3 className="font-bold text-gray-800 text-lg">Acceder al Portal de Azure</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
          <ol className="list-decimal ml-4 space-y-2">
            <li>Ir a <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">https://portal.azure.com</code></li>
            <li>Iniciar sesión con credenciales de administrador de Christus Muguerza</li>
            <li>Navegar a: <strong>Azure Active Directory</strong> → <strong>App registrations</strong></li>
            <li>Click en <strong>"+ New registration"</strong></li>
          </ol>
        </div>
      </div>

      {/* Paso 2 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
          <h3 className="font-bold text-gray-800 text-lg">Registrar la Aplicación</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-3 bg-white">
              <p className="font-semibold text-gray-800">Name:</p>
              <code className="text-blue-700 text-xs">Sistema-[NombreProyecto]-ChristusMuguerza</code>
            </div>
            <div className="border border-gray-200 rounded-lg p-3 bg-white">
              <p className="font-semibold text-gray-800">Supported account types:</p>
              <p className="text-sm">✅ <strong>Single tenant</strong> — Solo cuentas del directorio de Christus Muguerza</p>
              <p className="text-xs text-gray-500 mt-1">(Solo cuentas en este directorio organizacional)</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3 bg-white">
              <p className="font-semibold text-gray-800">Redirect URI:</p>
              <p className="text-sm">Plataforma: <strong>Single-page application (SPA)</strong></p>
              <code className="text-blue-700 text-xs block mt-1">https://tu-dominio.com/auth/callback</code>
              <p className="text-xs text-gray-500 mt-1">Agregar también: <code className="bg-gray-100 px-1 rounded">http://localhost:5173</code> para desarrollo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Paso 3 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
          <h3 className="font-bold text-gray-800 text-lg">Configurar API Permissions</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
          <p className="mb-3">Ir a <strong>API permissions</strong> → <strong>+ Add a permission</strong> → <strong>Microsoft Graph</strong> → <strong>Delegated permissions</strong></p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2 font-semibold">Permiso</th>
                  <th className="text-left p-2 font-semibold">Descripción</th>
                  <th className="text-left p-2 font-semibold">Necesario</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="p-2 font-mono text-blue-700">User.Read</td>
                  <td className="p-2">Leer perfil del usuario autenticado</td>
                  <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Obligatorio</span></td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-2 font-mono text-blue-700">GroupMember.Read.All</td>
                  <td className="p-2">Leer membresías de grupo del usuario</td>
                  <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Obligatorio</span></td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-2 font-mono text-blue-700">openid</td>
                  <td className="p-2">Iniciar sesión del usuario</td>
                  <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Obligatorio</span></td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-2 font-mono text-blue-700">profile</td>
                  <td className="p-2">Leer perfil básico del usuario</td>
                  <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Obligatorio</span></td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-2 font-mono text-blue-700">email</td>
                  <td className="p-2">Leer dirección de email del usuario</td>
                  <td className="p-2"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Obligatorio</span></td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-2 font-mono text-blue-700">Directory.Read.All</td>
                  <td className="p-2">Leer todos los datos del directorio</td>
                  <td className="p-2"><span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs">Opcional</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-red-600">
            ⚠️ Después de agregar permisos, hacer click en <strong>"Grant admin consent"</strong> para que el administrador los apruebe.
          </p>
        </div>
      </div>

      {/* Paso 4 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
          <h3 className="font-bold text-gray-800 text-lg">Configurar Token Configuration (Grupos/Claims)</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
          <p className="mb-3">Para recibir los grupos del usuario en el token:</p>
          <ol className="list-decimal ml-4 space-y-2">
            <li>Ir a <strong>Token configuration</strong> → <strong>+ Add groups claim</strong></li>
            <li>Seleccionar: <strong>"Security groups"</strong> o <strong>"All groups"</strong></li>
            <li>Tipo de claim: <strong>"Group ID"</strong> (recomendado para mapear roles)</li>
            <li>Aplicar tanto al <strong>Access Token</strong> como al <strong>ID Token</strong></li>
          </ol>
          <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs text-amber-800">
              <strong>💡 Tip:</strong> Si un usuario pertenece a más de 150 grupos, Azure AD no incluirá los grupos en el token. 
              En ese caso, se debe usar Microsoft Graph API para consultar los grupos después del login.
            </p>
          </div>
        </div>
      </div>

      {/* Paso 5 - Datos a obtener */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
          <h3 className="font-bold text-gray-800 text-lg">Datos que Necesitas Obtener</h3>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-green-800 mb-3">Después del registro, solicita al administrador estos datos:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-green-200">
              <i className="fas fa-id-badge text-green-600"></i>
              <div>
                <p className="font-mono text-xs text-gray-500">Application (client) ID</p>
                <code className="text-sm text-green-700">xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</code>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-green-200">
              <i className="fas fa-building text-green-600"></i>
              <div>
                <p className="font-mono text-xs text-gray-500">Directory (tenant) ID</p>
                <code className="text-sm text-green-700">xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</code>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-green-200">
              <i className="fas fa-globe text-green-600"></i>
              <div>
                <p className="font-mono text-xs text-gray-500">Tenant Name</p>
                <code className="text-sm text-green-700">christusmuguerza.onmicrosoft.com</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
