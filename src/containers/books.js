import React, { Component } from "react";
import Select from "react-select";

class Books extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: {},
            selectedOption2: {},
        };
    }

    handleChange1 = (selectedOption) => {
        this.setState({ selectedOption });
    };

    handleChange2 = (selectedOption) => {
        this.setState({ selectedOption2: selectedOption });
    };

    render() {
        const Genres = [
            { value: "Fiction", label: "Fiction" },
            { value: "Murder", label: "Murder" },
            { value: "Thriller", label: "Thriller" },
        ];

        const Books = [
            { value: "GOT", label: "GOT", link: "Fiction" },
            { value: "LOTR", label: "LOTR", link: "Fiction" },
            { value: "Angel And Demons", label: "Angel And Demons", link: "Murder" },
            { value: "Dragon", label: "Dragon", link: "Thriller" },
            { value: "Tattoo", label: "Tattoo", link: "Thriller" },
        ];

        const filteredOptions = Books.filter(
            (o) => o.link === this.state.selectedOption.value
        );
        return (
            <div>
                <p> Select your favourite Genre</p>
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange1}
                    options={Genres}
                ></Select>
                <p>Select your favourite Book from that genre</p>
                <Select
                    value={this.state.selectedOption2}
                    onChange={this.handleChange2}
                    options={filteredOptions}
                ></Select>
            </div>
        );
    }
}

export default Books;