import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {ProTable} from '@ant-design/pro-components';
import {useRef} from 'react';
import {searchUsers} from "@/services/ant-design-pro/api";
import {Image} from "antd";



const columns: ProColumns<API.CurrentUser>[] = [
    {
        dataIndex: 'id',
        valueType: 'indexBorder',
        width: 48,
    },
    {
        title: '身份标识',
        dataIndex: 'idCode',
        copyable: true,//可复制
    },
    {
        title: '用户名',
        dataIndex: 'username',
        copyable: true,//可复制
    },
    {
        title: '账号',
        dataIndex: 'userAccount',
        copyable: true,//可复制
    },
    {
        title: '头像',
        dataIndex: 'avatarUrl',
        render: (props, doms) => {
            return [
                // eslint-disable-next-line react/jsx-key
                <div>
                    <Image src={doms.avatarUrl} width={50} height={50}/>
                </div>
            ]
        },
    },
    {
        title: '性别',
        dataIndex: 'gender',
    },
    {
        title: '电话',
        dataIndex: 'phone',
        copyable: true,//可复制
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        copyable: true,//可复制
    },
    {
        title: '用户状态',
        dataIndex: 'userStatus',

    },
    {
        title: '用户创建时间',
        dataIndex: 'createTime',
        copyable: true,//可复制
        valueType: 'dateTime'
    },
    {
        title: '用户权限',
        dataIndex: 'userRole',
        valueType: 'select',
        valueEnum: {
            0: {
                text: '普通用户',
                status: 'Default',
            },
            1: {
                text: '管理人员',
                status: 'Success',
                disabled: true,
            },
        },
    },

    // {
    //     disable: true,
    //     title: '状态',
    //     dataIndex: 'state',
    //     filters: true,
    //     onFilter: true,
    //     ellipsis: true,
    //     valueType: 'select',
    //     valueEnum: {
    //         all: { text: '超长'.repeat(50) },
    //         open: {
    //             text: '未解决',
    //             status: 'Error',
    //         },
    //         closed: {
    //             text: '已解决',
    //             status: 'Success',
    //             disabled: true,
    //         },
    //         processing: {
    //             text: '解决中',
    //             status: 'Processing',
    //         },
    //     },
    // },
    // {
    //     disable: true,
    //     title: '标签',
    //     dataIndex: 'labels',
    //     search: false,
    //     renderFormItem: (_, { defaultRender }) => {
    //         return defaultRender(_);
    //     },
    //     render: (_, record) => (
    //         <Space>
    //             {record.labels.map(({ name, color }) => (
    //                 <Tag color={color} key={name}>
    //                     {name}
    //                 </Tag>
    //             ))}
    //         </Space>
    //     ),
    // },
    // {
    //     title: '创建时间',
    //     dataIndex: 'created_at',
    //     valueType: 'dateRange',
    //     hideInTable: true,
    //     search: {
    //         transform: (value) => {
    //             return {
    //                 startTime: value[0],
    //                 endTime: value[1],
    //             };
    //         },
    //     },
    // },
    {
        title: '操作',
        valueType: 'option',
        key: 'option',
        render: (text, record, _, action) => [
            <a
                key="editable"
                onClick={() => {
                    action?.startEditable?.(record.id);
                }}
            >
                编辑
            </a>,
          // eslint-disable-next-line react/jsx-key
            <a>
                查看
            </a>,
        ],
    },
];

export default () => {
    const actionRef = useRef<ActionType>();
    return (
        //API.CurrentUser从全局中拿数据
        <ProTable<API.CurrentUser>
            columns={columns}
            actionRef={actionRef}
            cardBordered

            //request获取返回值数据，通过columns返回给最上面↑ 的columns展示
            request = {async (params = {}, sort, filter) => {
                console.log(sort, filter);
                //通过searchUsers方法调用接口从后端获取数据
                const userList = await searchUsers();
                return {
                    data: userList
                }
            }}
            editable={{
                type: 'multiple',
            }}
            columnsState={{
                persistenceKey: 'pro-table-singe-demos',
                persistenceType: 'localStorage',
                onChange(value) {
                    console.log('value: ', value);
                },
            }}
            rowKey="id"
            search={{
                labelWidth: 'auto',
            }}
            options={{
                setting: {
                    listsHeight: 400,
                },
            }}
            form={{
                // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
                syncToUrl: (values, type) => {
                    if (type === 'get') {
                        return {
                            ...values,
                            created_at: [values.startTime, values.endTime],
                        };
                    }
                    return values;
                },
            }}
            pagination={{
                pageSize: 5,
                onChange: (page) => console.log(page),
            }}
            dateFormatter="string"
            headerTitle="高级表格"
        />
    );
};
