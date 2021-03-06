import React, { useEffect, useState } from "react";

import "./index.css";
import {
  EditOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
  ScheduleOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import "./styles/tailwind.generated.css";
import "antd/dist/antd.css";
import {
  Table,
  Tag,
  Space,
  Radio,
  Input,
  Button,
  Row,
  Col,
  Checkbox,
  Popover,
} from "antd";

const { Search } = Input;
const columnsInit = [
  {
    title: "Consignment Location",
    dataIndex: "cl",
    key: "cl",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.cl - b.cl,
  },
  {
    title: "Ship To",
    dataIndex: "st",
    key: "st",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.cl - b.cl,
  },
  {
    title: "Contact Name",
    dataIndex: "cn",
    key: "cn",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.cl - b.cl,
  },
  {
    title: "Contact Email",
    dataIndex: "ce",
    key: "ce",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.cl - b.cl,
  },
  {
    title: "Count Month",
    dataIndex: "cm",
    key: "cm",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.cl - b.cl,
  },
  {
    title: "Risk Assessment",
    key: "ra",
    dataIndex: "ra",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = "";
          switch (tag) {
            case "Approved-Low":
              color = "green";
              break;
            case "Scheduled":
              color = "geekblue";
              break;
            case "Approved-High":
              color = "red";
              break;
            case "Approved-Med":
              color = "yellow";
              break;
            case "Complete":
              color = "green";
              break;
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
    filters: [
      { text: "Approved-Low", value: "Joe" },
      { text: "Approved-Med", value: "Jim" },
      { text: "Approved-High", value: "Jim" },
    ],
  },
  {
    title: "Count",
    key: "co",
    dataIndex: "co",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = "";
          switch (tag) {
            case "Scheduled":
              color = "geekblue";
              break;
            case "Complete":
              color = "green";
              break;
            case "In Review":
              color = "red";
              break;
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
    filters: [
      { text: "Scheduled", value: "Joe" },
      { text: "complete", value: "Jim" },
      { text: "In Review", value: "Jim" },
    ],
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    render: (text, record) => (
      <Space size="middle">
        <EditOutlined />
        <a className="text-red-700">
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    cl: "Finding Nemo",
    st: "42 Wallaby Way Syndney, Australia 2001",
    cn: "Sherman, Philp",
    ce: "ed@email.com",
    cm: "August",
    ra: ["Approved-Low"],
    co: ["Scheduled"],
  },
  {
    key: "2",
    cl: "Johnson & Johnson",
    st: "10S Highway 202 Raritan, New Jersy 08869",
    cn: "Maia, Francisco",
    ce: "ed@email.com",
    cm: "August",
    ra: ["Approved-Med"],
    co: ["Complete"],
  },
  {
    key: "3",
    cl: "Acme, Inc",
    st: "1234 East St Portland, Oregon 97210",
    cn: "Doe,john",
    ce: "ed@email.com",
    cm: "September",
    ra: ["Approved-High"],
    co: ["In Review"],
  },
  {
    key: "4",
    cl: "Acme, Inc",
    st: "1234 East St Portland, Oregon 97210",
    cn: "Doe,john",
    ce: "ed@email.com",
    cm: "September",
    ra: ["Approved-High"],
    co: ["In Review"],
  },
  {
    key: "5",
    cl: "Acme, Inc",
    st: "1234 East St Portland, Oregon 97210",
    cn: "Doe,john",
    ce: "ed@email.com",
    cm: "September",
    ra: ["Approved-High"],
    co: ["In Review"],
  },
  {
    key: "6",
    cl: "Acme, Inc",
    st: "1234 East St Portland, Oregon 97210",
    cn: "Doe,john",
    ce: "ed@email.com",
    cm: "September",
    ra: ["Approved-High"],
    co: ["In Review"],
  },
  {
    key: "7",
    cl: "Acme, Inc",
    st: "1234 East St Portland, Oregon 97210",
    cn: "Doe,john",
    ce: "ed@email.com",
    cm: "September",
    ra: ["Approved-High"],
    co: ["In Review"],
  },
  {
    key: "8",
    cl: "Acme, Inc",
    st: "1234 East St Portland, Oregon 97210",
    cn: "Doe,john",
    ce: "ed@email.com",
    cm: "September",
    ra: ["Approved-High"],
    co: ["In Review"],
  },
  {
    key: "9",
    cl: "Acme, Inc",
    st: "1234 East St Portland, Oregon 97210",
    cn: "Doe,john",
    ce: "ed@email.com",
    cm: "September",
    ra: ["Approved-High"],
    co: ["In Review"],
  },
  {
    key: "10",
    cl: "Acme, Inc",
    st: "1234 East St Portland, Oregon 97210",
    cn: "Doe,john",
    ce: "ed@email.com",
    cm: "September",
    ra: ["Approved-High"],
    co: ["In Review"],
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const options = [
  { label: "Consignment Location", value: "cl" },
  { label: "Ship To", value: "st" },
  { label: "Contact Name", value: "cn" },
  { label: "Contact Email", value: "ce" },
  { label: "Count Month", value: "cm" },
  { label: "Risk Assessment", value: "ra" },
  { label: "Count", value: "co" },
];

for (let i = 0; i < 400; i++) {
  data.push({
    key: `${i + 11}`,
    cl: "Finding Nemo",
    st: "42 Wallaby Way Syndney, Australia 2001",
    cn: "Sherman, Philp",
    ce: "ed@email.com",
    cm: "August",
    ra: ["Approved-Low"],
    co: ["Scheduled"],
  });
}

function App() {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [columns, seColumns] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const onSearch = (value) => console.log(value);

  useEffect(() => {
    const filtered = columnsInit.filter((col) => !selectedItem.includes(col.dataIndex));
    seColumns(filtered)
  }, [selectedItem]);

  const onChange = (selection) => {
    setSelectedItem(selection);
  };
  return (
    <div className="px-20 py-5 ">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-1 col-span-2">
          <Search placeholder="search..." onSearch={onSearch} />
        </div>
        <div className="col-start-5 col-span-6 ">
          <div className="flex gap-5">
            <Button type="link" icon={<PlusCircleOutlined />}>
              Add New Location
            </Button>
            <Button type="primary" icon={<ScheduleOutlined />}>
              Create Count
            </Button>
            <Input.Group>
              {" "}
              <Popover
                content={
                  <Checkbox.Group
                    onChange={onChange}
                    style={{ width: "550px" }}
                  >
                    <Row>
                      {options.map((group, i) => {
                        return (
                          <Col span={8}>
                            <Checkbox key={i} value={group.value}>
                              {group.label}
                            </Checkbox>
                          </Col>
                        );
                      })}
                    </Row>
                  </Checkbox.Group>
                }
                trigger="click"
                placement="bottomLeft"
              >
                <Button>
                  Hide Column <FilterOutlined type="filter" />
                </Button>
              </Popover>
            </Input.Group>
          </div>
        </div>
      </div>

      <div>
        <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
          }}
          value={selectionType}
        ></Radio.Group>
        <Table
          rowSelection={{ type: selectionType, ...rowSelection }}
          columns={columns}
          dataSource={data}
          scroll={{ x: 1900, y: 680 }}
        />
      </div>
    </div>
  );
}

export default App;
