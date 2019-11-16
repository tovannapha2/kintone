import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@kintone/kintone-ui-component';
class MyCustomization extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button text='Submit' type='success' onClick={function () { alert('This is my customization'); }} />
        );
    }
}


// Adding your customization into header space of kintone app
kintone.events.on("app.record.index.show", function (ev) {
    console.log(kintone.app)
    var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
    console.log(kintoneSpaceElement)
    ReactDOM.render(<MyCustomization />, kintoneSpaceElement);
});


// Adding your customization into header space of kintone app
kintone.events.on("app.record.detail.show", function (ev) {
    console.log(kintone.app)
    // var kintoneSpaceElement = kintone.app.getHeaderMenuSpaceElement();
    // console.log(kintoneSpaceElement)
    // const el = document.createElement('div');
    // el.setAttribute("id", "react_app");
    // kintoneSpaceElement.appendChild(el);


    var myRecordButton = document.createElement('div');

    var kintoneSpaceElement = kintone.app.record.getHeaderMenuSpaceElement().appendChild(myRecordButton)

    ReactDOM.render(<MyCustomization />, kintoneSpaceElement);
});