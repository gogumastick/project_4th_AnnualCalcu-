import React, { useState } from 'react';
import { Button, Flex, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { EmplyDataType } from '@/utill/interface';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import { addedEmplyState } from '@/utill/atom';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

// const [addedEmply, setAddedEmply] = useRecoilState<object[]>(addedEmplyState); 
// console.log('EmplyContent의 setAddedEmply', setAddedEmply);


const columns: TableColumnsType<EmplyDataType> = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address' },
];

const dataSource = Array.from<EmplyDataType>({ length: 46 }).map<EmplyDataType>((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
}));

const EmplyContent = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<EmplyDataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;

    return (
        <Flex gap="middle" vertical>
            <Flex align="center" gap="middle">
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
            </Flex>
            <Table<EmplyDataType> rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
        </Flex>
    );
};
export default EmplyContent;
