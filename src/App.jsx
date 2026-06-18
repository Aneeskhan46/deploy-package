import { useState } from 'react';
import { CustomMathEditor } from 'my-anees-package';
import 'my-anees-package/style.css'; 

function App() {
  const [editorValue, setEditorValue] = useState("");

  return (
    <div>
      <h2 style={{color:"red",fontWeight:"bold",textAlign:"center"}}>
        Anees Testing the package 
      </h2>
      <br />
      
      {/* Pass the value and the onChange handler! */}
      <CustomMathEditor 
        value={editorValue} 
        onChange={(newValue) => setEditorValue(newValue)} 
      />
      
    </div>
  )
}

export default App;
