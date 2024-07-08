import * as React from "react";
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
      <div></div>
      // <div className="users-table rtl">
      //   <table width={400}>
      //     <td width={100} resizable>
      //       <HeaderCell>شناسه</HeaderCell>
      //       <Cell dataKey="id" />
      //     </td>
      //     <td width={200} resizable>
      //       <HeaderCell>نام</HeaderCell>
      //       <Cell dataKey="name" />
      //     </td>
      //     <td width={100} resizable>
      //       <HeaderCell>سن</HeaderCell>
      //       <Cell dataKey="age" />
      //     </td>
      //   </table>
      // </div>
    );
  }
}
