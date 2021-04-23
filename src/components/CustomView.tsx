/*
 * @Author: yuta
 * @Date: 2021-04-22 17:30:02
 * @LastEditTime: 2021-04-23 14:11:04
 * @LastEditors: yuta
 */
import React from "react";
import PropTypes from "prop-types";
import { requireNativeComponent, ViewProps } from "react-native";

interface CustomViewProps {
  type: string;
  onClick: () => void;
}

const RNTCustomViewComponent = requireNativeComponent<
  CustomViewProps | ViewProps
>("CustomView");

class RNTCustomView extends React.Component {
  static propTypes: any;
  constructor(props: any) {
    super(props);
  }

  _onClick = (event: { nativeEvent: { message: any; }; }) => {
    if (!this.props.onClick) {
      return;
    }

    this.props.onClick(event.nativeEvent.message);
  };

  render() {
    return (
      <RNTCustomViewComponent {...this.props} onClick={this._onClick} />
    );
  }
}

RNTCustomView.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default RNTCustomView;
