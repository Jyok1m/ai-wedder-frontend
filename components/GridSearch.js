import SearchCard from "@/components/SearchCard";
import Link from "next/link";

const regions = [
	{ regionId: 1, name: "Ille-et-Vilaine", src: "/ille-et-vilaine.jpg" },
	{ regionId: 2, name: "Côtes d'armor", src: "/cote-armor.jpg" },
	{ regionId: 3, name: "Basse Normandie", src: "/basse-normandie.jpg" },
];

export default function GridSearch() {
	return (
		<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
			<div className="sm:flex sm:items-baseline sm:justify-between">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">Rechercher par région</h2>
				<Link href="/search/all" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
					Voir toutes les offres de traiteur
					<span aria-hidden="true"> &rarr;</span>
				</Link>
			</div>

			<div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
				{regions.map((region) => (
					<SearchCard key={region.name} main={region.name === "Ille-et-Vilaine"} name={region.name} src={region.src} regionId={region.regionId} />
				))}
			</div>

			<div className="mt-6 sm:hidden">
				<Link href="/search/all" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
					Voir toutes les offres de traiteur
					<span aria-hidden="true"> &rarr;</span>
				</Link>
			</div>
		</div>
	);
}
