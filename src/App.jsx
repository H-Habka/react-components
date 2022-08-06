import NiceTitle from "./components/NiceTitle/NiceTitle";
import ProjectPreview from "./components/ProjectPreview/ProjectPreview";
function App() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            {/* <NiceTitle
                fontSize={44}
                normalColor="red"
                colorOnHover="text-blue-800"
            >
                Hossien
            </NiceTitle> */}
            <ProjectPreview />
        </div>
    );
}

export default App;
