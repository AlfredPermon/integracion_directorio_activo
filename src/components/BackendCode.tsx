export default function BackendCode() {
  const dotnetCode = `// Program.cs - ASP.NET Core con validación de tokens de Azure AD
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;

var builder = WebApplication.CreateBuilder(args);

// Configurar autenticación con Azure AD
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

// Configurar autorización con roles
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("RequireAdmin", policy => 
        policy.RequireRole("Admin"));
    options.AddPolicy("RequireMedico", policy => 
        policy.RequireRole("Admin", "Medico"));
});

builder.Services.AddControllers();
var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();`;

  const appSettingsCode = `// appsettings.json
{
  "AzureAd": {
    "Instance": "https://login.microsoftonline.com/",
    "Domain": "christusmuguerza.onmicrosoft.com",
    "TenantId": "TU_TENANT_ID_AQUI",
    "ClientId": "TU_CLIENT_ID_AQUI",
    "Audience": "TU_CLIENT_ID_AQUI",
    "Scopes": "User.Read"
  }
}`;

  const controllerCode = `// Controllers/UsersController.cs
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Graph;
using Microsoft.Identity.Web;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class UsersController : ControllerBase
{
    private readonly GraphServiceClient _graphClient;

    public UsersController(GraphServiceClient graphClient)
    {
        _graphClient = graphClient;
    }

    // Obtener el usuario actual autenticado
    [HttpGet("me")]
    public async Task<IActionResult> GetCurrentUser()
    {
        var userId = User.GetObjectId(); // ID del usuario desde el token
        
        // Consultar Microsoft Graph para obtener info completa
        var user = await _graphClient.Me
            .Request()
            .Select(u => new { 
                u.DisplayName, 
                u.Mail, 
                u.JobTitle,
                u.Department 
            })
            .GetAsync();

        // Obtener los grupos del usuario
        var groups = await _graphClient.Me
            .TransitiveMemberOf
            .Request()
            .GetAsync();

        // Mapear grupos a roles del sistema
        var roles = MapGroupsToRoles(groups.Value);

        return Ok(new
        {
            user.DisplayName,
            user.Mail,
            user.JobTitle,
            user.Department,
            Roles = roles,
            ObjectId = userId
        });
    }

    private List<string> MapGroupsToRoles(
        IList<DirectoryObject> groups)
    {
        var roleMapping = new Dictionary<string, string>
        {
            { "GRUPO_ADMIN_OBJECT_ID", "Admin" },
            { "GRUPO_MEDICOS_OBJECT_ID", "Medico" },
            { "GRUPO_ENFERMERIA_OBJECT_ID", "Enfermeria" },
            { "GRUPO_ADMINISTRATIVOS_OBJECT_ID", "Administrativo" },
        };

        return groups
            .OfType<Group>()
            .Where(g => roleMapping.ContainsKey(g.Id))
            .Select(g => roleMapping[g.Id])
            .ToList();
    }
}`;

  const nodeCode = `// backend/server.js - Node.js/Express con validación JWT
const express = require('express');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const { Client } = require('@microsoft/microsoft-graph-client');
const { TokenCredentialAuthenticationProvider } = 
  require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');

const app = express();

// Middleware para validar tokens de Azure AD
const validateAzureToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    // Obtener las claves públicas de Microsoft
    const client = jwksClient({
      jwksUri: 'https://login.microsoftonline.com/TU_TENANT_ID/discovery/v2.0/keys'
    });

    const decoded = jwt.decode(token, { complete: true });
    const key = await client.getSigningKey(decoded.header.kid);
    const publicKey = key.getPublicKey();

    // Verificar el token
    const verified = jwt.verify(token, publicKey, {
      issuer: 'https://login.microsoftonline.com/TU_TENANT_ID/v2.0',
      audience: 'TU_CLIENT_ID',
      algorithms: ['RS256']
    });

    req.user = {
      objectId: verified.oid,
      name: verified.name,
      email: verified.preferred_username,
      roles: verified.roles || [],
      groups: verified.groups || []
    };

    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Endpoint para obtener info del usuario
app.get('/api/users/me', validateAzureToken, async (req, res) => {
  const { objectId, name, email, groups } = req.user;

  // Mapear grupos de AD a roles del sistema
  const roleMapping = {
    'GRUPO_ADMIN_OBJECT_ID': 'Admin',
    'GRUPO_MEDICOS_OBJECT_ID': 'Medico',
    'GRUPO_ENFERMERIA_OBJECT_ID': 'Enfermeria',
    'GRUPO_ADMINISTRATIVOS_OBJECT_ID': 'Administrativo',
  };

  const roles = (groups || [])
    .filter(g => g in roleMapping)
    .map(g => roleMapping[g]);

  res.json({
    objectId,
    name,
    email,
    roles,
    groups
  });
});

app.listen(3000, () => console.log('Backend running on port 3000'));`;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <span className="bg-amber-100 text-amber-700 rounded-lg p-2">
          <i className="fas fa-server"></i>
        </span>
        Implementación Backend (API)
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
        <p className="text-amber-800 text-sm">
          <strong>📝 Nota:</strong> El backend valida el token JWT que envía el frontend y consulta Microsoft Graph API 
          para obtener información completa del usuario (grupos, perfil, etc.).
        </p>
      </div>

      {/* Opción 1: ASP.NET Core */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">OPCIÓN A</span>
          ASP.NET Core (Recomendado para Christus Muguerza)
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Si Christus Muguerza usa .NET como backend (común en entornos Microsoft 365):
        </p>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Instalar paquetes NuGet:</p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">
{`dotnet add package Microsoft.Identity.Web
dotnet add package Microsoft.Identity.Web.UI
dotnet add package Microsoft.Graph`}
              </pre>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Configuración (Program.cs):</p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre">{dotnetCode}</pre>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">appsettings.json:</p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre">{appSettingsCode}</pre>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Controller de ejemplo:</p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre">{controllerCode}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Opción 2: Node.js */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">OPCIÓN B</span>
          Node.js / Express
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Si el backend está en Node.js:
        </p>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Instalar dependencias:</p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre">
{`npm install express jsonwebtoken jwks-rsa @microsoft/microsoft-graph-client`}
              </pre>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Servidor con validación JWT:</p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre">{nodeCode}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Mapeo de roles */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <i className="fas fa-exchange-alt text-blue-600"></i>
          Mapeo de Grupos AD → Roles del Sistema
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 font-semibold">Grupo en Azure AD</th>
                <th className="text-center p-3 font-semibold">→</th>
                <th className="text-left p-3 font-semibold">Rol en el Sistema</th>
                <th className="text-left p-3 font-semibold">Permisos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="p-3 font-mono text-xs text-blue-700">SG-Sistema-Admins</td>
                <td className="p-3 text-center">→</td>
                <td className="p-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-bold">Admin</span></td>
                <td className="p-3 text-xs text-gray-600">Acceso total, gestión de usuarios y roles</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="p-3 font-mono text-xs text-blue-700">SG-Sistema-Medicos</td>
                <td className="p-3 text-center">→</td>
                <td className="p-3"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-bold">Médico</span></td>
                <td className="p-3 text-xs text-gray-600">Ver pacientes, crear expedientes, prescripciones</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-3 font-mono text-xs text-blue-700">SG-Sistema-Enfermeria</td>
                <td className="p-3 text-center">→</td>
                <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">Enfermería</span></td>
                <td className="p-3 text-xs text-gray-600">Ver pacientes, registrar signos vitales</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="p-3 font-mono text-xs text-blue-700">SG-Sistema-Administrativos</td>
                <td className="p-3 text-center">→</td>
                <td className="p-3"><span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-bold">Administrativo</span></td>
                <td className="p-3 text-xs text-gray-600">Gestión de citas, facturación</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="p-3 font-mono text-xs text-blue-700">SG-Sistema-Consulta</td>
                <td className="p-3 text-center">→</td>
                <td className="p-3"><span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-bold">Solo Lectura</span></td>
                <td className="p-3 text-xs text-gray-600">Solo consultar información</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          💡 Los nombres de los grupos deben ser confirmados con el administrador de TI de Christus Muguerza.
        </p>
      </div>
    </div>
  );
}
