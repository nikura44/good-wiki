import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

export default class BasicDemo extends React.Component {



  state = {
    editorState: BraftEditor.createEditorState('<p>退出代码块请使用 <b>Shift + Enter</b></p>'), // 设置编辑器初始内容
    outputHTML: '<p></p>'
  }

  componentDidMount () {
    this.isLivinig = true
    // 3秒后更改编辑器内容
    //setTimeout(this.setEditorContentAsync, 3000)
    if(this.props.htmlContent != null){
      this.setState({
        outputHTML : this.props.htmlContent.pageInfo
      })
      console.log("wuhu" + this.props.htmlContent.pageInfo)
      this.isLivinig && this.setState({
        editorState: BraftEditor.createEditorState(this.props.htmlContent.pageInfo)
      })
    }
  }

  componentWillUnmount () {
    this.isLivinig = false
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    });
    this.props.htmltrans(this.state.outputHTML);
  }

  setEditorContentAsync = () => {
    this.isLivinig && this.setState({
      editorState: BraftEditor.createEditorState('<p>开始创作吧！<b>hava a good time!</b><p>')
    })
  }

  render () {

    // const { editorState, outputHTML } = this.state
    const { editorState } = this.state
    return (
      <div>
        <div className="editor-wrapper">
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
        {/* <h5>输出内容</h5>
        <div className="output-content">{outputHTML}</div> */}
      </div>
    )

  }

}
