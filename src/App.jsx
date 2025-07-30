import Accordion from './components/Accordion/Accordion.jsx';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?!?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="Lorem-ipsum" className="accordion-item">
            <Accordion.Title  className="accordion-item-title">
              Quisque ut orci neque
            </Accordion.Title>
            <Accordion.Content  className="accordion-item-content">
              <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales.</p>
                <p>Aliquam efficitur dolor tellus, eget ultrices ipsum lacinia non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus rhoncus, est.</p>
              </article>
            </Accordion.Content>

          </Accordion.Item>
          <Accordion.Item id="Etiam-commodo" className="accordion-item">
            <Accordion.Title  className="accordion-item-title">
              Etiam commodo ac purus sit amet blandit.
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Nam rhoncus est a purus viverra tristique. Donec egestas faucibus eros vitae mollis. Pellentesque porta leo tellus, a viverra ante commodo et. Nam velit sem, feugiat et leo non, luctus rhoncus nisl.</p>
                <p>Duis suscipit nibh nec neque facilisis dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus quis facilisis purus. Nulla at tincidunt urna, et pulvinar ante.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
