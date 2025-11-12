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
    {
      id: "acceso",
      title: "🔐 Acceso al Sistema",
      content: (
        <div className="section-content">
          <h2>Acceso al Sistema</h2>

          <h3>☁️ Versión en Producción</h3>
          <p>Acceso directo sin instalación:</p>
          <div className="code-block">
            <strong>Frontend:</strong> https://uml-generator.netlify.app
            <br />
            <strong>Backend API:</strong> https://uml-api.onrender.com
          </div>

          <h3>💻 Instalación Local</h3>
          <h4>Paso 1: Clonar repositorio</h4>
          <div className="code-block">
            git clone
            https://github.com/borysinho/server-frontend-backend-generator.git
            <br />
            cd server-frontend-backend-generator
          </div>

          <h4>Paso 2: Configurar Backend</h4>
          <div className="code-block">
            cd server
            <br />
            npm install
            <br />
            npx prisma migrate deploy
            <br />
            npm run dev
          </div>

          <h4>Paso 3: Configurar Frontend</h4>
          <div className="code-block">
            cd ../client
            <br />
            npm install
            <br />
            npm run dev
          </div>
        </div>
      ),
    },
    {
      id: "interfaz",
      title: "🎨 Interfaz de Usuario",
      content: (
        <div className="section-content">
          <h2>Interfaz de Usuario</h2>

          <h3>📐 Área de Trabajo (Canvas)</h3>
          <ul>
            <li>
              <strong>Zoom:</strong> Ctrl + rueda del ratón
            </li>
            <li>
              <strong>Pan:</strong> Click derecho + arrastrar
            </li>
            <li>
              <strong>Selección múltiple:</strong> Ctrl + Click
            </li>
            <li>
              <strong>Grid:</strong> Activar desde menú View
            </li>
          </ul>

          <h3>🧰 Barra de Herramientas</h3>
          <ul>
            <li>
              <strong>💾 Guardar:</strong> Ctrl+S
            </li>
            <li>
              <strong>📂 Abrir:</strong> Cargar diagrama
            </li>
            <li>
              <strong>📤 Exportar:</strong> PNG, SVG, JSON, código
            </li>
            <li>
              <strong>↩️ Deshacer/Rehacer:</strong> Ctrl+Z / Ctrl+Y
            </li>
          </ul>

          <h3>📦 Panel de Elementos</h3>
          <p>Componentes disponibles:</p>
          <ul>
            <li>
              <strong>Clases:</strong> Clase, Clase Abstracta, Interfaz
            </li>
            <li>
              <strong>Relaciones:</strong> Asociación, Agregación, Composición,
              Herencia
            </li>
            <li>
              <strong>BCE:</strong> Boundary, Control, Entity
            </li>
            <li>
              <strong>Utilidades:</strong> Notas, Paquetes
            </li>
          </ul>

          <h3>⚙️ Panel de Propiedades</h3>
          <p>Configuración de elementos:</p>
          <ul>
            <li>Nombre y estereotipo</li>
            <li>Atributos (nombre, tipo, visibilidad)</li>
            <li>Métodos (nombre, parámetros, retorno)</li>
            <li>Colores y estilos</li>
          </ul>
        </div>
      ),
    },
    {
      id: "diagramas",
      title: "📊 Creación de Diagramas",
      content: (
        <div className="section-content">
          <h2>Creación de Diagramas UML</h2>

          <h3>Paso 1: Agregar Clases</h3>
          <ol>
            <li>Selecciona "Clase" del panel izquierdo</li>
            <li>Haz clic en el canvas</li>
            <li>Doble clic para editar</li>
            <li>Define nombre, atributos y métodos</li>
          </ol>

          <div className="code-block">
            <strong>Ejemplo de Atributo:</strong>
            <br />
            - id: Long
            <br />
            - nombre: String
            <br />+ activo: Boolean
          </div>

          <h3>Paso 2: Establecer Relaciones</h3>
          <ol>
            <li>Selecciona el tipo de relación</li>
            <li>Clic en clase origen</li>
            <li>Arrastra a clase destino</li>
            <li>Configura cardinalidad</li>
          </ol>

          <h3>Tipos de Relaciones</h3>
          <ul>
            <li>
              <strong>→ Asociación:</strong> Relación genérica
            </li>
            <li>
              <strong>◇→ Agregación:</strong> "Tiene un" (débil)
            </li>
            <li>
              <strong>♦→ Composición:</strong> "Compuesto de" (fuerte)
            </li>
            <li>
              <strong>▷─ Herencia:</strong> "Es un"
            </li>
            <li>
              <strong>▷-- Implementación:</strong> Clase implementa interfaz
            </li>
          </ul>

          <h3>Atajos de Teclado</h3>
          <ul>
            <li>
              <kbd>Ctrl</kbd> + <kbd>S</kbd> → Guardar
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>Z</kbd> → Deshacer
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>Y</kbd> → Rehacer
            </li>
            <li>
              <kbd>Delete</kbd> → Eliminar
            </li>
            <li>
              <kbd>Ctrl</kbd> + <kbd>A</kbd> → Seleccionar todo
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "codigo",
      title: "⚡ Generación de Código",
      content: (
        <div className="section-content">
          <h2>Generación Automática de Código</h2>

          <h3>🍃 Backend Spring Boot</h3>
          <p>Genera proyecto completo con:</p>
          <ul>
            <li>
              <strong>Entidades JPA:</strong> @Entity, @Table, validaciones
            </li>
            <li>
              <strong>Repositorios:</strong> JpaRepository con CRUD
            </li>
            <li>
              <strong>Servicios:</strong> Lógica de negocio
            </li>
            <li>
              <strong>Controladores REST:</strong> Endpoints @RestController
            </li>
            <li>
              <strong>DTOs:</strong> Objetos de transferencia
            </li>
            <li>
              <strong>Migraciones Flyway:</strong> Scripts SQL versionados
            </li>
          </ul>

          <div className="code-block">
            @Entity
            <br />
            @Table(name = "usuarios")
            <br />
            public class Usuario &#123;
            <br />
            {"    "}@Id
            <br />
            {"    "}@GeneratedValue(strategy = GenerationType.IDENTITY)
            <br />
            {"    "}private Long id;
            <br />
            {"    "}
            <br />
            {"    "}@Column(nullable = false)
            <br />
            {"    "}private String nombre;
            <br />
            &#125;
          </div>

          <h3>📱 Frontend Flutter</h3>
          <p>Genera aplicación móvil con:</p>
          <ul>
            <li>
              <strong>Modelos:</strong> Clases Dart con serialización JSON
            </li>
            <li>
              <strong>Servicios API:</strong> Cliente HTTP con Dio
            </li>
            <li>
              <strong>Providers:</strong> Estado con Riverpod
            </li>
            <li>
              <strong>Pantallas CRUD:</strong> Listado, detalle, formularios
            </li>
            <li>
              <strong>Widgets:</strong> Componentes reutilizables
            </li>
            <li>
              <strong>Navegación:</strong> Rutas con GoRouter
            </li>
          </ul>

          <h3>Pasos para Generar</h3>
          <ol>
            <li>Completa tu diagrama de clases</li>
            <li>Click en "Exportar" → "Spring Boot" o "Flutter"</li>
            <li>Configura opciones del proyecto</li>
            <li>Descarga el archivo ZIP generado</li>
            <li>Extrae y ejecuta con tu IDE</li>
          </ol>
        </div>
      ),
    },
    {
      id: "ia",
      title: "🤖 Asistente de IA",
      content: (
        <div className="section-content">
          <h2>Uso del Asistente de IA</h2>

          <h3>💬 Capacidades</h3>
          <p>El asistente con GPT-4 puede:</p>
          <ul>
            <li>Generar clases automáticamente</li>
            <li>Sugerir diseños arquitectónicos</li>
            <li>Aplicar patrones de diseño</li>
            <li>Validar relaciones y cardinalidad</li>
            <li>Explicar conceptos UML</li>
            <li>Refactorizar estructuras</li>
          </ul>

          <h3>📝 Ejemplos de Prompts</h3>
          <div className="prompt-example">
            <strong>Generación:</strong>
            <br />
            "Crea un diagrama para sistema de biblioteca con libros, autores y
            préstamos"
          </div>

          <div className="prompt-example">
            <strong>Patrón:</strong>
            <br />
            "Aplica el patrón Strategy al procesamiento de pagos"
          </div>

          <div className="prompt-example">
            <strong>Optimización:</strong>
            <br />
            "Mejora este diseño siguiendo principios SOLID"
          </div>

          <h3>🎯 Mejores Prácticas</h3>
          <ul>
            <li>Sé específico en tus solicitudes</li>
            <li>Proporciona contexto del dominio</li>
            <li>Revisa sugerencias antes de aplicar</li>
            <li>Experimenta con diferentes formulaciones</li>
          </ul>
        </div>
      ),
    },
    {
      id: "colaboracion",
      title: "🔄 Colaboración",
      content: (
        <div className="section-content">
          <h2>Colaboración en Tiempo Real</h2>

          <h3>👥 Trabajo en Equipo</h3>
          <p>Características de colaboración:</p>
          <ul>
            <li>
              <strong>Edición simultánea:</strong> Múltiples usuarios en el
              mismo diagrama
            </li>
            <li>
              <strong>Cursores en vivo:</strong> Ve dónde trabajan tus
              compañeros
            </li>
            <li>
              <strong>Sincronización automática:</strong> Cambios instantáneos
            </li>
            <li>
              <strong>Notificaciones:</strong> Alertas de entrada/salida
            </li>
          </ul>

          <h3>🚀 Iniciar Sesión Colaborativa</h3>
          <ol>
            <li>Abre o crea un diagrama</li>
            <li>Click en "Compartir"</li>
            <li>Copia el enlace de invitación</li>
            <li>Comparte con tu equipo</li>
            <li>Los colaboradores se unen automáticamente</li>
          </ol>

          <h3>🔒 Permisos</h3>
          <ul>
            <li>
              <strong>Propietario:</strong> Control total
            </li>
            <li>
              <strong>Editor:</strong> Puede modificar
            </li>
            <li>
              <strong>Visualizador:</strong> Solo lectura
            </li>
          </ul>

          <h3>💾 Autoguardado</h3>
          <ul>
            <li>Guardado automático cada 30 segundos</li>
            <li>Guardado inmediato al crear/eliminar</li>
            <li>Indicador visual del estado</li>
            <li>Historial de versiones</li>
          </ul>
        </div>
      ),
    },
    {
      id: "exportar",
      title: "📤 Exportación",
      content: (
        <div className="section-content">
          <h2>Exportación e Importación</h2>

          <h3>📥 Formatos de Exportación</h3>

          <h4>🖼️ PNG (Imagen)</h4>
          <ul>
            <li>Alta resolución para presentaciones</li>
            <li>Fondo transparente opcional</li>
            <li>Tamaño configurable</li>
          </ul>

          <h4>🎨 SVG (Vector)</h4>
          <ul>
            <li>Escalable sin pérdida</li>
            <li>Ideal para documentación</li>
            <li>Editable en Inkscape</li>
          </ul>

          <h4>📄 JSON (Datos)</h4>
          <ul>
            <li>Formato nativo del sistema</li>
            <li>Permite re-importación completa</li>
            <li>Incluye metadata</li>
          </ul>

          <h4>📋 PlantUML</h4>
          <ul>
            <li>Compatible con herramientas UML estándar</li>
            <li>Formato de texto plano</li>
            <li>Fácil de versionar en Git</li>
          </ul>

          <h4>💻 Código Fuente</h4>
          <ul>
            <li>Spring Boot (Java 17/21)</li>
            <li>Flutter (Dart 3.x)</li>
            <li>Proyecto completo ejecutable</li>
          </ul>

          <h3>Cómo Exportar</h3>
          <ol>
            <li>Click en "Exportar"</li>
            <li>Selecciona formato</li>
            <li>Configura opciones</li>
            <li>Descarga archivo</li>
          </ol>

          <h3>Cómo Importar</h3>
          <ol>
            <li>Click en "Importar"</li>
            <li>Selecciona archivo JSON</li>
            <li>Sistema valida estructura</li>
            <li>Confirma importación</li>
          </ol>
        </div>
      ),
    },
    {
      id: "problemas",
      title: "🔧 Solución de Problemas",
      content: (
        <div className="section-content">
          <h2>Problemas Comunes</h2>

          <h3>❌ No puedo conectarme al servidor</h3>
          <p>
            <strong>Soluciones:</strong>
          </p>
          <ul>
            <li>
              Espera 30-60 segundos (servidor en Render tarda en despertar)
            </li>
            <li>Verifica tu conexión a Internet</li>
            <li>Revisa la consola del navegador (F12)</li>
            <li>Comprueba la URL del backend</li>
          </ul>

          <h3>❌ Los cambios no se guardan</h3>
          <p>
            <strong>Soluciones:</strong>
          </p>
          <ul>
            <li>Verifica el indicador de conexión</li>
            <li>Refresca la página (F5)</li>
            <li>Exporta como JSON antes de cerrar</li>
            <li>Contacta al administrador si persiste</li>
          </ul>

          <h3>❌ El código generado tiene errores</h3>
          <p>
            <strong>Soluciones:</strong>
          </p>
          <ul>
            <li>Usa nombres válidos (sin espacios ni caracteres especiales)</li>
            <li>Verifica tipos reconocidos (String, Integer, Long, etc.)</li>
            <li>Simplifica relaciones circulares</li>
            <li>Revisa documentación de Spring Boot/Flutter</li>
          </ul>

          <h3>❌ La IA no responde</h3>
          <p>
            <strong>Soluciones:</strong>
          </p>
          <ul>
            <li>Espera unos minutos e intenta de nuevo</li>
            <li>Simplifica tu pregunta</li>
            <li>Divide tareas complejas en pasos pequeños</li>
            <li>Verifica que el servicio de IA esté activo</li>
          </ul>

          <h3>❌ Rendimiento lento</h3>
          <p>
            <strong>Soluciones:</strong>
          </p>
          <ul>
            <li>Divide diagramas grandes en más pequeños</li>
            <li>Cierra otras pestañas del navegador</li>
            <li>Usa Chrome para mejor rendimiento</li>
            <li>Desactiva animaciones si están habilitadas</li>
          </ul>
        </div>
      ),
    },
    {
      id: "buenas-practicas",
      title: "✅ Mejores Prácticas",
      content: (
        <div className="section-content">
          <h2>Mejores Prácticas</h2>

          <h3>📐 Diseño de Diagramas</h3>
          <ul>
            <li>Mantén diagramas simples (máximo 10-15 clases)</li>
            <li>Usa nombres descriptivos en inglés</li>
            <li>Documenta clases complejas con notas</li>
            <li>Aplica principios SOLID desde el diseño</li>
            <li>Organiza clases relacionadas cerca unas de otras</li>
          </ul>

          <h3>🔗 Relaciones y Cardinalidad</h3>
          <ul>
            <li>Define siempre la cardinalidad</li>
            <li>Usa composición (♦) para relaciones fuertes</li>
            <li>Usa agregación (◇) para relaciones débiles</li>
            <li>Evita relaciones bidireccionales innecesarias</li>
            <li>Nombra los roles en relaciones complejas</li>
          </ul>

          <h3>💾 Guardado y Versionamiento</h3>
          <ul>
            <li>Guarda frecuentemente (Ctrl+S)</li>
            <li>Exporta versiones importantes como JSON</li>
            <li>Usa Git para control de versiones</li>
            <li>Nombra diagramas de forma descriptiva</li>
            <li>Crea backups antes de cambios importantes</li>
          </ul>

          <h3>🤖 Uso de IA</h3>
          <ul>
            <li>Proporciona contexto claro</li>
            <li>Revisa sugerencias antes de aplicar</li>
            <li>Usa IA para aprender patrones</li>
            <li>No dependas 100% de IA, valida con conocimiento propio</li>
          </ul>

          <h3>⚡ Generación de Código</h3>
          <ul>
            <li>Valida el diagrama antes de generar</li>
            <li>Usa tipos de datos estándar</li>
            <li>Define correctamente anotaciones</li>
            <li>Revisa código generado antes de producción</li>
            <li>Ejecuta tests sobre el código</li>
          </ul>

          <h3>👥 Colaboración</h3>
          <ul>
            <li>Comunica cambios importantes al equipo</li>
            <li>Establece convenciones de nomenclatura</li>
            <li>Usa comentarios para documentar decisiones</li>
            <li>Evita editar el mismo elemento simultáneamente</li>
            <li>Sincroniza antes de cambios grandes</li>
          </ul>
        </div>
      ),
    },
    {
      id: "soporte",
      title: "📞 Soporte",
      content: (
        <div className="section-content">
          <h2>Soporte y Contacto</h2>

          <h3>📧 Información de Contacto</h3>
          <ul>
            <li>
              <strong>🌐 GitHub:</strong>{" "}
              <a
                href="https://github.com/borysinho/server-frontend-backend-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/borysinho/server-frontend-backend-generator
              </a>
            </li>
            <li>
              <strong>🔗 Aplicación:</strong>{" "}
              <a
                href="https://uml-generator.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                uml-generator.netlify.app
              </a>
            </li>
            <li>
              <strong>📚 Documentación:</strong> Disponible en el repositorio
              GitHub
            </li>
          </ul>

          <h3>🐛 Reportar Problemas</h3>
          <ol>
            <li>Ve al repositorio GitHub</li>
            <li>Crea un nuevo Issue</li>
            <li>Describe el problema detalladamente</li>
            <li>Incluye capturas de pantalla</li>
            <li>Menciona navegador y sistema operativo</li>
          </ol>

          <h3>❓ FAQ</h3>

          <h4>¿Es gratis el uso del sistema?</h4>
          <p>Sí, es código abierto bajo licencia MIT.</p>

          <h4>¿Puedo usar el código generado comercialmente?</h4>
          <p>Sí, el código generado es tuyo sin restricciones.</p>

          <h4>¿Hay límite de diagramas?</h4>
          <p>
            No hay límite en versión local. La producción puede tener límites
            según el plan de BD.
          </p>

          <h4>¿Qué navegadores son compatibles?</h4>
          <p>
            Chrome 100+, Firefox 95+, Edge 100+, Safari 15+. Se recomienda
            Chrome.
          </p>

          <h4>¿Los datos están seguros?</h4>
          <p>
            Sí, usamos HTTPS y la base de datos está en Render/Supabase con
            backups automáticos.
          </p>

          <h3>📖 Recursos Adicionales</h3>
          <ul>
            <li>
              <a
                href="https://www.uml.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Especificación UML Oficial
              </a>
            </li>
            <li>
              <a
                href="https://spring.io/guides"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guías de Spring Boot
              </a>
            </li>
            <li>
              <a
                href="https://flutter.dev/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentación de Flutter
              </a>
            </li>
            <li>
              <a
                href="https://refactoring.guru/design-patterns"
                target="_blank"
                rel="noopener noreferrer"
              >
                Patrones de Diseño
              </a>
            </li>
          </ul>

          <h3>ℹ️ Información de Versión</h3>
          <ul>
            <li>
              <strong>Versión:</strong> 1.0.0
            </li>
            <li>
              <strong>Última Actualización:</strong> Noviembre 2025
            </li>
            <li>
              <strong>Frontend:</strong> React 19 + TypeScript 5.8
            </li>
            <li>
              <strong>Backend:</strong> Node.js 20 + Express 4.21
            </li>
            <li>
              <strong>Base de Datos:</strong> PostgreSQL 16
            </li>
          </ul>
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
