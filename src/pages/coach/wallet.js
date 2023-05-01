// Components
import { Col, Row } from "antd"
import DashboardTitle from "components/dashboard/Title"
import AdminLayout from "components/dashboard/AdminLayout"
import Image from "next/image"
import walletOne from 'public/profile/wallet1.svg'
import walletTwo from 'public/profile/wallet2.svg'
import walletThree from 'public/profile/wallet3.svg'

// Data 
const wallets = [
    {
        id: 1,
        img: walletOne,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        points: 250
    },
    {
        id: 2,
        img: walletTwo,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        points: 250
    },
    {
        id: 3,
        img: walletThree,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        points: 250
    },
    {
        id: 4,
        img: walletOne,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        points: 250
    },
    {
        id: 5,
        img: walletTwo,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        points: 250
    },
    {
        id: 6,
        img: walletThree,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        points: 250
    },

]

const points = wallets.map(point => (point.points))
const totalPoints = points.reduce((acc, val) => acc + val, 0)


const Wallet = () => {
    return (
        <AdminLayout>
            <DashboardTitle title="My Wallet" />
            <Row gutter={20}>
                <Col 
                lg={{span : 16}}
                md={{span : 16}}
                sm={{span : 24}}
                xs={{span : 24}}
                >
                    {
                        wallets.map(wallet => (
                            <div className="wallet__row" key={wallet.id}>
                                <span className="wallet__title">
                                    <Image src={wallet.img} alt=" " />
                                    <p className="color__light">{wallet.title}</p>
                                </span>
                                <span>
                                    <p className="wallet__points">Pt{wallet.points}</p>
                                </span>
                            </div>
                        ))
                    }
                </Col>
                <Col
                lg={{span : 8}}
                md={{span : 8}}
                sm={{span : 24}}
                xs={{span : 24}}
                >
                    <div className="wallet__balance">
                        <small className="color__light">Wallet Balance</small>
                        <h4>{ totalPoints }<sup>Pts</sup></h4>
                    </div>
                </Col>
            </Row>
        </AdminLayout>
    )
}

export default Wallet