import Card from "@/components/Card/Card";
import Panel from "@/components/Panel/Panel";

export default async function Home() {
  return (
    <div className="w-full flex justify-center items-center h-screen gap-10">
      <Panel />
      <Card />
    </div>
  );
}
