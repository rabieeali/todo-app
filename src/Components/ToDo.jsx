const ToDo = ({ todo, onComplete, onDelete, onEdit,edit }) => {
  return (

    
    <>
      <div
        key={todo.id}
        className="shadow rounded bg-light mt-3 p-3 d-flex w-50 m-auto"
      >
        <div
          className={
            todo.isCompleted
              ? "done my-auto text-capitalize"
              : "text-capitalize my-auto"
          }
        >
          {todo.text}
        </div>
        <div className="ms-auto">
          <button onClick={onEdit} className="btn-sm btn-primary">
            Edit
          </button>
          <button onClick={onComplete} className="btn-sm btn-success mx-1">
            Complete
          </button>
          <button onClick={onDelete} className="btn-sm btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
