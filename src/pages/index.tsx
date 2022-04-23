import Column from "../components/Column/Column";
import Row from "../components/Row/Row";
import Table from "../components/Table/Table";

export default function Home() {
  return (
    <Table>
      <Row>
        <Column>
          <p>Hello</p>
        </Column>
        <Column>
          <p>World</p>
        </Column>
      </Row>
      {/* <Row>
        <p>Carbono!</p>
      </Row> */}
    </Table>
  );
}
