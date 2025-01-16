import Image from "next/image";
import { Container } from "./components/container";
import { Hero, HeroSubtitle, HeroTitle } from "./components/hero";

export default function Home() {
	return (
		<main className="pt-header-height">
			<Container>
				<Hero>
					<HeroTitle>
						Linear is a better way <br /> to build products
					</HeroTitle>
					<HeroSubtitle>
						Meet the new standard for modern software development.
						<br /> Streamline issues, sprints, and product roadmaps.
					</HeroSubtitle>
					<Image
						src={"/hero.webp"}
						width={3840}
						height={2175}
						alt="Hero image"
					/>
				</Hero>
			</Container>
		</main>
	);
}
