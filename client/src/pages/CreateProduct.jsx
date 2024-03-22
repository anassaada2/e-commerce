import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Button, FileInput, Select, TextInput} from 'flowbite-react'
export default function CreateProduct() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
<h1 className='text-center text-3xl my-7 font-semibold'> Create a product</h1>
    <form className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 sm:flex-row justify-between'>
<TextInput type='text' placeholder='title' required id='title' className='flex-1'/>
<Select>
  <option value='uncategorized'>Select a category</option>
  <option value="phone"> Phone</option>
  <option value='laptop'> Laptop</option>
  <option value='watch'>Watch</option>
</Select>
 
      </div>
      <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
        <FileInput type='file' accept='image/*' />
        <Button type='button' gradientDuoTone='purpleToBlue' size="sm" outline > upload image </Button>
      </div>
      <ReactQuill theme='snow' placeholder='write description' className='h-72 mb-12'/>
    <Button type='submit' gradientDuoTone='purpleToPink'>Add product</Button>
    </form>
    </div>
  )
}
