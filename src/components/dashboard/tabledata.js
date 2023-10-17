import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import config from '../../coreFiles/config';
export default function TeacherTable() {



    // }

    const columns = [
        {
            field: "image",
            headerName: "Image",
            renderCell: (params) =>
                <img src='images/avatar2.png' />
        },

        {
            field: 'name',
            headerName: 'Name',
            width: 130,
        },

        {
            field: 'department',
            headerName: 'Department',
            width: 130
        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 170,
            renderCell: (params) =>
                <button type="button" className='available'>{params.value}</button>
        },
        {
            field: 'age',
            headerName: 'Age',
            width: 120
        },

        {
            field: 'id',
            headerName: 'Action',
            width: 130,
            renderCell: (params) =>
                <div className='action-btn'>
                    <div>
                        <a href={`${config.baseUrl}update-teacher/${params.id}`}>
                            <EditOutlinedIcon color='primary' /> </a>
                    </div>
                    <div> <DeleteOutlineOutlinedIcon sx={{ color: 'red' }} /></div>
                </div>

        },

    ];
    const rows = [
        { id: 1, name: 'Snow', department: 'Jon', age: 35,gender:'male' },
        { id: 2, name: 'Lannister', department: 'Cersei', age: 42,gender:'male' },
        { id: 3, name: 'Lannister', department: 'Jaime', age: 45,gender:'male' },
        { id: 4, name: 'Stark', department: 'Arya', age: 16,gender:'male' },
        { id: 5, name: 'Targaryen', department: 'Daenerys', age: null,gender:'male' },
        { id: 6, name: 'Melisandre', department: null, age: 150,gender:'male' },
        { id: 7, name: 'Clifford', department: 'Ferrara', age: 44,gender:'male' },
        { id: 8, name: 'Frances', department: 'Rossini', age: 36,gender:'male' },
        { id: 9, name: 'Roxie', department: 'Harvey', age: 65,gender:'male' },
      ];

    return (
        <>
            <Box>
                <DataGrid
                    className='card school-tables'
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </Box>
        </>

    );
}
