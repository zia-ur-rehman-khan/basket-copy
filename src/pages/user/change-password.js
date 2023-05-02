import dynamic from "next/dynamic"

const DynamicPassword = dynamic(() => import("components/pages/User/Password"))

const ChangePassword = () => {
    return (
        <DynamicPassword />
    )
}

export default ChangePassword