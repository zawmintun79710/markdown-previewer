import './App.css'
import React, { Component } from 'react';
import 'react-bootstrap'
import { FormGroup, FormLabel } from 'react-bootstrap';
import { marked } from 'marked'

class App extends Component {
  state = { text: `
# Markdown Previewer Heading
## Markdown Previewer Sub Heading  
[freeCodeCamp](https://www.freecodecamp.org)
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
function blockquote(){
  return blockquoteExample;
}
\`\`\`

- This
- is
- an
- example
- of
- list
- item

> This is an example of blockquote

![freeCodeCampLogo](https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg "Logo Title Text 1")

**Bold Text**
`}

  markdownpreview(text){
    this.setState({text})
  }
  

  render(){
    let {text} = this.state;
    console.log(text);
  return (
    <div className="App">
      <h1 className='text-white bg-secondary text-center'>Markdown Previewer</h1>
      <FormGroup className='row'>
        <FormGroup className='col-6'>
          <FormLabel className='form-control mb-0'>Editor</FormLabel>
          <textarea className='form-control' id='editor' rows="29" value={text} onChange= {(e)=> this.markdownpreview(e.target.value)}></textarea>
        </FormGroup>
        <FormGroup className='col-6'>
          <FormLabel className='form-control mb-0'>Previewer</FormLabel>
          <div className='bg-success text-white text-left' id='preview' dangerouslySetInnerHTML={{__html: marked(text)}}></div>
        </FormGroup>
      </FormGroup>
    </div>
  );
  }
}

export default App;
