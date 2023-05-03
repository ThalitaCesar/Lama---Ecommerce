import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const useProtectedPage = () => {
    const navigate = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            console.log('Acesso Negado. Usuário não está autenticado.')
            navigate.push('/')
        }
    }, [navigate])
}

export default useProtectedPage