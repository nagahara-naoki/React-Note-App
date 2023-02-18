import "./Side.css";
import { DndContext } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";

export const Side = ({ addNote, notes, deleteNote, activeNote, setActiveNote }) => {
  return (
    <div className="sideContainer">
      <div className="sideHeader">
        <h1>Let't output!!</h1>
        <div className="sideHeaderInner">
          <p>ノートを追加</p>
          <button onClick={() => addNote()}>追加</button>
        </div>
      </div>

      <DndContext>
        <div className="sideCardMain">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`sideCard ${note.id === activeNote && "active"} `}
              onClick={() => setActiveNote(note.id)}
            >
              <div className="sideCardTitle">
                <h1>{note.title}</h1>
                <button onClick={() => deleteNote(note.id)}>削除</button>
              </div>
              <div className="sideCardInner">
                <h2>{note.content}</h2>
              </div>
              <p className="date">{`日付:${new Date(note.createAt).toLocaleDateString("ja-JP")}`}</p>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
};
