import React, {useEffect} from 'react';
import styles from './OrderPage.module.css';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {getOrders} from "../../../store/thunk/order/getOrders";
import MainContent from "../../../layout/MainContent/MainContent";
import OrderMeals from "../../../components/OrderMeals/OrderMeals";
import {toggleStatusModal} from "../../../store/reducers/orderReducer";
import StatusModal from "./StatusModal/StatusModal";

const formatDate = (date: Date) => {
    return new Date(date).toISOString().split('T')[0];
}

const OrderPage = () => {
    const dispatch = useAppDispatch();
    const {orders, showStatusModal} = useAppSelector(state => state.orderReducer);

    useEffect(() => {
        dispatch(getOrders());
    }, [])

    const changeStatusHandler = () => {
        dispatch(toggleStatusModal());
    }

    return (
        <MainContent>
            {showStatusModal && <StatusModal/>}
            <div className={styles.container}>
                <table className={styles.ordersTable}>
                    <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>RestaurantId</th>
                        <th>Order Meals</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Change Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.restaurantId}</td>
                                    <td>
                                        <OrderMeals orderMeals={order.orderMeals}/>
                                    </td>
                                    <td>{order.status}</td>
                                    <td>{formatDate(order.createdAt)}</td>
                                    <td><button onClick={changeStatusHandler} className={styles.statusBtn}>Change Status</button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </MainContent>
    );
};

export default OrderPage;