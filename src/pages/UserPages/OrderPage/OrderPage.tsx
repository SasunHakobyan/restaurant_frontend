import React, {useEffect} from 'react';
import styles from './OrderPage.module.css';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {getOrders} from "../../../store/thunk/order/getOrders";
import MainContent from "../../../layout/MainContent/MainContent";
import OrderMeals from "../../../components/OrderMeals/OrderMeals";
import {toggleStatusModal} from "../../../store/reducers/orderReducer";
import StatusModal from "./StatusModal/StatusModal";
import {Status} from "../../../models/order";

import orderNotFoundImg from '../../../assets/order_notfound.png'
import {Link} from "react-router-dom";

const formatDate = (date: Date) => {
    return new Date(date).toISOString().split('T')[0];
}

const OrderPage = () => {
    const dispatch = useAppDispatch();
    const {orders, showStatusModal, statusChangeOrderId} = useAppSelector(state => state.orderReducer);

    useEffect(() => {
        dispatch(getOrders());
    }, [showStatusModal])

    const changeStatusHandler = (orderId: number) => {
        dispatch(toggleStatusModal(orderId));
    }

    const endedStatuses = [Status.Cancel.toString(), Status.Received.toString()]

    return (
        <MainContent>
            {showStatusModal && statusChangeOrderId && <StatusModal orderId={statusChangeOrderId} />}
            <div className={styles.container}>
                {orders.length === 0 &&
                    <div className={styles.notFoundContainer}>
                        <img className={styles.orderNotFoundImg} src={orderNotFoundImg}/>
                        <h2>Orders Not found, <Link className={styles.toMealsLink} to='/meals'>Do you want to make one?</Link></h2>
                    </div>
                }
                {orders.length !== 0 &&
                    <table className={styles.ordersTable}>
                        <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>Order Restaurant</th>
                            <th>Order Meals</th>
                            <th>Status</th>
                            <th>Total Price</th>
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
                                        <td>{order.restaurant.name}</td>
                                        <td>
                                            Order Meals
                                        </td>
                                        <td>{order.status}</td>
                                        <td>{order.totalAmount}</td>
                                        <td>{formatDate(order.createdAt)}</td>
                                        <td>
                                            {!endedStatuses.includes(order.status) &&
                                                <button
                                                    onClick={() => changeStatusHandler(order.id)}
                                                    className={styles.statusBtn}>Change Status
                                                </button>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                }
            </div>
        </MainContent>
    );
};

export default OrderPage;