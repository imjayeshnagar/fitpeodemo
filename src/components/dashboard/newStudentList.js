import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import config from '../../coreFiles/config';
import { getstudentAction } from '../../Action/action';

export default function NewStudentList() {

  const [getstudentlist, setStudentList] = useState({})

  useEffect(() => {
    getstudentdata();
  }, []);

  const getstudentdata = async () => {
    let res = await getstudentAction()
    if (res.success) {
      setStudentList(res.data)
    }
  }


  const columns = [
    {
      field: 'id',
      headerName: 'SNo',
      width: 80
    },
    {
      field: "image",
      headerName: "image",
      renderCell: (params) =>
        <img src={`${config.imageUrl + params.value}`} />
    },
    {
      field: 'student_name',
      headerName: 'Student Name',
      width: 160
    },
    {
      field: 'student_contact',
      headerName: 'Phone',
      width: 160
    },
    {
      field: 'student_class',
      headerName: 'Class',
      width: 160
    },

    {
      field: 'department',
      headerName: 'Department',
      width: 160
    },
    {
      field: 'student_address',
      headerName: 'Address',
      width: 160
    },
    {
      field: 'addmission_date',
      headerName: 'Date of addmission',
      renderCell: (params) =>
        `${moment(params.value).format('DD/MM/YYYY')}`
    },
  ];




  return (
    <div className='card'>
      New Student List
      <div style={{ height: 'auto', width: '100%' }}>

        <DataGrid
          className='card school-tables'
          rows={getstudentlist}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </div>
  );
}

