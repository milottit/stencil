import { newSpecPage } from '@stencil/core/testing';
import { MtTildaAccordeon } from '../tilda-accordeon';

describe('tilda-accordeon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MtTildaAccordeon],
      html: `<tilda-accordeon></tilda-accordeon>`,
    });
    expect(page.root).toEqualHtml(`
      <tilda-accordeon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tilda-accordeon>
    `);
  });
});
