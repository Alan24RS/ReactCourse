import { useEffect } from 'react';
import './CounterButton.css';
interface CounterButtonProps {
  numero: string;
  contador: () => void;
 }

const CounterButton = ({ numero, contador }: CounterButtonProps) => {

  useEffect(() => {
    // Efecto secundario: se ejecuta cuando el componente se monta
    console.log('CounterButton desmontado');
    
    return () => {
      // Limpieza: se ejecuta cuando el componente se desmonta
      console.log('CounterButton montado');
    };
  }, []); // El array vacío significa que este efecto solo se ejecuta una vez al montar y desmontar

  return (
    <button className="counter-button" onClick={contador}>
      Count: {numero}
    </button>
  );
};

export default CounterButton;
