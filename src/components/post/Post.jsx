import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <div className="postCat">Music</div>
          <div className="postCat">Life</div>
        </div>

        <span className="postTitle">lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic delectus
        dolor quisquam inventore sint, magni repellat quas eveniet aut mollitia
        id cum nam ullam nostrum sit alias. Neque, distinctio ipsam? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Hic delectus dolor quisquam
        inventore sint, magni repellat quas eveniet aut mollitia id cum nam
        ullam nostrum sit alias. Neque, distinctio ipsam? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Hic delectus dolor quisquam inventore
        sint, magni repellat quas eveniet aut mollitia id cum nam ullam nostrum
        sit alias. Neque, distinctio ipsam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Hic delectus dolor quisquam inventore
        sint, magni repellat quas eveniet aut mollitia id cum nam ullam nostrum
        sit alias. Neque, distinctio ipsam?
      </p>
    </div>
  );
};

export default Post;
