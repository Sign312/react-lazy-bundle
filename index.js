import React, { Component } from "react";

class Bundle extends Component {
  state = {
    // 因为module被占用了，我们用mod定义变量
    mod: null
  };

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load(mod => {
      this.setState({
        // 为了兼容es module 和 AMD module
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    //若加载完成则渲染对应懒加载的组件，反之加载beforeLoad传入的组件
    return this.state.mod
      ? <this.state.mod {...this.props} />
      : <this.props.beforeLoad {...this.props} />;
  }
}

export default Bundle;
