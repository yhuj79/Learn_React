import DOMPurify from "isomorphic-dompurify";
import "react-quill/dist/quill.core.css";

function ReadQuill() {
  const content =
    "<h1>안녕하세요!</h1><h2>안녕하세요!</h2><h3>안녕하세요!</h3>";
  return (
    <div
      className="view ql-editor"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    />
  );
}

export default ReadQuill;
