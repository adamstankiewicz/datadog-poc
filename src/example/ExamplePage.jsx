import { Container } from '@openedx/paragon';
import { logError } from '@edx/frontend-platform/logging';
import { useEffect } from 'react';

const ExamplePage = () => {
  useEffect(() => {
    // [temp] Test custom logError
    logError(new Error('oh noes!!!'));
  }, []);
  return (
    <main>
      <Container className="py-5">
        <h1>Example Page</h1>
        <p>Hello world!</p>
      </Container>
    </main>
  );
};

export default ExamplePage;
