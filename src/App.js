import './App.css';
import React, { useState } from 'react';
import AddTopicForm from './AddTopicForm';
import Topics from './Topics';
 
  const App = () => {
    const [highesttopic,sethighesttopic]=useState(8);
    const [topics, setTopics] = useState([
      {
        name: 'All',
        topics: [],
         },
         {
         name: 'Custom',
         topics: [
         { id: 1, name: 'Frond-end developer', keywords: ['React.js', 'javascript'] },
        { id: 2, name: 'Backend developer', keywords: ['node.js', 'python'] },
        ],
        },
         {
         name: 'ICP',
        topics: [
        { id: 3, name: 'Automation testing', keywords: ['keyword5', 'keyword6'] },
         { id: 4, name: 'App testing', keywords: ['keyword7', 'keyword8'] },
         ],
         },
         {
         name: 'Mission',
        topics: [
         { id: 5, name: 'Platform built', keywords: ['keyword5', 'keyword6'] },
         { id: 6, name: 'Platform Intergration', keywords: ['keyword7', 'keyword8'] },
         ],
         },
         {
         name: 'Product',
         topics: [
         { id: 7, name: 'Network', keywords: ['keyword5', 'keyword6'] },
         { id: 8, name: 'Cyber-security', keywords: ['keyword7', 'keyword8'] },
         ],
         },
         ]);       
    const addTopic = (topicName, keywords) => {
      let a = topics[uniquecategory.category_id].topics;
      a.push({
        id:highesttopic+1,
        name:topicName,
        keywords:keywords.split(',').map((keyword) => keyword.trim())
      });
      sethighesttopic(highesttopic+1);
      let b = [...topics]; 
      b[uniquecategory.category_id].topics = a
      setTopics(b);
    };
  
    const deleteTopic = (topicId) => {
      let a =topics.map((category) => ({
        ...category,
        topics: category.topics.filter((topic) => topic.id !== topicId),
      }))
      setTopics(a); 
      if(uniquecategory.category_id==="0"){
        setuniquecategory({
          category_id: uniquecategory.category_id,
          category_name: uniquecategory.category_name,
          category_topics: [...a[1].topics,...a[2].topics,...a[3].topics,...a[4].topics]
        });
      }
      else{
        setuniquecategory({
          category_id: uniquecategory.category_id,
          category_name: uniquecategory.category_name,
          category_topics: a[uniquecategory.category_id].topics
      });
      }
    };   
    const all=()=>{
      document.getElementById('custom').classList.remove('stepper-label')
      document.getElementById('ICP').classList.remove('stepper-label')
      document.getElementById('mission').classList.remove('stepper-label')
      document.getElementById('product').classList.remove('stepper-label')
      document.getElementById('all').classList+='stepper-label'
      setuniquecategory({
        category_id: "0",
        category_name: "All",
        category_topics: [...topics[1].topics,...topics[2].topics,...topics[3].topics,...topics[4].topics]
      })}
      const custom=()=>{ 
        document.getElementById('all').classList.remove('stepper-label')
        document.getElementById('ICP').classList.remove('stepper-label')
        document.getElementById('mission').classList.remove('stepper-label')
        document.getElementById('product').classList.remove('stepper-label')
        document.getElementById('custom').classList='stepper-label'
        setuniquecategory({
          category_id: "1",
          category_name: "custom",
          category_topics: topics[1].topics
        })
      }
      const ICP=()=>{
        document.getElementById('all').classList.remove('stepper-label')
        document.getElementById('custom').classList.remove('stepper-label')
        document.getElementById('mission').classList.remove('stepper-label')
        document.getElementById('product').classList.remove('stepper-label')
        document.getElementById('ICP').classList='stepper-label'
        setuniquecategory({
          category_id: "2",
          category_name: "ICP",
          category_topics: topics[2].topics
        })}
        const mission=()=>{
          document.getElementById('all').classList.remove('stepper-label')
          document.getElementById('custom').classList.remove('stepper-label')
          document.getElementById('ICP').classList.remove('stepper-label')
          document.getElementById('product').classList.remove('stepper-label')
          document.getElementById('mission').classList='stepper-label'
          setuniquecategory({
            category_id: "3",
            category_name: "mission",
            category_topics: topics[3].topics
          })}
          const product=()=>{
            document.getElementById('all').classList.remove('stepper-label')
            document.getElementById('custom').classList.remove('stepper-label')
            document.getElementById('ICP').classList.remove('stepper-label')
            document.getElementById('mission').classList.remove('stepper-label')
           document.getElementById('product').classList='stepper-label' 
            setuniquecategory({
              category_id: "4",
              category_name: "product",
              category_topics: topics[4].topics
            })}
    const [uniquecategory,setuniquecategory]=useState({
      category_id: "0",
      category_name: "All",
      category_topics: [...topics[1].topics,...topics[2].topics,...topics[3].topics,...topics[4].topics]
    });
    return (
      <div className='cards'>
        <h1>Categories</h1>
        <div id='stepper' className='stepper'>
        <label id='all' onClick={all}>ALL</label>
         <label id='custom' onClick={custom}>Developer</label> 
         <label id='ICP' onClick={ICP}>Testing</label>
          <label id='mission' onClick={mission}>Deveops</label>
           <label id='product' onClick={product}>Network</label>
        <button className='addbtn' onClick={()=>{
          document.getElementById('addtopicid').classList='ciao'
          document.getElementById('addtopicid').classList.remove('hidden')}}>Add Topic &gt;</button>
        </div>
        <div id='addtopicid' className='hidden ciao'>
        <h1>Recommended Topic</h1>
         <AddTopicForm addTopic={addTopic} />
        </div>
        {/* <Topics topics={topics} deleteTopic={deleteTopic} /> */}
        {Topics(uniquecategory.category_topics,uniquecategory.category_id,deleteTopic)}
        
      </div>
    );
  };
  
  export default App;

