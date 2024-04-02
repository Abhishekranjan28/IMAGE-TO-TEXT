import React from 'react';

function Upload() {
    const uploadImage = () => {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);
        fetch('https://ImagetoText.onrender.com', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('output').innerText = data.text;
            })
            .catch(error => {
                console.error('Error:', error);
            });

        return false; 
    };

    return (
        <div className="container text-white flex flex-col justify-evenly items-center p-4 h-[100vh] ">
            <h1 className='text-[5vw] text-zinc-200'>Convert Image to Text</h1>
            <div className=' flex justify-evenly items-center w-full p-2 gap-[3.5vw] flex-col'>
                <div className=' flex max-w-[50vw]  justify-center items-center  p-[2vw] rounded-lg border-[1px]'>
                    "Welcome to our innovative image-to-text conversion platform, where every pixel holds a story waiting to be told. With just a simple upload, unlock the power to transform your images into editable text effortlessly. Say goodbye to tedious manual transcription and hello to seamless digital conversion. Whether it's extracting text from documents, screenshots, or photos, our intuitive tool makes the process a breeze. Experience the magic of visual intelligence as your images come to life with readable text at your fingertips. Don't let valuable information remain hidden within your visuals – upload now and let the words leap off the screen!"
                </div>
                <div className='w-[1/2]'>
                    <form id="uploadForm" encType="multipart/form-data" action="https://ImagetoText.onrender.com">
                        <input type="file" id="fileInput" />
                        <button type="button" onClick={uploadImage} className='bg-zinc-500 p-[10px] rounded-lg font-bold hover:outline' >Upload</button>
                    </form>
                    <div id="output" style={{ color: 'red', fontWeight: 'bold', fontStyle: 'italic', fontSize: 'larger' }}>
                        {/*Jo bhi likha hua dikhana hi dikha dena */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Upload;
