import { useEffect, useState } from 'react';
import { compareAsc, format } from 'date-fns'

import { api } from '../../services/api';

import style from './style.module.scss';

interface EmployeeProps {
    id: number;
    name: string;
    cpf: number;
    cargo: string;
    ufNasc: string;
    salario: number;
    status: string;
    dataCriacao: string;
}

interface GenreResponseProps {
    id: number;
    name: 'todos' | 'name' | 'cpf' | 'cargo' | 'status';
    title: string;
}

export default function Content({ state }) {
    const [employees, setEmployees] = useState<EmployeeProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>();
    const [value, setValue] = useState('');
    const [newValueSearch, setNewValueSearch] = useState('');

    useEffect(() => {
    
        if(state.selectedGenreId == 1){
            api.get<EmployeeProps[]>(`employee`).then(response => {
                setEmployees(response.data);
            });
        } else if(state.selectedGenreId != 1){
            api.get<EmployeeProps[]>(`employee/?${selectedGenre?.name}=${value}`).then(response => {
                setEmployees(response.data);
            });
        }

        api.get<GenreResponseProps>(`genres/${state.selectedGenreId}`).then(response => {
            setSelectedGenre(response.data);
        })
    }, [state.selectedGenreId, value]);


    function handleCreateNewTask() {
        if (newValueSearch) {
            setValue(newValueSearch);
        }
    }

    return (
        <main className={style.Container}>
            <div className={style.inputSearch}>
                <input 
                    type="text" 
                    required
                    placeholder="Adicionar novo todo" 
                    onChange={(e) => setNewValueSearch(e.target.value)}
                    value={newValueSearch}
                />
                <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
                    Pesquisar
                </button>
            </div>

            <div className={style.employeeList}>
                <span className={style.category}>Categoria:<span> {selectedGenre?.title}</span></span>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Cargo</th>
                            <th>UF Nasc</th>
                            <th>Salario</th>
                            <th>Status</th>
                            <th>Criado em</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.cpf}</td>
                                <td>{employee.cargo}</td>
                                <td>{employee.ufNasc}</td>
                                <td>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(employee.salario)}
                                </td>
                                <td>{employee.status}</td>
                                <td>{employee.dataCriacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}