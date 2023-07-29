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
      <Link href="/categories/Processor" rel="noopener noreferrer">
        CPU / Processor
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link href="/categories/Motherboard" rel="noopener noreferrer">
        Motherboard
      </Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link href="/categories/RAM" rel="noopener noreferrer">
        RAM
      </Link>
    ),
    key: '2',
  },
  {
    label: (
      <Link href="/categories/Power Supply Unit" rel="noopener noreferrer">
        Power Supply Unit
      </Link>
    ),
    key: '3',
  },
  {
    label: (
      <Link href="/categories/Storage Device" rel="noopener noreferrer">
        Storage Device
      </Link>
    ),
    key: '4',
  },
  {
    label: (
      <Link href="/categories/Monitor" rel="noopener noreferrer">
        Monitor
      </Link>
    ),
    key: '5',
  },
  {
    label: (
      <Link href="/categories/Others" rel="noopener noreferrer">
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