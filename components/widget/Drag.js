import ReactDragListView from 'react-drag-listview';
const { DragColumn } = ReactDragListView;
const Drag = (props) =>{


  const onDragEnd = (fromIndex, toIndex) => {
    const {handleOrderChange} = props;
    handleOrderChange && handleOrderChange(fromIndex,toIndex)
  }

  const dragProps = {
    onDragEnd : onDragEnd,
    nodeSelector: '.drag',
    handleSelector: '.drag',
    ignoreSelector: '.ignore'
  }

  return (

      <DragColumn  {...dragProps}>
  
        {props.children}
      </DragColumn >

    
  )
}

export default Drag