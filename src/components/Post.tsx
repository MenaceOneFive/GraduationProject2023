import React from "react";
import {Avatar, Card, Chip, PopperPlacementType, Typography} from "@mui/material";
import { normalCard } from "./styled/Cards";

export interface PostDetail {
    title: string;
    memberProfileUrl: string;
    minutesLeftUntilMeal: number;
    index: number;
    interest: string[];
    onClick: (event: React.MouseEvent<HTMLDivElement>, newPlacement: PopperPlacementType) => void;
}

export const Post: React.FC<PostDetail> = (detail: PostDetail) => {
    if (detail.minutesLeftUntilMeal < 0) return <></>
    const truncatedTitle = detail.title.length > 5 ? detail.title.slice(0, 10) + "..." : detail.title;
    return (<>
        <Card id={detail.index + ""}
              sx={normalCard}
              style={{marginLeft:"0px", marginRight:"0px"}}
              onClick={(event) => {
                  detail.onClick(event, "auto");
              }}>
            <Avatar src={detail.memberProfileUrl == null ? "" : detail.memberProfileUrl}/>
            <Typography variant={"body2"}>{truncatedTitle}</Typography>
            {detail.interest.map((interest, idx) => <Chip key={idx} label={`#${interest}`}></Chip>)}
            <Typography variant={"subtitle2"}>{getTimeFrom(detail.minutesLeftUntilMeal)} 후</Typography>
        </Card> </>)
}
export const getTimeFrom = (minutesLeftUntilMeal: number): string => {
    const hours = Math.floor(minutesLeftUntilMeal / 60)
    const minutes = minutesLeftUntilMeal % 60
    if (hours >= 24) return `${hours / 24}일`
    if (hours >= 1) return `${hours}시간`
    else return `${minutes}분`
}