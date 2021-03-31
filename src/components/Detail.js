import React from 'react';
import './detail.css';

class Detail extends React.Component{

    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const {location, history} = this.props;
        if (location.state){
            return (
                <div className="detail">
                    <div className="detail__poster" style={{backgroundImage: 'url(' + location.state.bigPoster + ')'}}></div>
                    <div className="detail__column">
                        <h3 className="detail__title">{location.state.title}  ({location.state.rating})</h3>
                        <h5 className="detail__year">{location.state.year}</h5>
                        <ul className="detail__genres">
                            {location.state.genres.map((genre,index) => {
                                return <li className="detail__genre" key={index}>{genre}</li>
                            })}
                        </ul>
                        <p className="detail__summary">{location.state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;