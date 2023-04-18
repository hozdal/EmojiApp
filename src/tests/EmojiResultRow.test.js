import { render , screen } from "@testing-library/react";
import React from 'react';
import App from "../App";

test("Emoji list must be rendered successfully ", () => {

    render(<App />)
    //Ekrana 20 emoji basıyor mu diye bakıldı. EmojiResultRow dosyasına kapsayıcı div'e data-testid olarak row atandı.
    const items = screen.getAllByTestId("row");
    expect(items.length).toEqual(20);
});