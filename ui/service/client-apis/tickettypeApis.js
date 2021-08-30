import clientSideClient from '../clientSideClient'

export const getTicketTypeApi = () => clientSideClient.get('http://localhost:8000/api/v1/ticket-type').then((r) => r.data)