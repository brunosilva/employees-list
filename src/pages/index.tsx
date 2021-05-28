import React, { useState } from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

import style from './home.module.scss';

export default function Home() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  const state = {
    selectedGenreId,
    setSelectedGenreId
  }

  return (
    <div className={style.Container}>
      <div className={style.content}>
        <Sidebar state={state} />
        <Content state={state} />
      </div>
    </div>
  )
}
