import { useCallback, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'
import { Button } from './ui/button';
import { Upload } from 'lucide-react';

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  mediaUrl: string;
}

function FileUploader({ fieldChange, mediaUrl }: FileUploaderProps) {

  const [file, setFile] = useState<File[]>([])
  const [fileUrl, setFileUrl] = useState(mediaUrl)

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFile(acceptedFiles)
    fieldChange(acceptedFiles)
    setFileUrl(URL.createObjectURL(acceptedFiles[0]))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", '.jpeg', '.jpg', '.svg']
    }
  })

  return (
    <div className='flex flex-center flex-col border border-white/18 bg-black cursor-pointer rounded-xl' {...getRootProps()}>
      <input {...getInputProps()} className='cursor-pointer' />
      {
        fileUrl ? (
          <>
            <div className='flex flex-1 justify-center w-full p-4 lg:p-8'>
              <img src={fileUrl} alt="Images cannot be shown because I am using free plan of appwrite and I can't afford paid version now." className='file_uploader-img' />
            </div>
            <p className='text-light-4 text-center w-full p-4 border-t border-t-dark-4'>Click or drag photo to replace</p>
          </>
        ) : (
          <div className='flex-center flex justify-center items-center max-w-6xl flex-col h-80 lg:h-90'>
            <Upload className='h-20 w-16 mb-3' />

            <h3 className='base-medium font-sans text-muted-foreground mb-2 mt-4.5'>Drag photo here..</h3>
            <p className='text-light-4 small-regular mb-6'>SVG, PNG, JPG</p>

            <Button variant='default'>Select from Computer</Button>
          </div>
        )
      }
    </div>
  )
}

export default FileUploader
