import React,{Fragment, useState} from 'react';
import Message from './Message';
import progress from './progress';
import axios from 'axios';

const FileUpload = ()=>{

    //setting up state and handing states
    const [file,setFile]=useState('');
    const [filename, setFilename]= useState('choose file');
    const [uploadedFile, setUploadedFile] =useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage]= useState(0);


    const onChange = e=>{

        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);

    }

    const onSubmit = async e=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        try{
            const res=await axios.post('/upload', formData, {
                headers:{
                    'Content-Type' : 'multipart/form-data'
                },
                onUploadProgress: progressEvent=>{
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100)/ progressEvent.total)))

                    // clear percentage
                    setTimeout(()=> setUploadPercentage(0), 1000);

                }

            });

            const {fileName, filePath} = res.data;
            setUploadedFile({fileName, filePath});

            setMessage('file uploaded');

        }catch(err){
            if(err.response.status===500){
                setMessage('there was a problem with the server');

            }else{
                setMessage(err.response.data.msg);
            }
        }
    }

    return (
        <Fragment>
            <div>
                <h1 align ="center">Upload files here</h1>
                <br/>
                <h2><img src="https://iconarchive.com/download/i103432/paomedia/small-n-flat/key.ico"/></h2>
                <h2><img src="https://iconarchive.com/download/i103432/paomedia/small-n-flat/key.ico"/> you can upload Images and Files</h2>
            </div>

            <h2>
                {message ? <Message msg={message}/>: null}

                <form onSubmit={onSubmit}>
                    <div className="custom-file mb-4">
                        <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={onChange}/>

                        <label className="custom-file-label" htmlFor="customFile">{filename}</label>
                    </div>

                    <Progress percentage={uploadPercentage}/>
                    <input type="submit" value="upload" className="btn btn-primary bnt-block mt-4"/>
                </form>

                {
                    uploadedFile ? (
                        <div className="row mt-5">
                            <div className="col-md-6 m-auto">
                                <h3 className="text-center">{uploadedFile,fileName}</h3>
                                <img style={{width:'100%'}} sr={uploadedFile.filePath} alt="/">

                                </img>
                            </div>
                        </div>
                    ):null
                }
            </h2>
        </Fragment>


    )
}

export default FileUpload;