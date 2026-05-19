import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note,setNote] = useState({
    title:"",
    content:""
  });
  function expand(){
    setExpanded(true);
  }
  function handleChange(event){
    const {name,value} = event.target;
    setNote(prevNote =>{
      return {
        ...prevNote,
        [name]:value
      }
    });
  }
  function submitNote(event){
    event.preventDefault();
    if(note.title.trim() === "" || note.content.trim() === ""){
      alert("Please fill out both the title and content fields.");
      return;
    }
    props.onAdd(note);
    setNote({
    title:"",
    content:""
  });
    
  }
  return (
    <div>
      <form name="create-note">
            {isExpanded && (
              <input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
              />
            )}     
   <textarea name="content" onClick={expand} onChange ={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab
            onClick={submitNote}
            sx={{
              position: "absolute",
              right: 18,
              bottom: -18,
              backgroundColor: "#f5ba13",
              color: "white",
              "&:hover": {
                backgroundColor: "#f5ba13"
              }
            }}
            >
            <AddIcon />
          </Fab>
      </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
