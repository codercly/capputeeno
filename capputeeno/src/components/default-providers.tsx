"use client"
import { FilterContextProvider } from '@/contexts/filter-context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface DefaultProvidersProps {
    children: ReactNode
}

const theme = {
    desktopBreakPoint: "968px",
    tabletBreakPoint: "768px",
}
export default function DefaultProviders({ children }: DefaultProvidersProps) {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>


    )
}