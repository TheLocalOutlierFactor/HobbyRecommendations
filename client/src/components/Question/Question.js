import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from '@material-ui/core/FormHelperText';
import {Styles} from "./Question.style";
import clsx from 'clsx';
import Typography from "@material-ui/core/Typography";

const Question = ({prevBtnEnabled,
                   nextBtnEnabled,
                   question,
                   currentQuestionIndex,
                   handleNextQuestion,
                   handlePrevQuestion,
                   handleSelectAnswer,
                   helperText,
                   error,
                   currAnswer,
                   getResultsEnabled,
                   handleGetResults,
                  }) => {
    const styles = Styles();
    return (
        <div className={styles.form}>
            <FormControl className={styles.formControlStyle}
                         error={error}>
                <FormLabel className={styles.questionNumber}>
                    Вопрос №{currentQuestionIndex + 1}
                </FormLabel>
                <FormLabel className={styles.questionAsk}>
                    {question.value}
                </FormLabel>
                <RadioGroup className={styles.radioGroup}
                            aria-label="position"
                            name="answers"
                            value={currAnswer}
                            onChange={handleSelectAnswer}>
                    {Object.keys(question.answers).map(answerValue => {
                        return <FormControlLabel key={answerValue}
                                          value={answerValue.toString()}
                                          control={
                                              <Radio className={styles.radio}
                                                     disableRipple
                                                     color="default"
                                                     checkedIcon={
                                                     <span className={
                                                         clsx(styles.radioIcon,
                                                              styles.checkedRadioIcon)
                                                     } />
                                                     }
                                                     icon={
                                                         <span className={styles.radioIcon} />
                                                     } />
                                          }
                                          label={
                                              <Typography className={styles.radioLabel}>
                                                  {question.answers[answerValue]}
                                              </Typography>
                                          }
                                          labelPlacement="end" />
                    })}
                </RadioGroup>
                <FormHelperText className={styles.helperText}>
                    {helperText}
                </FormHelperText>
            </FormControl>
            <div>
                {prevBtnEnabled &&
                <Button className={styles.questionSelectNext}
                        disableRipple
                        onClick={handlePrevQuestion}>
                    Предыдущий вопрос
                </Button>}
                {nextBtnEnabled &&
                <Button className={styles.questionSelectNext}
                        disableRipple
                        onClick={handleNextQuestion}>
                    Следующий вопрос
                </Button>}
                {getResultsEnabled &&
                <Button className={styles.questionGetResults}
                        disableRipple
                        onClick={handleGetResults}>
                    Посмотреть результат
                </Button>}
            </div>
        </div>
    )
}

export { Question };