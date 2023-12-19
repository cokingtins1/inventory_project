import connectMongoDB from "@/libs/mongodb"
import Item from "@/models/item"
import { NextResponse } from "next/server"

export async function PUT(request,{params}){
    const {id} = params
    const {newItem:itemName, newItemDescription:itemDescription} = await request.json()
    await connectMongoDB()
    await Item.findByIdAndUpdate(id,{itemName, itemDescription})
    return NextResponse.json({message:"Item Updated"}, {status:200})
}

export async function GET(request, {params}){
    const {id} = params
    await connectMongoDB()
    const item = await Item.findOne({_id:id})
    return NextResponse.json({item}, {status: 200})

}