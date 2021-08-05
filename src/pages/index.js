import React from "react";
import { Head } from "react-static";
import TitleCard from "./TitleCard";

const Index = () => (
  <>
    <Head>
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Website describing Krzysztof Widacki and his/my projects"
      />
      <meta
        name="keywords"
        content="Krzysztof, Widacki, React, Frontend, Developer, Programmer, Javascript, Typescript"
      />
      <meta name="author" content="Krzysztof Widacki" />
      <title>Krzysztof Widacki</title>
    </Head>
    <TitleCard />
    <div style={{ textAlign: "center" }}></div>
  </>
);

export default Index;
