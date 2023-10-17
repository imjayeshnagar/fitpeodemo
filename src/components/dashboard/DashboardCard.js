import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Grid, Typography } from "@mui/material";
import Students from "../../assets/images/students.png"
const DashboardCard = ({ title, count, img }) => {
    return (
        <>
            <Grid container>
                <div className="card purple-card">
                    <div className="front-card">
                        <div className="card-img">
                            <img src={img} />
                        </div>
                        <div>
                            <Typography variant="h6" component="p">
                                {count}
                            </Typography>
                            <Typography variant="h3" component="h3">
                                {title}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    )
}
DashboardCard.propTypes = {
    title: PropTypes.string,
    count: PropTypes.string,
}
export default DashboardCard;