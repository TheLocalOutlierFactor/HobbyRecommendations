import {Styles} from "./Header.style";

const Header = () => {
    const styles = Styles();
    return (
        <div className={styles.header}>
            Пройдите опрос из 57 вопросов и мы предложим вам хобби и увлечения.<br />
            Шкала 1-5 подразумевает степень вашего согласия с утверждением:<br />
            1 &ndash; полностью не согласен (согласна), 5 &ndash; полностью согласен (согласна).<br />
        </div>
    )
}

export { Header };