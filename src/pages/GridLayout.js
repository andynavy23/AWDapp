import React, { Component } from "react";
import MediaCard from "../components/mediaCard";
import GridLayout from "react-grid-layout";
import { Rnd } from "react-rnd";
import * as Space from "react-spaces";

export default class MyGrid extends Component {
  render() {
    const layout = [
      { i: "a", x: 0, y: 0, w: 2, h: 2, isResizable: true },
      { i: "b", x: 4, y: 0, w: 2, h: 2, isResizable: true },
      { i: "c", x: 8, y: 0, w: 2, h: 2, isResizable: true },
    ];
    return (
      <div>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={100}
          width={1200}
        >
          <div key="a">
            <MediaCard
              imgUrl="https://public.nftstatic.com/static/nft/zipped/48c6f0149e154d14a40d2342dc7b2165_zipped.png"
              name="Lizard"
              content="WTF"
            />
          </div>
          <div key="b">
            <MediaCard
              imgUrl="https://public.nftstatic.com/static/nft/zipped/48c6f0149e154d14a40d2342dc7b2165_zipped.png"
              name="Lizard"
              content="WTF"
            />
          </div>
          <div key="c">
            <MediaCard
              imgUrl="https://public.nftstatic.com/static/nft/zipped/48c6f0149e154d14a40d2342dc7b2165_zipped.png"
              name="Lizard"
              content="WTF"
            />
          </div>
        </GridLayout>
      </div>
    );
  }
};

export class MyGridTwo extends Component {
  render() {
    return (
      <div>
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 300,
            height: 150,
          }}
          minWidth={200}
          minHeight={100}
          bounds="window"
        >
          <MediaCard
            imgUrl="https://public.nftstatic.com/static/nft/zipped/48c6f0149e154d14a40d2342dc7b2165_zipped.png"
            name="Lizard"
            content="WTF"
          />
        </Rnd>
      </div>
    );
  }
}

export class MyGridThree extends Component {
  render() {
    return (
      <div>
        <Space.Fixed height={400}>
          <Space.LeftResizable size="20%" order={1}>
            Left1
          </Space.LeftResizable>
          <Space.LeftResizable size="20%" order={2}>
            Left2
          </Space.LeftResizable>
          <Space.Fill>Fill</Space.Fill>
          <Space.RightResizable size="20%" order={2}>
            Right1
          </Space.RightResizable>
          <Space.RightResizable size="20%" order={1}>
            Right2
          </Space.RightResizable>
        </Space.Fixed>
      </div>
    );
  }
}