import { Component } from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export class HomePage extends Component {
  render() {
    return (
      <Segment inverted textAlign="center" style={{ height: "100vh" }}>
        <Header
          as="h1"
          inverted
          style={{
            fontSize: "2em",
            fontWeight: "normal",
            marginBottom: 0
          }}
        >
          류기혁
        </Header>
        <Header
          as="h2"
          content="Do whatever you want when you want to."
          inverted
          style={{
            fontSize: "1.2em",
            fontWeight: "normal",
            marginTop: "1.5em"
          }}
        >
          “안해요 (Do not)”는 가능하지만, “못해요 (Can not)”는 불가능한
          프로그래머입니다.
        </Header>
        <Header
          as="h1"
          inverted
          style={{
            fontSize: "1em",
            fontWeight: "normal",
            marginBottom: 0
          }}
        >
          가을을 상상할 수 없는 자, 봄에 씨앗을 뿌릴 수 없다.
        </Header>
      </Segment>
    );
  }
}
