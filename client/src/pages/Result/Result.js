import {Styles} from "./Result.style";

const Results = ({result}) => {
    const styles = Styles();
    return (
        <div>
            <div className={styles.header}>Это может Вам понравиться:</div>
            <div className={styles.results}>
            {result.recommendations.map((recommendation, index) =>
                {
                    return <div key={index}>{recommendation}</div>
                })
            }
            </div>
        </div>
    )
};

export { Results };