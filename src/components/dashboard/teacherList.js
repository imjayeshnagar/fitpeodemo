import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Teacher1 from '../../assets/images/avatar1.png'
import { useState } from 'react';
import { useEffect } from 'react';
import config from '../../coreFiles/config';
import { getteacherstatusAction } from '../../Action/action'

export default function TeacherList() {

  const [gettecherstatuslist, setTeacherStatusList] = useState({})


  useEffect(() => {
    getteacherstatus();
  }, []);

  const getteacherstatus = async () => {
    let res = await getteacherstatusAction();
    if (res.success) {
      setTeacherStatusList(res.data)

    }

  }

  const columns = [
    {
      field: "image",
      headerName: "#",
      renderCell: (params) =>
        <img src={`${config.imageUrl + params.value}`} />
    },
    {
      field: 'name',
      headerName: 'Teacher Name',
      renderCell: (params) => {
        return (
          <>
            {params.value}
          </>
        )
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 140,
      renderCell: (params) => {
        return (
          <>
            {params.value == 1 ?
              <button type="button" className='available1'>Absend</button>
              : params.value == 2 ?
                <button type="button" className='available2'>Present</button>
                :
                ''
            }
          </>
        )
      }

    },
  ];





  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <DataGrid
        className='card school-tables'
        rows={gettecherstatuslist}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}

