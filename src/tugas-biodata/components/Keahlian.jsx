export default function Keahlian() {
  const skills = [
    "React JS",
    "JavaScript", 
    "HTML/CSS",
    "Node.js",
    "Git & GitHub",
    "UI/UX Design"
  ];

  return (
    <div className="card">
      <h3>Keahlian</h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  );
}