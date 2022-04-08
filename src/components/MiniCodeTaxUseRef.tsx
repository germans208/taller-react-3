import { useRef, useState } from "react";

const MiniCodeTaxUseRef: React.FC = () => {
  const incomeRef = useRef<HTMLInputElement>(null);
  const taxRef = useRef<HTMLInputElement>(null);
  const [total, setTotal] = useState<number>(0);

  const getTotal = (): void => {
    const income = incomeRef.current?.valueAsNumber as number;

    const tax = taxRef.current?.valueAsNumber as number;

    const totalCal = income - income * (tax / 100);

    setTotal(totalCal);

  };

  return (
    <div>
      <h3>Calculador de Sueldo: {total}</h3>

      <label htmlFor="income">Sueldo</label>
      <input
        type="number"
        placeholder="Sueldo"
        defaultValue={0}
        min={0}
        ref={incomeRef}
      />

      <br />
      <br />

      <label htmlFor="tax">Impuesto</label>
      <input
        type="number"
        placeholder="Impuesto"
        defaultValue={0}
        min={0}
        ref={taxRef}
      />

      <br />
      <br />

      <button type="button" onClick={getTotal}>
        Calcular Total
      </button>
    </div>
  );
};

export default MiniCodeTaxUseRef;
