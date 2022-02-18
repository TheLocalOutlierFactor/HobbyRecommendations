import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    questionSelectNext: {
        background: '#87cf69',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 36,
        marginRight: '12px',
        '&:hover': {
            backgroundColor: '#6faf57',
            color: 'white',
        },
    },
    questionGetResults: {
        background: '#9969cf',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 36,
        marginRight: '12px',
        '&:hover': {
            backgroundColor: '#8156a8',
            color: 'white',
        },
    },
    questionNumber: {
        fontFamily: "'Alegreya', serif",
        fontSize: '28px',
        color: 'black',
        margin: '14px',
        fontWeight: "Bold",
        "&.Mui-focused": {
            color: 'black',
        },
        "&.Mui-error": {
            color: 'black',
        },
    },
    questionAsk: {
        fontFamily: "'Merriweather', serif",
        fontSize: '36px',
        color: 'black',
        margin: '14px',
        fontWeight: "Bold",
        "&.Mui-focused": {
            color: 'black',
        },
        "&.Mui-error": {
            color: 'black',
        },
    },
    form: {
        minHeight: '100%',
        paddingBottom: '40px',
        textAlign: 'center',
        margin: 'auto',
        width: '95%',
        height: '100%',
    },
    helperText: {
        textAlign: 'center',
    },
    radio: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    radioLabel: {
        fontFamily: 'Segoe UI',
        fontSize: "22px",
    },
    radioGroup: {
        width: 'max-content',
        margin: 'auto',
    },
    radioIcon: {
        borderRadius: '50%',
        width: 22,
        height: 22,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        'radio.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#d8f8c2',
        },
    },
    checkedRadioIcon: {
        backgroundColor: '#47c719',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 22,
            height: 22,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#379e15',
        },
    },
});

export { useStyles as Styles };