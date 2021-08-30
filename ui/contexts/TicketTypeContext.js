import React,{useContext,useState,useEffect,useReducer} from 'react';
import clientSideClient from '../service/clientSideClient'
import ticketTypeReducer, { initialState } from '../contexts/TicketTypeReducer'
import {getTicketTypeApi} from '../service/client-apis/tickettypeApis'
const TicketTypeContext = React.createContext({})

const TicketTypeProvider = ({children})=>{
const [contextState, contextDispatch] = useReducer(ticketTypeReducer, initialState)



    const getTicketType = async ()=>{
        try{
            const response = await getTicketTypeApi()
            contextDispatch({
                type: 'GET_TICKET_TYPE_SUCCESS',
                payload: response,
              })
           
        }catch(err){
            contextDispatch({ type: 'GET_TICKET_TYPE_FAILED' })
            return false
        }
    }
    useEffect(()=>{
        getTicketType()
    },[])

    return <TicketTypeContext.Provider value={{getTicketType,ticket: contextState.tickettype,status: contextState.status}}>
        {children}
    </TicketTypeContext.Provider>
}
export function useTicketTypeContext(){
    const context = useContext(TicketTypeContext)
    if(!context){
        throw new Error('userContext Hook cannot be used outside of Provider')
    }
    return context
}

export default TicketTypeProvider