import React from "react";
import {IconButton, Typography} from "@mui/material";
import {AddCircle, FilterAlt} from "@mui/icons-material";
import {SimpleTemplate} from "./PageTemplate";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import {Posts} from "../components/Posts";
import {useAppDispatch} from "../store/hooks";
import {closeDrawer, closeFilter, openDrawer, openFilter} from "../store/matching/drawer";
import {AddDrawer, FilterDrawer} from "../components/Drawers";


export const Matching: React.FC = () => {
    return (
        <SimpleTemplate param={{pageHeaderName: "매칭"}}>
            <Contents/>
        </SimpleTemplate>)
}

const Contents: React.FC = () => {
    const dispatch = useAppDispatch()
    const toggleDrawer = (open: boolean, name: String) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')) {
                return;
            }
            if (name === 'add') {
                if (open) dispatch(openDrawer());
                else dispatch(closeDrawer());
            }
            if (name === 'filter') {
                if (open) dispatch(openFilter());
                else dispatch(closeFilter());
            }
            return;
        };
    return (<>
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{display: "inherit", alignItems: "center"}}>
                    <LocalDiningIcon/>
                    <Typography variant={"body1"} fontWeight={"bold"}>같이 먹어요!</Typography>
                </div>
                <div style={{display: "inherit", alignItems: "center"}}>
                    <IconButton onClick={toggleDrawer(true, 'add')}>
                        <AddCircle style={{color: "orange"}}/>
                    </IconButton>
                    <IconButton onClick={toggleDrawer(true, 'filter')}>
                        <FilterAlt style={{color: "orange"}}/>
                    </IconButton>
                    <AddDrawer/>
                    <FilterDrawer/>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Posts/>
            </div>
        </div>
    </>)
}
