const Header = ({ todos, status, onSelect }) => {
  return (
    <>
      <select
        className="d-block form-control w-25 ms-auto"
        onChange={onSelect}
        value={status}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>

      <div className="text-center">
        {!todos || todos.length === 0
          ? "Set Your Today's To Dos!"
          : `${todos.length} Tasks For Today`}
      </div>
    </>
  );
};

export default Header;
