import { useState, useRef, useEffect } from "react";

const ToDoForm = ({ addTodDoHandler, edit }) => {
  const [input, setInput] = useState(edit ? edit.text : "");
  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Please Enter A To Do Value");
      return;
    }
    addTodDoHandler(input);

    setInput("");
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <form onSubmit={submitHandler} className="d-flex w-50 position-relative" autoComplete="off">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form-control input"
            type="text"
          />
          <button className="btn-sm  btn-custom" type="submit">
            {edit ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ToDoForm;
