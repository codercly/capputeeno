"use client" //informa para o next que o componente será renderizado no lado do servidor
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { createContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";

export const FilterContext = createContext({
    search: '',
    page:   0,
    type: FilterType.ALL,
    priority: PriorityTypes.NEWS,
    setPriority: (value: PriorityTypes) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
});

interface ProviderProps{
    children: ReactNode
}

export function FilterContextProvider( {children} : ProviderProps){
    
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityTypes.POPULARITY)    
    
    return(
        <FilterContext.Provider value = 
            {{
                search, 
                page, 
                type, 
                setSearch, 
                setPage, 
                setType, 
                priority, 
                setPriority
            }}>
            {children}
        </FilterContext.Provider>
    )
}