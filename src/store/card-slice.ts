import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CardItem = {
    id: string,
    title: string,
    price: number,
    quantity: number
}

type CardState = {
    items: CardItem[]
}

const initialState: CardState = {
    items: []
}

export const cardSlice = createSlice({
    name: "card",
    initialState: initialState,
    reducers: {
        addToCard(state, action: PayloadAction<{id: string; title: string; price: number}>){
            const itemIndex = state.items.findIndex(item=>item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity ++
            }else {
                state.items.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1
                })
            }
        },
        removeFromCard(state, action: PayloadAction<string>){
            const itemIndex = state.items.findIndex(item=>item.id === action.payload)
            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1)
            } else {
                state.items[itemIndex].quantity --
            }
        }
    }
})

export const{ addToCard, removeFromCard} = cardSlice.actions;