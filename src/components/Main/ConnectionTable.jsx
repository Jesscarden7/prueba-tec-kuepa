import React from "react";
import { FaCircle } from "react-icons/fa";
import { MdOutlinePhone, MdOutlineMessage} from "react-icons/md";
import styles from "./main.module.css";

function ConnectionTable() {
    return ( 
        <section className={styles.planning}>
            <h5>Conexiones de agenda para hoy</h5>
            <table style={{width:"100%"}}>
                <tr>
                    <td>Mario Baracus</td>
                    <td>
                        <div>
                            <p>Llamar</p>
                            <small>Descuento temporada</small>
                        </div>
                    </td>
                    <td>
                        <div className={styles.tableIcons}>
                            <FaCircle color="orange"/> 
                            <MdOutlinePhone/>
                            <MdOutlineMessage/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Pedro Perez</td>
                    <td>
                        <div>
                            <p>Llamar</p>
                            <small>Descuento temporada</small>
                        </div>
                    </td>
                    <td>
                        <div className={styles.tableIcons}>
                            <FaCircle color="orange"/>
                            <MdOutlinePhone/>
                            <MdOutlineMessage/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Mario Baracus</td>
                    <td>
                        <div>
                            <p>Llamar</p>
                            <small>Descuento temporada</small>
                        </div>
                    </td>
                    <td>
                        <div className={styles.tableIcons}>
                            <FaCircle color="orange"/> 
                            <MdOutlinePhone/>
                            <MdOutlineMessage/>
                        </div>
                    </td>
                </tr>
            </table>
        </section>
     );
}

export default ConnectionTable;