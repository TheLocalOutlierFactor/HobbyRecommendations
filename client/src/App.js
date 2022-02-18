import React, {useState, useEffect} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';
import {Header} from './components/Header/Header.js';
import {Question} from './components/Question/Question.js';
import {Results} from "./pages/Result/Result.js";
import {NotFound} from "./pages/NotFound/NotFound.js";
import {Switch, Route, useHistory, Redirect} from "react-router-dom";

const App = () => {
    const [answers, setAnswers] = useState(
        sessionStorage.getItem('answers') ?
        JSON.parse(sessionStorage.getItem('answers')) : []);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
        sessionStorage.getItem('currentQuestionIndex') ?
        JSON.parse(sessionStorage.getItem('currentQuestionIndex')) : 0);
    const [selectionError, setSelectionError] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [helperText, setHelperText] = useState('Выберите ответ');
    const [result, setResult] = useState(localStorage.getItem('results') ?
        JSON.parse(localStorage.getItem('results')) : {});

    const {isLoading, error, data} = useQuery('fetchQuestions', async () => {
        const { data } = await axios.get("/api/questions");
        return data
    });

    const mutation = useMutation(sendAnswers =>
        axios.post('/api/result', sendAnswers));

    const history = useHistory();

    useEffect(() => {
        sessionStorage.setItem('currentQuestionIndex', JSON.stringify(currentQuestionIndex));
        sessionStorage.setItem('answers', JSON.stringify(answers));
        setCurrentAnswer(answers[currentQuestionIndex] ? answers[currentQuestionIndex] : '');
    }, [answers, currentQuestionIndex]);

    useEffect(() => {
        setHelperText(currentAnswer ? ' ' : 'Выберите ответ');
    }, [currentAnswer]);

    const handleNextQuestion = () => {
        if (currentAnswer) {
            setSelectionError(false);
            setCurrentQuestionIndex(currIndex => currIndex + 1);
        } else {
            setSelectionError(true);
        }
    };

    const handlePrevQuestion = () => {
        setSelectionError(false);
        setCurrentQuestionIndex(currIndex => currIndex - 1);
    };

    const handleSelectAnswer = e => {
        setAnswers(currAnswers => {
            const newAnswers = [...currAnswers];
            newAnswers[currentQuestionIndex] = e.target.value;
            return newAnswers;
        });
        setHelperText(' ');
    };

    const handleGetResults = () => {
        if (currentAnswer) {
            setSelectionError(false);
            const dataToSend = {'Answers': answers};
            mutation.mutate(dataToSend, {
                onError: () => {
                    console.log('Что-то пошло не так...');
                    history.push('/');
                },
                onSuccess: response => {
                    setResult(response.data);
                    localStorage.setItem('results', JSON.stringify(response.data));
                    history.push('/results');
                },
            });
        } else {
            setSelectionError(true);
        }
    };

    if (isLoading) return ''

    if (error) return 'Произошла ошибка: ' + error.message

    const nextBtnEnabled = currentQuestionIndex < data.Questions.length - 1;
    const prevBtnEnabled = currentQuestionIndex > 0;
    const getResultsEnabled = currentQuestionIndex === data.Questions.length - 1;
    const isResultPresent = Object.entries(result).length !== 0;

    return (
        <Switch>
            <Route exact path='/'>
                <Header />
                <Question prevBtnEnabled={prevBtnEnabled}
                          nextBtnEnabled={nextBtnEnabled}
                          question={data.Questions[currentQuestionIndex]}
                          currentQuestionIndex={currentQuestionIndex}
                          handleNextQuestion={handleNextQuestion}
                          handlePrevQuestion={handlePrevQuestion}
                          handleSelectAnswer={handleSelectAnswer}
                          helperText={helperText}
                          error={selectionError}
                          currAnswer={currentAnswer}
                          getResultsEnabled={getResultsEnabled}
                          handleGetResults={handleGetResults} />
            </Route>
            <Route path='/results'>
                { isResultPresent ?
                    (<Results result={result}/>)
                    :
                    (<Redirect to='/404' />)
                }
            </Route>
            <Route exact path='/404'>
                <NotFound />
            </Route>
            <Redirect to='/404' />
        </Switch>
    );
}

export default App;