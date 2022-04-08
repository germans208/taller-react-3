import { FormEvent, useEffect, useRef, useState } from "react";

//useRef es HOOK que va decir a que cosa va ser referencia

//Cuando el componente se monte por primera vez se combine con la referencia, es como un puntero.

//el useRef me permite q no se renderize varias veces.

//es como un getElementById

const MiniCodeUseRef: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>("german");
  const [count, setCount] = useState<number>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); //Prevengo que la pagina se cargue de nuevo

    const nameInput = textInputRef.current?.value;

    if (nameInput) {
      setName(nameInput);
      if (textInputRef.current) {
        textInputRef.current.value = "";
      }
    }
  };

  const printValue = () => {
    const inputValue = textInputRef.current?.value;

    console.log(inputValue);
  };

  useEffect(() => {
    textInputRef.current?.focus();
  }, []);

  console.log("la referencia", textInputRef);

  return (
    <div>
      <h3>Soy {name}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" ref={textInputRef} />

        {/*este es un input que hace varios re renders*/}
        <input
          type="number"
          placeholder="numero"
          value={count}
          onChange={(e) => {
            setCount(e.target.valueAsNumber);
          }}
        />

        <button type="submit"> Mostrar </button>
      </form>
    </div>
  );
};

export default MiniCodeUseRef;
