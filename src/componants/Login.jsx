import{ React,useEffect} from "react";
import styled from "styled-components";
const handleClick = () => {
    const clientId = "c9c45d7a6432493ebc075cbdb3f7813a";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
        "user-read-private",
        "user-read-email",
        "user-read-playback-state ",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "user-read-playback-position",
        "user-top-read",
        "user-read-recently-played"
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`

}
export default function Login() {
    return (
        <Container>
            <Logo src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify" />
            <Button onClick={handleClick}>Connect to Spotify</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #1db954;
`;

const Logo = styled.img`
    height: 150px;
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 10px 30px;
    border: none;
    border-radius: 25px;
    font-size: 1.4rem;
    font-weight: bold;
    color: #49f585;
    background-color: #000000;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #45a049;
    }
`;
