import { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const logo = "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  useEffect(()=>{
    const getImage = async () => {
      if(file){
        //won't execute first time because file is empty
        const data = new FormData();
        data.append("name", file.name);
        data.append("file",file);
        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[file]);

  const onUploadClick = () => {
    //fileInputRef: object, current: key
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <img  src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>File Sharing</h1>
        <p>Upload a file to get a download link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input type='file'
        ref={fileInputRef}
        style={{display: 'none'}} 
        onChange={(e) => setFile(e.target.files[0])} />
        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
