import React from "react";
import axios from "axios";
import { REACT_APP_KEY, REACT_APP_URL } from "./constants/const";

const Context = React.createContext(null);

const reducer = (state, action) => {
    switch(action.type){
        case "SEARCH_TRACKS":
            return {
                ...state,
                track_list: action.payload,
                heading: "Search Results"
            };
        default:
            return state;
    }
};

export class Provider extends React.Component {
    state = {
        track_list: [],
        heading: "Top 10 tracks",
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        axios.get(`${REACT_APP_URL}chart.tracks.get?page=$1&page_size=10&country=us&f_has_lyrics=1&apikey=${ REACT_APP_KEY }`)
            .then(res => {
                this.setState({track_list: res.data.message.body.track_list})
            })
            .catch(error => console.log(error))
    };

    render() {
        /*оборачивает все компоненты*/
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;