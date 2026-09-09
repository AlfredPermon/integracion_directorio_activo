export default function FrontendCode() {
  const configCode = `// src/auth/authConfig.ts
import { LogLevel } from '@azure/msal-browser';

// ⚠️ REEMPLAZAR con los valores reales de Christus Muguerza
export const msalConfig = {
  auth: {
    clientId: 'TU_CLIENT_ID_AQUI',
    authority: 'https://login.microsoftonline.com/TU_TENANT_ID',
    redirectUri: 'http://localhost:5173',
    postLogoutRedirectUri: 'http://localhost:5173',
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message) => {
        if (level === LogLevel.Error) console.error(message);
      },
      logLevel: LogLevel.Warning,
    },
  },
};

// Scopes (permisos) que se solicitan al usuario
export const loginRequest = {
  scopes: ['User.Read', 'GroupMember.Read.All'],
  prompt: 'select_account',
};

// Mapeo de grupos AD → Roles del sistema
// ⚠️ REEMPLAZAR con los Object IDs reales de Christus Muguerza
export const roleGroupMapping: Record<string, string> = {
  'GRUPO_ADMIN_OBJECT_ID': 'Admin',
  'GRUPO_MEDICOS_OBJECT_ID': 'Medico',
  'GRUPO_ENFERMERIA_OBJECT_ID': 'Enfermeria',
  'GRUPO_ADMINISTRATIVOS_OBJECT_ID': 'Administrativo',
};`;

  const mainCode = `// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './auth/authConfig';
import App from './App';

// Crear instancia de MSAL
const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);`;

  const loginCode = `// src/components/LoginPage.tsx
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../auth/authConfig';

export default function LoginPage() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest)
      .then((response) => {
        console.log('Login exitoso:', response.account);
      })
      .catch((error) => {
        console.error('Error en login:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-2">
          Sistema Christus Muguerza
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Inicie sesión con su cuenta corporativa
        </p>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg
                     hover:bg-blue-700 transition-colors"
        >
          🔐 Iniciar sesión con Christus Muguerza
        </button>
      </div>
    </div>
  );
}`;

  const hookCode = `// src/hooks/useAuthUser.ts
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { roleGroupMapping } from '../auth/authConfig';

export function useAuthUser() {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const account = accounts[0];

  // Extraer roles de los grupos del token
  const getUserRoles = (): string[] => {
    if (!account?.idTokenClaims) return [];
    const groups = (account.idTokenClaims as any).groups || [];
    return groups
      .filter((g: string) => g in roleGroupMapping)
      .map((g: string) => (roleGroupMapping as any)[g]);
  };

  return {
    isAuthenticated,
    userName: account?.name,
    userEmail: account?.username,
    userRoles: getUserRoles(),
    objectId: account?.localAccountId,
  };
}`;

  const appCode = `// src/App.tsx - Dentro del MsalProvider
import { 
  AuthenticatedTemplate, 
  UnauthenticatedTemplate 
} from '@azure/msal-react';
import { useAuthUser } from './hooks/useAuthUser';
import LoginPage from './components/LoginPage';

function AppContent() {
  return (
    <>
      <AuthenticatedTemplate>
        {/* Contenido visible solo cuando el usuario está logueado */}
        <Dashboard />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        {/* Mostrar login cuando no está autenticado */}
        <LoginPage />
      </UnauthenticatedTemplate>
    </>
  );
}

export default function App() {
  return <AppContent />;
}`;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
        <span className="bg-green-100 text-green-700 rounded-lg p-2">
          <i className="fas fa-code"></i>
        </span>
        Implementación Frontend (React)
      </h2>

      {/* Paso 1: Instalar */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
          <h3 className="font-bold text-gray-800">Instalar dependencias</h3>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-green-400 text-sm font-mono">
{`npm install @azure/msal-browser @azure/msal-react`}
          </pre>
        </div>
      </div>

      {/* Paso 2: Configuración MSAL */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
          <h3 className="font-bold text-gray-800">Crear archivo de configuración MSAL</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Crear archivo <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">src/auth/authConfig.ts</code>:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre">{configCode}</pre>
        </div>
      </div>

      {/* Paso 3: Auth Provider */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
          <h3 className="font-bold text-gray-800">Configurar el Provider de MSAL en main.tsx</h3>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre">{mainCode}</pre>
        </div>
      </div>

      {/* Paso 4: Componente de Login */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
          <h3 className="font-bold text-gray-800">Componente de Login con Christus Muguerza</h3>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre">{loginCode}</pre>
        </div>
      </div>

      {/* Paso 5: Obtener info del usuario */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
          <h3 className="font-bold text-gray-800">Hook para obtener información del usuario y roles</h3>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre">{hookCode}</pre>
        </div>
      </div>

      {/* Paso 6: Rutas protegidas */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
          <h3 className="font-bold text-gray-800">Rutas protegidas con autenticación</h3>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre">{appCode}</pre>
        </div>
      </div>
    </div>
  );
}
