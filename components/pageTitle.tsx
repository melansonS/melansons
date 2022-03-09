interface IPageTitleProps {
  content: string;
}

const PageTitle = ({ content }: IPageTitleProps) => {
  return <h1 className="text-3xl pb-6 font-bold">{content}</h1>;
};

export default PageTitle;
