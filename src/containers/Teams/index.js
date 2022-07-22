import { useEffect, useState } from "react";
import { api } from "../../api";

const Teams = () => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const resp = await api.get('/getTeams')
            console.log(resp);
            setData(resp)
        }
        fetchData()
        setLoading(false)
    }, [])

    return (
        <div>TEST</div>
    )
}

export default Teams;