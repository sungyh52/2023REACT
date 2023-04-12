import axios from "axios";

const TodoCard = ({title, isDone, index, getToDoList}) => {
  // 동기화 : 같이 실행됨, 비동기화 : 같이 실행되지 않음.

  //해야 할 일을 했다, 안했다
  //DB.isDone = TRUE 일을 했다. DB.isDone = false 일을 안했다.
  const onClickToggle = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/todo/done/${index}`
      );

      if (response.status !== 200) {
        alert("요청을 불러오지 못했습니다.");
        return;
      }

      getToDoList();
    } catch (error) {
      console.error(error);
    }
  };

  const onClickDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${index}`
      );

      if (response.status !== 200) {
        alert("요청을 불러오지 못했습니다.");
        return;
      }

      getToDoList();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isDone ? (
        <li className="flex my-4" onClick={onClickToggle}>
          <div className="relative">
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white bg-pink-400 w-8 h-8 scale-75 rounded-xl"></div>
          </div>
          <div className="text-2xl ml-4">{title}</div>
          <button onClick={onClickDelete}>삭제</button>
        </li>
      ) : (
        <li className="flex my-4" onClick={onClickToggle}>
          <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
          <div className="text-2xl ml-4">{title}</div>
          <button onClick={onClickDelete}>삭제</button>
        </li>
      )}
    </>
  );
};

export default TodoCard;
