import React, { Component } from 'react';
import { Container, Card, Button, ButtonToolbar } from 'react-bootstrap';
import fileDownload from 'js-file-download';
class FileDemo extends Component {
    state = {
        textarea: '',
        filename: '',
        fileExtension: '.txt',
        uploadName: '',
        uploadFile: ''
    }
    downloadFile = () => {
        let downloadType = "text/plain";
        switch (this.state.fileExtension) {
            case '.xls': downloadType = "application/vnd.ms-excel"; break;
            case '.pdf': downloadType = "application/pdf"; break;
            case '.ppt': downloadType = "application/vnd.ms-powerpoint"; break;
            default: break;
        }
        let file = new File(
            [this.state.textarea],
            `${this.state.filename}.xls`,
            { type: downloadType });

        fileDownload(file, this.state.filename + this.state.fileExtension);
    }
    uploadFile = (e) => {
        let extension = this.getFileExtension(e.target.files[0].name);
        this.setState({ uploadFile: e.target.files[0], uploadFileExtension: `.${extension}` });
    }
    downloadUploaded = () => {
        fileDownload(this.state.uploadFile, this.state.uploadName + this.state.uploadFileExtension);
    }
    getFileExtension = (filename) => {
        return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
    }
    render() {
        return (
            <Container>
                <Card className="p-20">
                    <h4><b>File Download</b></h4>
                    <select className="test-input" value={this.state.fileExtension} onChange={(e) => this.setState({ fileExtension: e.target.value })}>
                        <option value=".txt">Text (.txt)</option>
                        <option value=".xls">Excel (.xls)</option>
                        <option value=".pdf">PDF (.pdf)</option>
                        <option value=".ppt">Powerpoint (.ppt)</option>
                    </select>
                    <input
                        className="test-input"
                        onChange={(e) => this.setState({ filename: e.target.value })}
                        value={this.state.filename}
                        placeholder={"Enter filename"}
                    />
                    <input
                        className="test-input"
                        onChange={(e) => this.setState({ textarea: e.target.value })}
                        value={this.state.textarea}
                        placeholder={"Enter text content"}
                    />
                    <ButtonToolbar>
                        <Button variant="primary" onClick={this.downloadFile}>Download File</Button>
                    </ButtonToolbar>
                </Card>
                <Card className="p-20">
                    <h4><b>Upload then Download</b></h4>
                    <input type="file" onChange={this.uploadFile} />
                    <br />
                    <input
                        className="test-input"
                        onChange={(e) => this.setState({ uploadName: e.target.value })}
                        value={this.state.uploadName}
                        placeholder={"Enter filename"}
                    />
                    <ButtonToolbar>
                        <Button variant="primary" onClick={this.downloadUploaded}>Download File</Button>
                    </ButtonToolbar>
                </Card>
            </Container>
        );
    }
}
export default FileDemo;