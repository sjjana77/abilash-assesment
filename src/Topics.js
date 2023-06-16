import React from "react";
 import { useState,useEffect } from "react";

const Topics = ( topics,idd,deleteTopic) => {
  const [tone, setTone] = useState('');
  const [content, setContent] = useState('');
  const [editorstate, seteditorstate] = useState([]);
   //console.log('abil')
  // const handleGenerate = (e) => {
  //   setContent(e.target.value);
  // };
  
  const handleImageUpload = (e) => {
    // Handle image upload and update the content with the image URL or embed code
  };

  const handleUndo = () => {
    let a=[...editorstate];
    a.pop();
   seteditorstate(a);
  };
const handleSubmit=()=>{
 // console.log(topicsId)
 console.log(tone);
 console.log(content);
  const editor={
    
    'id':topicid,
    'tone':tone,
    'content':content
  }
  seteditorstate((prevstate)=>[...prevstate,editor])
}
useEffect(()=>{
  console.log(editorstate);
  console.log(tone);
})
  const [topicid,settopicsid]=useState('');
     return (
       <div>
         <ul>
               {topics.map((topic) => (
                 <div className='seperate' id={topic.id} key={topic.id}>
                   {topic.name}
                   <br />
                    {topic.keywords.join(', ')}
                   <button id='delete' className='deletebtn' onClick={() => deleteTopic(topic.id)}>Delete</button>
                   <button className='writebtn' onClick={()=>{settopicsid(topic.id)
                   document.getElementById('editorid').classList.remove('hidden')
                   document.getElementById('editorid').classList='ciao'
                  }}>Write &gt;</button>
                 </div>
               ))}
             </ul>
             <div id='editorid' className='hidden ciao'>
             <div>
      <h2>Editor</h2>
      <label>
        Tone:
        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="">Select a tone</option>
          <option value="easy">Easy</option>
          <option value="Intermediate">Intermediate</option>
          <option value="High">High</option>
        </select>
      </label>
      &nbsp;&nbsp;
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
&nbsp;&nbsp;
      <label>
        Upload Image:
        <input type="file" onChange={handleImageUpload} />
      </label>
      <button onClick={handleSubmit}>ADD</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleUndo}>Undo</button>
      &nbsp;&nbsp;&nbsp;
      <button className='closebtn' onClick={()=>{document.getElementById('editorid').classList='hidden'}}>X</button>
    </div>
        </div>
       </div>
     );
   };

   export default Topics;