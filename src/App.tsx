import titaniaLogo from "./assets/titania.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import TextBox from "./components/TextBox.tsx";
import Button from "./components/Button.tsx";
import {useState} from "react";
import Table from "./components/Table.tsx";

function App() {
    const [currentRepoUrl, setCurrentRepoUrl] = useState(null);
    const [repositoryUrl, setRepositoryUrl] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

    const [commitData, setCommitData] = useState("");
    const [pullRequestData, setPullRequestData] = useState("");
    const [pullRequestCommentData, setPullRequestCommentData] = useState("");

    const handleCommitsClick = async () => {
        console.log("GET http://localhost:8080/commits");
        try {
            if (repositoryUrl !== currentRepoUrl) {
                setCommitData({});
                setPullRequestData({});
                setPullRequestCommentData({});
                setCurrentRepoUrl(repositoryUrl);
            }

            const headers = {
                ...(repositoryUrl ? { repositoryUrl } : {}),
                ...(dateFrom ? { dateFrom } : {}),
                ...(dateTo ? { dateTo } : {}),
                "Content-Type": "application/json",
            };

            const response = await fetch("http://localhost:8080/commits", {
                method: "GET",
                headers: headers
            });

            if (!response.ok) {
                throw new Error("An error occurred when fetching the commits");
            }

            const data = await response.json();
            setCommitData(data);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    const handlePullRequestClick = async () => {
        console.log("GET http://localhost:8080/pull-requests");
        try {
            if (repositoryUrl !== currentRepoUrl) {
                setCommitData({});
                setPullRequestData({});
                setPullRequestCommentData({});
                setCurrentRepoUrl(repositoryUrl);
            }

            const headers = {
                ...(repositoryUrl ? { repositoryUrl } : {}),
                ...(dateFrom ? { dateFrom } : {}),
                ...(dateTo ? { dateTo } : {}),
                "Content-Type": "application/json",
            };

            const response = await fetch("http://localhost:8080/pull-requests", {
                method: "GET",
                headers: headers
            });

            if (!response.ok) {
                throw new Error("An error occurred when fetching the pull requests");
            }

            const data = await response.json();
            setPullRequestData(data);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    const handlePullRequestCommentsClick = async () => {
        console.log("GET http://localhost:8080/pulls/pull-request-comments");
        try {
            if (repositoryUrl !== currentRepoUrl) {
                setCommitData({});
                setPullRequestData({});
                setPullRequestCommentData({});
                setCurrentRepoUrl(repositoryUrl);
            }

            const headers = {
                ...(repositoryUrl ? { repositoryUrl } : {}),
                ...(dateFrom ? { dateFrom } : {}),
                ...(dateTo ? { dateTo } : {}),
                "Content-Type": "application/json",
            };

            const response = await fetch("http://localhost:8080/pull-request-comments", {
                method: "GET",
                headers: headers
            });

            if (!response.ok) {
                throw new Error("An error occurred when fetching the pull request comments");
            }

            const data = await response.json();
            setPullRequestCommentData(data);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <>
            <div>
                <img src={titaniaLogo} className="logo" alt="Titania Logo"/>
            </div>
            <h1>Development Activity Dashboard</h1>

            <TextBox placeholder="GitHub Repository URL" value={repositoryUrl}
                     onChange={(e) => setRepositoryUrl(e.target.value)}/>

            <div className="textbox-group">
                <TextBox placeholder="From (yyyy-mm-dd)" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)}> </TextBox>
                <TextBox placeholder="To (yyyy-mm-dd)" value={dateTo} onChange={(e) => setDateTo(e.target.value)}> </TextBox>
            </div>

            <div className="button-group">
                <Button text="Commits" onClick={handleCommitsClick}></Button>
                <Button text="Pull Requests" onClick={handlePullRequestClick}></Button>
                <Button text="Pull Request Comments" onClick={handlePullRequestCommentsClick}></Button>
            </div>

            <div className="mt-5">
                <Table
                    data={commitData}
                    headers={["User", "Commits"]}
                    title="Top Commits"
                />
            </div>

            <div className="mt-5">
                <Table
                    data={pullRequestData}
                    headers={["User", "Pull Requests"]}
                    title="Top Pull Requests"
                />
            </div>

            <div className="mt-5">
                <Table
                    data={pullRequestCommentData}
                    headers={["User", "Pull Request Comments"]}
                    title="Top Pull Request Comments"
                />
            </div>
        </>
    )
}

export default App;
