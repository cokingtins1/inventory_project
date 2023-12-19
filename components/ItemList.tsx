import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"

async function getItems() {
	try {
		const res = await fetch("http://localhost:3000/api/items", {
			cache: "no-store",
		})
		if (!res.ok) {
			throw new Error("Failed to fetch items")
		}
		return res.json()
	} catch (error) {
		console.log("Error loading items:", error)
	}
}

export default async function ItemList() {
	const { items } = await getItems()

	return (
		<>
			{items.map((item) => (
				<div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
					<div>
						<h2 className="font-bold text-2xl">{item.itemName}</h2>
						<span>{item.itemDescription}</span>
					</div>

					<div className="flex gap-2">
						<RemoveBtn id={item._id}  />
						<Link href={`/editItem/${item._id}`}>
							<HiPencilAlt size={24} />
						</Link>
					</div>
				</div>
			))}
		</>
	)
}
