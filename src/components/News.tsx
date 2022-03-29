import * as React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux'
import axios from 'axios';
import {v4 as uuidV4} from 'uuid';
import {
    INewsItem,
    IReducerState,
    STORE_NEWS
} from '../store/types';

interface INewsProps extends IStateProps, IDispatchProps {}

const news:React.FC<INewsProps> = props => {

    React.useEffect(() => {
        if (!props.news.length) {
            axios.get('https://newsapi.org/v2/top-headlines?country=gb&apiKey=5e61e110059c4a9c832c81d75fc8a6ee')
            .then(response => {
                props.onGetNews(response.data.articles)
            })
        }
    }, [])

    let content:JSX.Element| JSX.Element[] = <p>Loading news</p>;
    if(props.news.length){
        content = props.news.map(article => {
            return(
                <div key={uuidV4()}>
                    <h4>{article.title}</h4>
                    <p>{article.content}</p>
                </div>
            )
        })   
    }

    return (
        <div>
            {content}
        </div>

    );
}

interface IStateProps {
    news: INewsItem[]
}


const mapStateToProps = (state: IReducerState): IStateProps => {
    return {
        news: state.news
    }
};

interface IDispatchProps {
    onGetNews: (newsData:INewsItem[]) => { type: string; payload: INewsItem[]; }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>):IDispatchProps => {
    return {
        onGetNews: (newsData) => dispatch({type: STORE_NEWS, payload: newsData})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(news);
