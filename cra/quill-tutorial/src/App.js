import { useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import {storage} from "./Firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

function App() {
  const quillRef = useRef();
  const [content, setContent] = useState("");

  // Firebase Image Handler
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const editor = quillRef.current.getEditor();
      const file = input.files[0];
      const range = editor.getSelection(true);

      try {
        const storageRef = ref(
          storage,
          `image/${Date.now()}`
        );
        await uploadBytes(storageRef, file).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            editor.insertEmbed(range.index, "image", url);
            editor.setSelection(range.index + 1);
          });
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  return (
    <div style={{ margin: "80px" }}>
      <button onClick={() => console.log(Date.now())}>Value</button>
      <ReactQuill
        style={{ width: "600px", height: "600px" }}
        placeholder="Quill Content"
        theme="snow"
        ref={quillRef}
        value={content}
        onChange={setContent}
        modules={modules}
      />
    </div>
  );
}

export default App;
