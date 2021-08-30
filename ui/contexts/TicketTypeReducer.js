

export const initialState={

    tickettype: {},
    status: false
}

const ticketTypeReducer = (state = initialState,  { type, payload }) =>{
    switch(type){
        case 'GET_TICKET_TYPE_SUCCESS':
            return { 
                ...state,
                tickettype: payload,
                status: true
            }
        case 'GET_TICKET_TYPE_FAILED':
            return {
                ...state,
                tickettype: {},
                status: false
            
            }
        default:
            return state
    }

}
export default ticketTypeReducer