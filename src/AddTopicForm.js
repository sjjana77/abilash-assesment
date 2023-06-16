import React, { useState } from 'react';

const AddTopicForm = ({ addTopic }) => {
    const [topicName, setTopicName] = useState('');
    const [keywords, setKeywords] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTopic(topicName, keywords);
      setTopicName('');
      setKeywords('');
      document.getElementById('addtopicid').classList="hidden";
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Topic Name:
          <input
            type="text"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
          />
        </label>
        &nbsp; &nbsp;
        <label>
          Keywords (comma-separated):
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </label>
        &nbsp; &nbsp; &nbsp;
        <button className='addbtn'type="submit">Add </button>
        &nbsp; &nbsp; &nbsp;
        <button className='closebtn'onClick={()=>{document.getElementById('addtopicid').classList="hidden";}}>X</button>
      </form>
    );
  };

  export default AddTopicForm;
  