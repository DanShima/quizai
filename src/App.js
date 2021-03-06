import React from 'react';
import './App.css';
import brain from 'brain.js';
import { trainingQuestions, validationQuestions } from './questions2';

class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
     trainingAnswers: trainingQuestions.map(()=> Array(5).fill(0)),
     validationAnswers: validationQuestions.map(()=> Array(5).fill(0)),
     training: false,
     predictions: undefined,
    };

    this.state = this.initialState;

    //initialize the neural network
    this.net = new brain.NeuralNetwork({ hiddenLayers: [5] });
  }
  // update the array with 1 in the selected index
  isOptionChecked = (questionIndex, optionIndex) => {
   const { trainingAnswers } = this.state;
   return trainingAnswers[questionIndex][optionIndex] !== 0;
  };

  onOptionChange = (questionIndex, optionIndex) => {
    this.setState((prevState) => {
      const { trainingAnswers } = Object.assign(prevState, {});

    trainingAnswers[questionIndex] = Array(5).fill(0);
    trainingAnswers[questionIndex][optionIndex] = 1;

    return { trainingAnswers };
    });
  };

  buildOptions = (question, options) => options.map((o, i) => {
    const { trainingAnswers } = this.state;
    const checked = trainingAnswers[question][i] !== 0;
    const id = `q${question}-o${i}`;

    return (
      <label className="option-label" key={id} htmlFor={id}>
        <input
          type="radio"
          required
          name={`q${question}`}
          id={id}
          checked={checked}
          onChange={() => this.onOptionChange(question, i)}
        />
        <span>{o.label}</span>
      </label>
    );
  });

  buildQuestions = questions => questions.map((q, i) => (
    <div className="question" key={q.id}>
      <h4>
        {`${i + 1}. ${q.question}`}
      </h4>
      <div className="options">
        {this.buildOptions(i, q.options)}
      </div>
    </div>
  ));

  buildValidationOptions = (predictions, options) => options.map((o, i) => {
    // const prediction = `q${predictions[0][i]}`;
    return (
        
            <span className="option-label" key={o.id}>
            <span>{`${o.label}: ${Math.round([predictions[0][i]] * 100)}%`}</span>
            <div className="bar" style={{ width: `${Math.round(predictions[0][i] * 100)}%` }} />
          </span>      
        
    );
  });

  buildValidationQuestions = (predictions, questions) => questions.map((q, i) => (
    <div className="question" key={q.id}>
      <h4>
        {`${i + 1}. ${q.question}`}
      </h4>
      <div className="options">
        {this.buildValidationOptions(predictions, q.options)}
      </div>
    </div>
  ));

  getPredictions = () => {
    const predictions = validationQuestions.map(q => (
      //give predictions for each of the validation questions defined earlier
      this.net.run(q.options.map(o => o.value))
    ));

    this.setState({
      training: false, // done learning
      predictions,
    });
  };

  /*get input data from optimism value of each option and output data from looking in the
  trainingAnswers array at the same index.
  */
  onSubmit = (e) => {
    e.preventDefault();

    const { trainingAnswers } = this.state;

    const trainingData = trainingQuestions.map((q, i) => ({
      input: q.options.map(o => o.value),
      output: trainingAnswers[i],
    }));

    this.setState({
      training: true, // inform that the NN is learning
    });
    
    this.net.trainAsync(trainingData)
      .then((res) => {
        // log the rror rate and # iterations
        console.log(res);
        this.getPredictions();
      });
  };

  reset = () => this.setState(this.initialState);

  render() {
    const { training, predictions } = this.state;

    return (
      <main className="App">
        {!predictions && (
          <>
            {!training && (
              <form onSubmit={this.onSubmit}>
                <h2>Quiz</h2>
                {this.buildQuestions(trainingQuestions)}
                <button type="submit">Submit</button>
              </form>
            )}

            {training && (
              <h1 className="loading">Loading...</h1>
            )}
          </>
        )}
        
        {predictions && (
          //present finding to user. the probability is displayed as a bar under each option
          <div>
            <h2>The neural network predicts:</h2>
            {this.buildValidationQuestions(predictions, validationQuestions)}
            <button type="button" onClick={this.reset}>Back to quiz</button>
          </div>
        )} 
      </main>
    );
  }
 }

export default App;
