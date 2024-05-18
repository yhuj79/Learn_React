// Utility function to swap two elements
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// Bubble Sort
export const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

// Selection Sort
export const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      swap(arr, i, minIdx);
    }
  }
  return arr;
};

// Insertion Sort
export const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

// Merge Sort
const merge = (arr, left, mid, right) => {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArr = new Array(n1);
  const rightArr = new Array(n2);

  for (let i = 0; i < n1; i++) leftArr[i] = arr[left + i];
  for (let i = 0; i < n2; i++) rightArr[i] = arr[mid + 1 + i];

  let i = 0,
    j = 0,
    k = left;
  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
};

const mergeSortRecursive = (arr, left, right) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergeSortRecursive(arr, left, mid);
    mergeSortRecursive(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
};

export const mergeSort = (arr) => {
  mergeSortRecursive(arr, 0, arr.length - 1);
  return arr;
};

// Quick Sort
const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};

const quickSortRecursive = (arr, low, high) => {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSortRecursive(arr, low, pi - 1);
    quickSortRecursive(arr, pi + 1, high);
  }
};

export const quickSort = (arr) => {
  quickSortRecursive(arr, 0, arr.length - 1);
  return arr;
};
