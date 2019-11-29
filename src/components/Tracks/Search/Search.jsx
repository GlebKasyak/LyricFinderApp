import React from "react";
import axios from "axios";
import {REACT_APP_KEY, REACT_APP_URL} from "../../../constants/const";

import { Consumer } from "../../../context";


export class Search extends React.Component {
    state = {
        trackTitle: ""
    };

    onChange = (e) => {
       this.setState({trackTitle: e.target.value})
    };

    findTrack = (dispatch, e) => {
        e.preventDefault();

        axios.get(`${ REACT_APP_URL }track.search?q_artist=${ this.state.trackTitle }&page_size=3&page=1&s_track_rating=desc&apikey=${ REACT_APP_KEY }`)
            .then(res => {
                dispatch({
                    type: "SEARCH_TRACKS",
                    payload: res.data.message.body.track_list
                })
            })
            .catch(error => console.log(error))
    };


    render() {
        return(
            <Consumer >
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-6 text-center">
                                <i className="fas fa-music" /> Search For A Song
                            </h1>
                            <p className="load text-center">
                                Get the lyrics for any song
                            </p>
                            <form onSubmit={(e) => this.findTrack(dispatch, e)}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Song title..."
                                        name="trackTitle"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-2">
                                    Get Track Lyrics
                                </button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}