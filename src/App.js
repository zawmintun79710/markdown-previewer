import './App.css'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { marked } from 'marked';

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
      <div class="container-sm">
        <div class="row">
          <div class="col-6">
              <label for="editor" className='text-left'><i class="fa-brands fa-free-code-camp"></i>Editor</label>
              <textarea class="form-control" id="editor" value={text} onChange= {(e)=> this.markdownpreview(e.target.value)}></textarea>
          </div>
          <div class="col-6">
              <label for="preview"><i class="fa-brands fa-free-code-camp"></i>Previewer</label>
              <div class="form-control" id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}></div>
          </div>
      </div>
    </div>
    </div>
  );
  }
}

export default App;
