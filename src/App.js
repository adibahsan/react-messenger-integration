import './App.css';
import {MessengerChat} from "react-messenger-chat-plugin";


const pageId = "1099282418557589"// put page id here
var themeColorHex = "#efefef" // put colors here
var language = "bn_IN" // put language here

function App() {
    return (
        <>
            <div className="App">
                <h1>This is a header</h1>
            </div>

            <div style={{backgroundColor: "orange"}}>
                <MessengerChat
                    pageId={pageId}
                    language={language}
                    themeColor={themeColorHex}
                    bottomSpacing={50}
                    loggedInGreeting="loggedInGreeting"
                    loggedOutGreeting="loggedOutGreeting"
                    greetingDialogDisplay={"show"}
                    debugMode={true}
                    onMessengerShow={() => {
                        console.log("onMessengerShow");
                    }}
                    onMessengerHide={() => {
                        console.log("onMessengerHide");
                    }}
                    onMessengerDialogShow={() => {
                        console.log("onMessengerDialogShow");
                    }}
                    onMessengerDialogHide={() => {
                        console.log("onMessengerDialogHide");
                    }}
                    onMessengerMounted={() => {
                        console.log("onMessengerMounted");
                    }}
                    onMessengerLoad={() => {
                        console.log("onMessengerLoad");
                    }}
                />
            </div>
        </>
    );
}

export default App;
