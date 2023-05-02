import dynamic from "next/dynamic"

const DynamicCoach = dynamic(() => import("components/pages/User/UserCoach"))

const MyCoach = () => {
    const [size, setSize] = useState(20);
    return (
        <DynamicCoach />
    )
}

export default MyCoach