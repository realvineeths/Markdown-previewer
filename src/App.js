import './App.css';
import React, { Component } from 'react'
import { marked } from "marked";

export class App extends Component {

  constructor(props){
    super(props);
    this.state={
      markdown:placeholder
    }
  }


  render() {
    const handleChange=(event)=>{
      this.setState({
        markdown:event.target.value
    })
    }



    return (
      <div className="container">
      <div className='text-center'><h1>Markdown Preview</h1></div>
        <div className='d-flex flex-column'>
          <div className='col-6 d-flex flex-column'>
          <span className='badge bg-dark d-flex flew-row justify-content-between '>
            <h3>Editor</h3>
            <p><i className='fa fa-fire'></i></p>
          </span>
          <textarea style={{height:"50vh"}} className="w-100 ml-4 p-2" placeholder="type something!!" value={this.state.markdown} onChange={handleChange}  id='editor'></textarea>
          </div>  
          <div className='col-6 d-flex flex-column w-100 mt-4' >          
          <span className='badge bg-dark d-flex flew-row justify-content-between align-items-center'><h3>Previewer</h3>
          <p><i className='fa fa-fire'></i></p>          
          </span>
          <div style={{minHeight:"200px" }} id='preview' className="w-100  ml-4 p-2 bg-secondary text-black output" dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}} />
          </div> 
        </div>
      </div>
    )
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![CUTE PIC](https://picsum.photos/id/237/200/300)
`;


export default App

