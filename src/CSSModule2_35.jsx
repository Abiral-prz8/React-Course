import style from './CSSModule_35.module.css'
function UserCard2(){
    return(
        <div>
              <h1 className={style.header}>External CSS</h1>
            <div className={style.container}>
                <div className={style.usercard}>
                    <img className={style.img} src="change-location.webp" alt="photo" />
                    <div className={style.text}>
                        <h1>Ram Suwal</h1>
                        <h1>BCA Student</h1>

                    </div>
                </div>
                <div className={style.usercard}>
                    <img className={style.img} src="change-location.webp" alt="photo" />
                    <div className={style.text}>
                        <h1>Ram Suwal</h1>
                        <h1>BCA Student</h1>

                    </div>
                </div>
            </div>            
        </div>
    )
}
export default UserCard2