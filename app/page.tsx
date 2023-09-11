import Introduction from "@/components/introduction";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <About />
    </main>
  )
}
