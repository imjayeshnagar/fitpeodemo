import React, { useState, useEffect } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Sidebar from "../../directories/sidebar";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
// ============pages need
import DashboardCard from "./DashboardCard";
import StudentPerformance from "./studentPerformance";
import AverageMarks from "./averageMarks";
import TeacherTable from "./tabledata";
// import NewStudentList from "./newStudentList";
// import TeacherList from "./teacherList";
// ======images=============
import Students from "../../assets/images/students.png"
import Courses from "../../assets/images/course.png"
import Teachers from "../../assets/images/teacher.png"
import Fee from "../../assets/images/taxes.png"
const Dashboard = () => {

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar title="Dashboard" />
        <Box component="main" sx={{ flexGrow: 1, p: 4, mt: 7 }}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <DashboardCard title="Total Student" count="350" img={Students} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DashboardCard title="Total Courses" count="25" img={Courses} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DashboardCard title="Total Teachers" count="50" img={Teachers} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DashboardCard title="Fee Collection" count="100000rs" img={Fee} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
          <Grid item md={8}>
              <div className="card">
                <Typography component="h3" variant="h3" >
                  Overview
                </Typography>
                <StudentPerformance />
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="card">
              <Typography component="h3" variant="h3" sx={{marginBottom:'50px'}}>
                  Obtain Marks
                </Typography>
              <AverageMarks/>
              </div>
            </Grid>

          </Grid>
          <Grid container spacing={2}>
            <Grid item md={12} sx={{marginTop:'30px'}}>
            <TeacherTable/>
            </Grid>
          </Grid>
  
        </Box>
      </Box>
    </>
  )
}
export default Dashboard;