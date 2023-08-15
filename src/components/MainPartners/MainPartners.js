import Card from "../../Ul/Card";
import svg from '../../IMG/background.svg';
import classes from './MainPartners.module.css';
const MainPartners = () => {
    return (
        <Card>
            <div className={classes.container}>
            <img src={svg}  alt='l'/>
            </div>
          
        </Card>
    )
}
export default MainPartners;