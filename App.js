import './App.css';
import myPhoto from './images/cv.2.jpg';

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ece9f7 0%, #c9e7fa 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "2rem",
        boxShadow: "0 8px 40px 0 #bebebe50",
        padding: "2.5rem 2rem 2rem 2rem",
        maxWidth: 400,
        width: "100%",
        textAlign: "center"
      }}>
     
        <h1 style={{ margin: "0 0 8px", fontWeight: 700, color: "#2d2d2d", fontSize: 28 }}>Braulio Rodriguez</h1>
        <div style={{ color: "#65718a", fontWeight: 500, marginBottom: 14 }}>Estudiante de Ingeniería en Computación Inteligente</div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: 16
        }}>
          
          <span style={{
            background: "#f2f7fb",
            color: "#84b0f7",
            padding: "4px 10px",
            borderRadius: 10,
            fontSize: 14
          }}>
            Colima
          </span>
             <img
          src={myPhoto}
          alt="Mi foto"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: 20,
            border: "4px solid #84b0f7"
          }}
        />
          <span style={{
            background: "#f2f7fb",
            color: "#4e7992",
            padding: "4px 10px",
            borderRadius: 10,
            fontSize: 14
          }}>
            México
          </span>
        </div>
        <hr style={{ border: "none", borderBottom: "1px solid #f0f0f0", margin: "18px 0" }} />
        <div style={{ textAlign: "left", fontSize: 16, color: "#444" }}>
          <p><strong>Edad:</strong> 20 años</p>
          <p><strong>Semestre:</strong> 6to</p>
          <p><strong>Materia favorita:</strong> Estructuras de Datos</p>
          <p><strong>Hobbies:</strong> Leer, fútbol, programar</p>
        </div>
        <div style={{
          textAlign: "left",
          marginTop: 18,
        }}>
          <strong style={{ color: "#425c77", letterSpacing: 1 }}>Skills</strong>
          <ul style={{ paddingLeft: 18, margin: "8px 0 0 0", color: "#555", fontSize: 15 }}>
            <li>React.js & JavaScript</li>
            <li>Python</li>
            <li>HTML / CSS</li>
            <li>Trabajo en equipo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
