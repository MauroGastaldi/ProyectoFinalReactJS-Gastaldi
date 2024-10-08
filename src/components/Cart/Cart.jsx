import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="d-flex flex-column align-items-center">
                <div className="w-75 alert border border-2 text-center" role="alert">
                    <img src="https://img.freepik.com/vector-premium/2-bolsa-compras-vectorial-ilustracion-vectorial_921039-1623.jpg" alt="Carrito vacío" className="img-fluid w-25" />
                    <h3>¡Tu carrito está vacío!</h3>
                </div>
                <Link className="d-flex justify-content-center my-5 btn btn-outline-dark rounded-pill" to="/" >
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="container my-4">
            <div className="table-responsive">
                <table className="table mx-auto">
                    <tbody>
                        <tr>
                            <td className="text-end" colSpan="4">
                                <button className="btn btn-outline-danger btn-md rounded-pill w-lg-auto" onClick={() => vaciarCarrito()}>Vaciar Carrito<i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>

                        {
                            carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
                          
                        }

                        <tr>
                            <td className="text-end" colSpan="6">
                                <h6>Cantidad Total: {cantidadTotal}</h6>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-end" colSpan="6">
                                <h6>Total: ${total}</h6>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-end">
                                <Link className="btn btn-outline-danger btn-md rounded-pill w-lg-auto" colSpan="6" to="/checkout">Finalizar Compra</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
