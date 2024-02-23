import { useState } from 'react';
import TabButton from '../TabButton';
import Section from '../Section';
import './Examples.css';
import { EXAMPLES } from '../../data';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic.</p>;

  function handleClick(clickedButton) {
    setSelectedTopic(clickedButton);
  }

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onClick={() => handleClick('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onClick={() => handleClick('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onClick={() => handleClick('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onClick={() => handleClick('state')}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
