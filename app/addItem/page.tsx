// Turns this into a client component -> console.log will appear in browser as oppose to terminal
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddItem() {
	const [itemName, setItemName] = useState("")
	const [itemDescription, setItemDescription] = useState("")

	const router = useRouter()

	async function handleSubmit(e) {
		e.preventDefault()

		if (!itemName || !itemDescription) {
			alert("itemName name and description are required")
		}

		try {
			const res = await fetch("http://localhost:3000/api/items", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ itemName, itemDescription }),
			})

			if (res.ok) {
				router.push("/")
			} else {
				throw new Error("Failed to create itemName")
			}
		} catch (error) {}
	}

	return (
		<form className="flex flex-col gap-3" onSubmit={handleSubmit}>
			<input
				onChange={(e) => {
					setItemName(e.target.value)
				}}
				value={itemName}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="itemName"
			/>

			<input
				onChange={(e) => {
					setItemDescription(e.target.value)
				}}
				value={itemDescription}
				className="border border-slate-500 px-8 py-2"
				type="text"
				placeholder="itemName Description"
			/>

			<button
				type="submit"
				className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
			>
				Add itemName
			</button>
		</form>
	)
}
