import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        textAlign: 'center',
        fontSize: '32px',
        background: '#fa9e6a',
        borderRadius: 10,
        color: 'white',
        marginInline: '12px',
        height: 'auto',
        margin: 'auto',
        marginBottom: '18px',
        paddingTop: '6px',
        paddingBottom: '6px',
    },
    results: {
        fontSize: '32px',
        fontFamily: "'Philosopher', sans-serif",
        textAlign:'center',
        scrollMargin: '12px'
    }
});

export { useStyles as Styles };