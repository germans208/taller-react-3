import { useEffect, useRef, useState } from "react";

const MiniCodeInterval = () => {
  const [toggle, setToggle] = useState(false);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    //ACtivo el toggle por primera vez
    //y no tengo nada guardado en el intervalo intervalRef
    if (toggle && !intervalRef.current) {
      let time = 0;

      intervalRef.current = setInterval(() => {
        time += 1000;

        console.log("Interval", time);
      }, 1000);
    }
  }, [toggle]);

  //Solamente limpia el intervalo al desmontar el Componente
  useEffect(() => {
    return () => {
      if (intervalRef.current){
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h3>MiniCodeInterval</h3>
      <button type="button" onClick={() => setToggle(!toggle)}>
        Activar Intervalo
      </button>
    </div>
  );
};

export default MiniCodeInterval;