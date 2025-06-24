import Link from "next/link";
import Typer from "@/components/Typer";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<div className="text-center">
				<h1 className="text-[2em] font-semibold tracking-tight text-balance text-gray-900">
					<Typer content="Bienvenue sur AI Wedder !" />
				</h1>
				<Link href="/search">
					<button
						type="button"
						className="cursor-pointer mt-4 rounded-full bg-indigo-600 px-4 py-2.5 text-xl font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Je rentre
					</button>
				</Link>
			</div>
		</div>
	);
}
