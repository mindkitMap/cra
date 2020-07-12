import React from "react";
import  {EditableTree}  from "@mind-kit/outline-editor/dist/EditableTree";

import { data } from "./data";

function toPrint(data){
  return {
    text: data.text,
    children: data.children?.map(toPrint) ??[]
  }
}

function App() {
  return (
    <>
      
        <EditableTree
          treeData={data}
          onDataChange={(data) => {
            // console.log(JSON.stringify(data.map(toPrint), null, 2));
          }}
        />
      <input placeholder="focus me"></input>
    </>
  );
}

export default App;
