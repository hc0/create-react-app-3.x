import React from "react";
import NotificationCenter from "@utils/notificationCenter";
import { Modal, Button } from "antd";
import "./style.less";
@NotificationCenter
class AA extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: false,
      headerSearchVisiable: true
    };
    const { observer } = this.props.notification;
    observer("CALL_AHOb", msg => {
      this.setState({
        headerSearchVisiable: msg
      });
    });
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="boxOuter">
        <p>
          测试测试
          <span>哈哈北京</span>
        </p>
        <h1>{this.state.headerSearchVisiable}</h1>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default AA;
