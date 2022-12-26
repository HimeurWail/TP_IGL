import React, { useState }  from 'react'

const MAX_COUNT = 5;

function FilesInput() {
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);


    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
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
		<div className="App text-sm">
            <div className='flex flex-row'>
                <label className='w-[500px] bg-slate-50 cursor-pointer mb-2 text-sm font-medium text-gray-900 text-center dark:text-white p-2 shadow-sm rounded-sm' for="fileUpload">Upload images</label>
                <input id='fileUpload' type='file' multiple
                        accept='application/pdf, image/png'
                        onChange={handleFileEvent}
                        disabled={fileLimit}
                        className='w-0'
                />
            </div>
			
            <div className='w-[500px] flex flex-col justify-center items-center gap-2 text-sm'>
                <div className='uploaded-files-list flex flex-col gap-1'>
                    {uploadedFiles.map(file => (
                        <div className={`p-2 bg-slate-100 shadow-sm ${(uploadedFiles.length === 0) && 'hidden'}`}>
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
	);
}


export default FilesInput