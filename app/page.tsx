import ClientNewsWrapper from "./components/ClientNewsWrapper";
import Ranking from "./components/Ranking";

export default function Home() {


  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
      <Ranking />
      <ClientNewsWrapper />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
