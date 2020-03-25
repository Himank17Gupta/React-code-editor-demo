import React from 'react';
import './App.css';
import AceEditor from "react-ace";
import 'bootstrap/dist/css/bootstrap.min.css';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-terminal";

import "ace-builds/src-noconflict/mode-jsx";

import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import Question from "../src/Question";
import OutPut from './OutPut';

const languages = [ "javascript","java","c_cpp","python","typescript","sql"];

const themes = [ "monokai", "github", "tomorrow", "kuroir", "twilight", "xcode", "textmate", "solarized_dark", "solarized_light", "terminal"];

languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));
/*eslint-disable no-alert, no-console */


const defaultValue = `//Complete function given below`;

class App extends React.Component {

onSubmit(){
console.log("Submit  \n "+ this.state.value);
this.setState({output:true});
}
onClose(){
  this.setState({output:false});
}
onRun(){
  console.log("Run  \n " + this.state.value);
}

  onLoad() {
    console.log("i've loaded");
  }

  onChange(newValue) {
   // console.log("change", newValue);
    this.setState({
      value: newValue
    });
  }

  // onSelectionChange(newValue, event) {
  //   console.log("select-change", newValue);
  //   console.log("select-change-event", event);
  // }

  // onCursorChange(newValue, event) {
  //   console.log("cursor-change", newValue);
  //   console.log("cursor-change-event", event);
  // }

  onValidate(annotations) {
    console.log("onValidate", annotations);
  }

  setPlaceholder(e) {
    this.setState({
      placeholder: e.target.value
    });
  }
  setTheme(e) {
    this.setState({
      theme: e.target.value
    });
  }
  setMode(e) {
    this.setState({
      mode: e.target.value
    });
  }
  setBoolean(name, value) {
    this.setState({
      [name]: value
    });
  }
  setFontSize(e) {
    this.setState({
      fontSize: parseInt(e.target.value, 10)
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      placeholder: "complete function given below",
      theme: "monokai",
      mode: "java",
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      fontSize: 14,
      showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      enableSnippets: true,
      showLineNumbers: true,
      output:false
    };
    this.setPlaceholder = this.setPlaceholder.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setMode = this.setMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.setBoolean = this.setBoolean.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.onRun=this.onRun.bind(this);
    this.onClose=this.onClose.bind(this);
  }
  render() {
    return (
      <>
     
        <nav class="navbar navbar-light bg-light">
        <h3>Online Code Editor</h3>
        </nav>
        <br/>
      <div className="columns">
        <div className="row" style={{margin:0}}>
          <div className="col-md">
            <label>Language:</label>
            <p className="control">
              <span className="select">
                <select
                  name="mode"
                  onChange={this.setMode}
                  value={this.state.mode}
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="col-md">
            <label>Theme:</label>
            <p className="control">
              <span className="select">
                <select
                  name="Theme"
                  onChange={this.setTheme}
                  value={this.state.theme}
                >
                  {themes.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          {/* <div className="col-md">
            <label>Font Size:</label>
            <p className="control">
              <span className="select">
                <select
                  name="Font Size"
                  onChange={this.setFontSize}
                  value={this.state.fontSize}
                >
                  {[14, 16, 18, 20, 24, 28, 32, 40].map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div> */}


          <div className="col-md">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableBasicAutocompletion}
                  onChange={e =>
                    this.setBoolean(
                      "enableBasicAutocompletion",
                      e.target.checked
                    )
                  }
                />
                Enable Basic Autocomplete
              </label>
            </p>
          </div>
          <div className="col-md">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableLiveAutocompletion}
                  onChange={e =>
                    this.setBoolean(
                      "enableLiveAutocompletion",
                      e.target.checked
                    )
                  }
                />
                Enable Live Autocomplete
              </label>
            </p>
          </div>
          <div className="col-md">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showGutter}
                  onChange={e =>
                    this.setBoolean("showGutter", e.target.checked)
                  }
                />
                Show Gutter
              </label>
            </p>
          </div>
          <div className="col-md">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showPrintMargin}
                  onChange={e =>
                    this.setBoolean("showPrintMargin", e.target.checked)
                  }
                />
                Show Print Margin
              </label>
            </p>
          </div>
          <div className="col-md">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.highlightActiveLine}
                  onChange={e =>
                    this.setBoolean("highlightActiveLine", e.target.checked)
                  }
                />
                Highlight Active Line
              </label>
            </p>
          </div>
          <div className="col-md">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableSnippets}
                  onChange={e =>
                    this.setBoolean("enableSnippets", e.target.checked)
                  }
                />
                Enable Snippets
              </label>
            </p>
          </div>
          <div className="col-md">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showLineNumbers}
                  onChange={e =>
                    this.setBoolean("showLineNumbers", e.target.checked)
                  }
                />
                Show Line Numbers
              </label>
            </p>
          </div>
        </div>
        <br/>
        <div className="row" style={{margin:0}}>
          <div className="col-md">
            <Question/>
            <br/>
            {this.state.output?<OutPut  close={this.onClose} />:<></>}
          </div>
        <div className="examples col-md">
          <AceEditor
            width="90%"
            placeholder={this.state.placeholder}
            mode={this.state.mode}
            theme={this.state.theme}
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.onChange}
            onSelectionChange={this.onSelectionChange}
            onCursorChange={this.onCursorChange}
            onValidate={this.onValidate}
            value={this.state.value}
            fontSize={this.state.fontSize}
            showPrintMargin={this.state.showPrintMargin}
            showGutter={this.state.showGutter}
            highlightActiveLine={this.state.highlightActiveLine}
            setOptions={{
              spellcheck:true,
              enableEmmet:true,
              useWorker: false,
              enableBasicAutocompletion: this.state.enableBasicAutocompletion,
              enableLiveAutocompletion: this.state.enableLiveAutocompletion,
              enableSnippets: this.state.enableSnippets,
              showLineNumbers: this.state.showLineNumbers,
              tabSize: 1
            }}
          />
          <br/>
           <button className="btn btn-info " onClick={this.onRun}>Run</button>
          &nbsp;&nbsp;
          <button className="btn btn-info " onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
      </div>
    </>
    );
  }
}

export default App;
