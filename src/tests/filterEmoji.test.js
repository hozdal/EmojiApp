
import { render , screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import App from "../App";


    test("Emoji list must be rendered while filtering" , () => {
        render(<App />);
        //SearchInput.js dosyasında ınput'u bir label ile kapsandı ve içerisindeki text ile taratıldı. 
        let input = screen.getByLabelText("Text:");
        let inputChild = input[0]; 
        inputChild = screen.getByText("100");
        expect(inputChild).toBeInTheDocument("100");
    });