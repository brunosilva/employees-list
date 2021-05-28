import React, { useState, useEffect } from "react";

import { api } from '../../services/api';

import style from './style.module.scss';

interface GenreResponseProps {
    id: number;
    name: 'todos' | 'name' | 'cpf' | 'cargo' | 'status';
    title: string;
  }

  
export default function Sidebar({state}){

    const [genres, setGenres] = useState<GenreResponseProps[]>([]);

    useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
            setGenres(response.data);
        });
    }, []);
    
    function handleClickButton(id: number) {
        state.setSelectedGenreId(id);
    }

    return (
        <div className={style.sidebar}>
            {genres.map(genre => (
                <button
                    className={style.button}
                    key={String(genre.id)}
                    onClick={() => handleClickButton(genre.id)}>
                    {genre.title}
                </button>
            ))}
        </div>
    )
}