import Hero from "@/components/organisms/Hero";
import AboutSection from "@/components/organisms/AboutSection";
import DeferredSections from "@/components/organisms/DeferredSections";

export default function Home() {
  return (
    <main className="relative flex-1">
      <Hero />

      <section>
        <AboutSection />
      </section>

      <DeferredSections />
    </main>
  );
}
