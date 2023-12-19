import connectMongoDB from "@/libs/mongodb"
import Item from "@/models/item"
import { NextResponse } from "next/server"

export async function POST(request) {
	const { itemName, itemDescription } = await request.json()
	await connectMongoDB()
	await Item.create({ itemName, itemDescription })
	return NextResponse.json({ message: "Item Created" }, { status: 201 })
}

export async function GET() {
	await connectMongoDB()
	const items = await Item.find()
	return NextResponse.json({ items })
}

export async function DELETE(request) {
	const id = request.nextUrl.searchParams.get("id")
	await connectMongoDB()
	await Item.findByIdAndDelete(id)
	return NextResponse.json({ message: "Item Delected" }, { status: 200 })
}
