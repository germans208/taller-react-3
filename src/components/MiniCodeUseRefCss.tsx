import { useRef, useState } from "react";
import "../index.css";

const MiniCodeUseRefCss: React.FC = () => {
  const [classColor, setClassColor] = useState<string>("box");

  const colorRef = useRef<HTMLInputElement>(null);

  const handleChangeColorRef = () => {
    if (colorRef.current) {
      const newClass = colorRef.current.className === "box" ? "box-modify" : "box";
      colorRef.current.className = newClass;
    }
  };

  const handleChange = () => {
    setClassColor(classColor === "box" ? "box-modify" : "box");
  };

  return (
    <div>
      <div className={classColor}>Soy otro color</div>

      <button type="button" onClick={handleChange}>
        Mostrar Color
      </button>

      <div className="box" ref={colorRef}>
        Soy un color
      </div>

      <button type="button" onClick={handleChangeColorRef}>
        Mostrar Color 2
      </button>
    </div>
  );
};

export default MiniCodeUseRefCss;
