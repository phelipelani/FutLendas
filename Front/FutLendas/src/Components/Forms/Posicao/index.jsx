const course_module = [
  { modulo: "Primeiro módulo (Introdução ao Frontend)" },
  { modulo: "Segundo módulo (Frontend Avançado)" },
  { modulo: "Terceiro módulo (Introdução ao Backend)" },
  { modulo: "Quarto módulo (Backend Avançado)" },
];
export function OptionRegister({}) {
  return (
    <div>
      <label htmlFor="course_module">Selecionar módulo</label>

      <select id="course_module">
        {course_module.map((mod) => (
          <option key={mod.id} name={mod.modulo} value={mod.modulo}>
            {mod.modulo.replace("(", " ").substring(0, 15)}
          </option>
        ))}
      </select>
    </div>
  );
}
