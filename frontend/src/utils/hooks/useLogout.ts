import { useContext } from 'react'
import { AccountContext } from '../Context/AccountContext'

function useLogout() {
    const { setAccountData } = useContext(AccountContext)
    const logout = () => {
        const nullAccount = {
            username: "",
            profilePic: "",
            email: "",
            id: "",
        }
        setAccountData(nullAccount)
        localStorage.removeItem("account")
    }
    return { logout }
}

export default useLogout