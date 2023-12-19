import mongoose, { Schema } from "mongoose"

const inventorySchema = new Schema({
	itemName: { type: String, required: true },
	itemDescription: { type: String, required: true },
	// SKU: { type: String, required: true },
	// inventoryCount: { type: Number, required: true },
	// cost: { type: Number, required: true },
})

const Item = mongoose.models.Item || mongoose.model("Item", inventorySchema)

export default Item

