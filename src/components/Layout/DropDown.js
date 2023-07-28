import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

// CPU / Processor
// Motherboard
// RAM
// Power Supply Unit
// Storage Device
// Monitor
// Others

const items = [
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        CPU / Processor
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Motherboard
      </Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        RAM
      </Link>
    ),
    key: '2',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Power Supply Unit
      </Link>
    ),
    key: '3',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Storage Device
      </Link>
    ),
    key: '4',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Monitor
      </Link>
    ),
    key: '5',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Others
      </Link>
    ),
    key: '6',
  },
  
];
const DropDown = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <Link href="/" onClick={(e) => e.preventDefault()}>
      <Space className='text-white'>
        Categories
        <DownOutlined />
      </Space>
    </Link>
  </Dropdown>
);
export default DropDown;