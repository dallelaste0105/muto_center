import { useState } from "react";
import Card from "./card";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Anime!</button>
      <Card title="Título" subTitle="Descrição" start={open} />
    </>
  );
}