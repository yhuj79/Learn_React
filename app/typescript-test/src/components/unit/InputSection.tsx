import { useState } from "react";
import "./InputSection.scss";
import PrintSection from "./PrintSection";

export interface Value {
        valueA: string;
    }

const InputSection: React.FC = () => {
    
//   const [valueA, setValueA] = useState<Value>({valueA:""});

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValueA(e.target.value);
//   };

  return (
    <div>
      <h1>Input Here!</h1>
      <input className="section-input" />
      {/* <PrintSection valueA:string={valueA} /> */}
    </div>
  );
};

export default InputSection;
