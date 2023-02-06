import React, { useState } from 'react'
import submit from '../images/icons/submit.png'
import Title from '../Components/Style/Title';
import {Snackbar} from "@material-ui/core"

const MAX_COUNT = 5;

function AnnonceFormPage(props) {
  
  const willayas = [
    {name: "Alger"},
    {name: "Anaba"},
    {name: "Setif"},
    {name: "Oran"},
    {name: "Telemsan"},
    {name: "Jijel"}
  ];

  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    /*event.preventDefault();
    alert(inputs.contact);*/
    const requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: inputs.category,
        type: inputs.type,
        title: inputs.title, 
        description: inputs.description,
        price: inputs.price,
        surface: inputs.surface, 
        willaya: inputs.willaya, 
        commune: inputs.town,
        adress: inputs.adresse, 
        userContacts: inputs.contact, 
        userId: props.userName,
        })
    }
    
    fetch('http://127.0.0.1:8000/api/saveannounce/', requestOptions).then((res) => {
      return res.json();
    }).then((data) => {
      for(let f of uploadedFiles){
        let uploadData = new FormData();
        uploadData.append('code', data.announceCode);
        uploadData.append('imgFile', f);
        fetch('http://127.0.0.1:8000/api/saveimgs/',{
          method: 'POST',
          body: uploadData
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
      }
    }).catch((err) => {console.log(err); setMsg('Error')})
    setOpen(true);
  }


  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');


  const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT){
                   setFileLimit(true);
                }
                if (uploaded.length > MAX_COUNT){
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded) setUploadedFiles(uploaded)

  }

  const handleFileEvent =  (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
  }

  return (
    <div className='example w-screen h-[1300px] overflow-auto flex flex-col gap-10'>
        <div className=' mt-10 mx-auto flex flex-col gap-2'>
         
          <Title first={'Add listing'} ></Title>
          
        </div>
        <form onSubmit={handleSubmit} className='w-[390px] md:w-[850px] lg:w-[1220px] h-[1120px] md:h-[950px] shadow-lg mx-auto py-6 md:py-8 lg:py-10 px-7 md:px-14 lg:px-16 flex flex-col gap-5'>
          <div className='w-full flex flex-col gap-1'>
            <p className='text-[11px] md:text-sm'>What's the category of the announce ?</p>
            <div className='flex flex-row gap-2 md:gap-4 text-[10px] md:text-xs '>
              <input  required  type="radio" name='category' value='Sale' id='category1' onChange={handleChange}/>
              <label   for='category1'>Sale</label>
              <input  required  type="radio" name='category' value='Xchange' id='category2' onChange={handleChange}/>
              <label  for='category2'>Xchange</label>
              <input required  type="radio" name='category' value='Location' id='category3' onChange={handleChange}/>
              <label   for='category3'>Location</label>
              <input  required  type="radio" name='category' value='Location for vacation' id='category4' onChange={handleChange}/>
              <label   for='category4'>Location for Vacation</label>
            </div>
          </div>
          <div className='w-full flex flex-col gap-1'>
            <p className='text-[11px] md:text-sm'>What's the type of the announce ?</p>
            <div className='flex flex-row gap-2 md:gap-4 text-[10px] mdtext-xs '>
              <input required type="radio" name='type' value='Land' id='type1' onChange={handleChange}/>
              <label for='type1'>Land</label>
              <input required type="radio" name='type' value='Farmland' id='type2' onChange={handleChange}/>
              <label for='type2'>Farmland</label>
              <input required type="radio" name='type' value='Apartment' id='type3'onChange={handleChange}/>
              <label for='type3'>Apartment</label>
              <input required type="radio" name='type' value='House' id='type4' onChange={handleChange}/>
              <label for='type4'>House</label>
              <input required type="radio" name='type' value='Bungalow' id='type5' onChange={handleChange}/>
              <label for='type5'>Bungalow</label>
            </div>
          </div>
          <input required className='w-full p-2 border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm' type='text' placeholder='Title' name="title" value={inputs.title || ""} onChange={handleChange}/>
          <textarea className='resize-none p-2 h-[150px] border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm' name='description' placeholder='Description' value={inputs.description || ""} onChange={handleChange}></textarea>
          <div className='w-full flex flex-col gap-5 md:gap-0 md:flex-row lg:flex-row md:justify-between lg:justify-between'>
            <input required type='number' name='price' placeholder='Price' className='md:w-[340px] lg:w-[500px] p-2 border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm' value={inputs.price} onChange={handleChange}/>
            <input required type='number' name='surface' placeholder='Surface' className='md:w-[340px] lg:w-[500px] p-2 border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm' value={inputs.surface || ""} onChange={handleChange}/>
          </div> 
          <div className='w-full flex flex-col gap-5 md:gap-0 md:flex-row lg:flex-row md:justify-between lg:justify-between'>
            <input required list='wilayas' name='willaya' placeholder='Willaya' className='md:w-[140px] lg:w-[200px] p-2 border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm' value={inputs.willaya || ""} onChange={handleChange}/>
            <datalist id='wilayas'>
              {willayas.map((willaya) =>(
                <option value={willaya.name} className='w-full'/>
              ))}
            </datalist>
            <input required type='text' name='town' placeholder='Town' className='md:w-[140px] lg:w-[200px] p-2 border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm' value={inputs.town || ""} onChange={handleChange}/>
            <input required type='text' name='adresse' placeholder='Adresse' className='md:w-[340px] lg:w-[500px] p-2 border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm' value={inputs.adresse || ""} onChange={handleChange}/>
          </div>  
          <div className='flex flex-col gap-5 md:flex-row  lg:flex-row md:justify-between lg:justify-between'>
            <div className='flex flex-col gap-7'>
              <textarea required className='md:w-[340px] lg:w-[500px] resize-none p-2 h-[150px] border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm' name='contact' placeholder='Drop your contacts' value={inputs.contact || ""} onChange={handleChange}></textarea>
            </div>
            
            <div className="App text-sm">
              <div className='flex'>
                  <label className='w-[340px] lg:w-[500px] bg-slate-50 cursor-pointer mb-2 text-sm font-medium text-gray-900 text-center dark:text-white p-2 shadow-sm rounded-sm' for="fileUpload">Upload images</label>
                  <input id='fileUpload' type='file' multiple
                          accept='application/pdf, image/png'
                          onChange={handleFileEvent}
                          disabled={fileLimit}
                          className='w-0'
                  />
              </div>
                  <div className='w-[340px] lg:w-[500px] flex flex-col justify-center items-center gap-2 text-sm'>
                      <div className='uploaded-files-list flex flex-col gap-1'>
                          {uploadedFiles.map(file => (
                              <div className={`p-2 w-[340px] lg:w-[500px] bg-slate-100 shadow-sm ${(uploadedFiles.length === 0) && 'hidden'}`}>
                                  {file.name}
                              </div>
                          ))}
                      </div>
                      <div 
                      className={`${(uploadedFiles.length === 0) && 'hidden'} cursor-pointer p-2 w-fit flex justify-center items-center rounded-sm bg-[#EE462F]`}
                      onClick = {() => {
                          setUploadedFiles([])
                          setFileLimit(false)
                      }}
                      >
                      Reset</div>
                  </div>
            

              </div>
          </div>
          
          <div className='flex flex-row-reverse w-full'>
            <input type='submit' id='submit' className='w-0 h-0'/>
            <label for="submit" className='submit-button p-2 w-fit flex justify-center items-center gap-2 cursor-pointer hover:scale-110 bg-[#EE462F] rounded-sm text-white'>
              <img alt='submit' src={submit} className='w-3 h-3'/>
              <span>Submit</span>
            </label>
            <Snackbar open={open} onClose={() => setOpen(false)} message={(msg === 'Error')?msg:"Announce Well Saved"} autoHideDuration={3000}/>
          </div>
          
        </form>
    </div>
  )
}

export default AnnonceFormPage