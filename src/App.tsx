import { useState } from "react";
import "./App.css";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

function App() {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const sections: Section[] = [
    {
      id: "intro",
      title: "🏠 Introducción",
      content: (
        <div className="section-content">
          <h2>Sistema Generador de Diagramas UML y Código Multiplataforma</h2>
          <p className="lead">
            Bienvenido al manual de usuario del sistema generador de diagramas
            UML con capacidades de generación automática de código backend
            (Spring Boot) y frontend (Flutter).
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>🎨 Diseño Visual</h3>
              <p>
                Crea diagramas UML de forma intuitiva con una interfaz
                drag-and-drop basada en JointJS
              </p>
            </div>
            <div className="feature-card">
              <h3>🤖 IA Integrada</h3>
              <p>
                Asistente de IA con Azure OpenAI (GPT-4) para sugerencias y
                optimización de diseño
              </p>
            </div>
            <div className="feature-card">
              <h3>⚡ Código Automático</h3>
              <p>
                Genera código Spring Boot y Flutter listo para producción desde
                tus diagramas
              </p>
            </div>
            <div className="feature-card">
              <h3>🔄 Tiempo Real</h3>
              <p>
                Colaboración en vivo con WebSockets para equipos distribuidos
              </p>
            </div>
          </div>

          <div className="tech-stack">
            <h3>Stack Tecnológico</h3>
            <div className="tech-badges">
              <span className="badge">React 19</span>
              <span className="badge">TypeScript 5.8</span>
              <span className="badge">Node.js 20</span>
              <span className="badge">Express 4.21</span>
              <span className="badge">PostgreSQL 16</span>
              <span className="badge">Prisma 6.2</span>
              <span className="badge">JointJS 4.2</span>
              <span className="badge">Socket.IO 4.8</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "requisitos",
      title: "📋 Requisitos del Sistema",
      content: (
        <div className="section-content">
          <h2>Requisitos del Sistema</h2>

          <div className="requirements">
            <div className="req-section">
              <h3>💻 Hardware Mínimo</h3>
              <ul>
                <li>
                  <strong>Procesador:</strong> Intel Core i3 o equivalente (2.0
                  GHz+)
                </li>
                <li>
                  <strong>RAM:</strong> 4 GB mínimo (8 GB recomendado)
                </li>
                <li>
                  <strong>Disco:</strong> 500 MB de espacio libre
                </li>
                <li>
                  <strong>Pantalla:</strong> Resolución mínima 1366x768
                </li>
              </ul>
            </div>

            <div className="req-section">
              <h3>🌐 Navegadores Soportados</h3>
              <ul>
                <li>Google Chrome 100+ (recomendado)</li>
                <li>Mozilla Firefox 95+</li>
                <li>Microsoft Edge 100+</li>
                <li>Safari 15+ (macOS)</li>
              </ul>
            </div>

            <div className="req-section">
              <h3>🔌 Conectividad</h3>
              <ul>
                <li>Conexión a Internet estable (mínimo 5 Mbps)</li>
                <li>
                  Puertos: 3000 (frontend), 5000 (backend), 5432 (base de datos)
                </li>
                <li>WebSockets habilitados en el navegador</li>
              </ul>
            </div>

            <div className="req-section">
              <h3>🔧 Desarrollo Local (Opcional)</h3>
              <ul>
                <li>Node.js 20.x LTS</li>
                <li>PostgreSQL 16+</li>
                <li>Git 2.30+</li>
                <li>VS Code o editor de código</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manual-app">
      {/* Header */}
      <header className="manual-header">
        <div className="header-content">
          <h1>📚 Manual de Usuario</h1>
          <p>Sistema Generador de Diagramas UML y Código Multiplataforma</p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Buscar en el manual..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Main Content */}
      <div className="manual-container">
        {/* Sidebar Navigation */}
        <nav className="manual-nav">
          <h2>Contenido</h2>
          <ul className="nav-list">
            {filteredSections.map((section) => (
              <li
                key={section.id}
                className={activeSection === section.id ? "active" : ""}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </nav>

        {/* Content Area */}
        <main className="manual-content">
          {filteredSections.find((s) => s.id === activeSection)?.content || (
            <div className="no-results">
              <h2>No se encontraron resultados</h2>
              <p>Intenta con otros términos de búsqueda</p>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="manual-footer">
        <p>
          © 2025 Sistema Generador de Diagramas UML |
          <a
            href="https://github.com/borysinho/server-frontend-backend-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          |
          <a
            href="https://uml-generator.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Aplicación
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
