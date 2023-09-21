const posPlayer = [
  { pos: "Goleiro" },
  { pos: "Atacante" },
  { pos: "Defensor" },
];
export function OptionRegister() {
  return (
    <div>
      <label htmlFor="posPlayer">Selecionar Posição</label>

      <select id="posPlayer">
        {posPlayer.map((posi) => (
          <option key={posi.id} name={posi.pos} value={posi.pos}>
            {posi.pos.replace("(", " ").substring(0, 15)}
          </option>
        ))}
      </select>
    </div>
  );
}
