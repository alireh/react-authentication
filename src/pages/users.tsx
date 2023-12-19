import * as React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/lib/less/index.less";

export default class Users extends React.Component {
  constructor(props: any) {
    super(props);
  }
  state = {
    expand: true,
    dataList: [
      { id: 1, name: "a", email: "a@email.com", avartar: "...", age: "45" },
      { id: 2, name: "b", email: "b@email.com", avartar: "...", age: "23" },
      { id: 3, name: "c", email: "c@email.com", avartar: "...", age: "27" },
    ],
  };

  render() {
    return (
      <div className="users-table rtl">
        <Table data={this.state.dataList} width={400}>
          <Column width={100} resizable>
            <HeaderCell>شناسه</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={200} resizable>
            <HeaderCell>نام</HeaderCell>
            <Cell dataKey="name" />
          </Column>
          <Column width={100} resizable>
            <HeaderCell>سن</HeaderCell>
            <Cell dataKey="age" />
          </Column>
        </Table>
      </div>
    );
  }
}
