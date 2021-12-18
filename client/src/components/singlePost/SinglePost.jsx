import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Post"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem Ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Jorge</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sed,
          voluptatem autem voluptatum soluta, architecto deleniti ipsa placeat
          necessitatibus assumenda magni repudiandae impedit repellendus cumque
          deserunt porro dolores sequi nam. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sunt sed, voluptatem autem voluptatum
          soluta, architecto deleniti ipsa placeat necessitatibus assumenda
          magni repudiandae impedit repellendus cumque deserunt porro dolores
          sequi nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sunt sed, voluptatem autem voluptatum soluta, architecto deleniti ipsa
          placeat necessitatibus assumenda magni repudiandae impedit repellendus
          cumque deserunt porro dolores sequi nam. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sunt sed, voluptatem autem voluptatum
          soluta, architecto deleniti ipsa placeat necessitatibus assumenda
          magni repudiandae impedit repellendus cumque deserunt porro dolores
          sequi nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sunt sed, voluptatem autem voluptatum soluta, architecto deleniti ipsa
          placeat necessitatibus assumenda magni repudiandae impedit repellendus
          cumque deserunt porro dolores sequi nam.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
