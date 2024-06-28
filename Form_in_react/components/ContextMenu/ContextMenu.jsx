export default function ContextMenu({ id, data, setData, setExp }) {
  function handleSubmit(e) {
    if (e.target.value == "Delete") {
      const fd = data.filter((el) => el.id !== id);
      setData(fd);
    }
    if (e.target.value == "Edit") {
      const fd = data.filter((el) => el.id == id);
      const fd2 = data.filter((el) => el.id !== id);
      setData(fd2);
      setExp(fd[0]);
    }
  }

  return (
    <>
      <select id="contextMenu" onChange={(e) => handleSubmit(e)}>
        <option>Select Operation</option>
        <option value="Edit">Edit</option>
        <option value="Delete">Delete</option>
      </select>
    </>
  );
}
