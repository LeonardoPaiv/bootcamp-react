import TopBar from "../components/TopBar";

interface ITemplateProps {
    children: React.ReactElement | null | any
}

const Template = (props: ITemplateProps) => {
  return <div>
    <TopBar/>
    {props.children && <props.children />}
  </div>;
};

export default Template;
