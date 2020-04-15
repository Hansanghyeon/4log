/* eslint-disable consistent-return */
import React from 'react';
import { domToReact } from 'html-react-parser';
// components
import Callout from '#/Callout';
import SeoPreviewCard from '#/SeoPreviewCard';

// FIXME 리팩토링 할일 해당 코드를 더 간결하게 만들수있나 고민
const options = {
  replace: ({ name, children, attribs }: any) => {
    if (!name) return;
    if (name === 'pre' && attribs.class === 'wp-block-code') {
      return <pre>{domToReact(children)}</pre>;
    }
    if (name === 'component') {
      switch (attribs.fc) {
        case 'callout':
          return (
            <Callout bgColor={attribs.bg} icon={attribs.icon}>
              {domToReact(children)}
            </Callout>
          );
        case 'seo-preview':
          return SeoPreviewCard(attribs.url);
        default:
          return;
      }
    }
    if (name === 'code') {
      return <code className="language-text">{domToReact(children)}</code>;
    }
  },
};

// HTML react parser options
// const component: any = {
//   callout: ({ children, attribs }: any) => (
//     <Callout bgColor={attribs.bg} icon={attribs.icon}>
//       {domToReact(children)}
//     </Callout>
//   ),
//   'seo-preview': ({ attribs }: any) => SeoPreviewCard(attribs.url),
// };
// const blockOptions: any = {
//   pre: ({ children }: any) => <pre>{domToReact(children)}</pre>,
//   code: ({ children }: any) => (
//     <code className="language-text">{domToReact(children)}</code>
//   ),
//   component: ({ children, attribs }: any) =>
//     component[attribs.fc]({ children, attribs }),
// };

export default options;
