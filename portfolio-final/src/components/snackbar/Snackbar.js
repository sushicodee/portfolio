import React , {useState, useEffect} from  'react';
import './Snackbar.scss';

const Snackbar = (props) => {
    const [notification, setNotification] = useState(props.show);
    const notificationClass = notification ? '-show':'-hide';
    
    useEffect(() => {
        const showNotif = setTimeout(() => setNotification(!notification),4000)
        return () => {
            clearTimeout(showNotif);
        };
    }, [])
    return (
        <div className = {`snackbar-notification snackbar-notification${notificationClass}`}>
            <h1> {props.message}</h1> 
        </div>
    )
}
export default Snackbar;
