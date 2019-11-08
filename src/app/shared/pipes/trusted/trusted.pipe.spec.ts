import { TrustedPipe } from './trusted.pipe';

describe('TrustedPipe', () => {
  it('create an instance', () => {
    const pipe = new TrustedPipe();
    expect(pipe).toBeTruthy();
  });
});
