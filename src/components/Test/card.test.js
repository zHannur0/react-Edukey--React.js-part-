import Card from "../Catalog/Card";
import { render,screen } from "@testing-library/react";

const sampleVideo = {
    posterUrl: "https://m.media-amazon.com/images/I/91zzAMkVCUL._AC_UF894,1000_QL80_.jpg",
    nameRu: "Avengers",
    genres: [{genre: "action"}]
}

test("Card testing", () => {
    render(<Card video = {sampleVideo}/>)

    const image = screen.getByTestId("cardPoster");
    expect(image.getAttribute("src")).toEqual(sampleVideo.posterUrl);

    const title = screen.getByTestId("title");
    expect(title).toBeTruthy();

    const genre = screen.getByText(sampleVideo.genres[0].genre);
    expect(genre).toBeTruthy();
});