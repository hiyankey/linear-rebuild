import Image from "next/image";
import { Container } from "./components/container";
import { Hero, HeroSubtitle, HeroTitle } from "./components/hero";

export default function Home() {
	return (
		<main>
			<Container>
				<Hero>
					<HeroTitle>Linear is a better way to build products</HeroTitle>
					<HeroSubtitle>
						Meet the new standard for modern software development. Streamline
						issues, sprints, and product roadmaps.
					</HeroSubtitle>
				</Hero>
			</Container>
		</main>
	);
}
