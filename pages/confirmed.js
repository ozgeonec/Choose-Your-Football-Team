import React, {useContext} from 'react'
import Navigation from "../components/navigation/navigation";
import styles from "../components/layout/layout.module.css";
import DivisionSmall from "../components/division/division-small";
import Team from "../components/team/team";




function Confirmed() {

    return (<div className={styles.layout}>
            <Navigation/>

                <DivisionSmall>
                    <Team>Beşiktaş JK</Team>
                </DivisionSmall>
                <DivisionSmall header={"Line Up"}>

                </DivisionSmall>
                <DivisionSmall header={"Substitutes"}>

                </DivisionSmall>

    </div>

    )
}


export default Confirmed