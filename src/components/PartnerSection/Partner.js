import classes from './Partner.module.css';
import nike from '../../IMG/nike.png';
const Partner = () => {
    return (
        <div className={classes.container}>
            <ul>
                <li className={classes.main}><h4> Main Partners</h4></li>
                <li className={classes.logo}><img src='https://imgs.search.brave.com/te41aRjcRTr5knvgcwHEQX1eciezRyRDEyxeBYwQHqM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzgxNDEzNS5wbmc' alt="nike" /></li>
                <li className={classes.logo}><img src="https://cdn-icons-png.flaticon.com/128/246/246141.png" alt="" /><h3>Spotify</h3></li>
                <li className={classes.logo}><h3>Ambilight Tv</h3></li>
            </ul>
        </div>
    )
}
export default Partner;