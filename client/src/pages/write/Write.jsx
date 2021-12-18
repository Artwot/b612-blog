import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.unsplash.com/photo-1549556289-9706946b9c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Blog article"
      />
      <form className="writeForm">
        <div className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
            />
          </div>
        </div>
      </form>
      <div className="writeFormGroup">
        <textarea
          placeholder="Tell your story..."
          type="text"
          className="writeInput writeText"
        ></textarea>
      </div>
      <button className="writeSubmit">Publish</button>
    </div>
  );
};

export default Write;
