import Accordion from './components/Accordion/Accordion.jsx';
import SeachableList from './components/SearchableList/SearchableList.jsx';
import Place from './components/Place.jsx';
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?!?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="Lorem-ipsum" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              Quisque ut orci neque
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales.</p>
                <p>Aliquam efficitur dolor tellus, eget ultrices ipsum lacinia non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus rhoncus, est.</p>
              </article>
            </Accordion.Content>

          </Accordion.Item>
          <Accordion.Item id="Etiam-commodo" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
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
      <section>
        <SeachableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SeachableList>
        <SeachableList items={['Item 1', 'Item 2', 'Item 3']} itemKeyFn={(item) => item}>
          {(item) => item}
        </SeachableList>
      </section>
    </main>
  );
}

export default App;
