import axios from 'axios'

// eslint-disable-next-line react-refresh/only-export-components
export const axiosCommon = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
const useAxiosCommon = () => {
    return axiosCommon
}

export default useAxiosCommon
