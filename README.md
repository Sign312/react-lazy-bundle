# react-lazy-bundle

> lazyload component for react

## install

```javascript
npm install bundle-loader
npm install react-lazy-bundle
```

## usage

```javascript
import React, { Component } from "react";
import Bundle from "react-lazy-bundle";

import Test from "bundle-loader?lazy&name=[name]!./test";

const BeforeLoadComponent = props =>
  <div>
    before load {props.name}
  </div>;

class HomePage extends Component {
  render() {
    return (
      <div>
        <Bundle name="flypie" load={Test} beforeLoad={BeforeLoadComponent} />
      </div>
    );
  }
}

export default HomePage;

```
