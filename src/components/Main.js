import "./Main.css";
export const Main = ({ getActiveNote, onUpdateNote }) => {
  if (!getActiveNote) {
    return <h1 className="no-active-note">ノートが選択されていません</h1>;
  }
  const onEditId = (key, value) => {
    onUpdateNote({
      ...getActiveNote,
      [key]: value,
      createAt: Date.now(),
    });
  };
  return (
    <div className="app-main">
      <div className="app-main-edit">
        <div className="app-main-edit-inner">
          <input
            value={getActiveNote.title}
            id="title"
            type="text"
            placeholder="タイトル"
            onChange={(e) => onEditId("title", e.target.value)}
          />
          <textarea
            value={getActiveNote.content}
            placeholder="ノートを記入"
            onChange={(e) => onEditId("content", e.target.value)}
          ></textarea>
        </div>
      </div>

      {/* <div className="app-main-note-preview">
        <h1 className="preview-title"></h1>
        <div className="markdown-preview"></div>
      </div> */}
    </div>
  );
};
