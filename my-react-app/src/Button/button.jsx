import styles from './button.module.css'

function Button(){

    let count = 0;

    function click(a){
        count++;
        console.log(a + count);
    }

    const click2 = (e) =>  e.target.textContent = count;
    //doubleClick
    //dispaly = "none"

    return(
        <button onClick={(e) => click2(e)} className={styles.click}>click me</button>
    );
}

export default Button