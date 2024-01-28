

function Color({ color, setColor }) {
  return (
    <button
      onClick={() => setColor(color)}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
} 

export default Color;
