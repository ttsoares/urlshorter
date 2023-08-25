import Hero from "@/components/Hero";
import Form from "@/components/Form";
import Features from "@/components/Features";
import Call2Act from "@/components/Call2Act";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-fit">
      <Hero />
      <Form />
      <Features />
      <Call2Act />
    </main>
  );
}
