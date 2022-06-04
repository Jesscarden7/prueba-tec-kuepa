import {useEffect, useState}  from "react";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { MdOutlinePhone, MdOutlineMessage} from "react-icons/md";
import styles from "./main.module.css";

function ConnectionTable() {

    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch("https://api.opendota.com/api/heroes")
        .then(response => response.json())
        .then(data =>{
            setHeroes(data.slice(0,4));
        }).catch(err => console.error(err));
    }, []);

    return ( 
        <section className={styles.planning}>
            <h5>Conexiones de agenda para hoy</h5>
            {
                heroes.length > 0 ?
                    <table style={{width:"100%"}}>
                        <tbody>
                            {heroes.map(heroe => {
                                return (<tr key={heroe.id}>
                                    <td id={styles.name}>{heroe.name}</td>
                                    <td>
                                        <div>
                                            <p>Llamar</p>
                                            <small>{heroe.attack_type}</small>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.tableIcons}>
                                            <FaCircle color="orange"/> 
                                            <MdOutlinePhone/>
                                            <MdOutlineMessage/>
                                        </div>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                </table>
            : <div>Loading...</div>
            }
           
        </section>
     );
}

export default ConnectionTable;