import React, { useEffect, useState } from "react";
import { DeleteOutlined, FilterOutlined, EyeOutlined } from "@ant-design/icons";
import { Table, Space, Input, Button, Row, Col, Checkbox, Popover } from "antd";
import { Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import "../index.css";
import "../styles/tailwind.generated.css";
import "antd/dist/antd.css";
const { Search } = Input;

const data = [
  {
    key: "1",
    ci: "38474_3_1_Multiple",
    ec: "01/06/2021",
    ac: "01/08/2021",
    rc: "08/09/2021",
    op: "ed@email.com",
    iv: "Eur. 667",
    av: "Eur. 665",
  },
  {
    key: "2",
    ci: "38474_3_1_Multiple",
    ec: "01/06/2021",
    ac: "01/08/2021",
    rc: "08/09/2021",
    op: "ed@email.com",
    iv: "Eur. 667",
    av: "Eur. 665",
  },
  {
    key: "3",
    ci: "38474_3_1_Multiple",
    ec: "01/06/2021",
    ac: "01/08/2021",
    rc: "08/09/2021",
    op: "ed@email.com",
    iv: "Eur. 667",
    av: "Eur. 665",
  },
  {
    key: "4",
    ci: "38474_3_1_Multiple",
    ec: "01/06/2021",
    ac: "01/08/2021",
    rc: "08/09/2021",
    op: "ed@email.com",
    iv: "Eur. 667",
    av: "Eur. 665",
  },
  {
    key: "5",
    ci: "38474_3_1_Multiple",
    ec: "01/06/2021",
    ac: "01/08/2021",
    rc: "08/09/2021",
    op: "ed@email.com",
    iv: "Eur. 667",
    av: "Eur. 665",
  },
  {
    key: "6",
    ci: "38474_3_1_Multiple",
    ec: "01/06/2021",
    ac: "01/08/2021",
    rc: "08/09/2021",
    op: "ed@email.com",
    iv: "Eur. 667",
    av: "Eur. 665",
  },
  {
    key: "7",
    ci: "38474_3_1_Multiple",
    ec: "01/06/2021",
    ac: "01/08/2021",
    rc: "08/09/2021",
    op: "ed@email.com",
    iv: "Eur. 667",
    av: "Eur. 665",
  },
  {
    key: "8",
    ci: "38474_3_1_Multiple",
    ec: "01/06/2021",
    ac: "01/08/2021",
    rc: "08/09/2021",
    op: "ed@email.com",
    iv: "Eur. 667",
    av: "Eur. 665",
  },
  {
    key: "9",
    ci: "38474_3_1_Multiple",
    ec: "01/06/2021",
    ac: "01/08/2021",
    rc: "08/09/2021",
    op: "ed@email.com",
    iv: "Eur. 667",
    av: "Eur. 665",
  },
  {
    key: "10",
    ci: "38474_3_1_Multiple",
    ec: "01/06/2021",
    ac: "01/08/2021",
    rc: "08/09/2021",
    op: "ed@email.com",
    iv: "Eur. 667",
    av: "Eur. 665",
  },
];

const options = [
  { label: "Count ID", value: "ci" },
  { label: "Expected Count", value: "ec" },
  { label: "Actual Count", value: "ac" },
  { label: "Reconciliation", value: "rc" },
  { label: "Operator", value: "op" },
  { label: "Initial Variance", value: "iv" },
  { label: "Adjusted Variance", value: "av" },
];

for (let i = 0; i < 400; i++) {
  data.push({
    key: `${i + 11}`,
    ci: "38474_3_1_Single",
    ec: "01/07/2021",
    ac: "01/09/2021",
    rc: "08/10/2021",
    op: "edre@email.com",
    iv: "Eur. 697",
    av: "Eur. 655",
  });
}

function ScheduledCount() {
  const [columns, seColumns] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const onSearch = (value) => console.log(value);
  const columnsInit = [
    {
      title: "Count ID",
      dataIndex: "ci",
      key: "ci",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.ci - b.ci,
    },
    {
      title: "Expected Count",
      dataIndex: "ec",
      key: "ec",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.ec - b.ec,
    },
    {
      title: "Actual Count",
      dataIndex: "ac",
      key: "ac",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.ac - b.ac,
    },
    {
      title: "Reconciliation",
      dataIndex: "rc",
      key: "rc",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.rc - b.rc,
    },
    {
      title: "Operator",
      dataIndex: "op",
      key: "op",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.op - b.op,
    },
    {
      title: "Initial Variance",
      dataIndex: "iv",
      key: "iv",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.iv - b.iv,
    },
    {
      title: "Adjusted Variance",
      dataIndex: "av",
      key: "av",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.av - b.av,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: "100px",
      render: (text, record) => (
        <Space align="end" size="middle">
          <Link to={`/count-details/${text.key}`}>
            <a className="text-black">
              <EyeOutlined />
            </a>
          </Link>
          <Popconfirm
            title="Are you sure to delete this scheduled count?"
            onConfirm={() => confirmDelete(text.key)}
            onCancel={cancelDelete}
            okText="Yes"
            cancelText="No"
          >
            <a className="text-red-700">
              <DeleteOutlined />
            </a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const filtered = columnsInit.filter(
      (col) => !selectedItem.includes(col.dataIndex)
    );
    seColumns(filtered);
  }, [selectedItem]);
  const cancelDelete = (e) => {
    message.error("Scheduled count is not deleted");
  };

  const confirmDelete = async (id) => {
    message.success("Successfully deleted scheduled count");
    return data.filter(function (element) {
      return element.id != id;
    });
  };

  const onChange = (selection) => {
    setSelectedItem(selection);
  };
  return (
    <div className="px-20 py-5">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-1">
          <Search placeholder="search..." onSearch={onSearch} />
        </div>
        <div className="col-start-5 col-span-6 ">
          <div className="flex gap-5">
            <Input.Group>
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

      <div className="p-2">
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1900, y: 1900 }}
        />
      </div>
    </div>
  );
}

export default ScheduledCount;
