export const azure = '#1475b2';
export const green = '#42c02e';

const renderTitle = (title: string, content: string) => {
  return `%c ${title} %c ${content} `;
};
const renderStyle = () => {
  return `padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060;`;
};
const renderBackground = (backgroundColor: string) => {
  return `padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ${backgroundColor};`;
};

export interface IBootLogData {
  title: string;
  content: string;
  backgroundColor?: string;
}

const logfunc = function (data: IBootLogData) {
  const { title, content, backgroundColor } = data;
  const text = [
    renderTitle(title, content),
    renderStyle(),
    renderBackground(backgroundColor || ''),
  ];
  return (
    function () {
      let _console;
      if (window.console && 'function' === typeof window.console.log) {
        // @ts-ignore
        (_console = console).log.apply(_console, arguments);
      }
      // @ts-ignore
    }.apply(void 0, text),
    text
  );
};

function bootLog(data: IBootLogData) {
  const { title = '', content = '', backgroundColor = azure } = data;
  return logfunc({
    title,
    content,
    backgroundColor,
  });
}

export default bootLog;
