const Like = ({ liked, onClick }) => {

  return (
    <i
      onClick={onClick}
      className={liked ? "fa fa-heart" : "fa fa-heart-o"}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
