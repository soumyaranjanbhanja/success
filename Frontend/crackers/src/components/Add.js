import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Add.css';

const Add = () => {
  const [pdfFiles,setPdfFiles]=useState(null);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  // const [tasks1,setTasks1]=useState([]);
  // const [newTask1,setNewTask1]=useState('');
  const [readyForTagging, setreadyForTagging] = useState([]);
  // const [tagging,setTagging]=useState([]);
  
  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    setPdfFiles(file);
  };

  const handleProcessPdf = async () => {
    if (!pdfFiles) {
      alert("Please select a PDF file.");
      return;
    }
    alert("PDF processing completed.");
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
 
  const handleCreateTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };
//  const handleInputChange1=(e)=>{
//       setNewTask1(e.target.value);
//  };
//  const handleCreateTask1=()=>{
//       if(newTask1.trim()===''){
//         setTasks1([...tasks1,newTask1]);
//         setNewTask1('');
//       }
//  }



  const handleTagging = (index) => {
    const taskToTag = tasks[index];
    setreadyForTagging([...readyForTagging, taskToTag]);
    setTasks(tasks.filter((_, i) => i !== index));
  };
  // const handleTagging1 = (index) => {
  //   const taskToTag1 = tasks1[index];
  //   setTagging([...tagging, taskToTag1]);
  //   setTasks1(tasks1.filter((_, i) => i !== index));
  // };
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const uploadButtonStyle = {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const processButtonStyle = {
    backgroundColor: "#28A745",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div className='dashboard-container'>
      <Sidebar />
      
      <div>
        <textarea
          type="file"
          accept=".pdf"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter new task" style={{marginBottom:"-60px",marginLeft:"-190px"}}
        /><br/>
        <button onClick={handleCreateTask}>Upload</button>
        <div style={containerStyle}>
      <h1>Admin Page</h1>
      <input type="file" accept=".pdf" onChange={handlePdfUpload} />
      <button style={uploadButtonStyle}>Upload PDF</button>
      <button style={processButtonStyle} onClick={handleProcessPdf}>
        Process PDF
      </button>
    </div>
      </div><br/>
      <div className='dashboard-column'>
        <table><thead>
        <h3>Task List</h3>
        </thead>
        <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task.task}
                {task.pdf && (
                  <div>
                    <embed
                      src={URL.createObjectURL(task.pdf)}
                      type="application/pdf"
                      width="100%"
                      height="300px"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleTagging(index)}>Tag</button>
            </li>
          ))}
        </ul>
        </table>
      </div><br/>
      <div className='dashboard-column'>
        <table>
        <thead>
        <h3>Ready For Tagging</h3>
        </thead>
        <tbody>
        <ul>
          {readyForTagging.map((task, index) => (
            <li style={{ color: 'greenyellow' }} key={index}>
              {task}
              <button onClick={() => handleTagging(index)}>ReadyForTagging</button>
            </li>
          ))}
        </ul>
        </tbody>
        </table>
      </div>
      {/* <div className='dashboard-column'>
        <table>
          <thead>
        <h3>Tagging</h3>
        </thead>
        <tbody>
        <ul>
          {tagging.map((task, index) => (
            <li style={{ color: 'greenyellow' }} key={index}>
              {task}
              <button onClick={()=>handleTagging1(index)}>Tagging</button>
            </li>
          ))}
        </ul>
        </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Add;
