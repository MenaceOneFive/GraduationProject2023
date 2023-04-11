import {Food} from "./Food";
import React from "react";
import {SwipeableList, SwipeableListItem, SwipeAction, TrailingActions} from "react-swipeable-list";
import {Avatar, Typography} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface FoodList {
    foods: Food[]
}

export const CartItem: React.FC<Food> = ({name, price, image, description}, key: number) => {

    return (
        <SwipeableListItem trailingActions={trailingActions()} key={key}>
            <Avatar src={image}/><Typography>{name}</Typography>
        </SwipeableListItem>
    );
}

export const CartItemList: React.FC<FoodList> = (list) => {
    return (<SwipeableList>
        {list.foods.map((food, idx) =>
            CartItem(food, idx)
        )}
    </SwipeableList>);
}

const trailingActions = () => (
    <TrailingActions>
        <SwipeAction
            destructive={true}
            onClick={() => console.info('swipe action triggered')}
        >
            <div style={{
                background: "red",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column"
            }}><DeleteForeverIcon sx={{color: "white"}}/></div>
        </SwipeAction>
    </TrailingActions>
);