import Logo from "./_components/Logo";
import Description from "./_components/Description";
import OpenLink from "../components/OpenLink";
import Lessoninfo from "./_components/Lessoninfo";

const Default=()=>{
    return (
        <>
            <Logo/>
            <Description/>
            <OpenLink  title = "Learn React" url="https://reactjs.org"/>
            <OpenLink  title = "MI repositorio GitHub" url="https://github.com/EfraStm/react_mod_usip"/>
            <Lessoninfo numero="1:" titulo="titulo 1"/>
            <Lessoninfo numero="2:" titulo="titulo 2"/>
        </>
    )
};
export default Default;