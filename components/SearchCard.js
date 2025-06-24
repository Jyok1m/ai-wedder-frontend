import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SearchCard({ main = false, src, name, regionId }) {
	return (
		<div className={`group relative aspect-2/1 overflow-hidden rounded-lg ${main ? "sm:row-span-2 sm:aspect-square" : "sm:aspect-auto"}`}>
			<Image
				src={src}
				alt={`Photo de ${name}`}
				className="object-cover object-center transition duration-300 ease-in-out group-hover:scale-105"
				fill
			/>
			<div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50" />
			<div className="absolute inset-0 flex items-end p-6">
				<div>
					<h3 className="font-semibold text-white">
						<Link href={regionId ? `/search/${regionId}` : "/search/all"}>
							<span className="absolute inset-0" />
							{name}
						</Link>
					</h3>
					<p aria-hidden="true" className="mt-1 text-sm text-white">
						Voir les offres
					</p>
				</div>
			</div>
		</div>
	);
}
