"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CateringClientPage() {
	const params = useParams();
	const { type } = params;

	const [cateringCompanies, setCateringCompanies] = useState([]);
	const [filteredCompanies, setFilteredCompanies] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	let region = "all";
	if (type === "1") region = "Ille et Vilaine";
	else if (type === "2") region = "Côtes d'Armor";
	else if (type === "3") region = "Basse Normandie";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`http://localhost:4002/catering/${region}`);
				if (res.ok) {
					const data = await res.json();
					setCateringCompanies(data.companies || []);
					setFilteredCompanies(data.companies || []);
				} else {
					console.error("Erreur de réponse API :", res.statusText);
				}
			} catch (err) {
				console.error("Erreur lors du fetch :", err);
			}
		};

		fetchData();
	}, [region]);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Enter") {
				event.preventDefault();
				const query = searchQuery.trim();
				setFilteredCompanies(() => cateringCompanies.filter((company) => company.name.toLowerCase().includes(query.toLowerCase())));
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [searchQuery]);

	return (
		<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
			<div className="sm:flex sm:justify-between py-10 mb-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					{region === "all" ? "Tous les traiteurs" : `Traiteurs pour la région : ${region}`}
				</h2>
				<div>
					<div className="mt-2 flex rounded-md gap-x-3">
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Bill Toto Traiteur"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						/>
						<button
							type="button"
							onClick={() => {
								const query = searchQuery.trim();
								setFilteredCompanies(() => cateringCompanies.filter((company) => company.name.toLowerCase().includes(query.toLowerCase())));
							}}
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Rechercher
						</button>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 mt-4">
				{filteredCompanies.map((c) => (
					<div key={c._id} className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
						<img
							alt={`Image de ${c.name}`}
							src={c.imageUrl}
							className="aspect-3/4 w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
						/>
						<div className="flex flex-1 flex-col space-y-2 p-4 overflow-scroll">
							<h3 className="text-sm font-medium text-gray-900">
								<a href={c.url} target="_blank" rel="noopener noreferrer">
									<span aria-hidden="true" className="absolute inset-0" />
									{c.name}
								</a>
							</h3>
							<p className="text-sm text-gray-500">{c.aiSummary?.length > 500 ? c.aiSummary.substring(0, 500) + "..." : c.aiSummary}</p>
							<div className="flex flex-1 flex-col justify-end">
								<p className="text-sm text-gray-500 italic">{c.city === "N/A" ? c.region : `${c.city} • ${c.region}`}</p>
								<p className="text-base font-medium text-gray-900">{c.aiGlobalScore}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
