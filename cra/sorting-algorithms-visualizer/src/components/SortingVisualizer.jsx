import React, { useState, useEffect } from "react";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
} from "../utils/sortingAlgorithms";
import Chart from "./Chart";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("bubbleSort");

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = Array.from({ length: 100 }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(arr);
  };

  const handleSort = () => {
    let sortedArray;
    switch (algorithm) {
      case "bubbleSort":
        sortedArray = bubbleSort([...array]);
        break;
      case "selectionSort":
        sortedArray = selectionSort([...array]);
        break;
      case "insertionSort":
        sortedArray = insertionSort([...array]);
        break;
      case "mergeSort":
        sortedArray = mergeSort([...array]);
        break;
      case "quickSort":
        sortedArray = quickSort([...array]);
        break;
      default:
        break;
    }
    setArray(sortedArray);
  };

  return (
    <div>
      <button onClick={resetArray}>Reset Array</button>
      <select onChange={(e) => setAlgorithm(e.target.value)}>
        <option value="bubbleSort">Bubble Sort</option>
        <option value="selectionSort">Selection Sort</option>
        <option value="insertionSort">Insertion Sort</option>
        <option value="mergeSort">Merge Sort</option>
        <option value="quickSort">Quick Sort</option>
      </select>
      <button onClick={handleSort}>Sort</button>
      <Chart array={array} />
    </div>
  );
};

export default SortingVisualizer;
