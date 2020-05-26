import React from 'react';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  base16AteliersulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Header, Lang, FileName } from './style';

type Props = {
  isDark?: boolean;
  data: {
    lang: string;
    fileName?: string;
    isLineNumber?: boolean;
  };
  children: React.ReactNode;
};
const SyntaxHighlighter: React.FC<Props> = (props: Props) => {
  const { data, isDark, children } = props;
  const { lang, fileName, isLineNumber } = data;
  let icon: string = '';
  switch (lang) {
    case 'nginx':
      icon = 'settings';
      break;
    case 'bash':
      icon = 'console';
      break;
    case 'sql':
      icon = 'database';
      break;
    default:
      icon = lang;
      break;
  }
  return (
    <>
      <Header>
        {fileName ? <FileName>{fileName}</FileName> : <div />}
        {lang && (
          <Lang
            src={`https://wp.hapas.io/wp-content/uploads/4log/icons/material/${icon}.svg`}
            alt=""
          />
        )}
      </Header>
      <ReactSyntaxHighlighter
        {...props}
        showLineNumbers={isLineNumber}
        showInlineLineNumbers
        wrapLines
        language={lang}
        style={isDark ? atomDark : base16AteliersulphurpoolLight}
      >
        {children}
      </ReactSyntaxHighlighter>
    </>
  );
};

export default SyntaxHighlighter;
