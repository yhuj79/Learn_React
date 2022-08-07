import { useState } from "react";
import CategoryFilter from "./CategoryFilter";

const categories = [
  {
    name : "자주 묻는 질문",
    value : "all"
  },
  {
    name : "카테고리 1",
    value : "category1"
  },
  {
    name : "카테고리 2",
    value : "category2"
  },
  {
    name : "카테고리 3",
    value : "category3"
  },
];

const FAQ = () => {
  const [category, setCatecory] = useState("all");
  
  return (
    <div>
      <div>FAQ</div>
      <CategoryFilter
        categories={categories}
        category={category}
        setCatecory={setCatecory}
      />
    </div>
  );
};

export default FAQ;