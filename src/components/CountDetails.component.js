import React, { useEffect, useState } from "react";
import {
  ArrowLeftOutlined,
  CloseOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Table, Input } from "antd";
import { Modal } from "antd";
import "../index.css";
import "../styles/tailwind.generated.css";
import "antd/dist/antd.css";
const { Search } = Input;

const data = [
  {
    key: "1",
    pi: "38474_3_1_Multiple",
    li: "01/06/2021",
    fr: "01/08/2021",
    qt: "08/09/2021",
    ep: "ed@email.com",
    up: "Eur. 667",
    tp: "Eur. 665",
  },
  {
    key: "2",
    pi: "38474_3_1_Multiple",
    li: "01/06/2021",
    fr: "01/08/2021",
    qt: "08/09/2021",
    ep: "ed@email.com",
    up: "Eur. 667",
    tp: "Eur. 665",
  },
  {
    key: "3",
    pi: "38474_3_1_Multiple",
    li: "01/06/2021",
    fr: "01/08/2021",
    qt: "08/09/2021",
    ep: "ed@email.com",
    up: "Eur. 667",
    tp: "Eur. 665",
  },
  {
    key: "4",
    pi: "38474_3_1_Multiple",
    li: "01/06/2021",
    fr: "01/08/2021",
    qt: "08/09/2021",
    ep: "ed@email.com",
    up: "Eur. 667",
    tp: "Eur. 665",
  },
  {
    key: "5",
    pi: "38474_3_1_Multiple",
    li: "01/06/2021",
    fr: "01/08/2021",
    qt: "08/09/2021",
    ep: "ed@email.com",
    up: "Eur. 667",
    tp: "Eur. 665",
  },
];

function CountDetails({history}) {
  const [columns, seColumns] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSearch = (value) => console.log(value);
  const columnsInit = [
    {
      title: "Product ID",
      dataIndex: "pi",
      key: "pi",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.pi - b.pi,
    },
    {
      title: "Lot ID",
      dataIndex: "li",
      key: "li",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.li - b.li,
    },
    {
      title: "Franchise",
      dataIndex: "fr",
      key: "fr",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.fr - b.fr,
    },
    {
      title: "Quantity",
      dataIndex: "qt",
      key: "qt",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.qt - b.qt,
    },
    {
      title: "Expiry Date",
      dataIndex: "ep",
      key: "ep",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.ep - b.ep,
    },
    {
      title: "Unit Price",
      dataIndex: "up",
      key: "up",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.up - b.up,
    },
    {
      title: "Total Price",
      dataIndex: "tp",
      key: "tp",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.tp - b.tp,
    },
  ];

  useEffect(() => {
    const filtered = columnsInit.filter(
      (col) => !selectedItem.includes(col.dataIndex)
    );
    seColumns(filtered);
  }, [selectedItem]);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="px-20 py-5">
      <div className="row-span-full text-blue-600">
        <div className="flex flex-wrap">
          <div className="float-left flex-auto">
            <ArrowLeftOutlined onClick={(e) => history.push(`/`)} />
            Back
          </div>
          <div className="flex-col float-right">
            <EditOutlined onClick={showModal} />
            Edit Details
          </div>
        </div>
        <div>
          <div className="text-2xl"> Scheduled Count Details</div>
          <div class="flex flex-wrap">
            <div className="text-2xl"> Johonson & Jhonson </div>
            <div className="text-yellow-500 p-1 text-lg">Approved- Med</div>
          </div>
          <div class="flex flex-wrap">
            <div className="text-blue-700 mr-6">Scheduled Date:</div>{" "}
            <div className="text-blue-400">08/01/2021 - 08/28/2021 </div>
          </div>
          <div class="flex flex-wrap">
            <div className="text-blue-700 mr-20">Auditor:</div>{" "}
            <div className="text-blue-400">Maria,Francisco</div>
          </div>
          <div class="flex flex-wrap">
            <div className="text-blue-700 mr-14">Approvers:</div>{" "}
            <div className="text-blue-400">Smith,Jane </div>
          </div>
          <div class="flex flex-wrap">
            <div className="text-blue-700 mr-14">Franchises:</div>{" "}
            <div className="text-blue-400">Franchise A,Franchise </div>
          </div>
          <div class="flex flex-wrap">
            <div className="text-blue-700 mr-16">Reviewer:</div>{" "}
            <div className="text-blue-400">Doe,John</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-1">
          <Search placeholder="search..." onSearch={onSearch} />
        </div>
      </div>

      <div className="p-2">
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1900, y: 1900 }}
        />
      </div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        closeIcon={
          <div className="text-blue-900 text-lg p-4">
            <CloseOutlined />
          </div>
        }
        footer={null}
        title={null}
        onCancel={handleCancel}
      >
        <div className="text-lg text-blue-900 p-4"> Edit Count</div>
        <div class="md:flex md:items-center">
          <div class="md:w-5/6 ml-10">
        <div className="p-1">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-full-name"
            type="text"
            value="08/20/2021"
          />
        </div>
        <div className="p-1">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-full-name"
            type="text"
            value="Johnson & Johnson"
          />
        </div>
        <div className="p-1">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-full-name"
            type="text"
            value="Franchise A, Franchise B"
          />
        </div>
        <div className="p-1">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-full-name"
            type="text"
            value="Maria, Francisco"
          />
        </div>
        <div className="p-1">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-full-name"
            type="text"
            value="Smith, Jane"
          />
        </div>
        <div className="p-1">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-full-name"
            type="text"
            value="Doe,John"
          />
        </div>
        </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3 p-1">
            <button
              class="shadow bg-blue-900 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white py-1 px-16 rounded"
              type="button"
              onClick= {handleCancel}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CountDetails;
