import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor';
import { useEffect, useState } from 'react';
import api from '../../utils/api-admin';

const Editor = (props) =>{
  
  const config = {
    toolbar: [  
      'heading',
      'bold',
      'italic',
      'underline',
      'fontColor',
      'fontSize',
      'alignment',

      'highlight',
      'link',
      'bulletedList',
      'numberedList',
    
      'indent',
      'outdent',
  
      'imageUpload',
      'blockQuote',
      'insertTable',
  
      // 'undo',
      // 'redo'
    ],
    removePlugins: [ 'ImageCaption' ],
    image: {
      toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],
      styles: [
        'full',
        'alignLeft',
        'alignRight'
      ]
    },
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
        { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
        { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' }
    ]
    },
    fontSize: {
      options: [
        8,10,12,14,'default',18,20,22,24,26,28,30,32,34,36,38,40
      ]
    },
    simpleUpload: {
      uploadUrl:  api.baseUrl+ '/ck-upload',
      // headers: {
      //     'X-CSRF-TOKEN': 'CSFR-Token',
      //     Authorization: 'Bearer <JSON Web Token>'
      // }
    },
  }

  const {height = '200px',data='',name,required} = props;
  // const [data, setData] = useState('')
  const [inputData,setInputData] = useState('')
  useEffect(()=>{
    setInputData(data || '')
  },[data])
  const onEditorChange =(event, editor )=>{
    const data = editor.getData();
    setInputData(data)
  }
  // console.log('data',data)

  return (
    <div style={{position:'relative'}}>
      <textarea name={name} 
      defaultValue={inputData}
      required={required}
      style={{width:'100%',height:'100%',position:'absolute',opacity:0}}>
          
      </textarea>
      <CKEditor
        editor = {ClassicEditor}
        config = {config}
        data = {data || ''}
        onInit = { 
          editor => {
            // console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));
            editor.editing.view.change( writer => {
              writer.setStyle( 'min-height', height, editor.editing.view.document.getRoot() );
            });
          } 
        }
        onChange={onEditorChange}
      />
    </div>
  )
}

export default Editor