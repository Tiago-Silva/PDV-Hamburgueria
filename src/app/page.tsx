'use client';

import { SingnIn } from "./(pages)/(Auth)/SingnIn";
import { BoxFront } from "./(pages)/BoxFront";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
     {/* <BoxFront /> */}
     <SingnIn />
    </Container>
  );
}
