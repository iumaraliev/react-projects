import Accordion from './components/Accordion';

const App = () => {
  return (
    <div className="App">
      <h1>Accordion Example</h1>
      <Accordion
        title="Accordion 1"
        content="This is the content of the first accordion."
      />
      <Accordion
        title="Accordion 2"
        content="This is the content of the second accordion."
      />
      <Accordion
        title="Accordion 3"
        content="This is the content of the third accordion."
      />
    </div>
  );
};

export default App;
